import { z } from "zod";

export const carrierSchema = z.object({
    companyName: z
        .string().trim()
        .min(2, "Company name is required"),

    ownerName: z.string().trim().optional(),

    mcNumber: z
        .string()
        .min(2, "MC Number is required"),

    dotNumber: z.string().optional(),

    phone: z
        .string().trim()
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

    preferredLanes: z.string().trim().optional(),

    notes: z.string().trim().optional(),
});

export type CarrierSchema = z.infer<typeof carrierSchema>;