import { SignUp } from "@clerk/nextjs";

function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <SignUp afterSignUpUrl="/admin" signInUrl="/login" />
    </main>
  );
}

export default Page;
