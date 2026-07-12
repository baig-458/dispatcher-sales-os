import { carrierActivityService } from "../services/carrier-activity.service";

export async function getCarrierActivities(
    carrierId: string
) {
    return carrierActivityService.getByCarrier(
        carrierId
    );
}