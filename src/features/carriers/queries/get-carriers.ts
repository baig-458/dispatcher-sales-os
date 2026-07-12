import { carrierService } from "../services/carrier.service";

export async function getCarriers() {
  return carrierService.getAll();
}