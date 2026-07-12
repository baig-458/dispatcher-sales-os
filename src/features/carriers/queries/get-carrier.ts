import { carrierService } from "../services/carrier.service";

export async function getCarrier(id: string) {
  return carrierService.getById(id);
}
