import { SignUp } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <SignUp afterSignUpUrl="/admin" signInUrl="/login" />
    </main>
  );
}

export default Page;
