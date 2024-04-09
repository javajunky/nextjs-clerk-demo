"use client";

import { UserButton, useSignIn } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user } = useUser();
  const { isLoaded } = useSignIn();

  if (isLoaded === false) return;

  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-end w-full px-4 py-10 font-mono text-sm md:px-10">
      <div className="flex gap-4">
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

/*
<div className="fixed top-0 left-0 z-10 flex items-center justify-end w-full px-4 py-10 font-mono text-sm md:px-10">
      <div className="flex gap-4">
        {user ? (
          <div className="flex items-center justify-center border-2 rounded-full border-emerald-800 dark:border-white size-9 bg-emerald-400">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>



*/
