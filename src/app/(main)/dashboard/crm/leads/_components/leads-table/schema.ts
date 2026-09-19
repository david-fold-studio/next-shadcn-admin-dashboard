import { z } from "zod";

export const leadSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  service: z.string(),
  status: z.enum(["New", "Contacted", "Quoted", "Won", "Lost"]),
  source: z.enum(["Website", "Referral", "Google", "Door hanger", "Repeat"]),
  phone: z.string(),
  estimatedValue: z.string(),
  lastContact: z.string(),
});

export const leadsSchema = z.array(leadSchema);

export type LeadRow = z.infer<typeof leadSchema>;
