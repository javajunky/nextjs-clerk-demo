import { SignIn } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <div>
      <SignIn afterSignInUrl={"/admin"} afterSignUpUrl={"/admin"} />
    </div>
  );
}

export default Page;
