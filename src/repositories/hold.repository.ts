import axios from "axios";

export class HoldRepository {
  async create(data: any) {
    try {
      console.log("data", data);
      const result = await axios.post("/api/hold", data);
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
