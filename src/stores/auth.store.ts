import { create } from 'zustand';
import { compareHash } from '@/utils/bcrypt';
import { UsersRepository } from '@/services/users.service';
import { User } from '@/@types';

const usersRepository = new UsersRepository();

interface AuthState {
  isLoggedIn: boolean;
  user: User | undefined;
}

interface AuthActions {
  login: (email: string, password: string) => void;
  logout: () => void;
  setIsLoggedIn: (state: boolean) => void;
  setUser: (state: User) => void;
}

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  isLoggedIn: false,
  user: undefined,
  setIsLoggedIn: (state) => {
    set({ isLoggedIn: state });
  },
  setUser: (state) => {
    set({ user: state });
  },
  login: async (email: string, password: string) => {
    const user = await usersRepository.listByEmail(email);
    const isValid = await compareHash(password, user.data.password);
    if (isValid) {
      delete user.data.password;
      localStorage.setItem('user', JSON.stringify(user.data));
      set({ user, isLoggedIn: true });
    } else {
      alert('Invalid credentials');
    }
  },
  logout: () => {
    localStorage.removeItem('user');
    set({ user: undefined, isLoggedIn: false });
  }
}));

export default useAuthStore;
