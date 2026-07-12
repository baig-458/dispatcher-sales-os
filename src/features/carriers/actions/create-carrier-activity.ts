"use server";

import {
    carrierActivitySchema,
    type CarrierActivitySchema,
} from "../schemas/carrier-activity.schema";

import { carrierActivityService }
from "../services/carrier-activity.service";

import { revalidatePath }
from "next/cache";

export async function createCarrierActivity(
    data: CarrierActivitySchema
) {
    const parsed =
        carrierActivitySchema.safeParse(data);

    if (!parsed.success) {
        return {
            success: false,
            errors: parsed.error.flatten(),
        };
    }

    await carrierActivityService.create(
        parsed.data
    );

    revalidatePath(
        `/carriers/${parsed.data.carrierId}`
    );

    return {
        success: true,
    };
}