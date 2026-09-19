import { z } from "zod";

export const estimateSchema = z.object({
  id: z.string(),
  customer: z.string(),
  address: z.string(),
  service: z.string(),
  status: z.enum(["Draft", "Sent", "Accepted", "Declined", "Expired"]),
  total: z.string(),
  validUntil: z.string(),
  createdAt: z.string(),
});

export const estimatesSchema = z.array(estimateSchema);

export type EstimateRow = z.infer<typeof estimateSchema>;
