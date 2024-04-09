"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useUser } from "@clerk/nextjs";

function Page() {
  const { user } = useUser();
  console.log(user);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="fixed top-0 left-0 z-10 items-center justify-end w-full max-w-5xl py-10 font-mono text-sm lg:flex">
        <div className="flex gap-4">
          <div className="flex items-center justify-center border-2 rounded-full border-emerald-800 dark:border-white size-9 bg-emerald-400">
            {user ? <UserButton afterSignOutUrl="/" /> : null}
          </div>
        </div>
      </div>

      <h1 className="font-bold text-7xl">This is a private page!</h1>
    </main>
  );
}

export default Page;
