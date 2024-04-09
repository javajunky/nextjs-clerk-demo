"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function Page() {
  const { user } = useUser();
  console.log(user);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 md:p-24">
      <div className="fixed top-0 left-0 z-10 flex items-center justify-end w-full px-4 py-10 font-mono text-sm md:px-10">
        <div className="flex gap-4">
          <div className="flex items-center justify-center border-2 rounded-full border-emerald-800 dark:border-white size-9 bg-emerald-400">
            {user ? <UserButton afterSignOutUrl="/" /> : null}
          </div>
        </div>
      </div>
      <Image src="/dwight-secret.gif" alt="Secret!" width={480} height={270} />
      <h1 className="text-3xl font-black md:text-7xl">
        This is a private page!
      </h1>
    </main>
  );
}

export default Page;
