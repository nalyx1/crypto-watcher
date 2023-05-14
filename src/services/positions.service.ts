import axios from 'axios';
import type { Position } from '@/@types';

export class PositionsRepository {
  async listAll() {
    try {
      const { data } = await axios.get(`/api/positions`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async listUnique(id: string) {
    try {
      const { data } = await axios.get(`/api/positions/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async create(body: Position) {
    try {
      console.log(body);
      const { data } = await axios.post('/api/positions', body);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update(id: string, body: Position) {
    try {
      const { data } = await axios.patch(`/api/positions/${id}`, body);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete(id: string) {
    try {
      const { data } = await axios.delete(`/api/positions/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
