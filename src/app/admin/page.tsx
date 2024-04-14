import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 md:p-24">
      <Header />
      <Image src="/dwight-secret.gif" alt="Secret!" width={480} height={270} />
      <h1 className="text-3xl font-black md:text-7xl text-rose-600">
        This is a private page!
      </h1>
      <Link href="/" passHref>
        <button className="p-2 px-4 text-white rounded-lg dark:bg-slate-100 dark:text-black bg-slate-800 ">
          Go Home
        </button>
      </Link>
    </main>
  );
}

export default Page;
