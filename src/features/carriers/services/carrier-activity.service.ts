import { prisma } from "@/lib/db/prisma";

class CarrierActivityService {
    async create(data: {
        carrierId: string;
        title: string;
        note?: string;
    }) {
        return prisma.carrierActivity.create({
            data,
        });
    }

    async getByCarrier(carrierId: string) {
        return prisma.carrierActivity.findMany({
            where: {
                carrierId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
}

export const carrierActivityService =
    new CarrierActivityService();