import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UsersRepository } from '@/services/users.service';

const usersRepository = new UsersRepository();

export default function SignUpForm() {
  const { push } = useRouter();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      alert('Senhas não conferem!');
      return;
    }

    const user = await usersRepository.create({ email, password, username });
    if (user) {
      push('/login');
    } else {
      alert('Falha ao criar usuário');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs w-full mx-auto">
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Nome de usuário
        </label>
        <input
          id="passwordConfirmation"
          type="text"
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Senha
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Confirme sua senha
        </label>
        <input
          id="passwordConfirmation"
          type="password"
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
