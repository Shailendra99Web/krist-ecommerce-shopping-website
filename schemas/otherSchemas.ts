import { z } from "zod";

export const reviewSchema = z.object({
  email: z.string().email(),
  name: z.string().min(5),
  review: z.string().min(5)
});
