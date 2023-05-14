import axios from 'axios';
import type { User } from '@/@types';

export class UsersRepository {
  async listAll() {
    try {
      const { data } = await axios.get(`/api/users`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async listUnique(id: string) {
    try {
      const { data } = await axios.get(`/api/users`, {
        params: {
          id
        }
      });
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async listByEmail(email: string) {
    try {
      const { data } = await axios.get(`/api/users`, {
        params: {
          email
        }
      });
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async create(body: User) {
    try {
      const { data } = await axios.post('/api/users', body);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update(id: string, body: User) {
    try {
      const { data } = await axios.patch(`/api/users/${id}`, body);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete(id: string) {
    try {
      const { data } = await axios.delete(`/api/users/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
