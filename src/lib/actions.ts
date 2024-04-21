"use server";

import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { lucia } from "~/server/auth/auth";

import { z } from "zod";
import { SignUpSchema } from "~/validators/auth";
import { SignInSchema } from "~/validators/auth";
import { generateId } from "lucia";
import router from "next/navigation";

export const signUpAction = async (values: z.infer<typeof SignUpSchema>) => {
  console.log(values);

  const prisma = new PrismaClient();

  const existingUser = await prisma.user.findUnique({
    where: { email: values.email },
  });

  // Add eror popup for existing user
  if (existingUser) {
    throw new Error(
      "Username is already taken. Please choose a different username.",
    );
  }

  const userId = generateId(15);
  const newUser = await prisma.user.create({
    data: {
      id: userId,
      email: values.email,
      password: values.password,
    },
  });
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
};

export const signInAction = async (values: z.infer<typeof SignInSchema>) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: { email: values.email },
  });

  if (!user) {
    throw new Error("User not found");
  }
  /*
    const valid = await lucia.(user.id, values.password);
    if (!valid) {
        throw new Error("Invalid password");
    }
    */

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  //router.("/home");
};
