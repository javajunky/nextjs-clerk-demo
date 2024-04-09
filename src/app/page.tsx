import Image from "next/image";
import { SignIn, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-end font-mono text-sm lg:flex fixed top-0 left-0 py-10">
        <div className="flex gap-4">
          <UserButton afterSignOutUrl="/admin" />
          <Link href="/signup" passHref>
            <button className="p-2 px-4 rounded-lg border border-foreground">
              Sign Up
            </button>
          </Link>
          <Link href="/login" passHref>
            <button className="p-2 px-4 rounded-lg dark:bg-slate-100 dark:text-black bg-slate-800 text-white ">
              Login
            </button>
          </Link>
        </div>
      </div>

      <h1 className="text-7xl font-bold">This is a public page!</h1>
    </main>
  );
}
