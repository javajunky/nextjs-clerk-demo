import Header from "@/components/Header";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 md:p-24">
      <Header />

      <h1 className="text-3xl font-black md:text-7xl ">
        This is a public page!
      </h1>
      <Link href="/admin" passHref>
        <button className="p-2 px-4 text-white rounded-lg dark:bg-slate-100 dark:text-black bg-slate-800 ">
          Go to Admin
        </button>
      </Link>
    </main>
  );
}
