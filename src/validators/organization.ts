import { z } from "zod";

export const CreateOrganizationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  members: z
    .array(z.string().email())
    .length(3, "Organizations must have at least 1 other member"),
});

export const UpdateOrganizationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});
