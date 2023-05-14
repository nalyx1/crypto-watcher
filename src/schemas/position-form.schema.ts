import { z } from 'zod';

export const positionFormSchema = z.object({
  token_id: z.string(),
  token_quantity: z.number(),
  amount_paid: z.number(),
  buy_date: z.date(),
  user_id: z.string().default('')
});
