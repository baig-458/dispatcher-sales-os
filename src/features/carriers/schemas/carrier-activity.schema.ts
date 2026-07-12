import { z } from "zod";

export const carrierActivitySchema = z.object({
    carrierId: z.string(),

    title: z
        .string()
        .min(2, "Title is required"),

    note: z
        .string()
        .optional(),
});

export type CarrierActivitySchema =
    z.infer<typeof carrierActivitySchema>;