import Link from "next/link";

import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          College <span className="text-[hsl(280,100%,70%)]">Event</span>{" "}
          Planner
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link href="./sign-in" className="px-5">
            <button className=" rounded-md px-3 py-2 text-2xl font-bold text-white hover:bg-blue-400">
              Log In
            </button>
          </Link>

          <Link href="./sign-up">
            <button className="rounded-md bg-white px-3 py-2 text-2xl font-bold text-[hsl(280,100%,70%)] hover:bg-blue-400 hover:text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

// Delete later
/*
async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
*/
