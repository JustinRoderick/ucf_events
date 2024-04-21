"use client";
import Link from "next/link";
import { Button } from "~/components/ui/button";
export function Tabs() {
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
      <Link href="../organization">
        <Button>Create organization</Button>
      </Link>
    </div>
  );
}
