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
}

export const carrierService = new CarrierService();