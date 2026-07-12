"use server";
import { revalidatePath } from "next/cache";
import {
    carrierSchema,
    type CarrierSchema,
} from "../schemas/carrier.schema";

import { carrierService } from "../services/carrier.service";
import { carrierActivityService } from "../services/carrier-activity.service";

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

    try {
        const carrier = await carrierService.create(
            parsed.data
        );

        await carrierActivityService.create({
            carrierId: carrier.id,
            title: "Carrier Created",
            note: "Carrier was added to DSOS.",
        });

        revalidatePath("/carriers");

        return {
            success: true,
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "A carrier with this MC Number already exists.",
        };
    }

}