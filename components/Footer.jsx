import React from "react";

function Footer() {
  return (
    <div
      className="w-full px-4 flex text-sm flex-col items-center 
    justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0"
    >
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0">
        Built by Kuan. Hosted on Vercel. Illustrations by Popsy. The source code
        is available on GitHub.
      </div>
    </div>
  );
}

export default Footer;
