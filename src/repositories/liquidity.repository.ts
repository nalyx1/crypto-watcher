import axios from "axios";

export class LiquidityRepository {
  async create({ token, token_quantity, amount_paid, buy_date }: any) {
    try {
      const result = await axios.post("/api/liquidity", {
        token,
        token_quantity: parseFloat(token_quantity),
        amount_paid: parseFloat(amount_paid),
        buy_date,
      });
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
