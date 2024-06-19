import React from "react";

function Announcement() {
  return (
    <div
      className="flex flex-col justify-start items-center 
    max-w-[64rem] mx-auto py-8 md:py-12 lg:py-24"
    >
      <h1
        className="p-4 font-bold text-3xl text-center md:text-6xl"
      >
        Proudly Open Source
      </h1>
      <p className="mt-2 mx-auto text-center max-w-[85%] leading-normal sm:text-lg">
        Taxonomy is open source and powered by open source software. <br />
        The code is available on GitHub.
      </p>
    </div>
  );
}

export default Announcement;
