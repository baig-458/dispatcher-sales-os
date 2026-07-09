"use server";

import {
    carrierSchema,
    type CarrierSchema,
} from "../schemas/carrier.schema";

import { carrierService } from "../services/carrier.service";

export async function createCarrier(
    data: CarrierSchema
) {
    const parsed = carrierSchema.safeParse(data);

    if (!parsed.success) {
        return {
            success: false,
            errors: parsed.error.flatten(),
        };
    }

    await carrierService.create(parsed.data);

    return {
        success: true,
    };
}