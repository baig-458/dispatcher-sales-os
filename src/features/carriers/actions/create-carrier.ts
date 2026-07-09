"use server";

import { carrierSchema } from "../schemas/carrier.schema";
import { carrierService } from "../services/carrier.service";

export async function createCarrier(formData: FormData) {
  const parsed = carrierSchema.safeParse({
    companyName: formData.get("companyName"),
    ownerName: formData.get("ownerName"),
    mcNumber: formData.get("mcNumber"),
    dotNumber: formData.get("dotNumber"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    equipment: formData.get("equipment"),
    preferredLanes: formData.get("preferredLanes"),
    notes: formData.get("notes"),
  });

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