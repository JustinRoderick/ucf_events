import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// import db schemas

// something like this
export const event = createTRPCRouter({
  // get all events
  getAll: publicProcedure.query(() => {
    return {
      events: [],
    };
  }),

  // get event by id
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return {
        event: {
          id: input.id,
          name: "Event name",
          description: "Event description",
          date: new Date().toISOString(),
        },
      };
    }),

  // create event
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        date: z.string(),
      }),
    )
    .mutation(({ input }) => {
      return {
        event: {
          id: "1",
          name: input.name,
          description: input.description,
          date: input.date,
        },
      };
    }),

  // update event
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        date: z.string(),
      }),
    )
    .mutation(({ input }) => {
      return {
        event: {
          id: input.id,
          name: input.name,
          description: input.description,
          date: input.date,
        },
      };
    }),

  // delete event
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      return {
        event: {
          id: input.id,
          name: "Event name",
          description: "Event description",
          date: new Date().toISOString(),
        },
      };
    }),
});
