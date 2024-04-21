import { z } from "zod";

const CreateCommentSchema = z.object({
  eventId: z.number(),
  text: z.string().min(1, "Comment must be at least 1 character"),
  rating: z
    .number({
      required_error: "Rating is required",
    })
    .int()
    .min(1, "Rating must be at least 1"),
});
