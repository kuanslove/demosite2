import React from "react";
import Link from "next/link";

function ContentHeader() {
  return (
    <div className="flex flex-col justify-start items-center max-w-[64rem] mx-auto lg:pt-32">
      <div className="flex flex-col justify-center items-center mt-6">
        <span
          className="rounded-3xl text-sm 
        bg-purple-500 text-white py-2 px-4"
        >
          Follow along on Twitter
        </span>
      </div>
      <h1
        className="mt-6 font-bold text-3xl text-center 
      sm:text-5xl md:text-6xl"
      >
        An example app built using Next.js 13 server components.
      </h1>
      <p className="p-4 mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center text-gray-700">
        I'm building a web app with Next.js 13 and open sourcing everything.
        Follow along as we figure this out together.
      </p>
      <div className="flex flex-row justify-center gap-4 items-center">
        <Link href="#" className="flex justify-center px-4 items-center h-11 bg-white rounded-lg">
          Get Started
        </Link>
        <Link href="#" className="flex justify-center px-4 items-center h-11 text-white rounded-lg box-border border border-solid border-gray-700 hover:bg-purple-500">
          GitHub
        </Link>
      </div>
    </div>
  );
}

export default ContentHeader;
