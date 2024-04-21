import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const user = createTRPCRouter({});
