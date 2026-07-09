import { z } from "zod";

export const carrierSchema = z.object({
  companyName: z
    .string()
    .min(2, "Company name is required"),

  ownerName: z.string().optional(),

  mcNumber: z
    .string()
    .min(2, "MC Number is required"),

  dotNumber: z.string().optional(),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  equipment: z.enum([
    "DRY_VAN",
    "REEFER",
    "FLATBED",
    "STEP_DECK",
    "POWER_ONLY",
    "HOTSHOT",
    "BOX_TRUCK",
  ]),

  preferredLanes: z.string().optional(),

  notes: z.string().optional(),
});

export type CarrierSchema = z.infer<typeof carrierSchema>;