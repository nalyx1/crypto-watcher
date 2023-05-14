import axios from 'axios';
import type { History } from '@/@types';

export class HistoryRepository {
  async listAll() {
    try {
      const { data } = await axios.get(`/api/history`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async listUnique(id: string) {
    try {
      const { data } = await axios.get(`/api/history/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async create(body: History) {
    try {
      const { data } = await axios.post(`/api/history`, body);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
