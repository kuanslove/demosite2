import React from "react";
import Link from "next/link";

function LoginButton() {
  return (
    <Link
      href="/login"
      className="px-2 py-1 select-none rounded-lg 
    hover:bg-purple-400 bg-purple-500 text-white"
    >
      Login
    </Link>
  );
}

export default LoginButton;
