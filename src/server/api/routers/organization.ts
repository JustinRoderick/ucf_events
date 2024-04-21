import { z } from "zod";

import {
  CreateOrganizationSchema,
  UpdateOrganizationSchema,
} from "~/validators/organization";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const organizationRouter = createTRPCRouter({
  createOrganization: publicProcedure
    .input(CreateOrganizationSchema)
    .mutation(async ({ ctx, input }) => {
      return; //ctx.db.organization.create({
      //data: {
      //name: input.name,
      //description: input.description,
      //members: input.members
      //},
      //});
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
