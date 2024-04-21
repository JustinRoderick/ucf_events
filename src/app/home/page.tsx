"use client";
import { redirect } from "next/navigation";
import { validateUser } from "~/server/auth/auth";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function Page() {
  //const result = await validateUser();
  //const [university, setUniversity] = useState(null);

  const universityQuery = api.post.getAllUser.useQuery();
  const university = universityQuery.data;
  console.log(university);

  const handleJoin = () => {
    return null;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center"></div>
    </main>
  );
}
