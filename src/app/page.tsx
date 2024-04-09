import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="fixed top-0 left-0 z-10 items-center justify-end w-full max-w-5xl py-10 font-mono text-sm lg:flex">
        <div className="flex gap-4">
          <UserButton afterSignOutUrl="/admin" />
          <Link href="/signup" passHref>
            <button className="p-2 px-4 border rounded-lg border-slate-800 text-slate-800 dark:border-slate-100 dark:text-slate-100">
              Sign Up
            </button>
          </Link>
          <Link href="/login" passHref>
            <button className="p-2 px-4 text-white rounded-lg dark:bg-slate-100 dark:text-black bg-slate-800 ">
              Login
            </button>
          </Link>
        </div>
      </div>

      <h1 className="font-bold text-7xl">This is a public page!</h1>
    </main>
  );
}
