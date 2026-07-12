"use server";

import {
    carrierSchema,
    type CarrierSchema,
} from "../schemas/carrier.schema";

import { carrierService } from "../services/carrier.service";

import { revalidatePath } from "next/cache";

import { carrierActivityService } from "../services/carrier-activity.service";

export async function updateCarrier(
    id: string,
    data: CarrierSchema
) {
    const parsed = carrierSchema.safeParse(data);

    if (!parsed.success) {
        return {
            success: false,
            errors: parsed.error.flatten(),
        };
    }
    const changes: string[] = [];
    try {
        const oldCarrier =
            await carrierService.getById(id);

        if (!oldCarrier) {
            return {
                success: false,
                message: "Carrier not found.",
            };
        }
        // Compare old values with new values
        const fields: (keyof CarrierSchema)[] = [
            "companyName",
            "ownerName",
            "mcNumber",
            "dotNumber",
            "phone",
            "email",
            "equipment",
            "preferredLanes",
        ];
        for (const field of fields) {
            const oldValue = oldCarrier[field];
            const newValue = parsed.data[field];

            if (oldValue !== newValue) {
                changes.push(
                    `${field}: ${oldValue ?? "-"} → ${newValue ?? "-"}`
                );
            }
        }
        
        await carrierService.update(id, parsed.data);
        await carrierActivityService.create({
            carrierId: id,
            title: "Carrier Updated",
            note:
                changes.length > 0
                    ? changes.join("\n")
                    : "No changes detected.",
        });

        revalidatePath("/carriers");
        revalidatePath(`/carriers/${id}`);

        return {
            success: true,
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to update carrier.",
        };
    }
}