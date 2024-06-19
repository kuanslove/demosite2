import React from "react";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[64rem] mx-auto p-6">
      {/* <div>
        <Link href="/">{"< Back to Home"}</Link>
      </div> */}
      <div className="flex flex-col justify-center items-center p-6 flex-auto 
      min-w-[24rem] min-h-[20rem] border rounded-lg bg-white">
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/" });
          }}
        >
          <button type="submit" className="border rounded-lg p-4 
          text-white bg-purple-500 hover:bg-purple-400">
            Sign In with GitHub
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
