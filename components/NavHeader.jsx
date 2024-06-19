import React from "react";
import LogoMenu from "@/components/LogoMenu";
import LoginButton from "@/components/LoginButton";
import Image from "next/image";

import { auth, signOut } from "@/auth";

async function NavHeader(props) {
  const { menuitems } = props;
  const session = await auth();
  console.log("SESSION: ", session);
  return (
    <div className="flex flex-row justify-between items-center h-16 p-4">
      <LogoMenu items={menuitems} />
      {!session?.user ? (
        <LoginButton />
      ) : (
        <form
          className="px-2 py-1 flex flex-flow gap-2 select-none rounded-lg 
          hover:bg-purple-400 bg-purple-500 text-white"
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Image
            width={24}
            height={24}
            src={session.user.image}
            alt="User Avatar"
          />
          <input type="submit" value="Logout" />
        </form>
      )}
    </div>
  );
}

export default NavHeader;
