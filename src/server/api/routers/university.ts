import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Prisma, PrismaClient } from "@prisma/client";

export const universityRouter = createTRPCRouter({
  getAllUniversity: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.university.findMany();
  }),
});
