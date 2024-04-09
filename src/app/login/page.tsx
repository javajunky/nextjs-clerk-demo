import { SignIn } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <SignIn afterSignInUrl="/admin" signUpUrl="/signup" />
    </main>
  );
}

export default Page;
