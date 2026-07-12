import { prisma } from "@/lib/db";
import { CarrierSchema } from "../schemas/carrier.schema";

class CarrierService {
    async create(data: CarrierSchema) {
        return prisma.carrier.create({
            data,
        });
    }

    async getAll() {
        return prisma.carrier.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async getById(id: string) {
        return prisma.carrier.findUnique({
            where: {
                id,
            },
        });
    }

    async update(
        id: string,
        data: CarrierSchema
    ) {
        return prisma.carrier.update({
            where: {
                id,
            },
            data,
        });
    }
}

export const carrierService = new CarrierService();