import { prisma } from "@/lib/db";

export class UserService {
  async getAllUsers() {
    return prisma.user.findMany();
  }

  async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export const userService = new UserService();