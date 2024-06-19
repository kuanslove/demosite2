"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function LogoMenu({ items }) {
  const [expanded, setExpanded] = useState(false);
  const path = usePathname()
  console.log("path", path)
  return (
    <div id="logo_menu" className="relative">
      <div className="hidden md:flex flex-row justify-start items-center">
        <span className="font-bold text-lg">Taxonomy</span>
        <div className="mx-8">
          {items.map((item, i) => {
            return (
              <span key={i} 
              className={`py-2 px-4 mx-2 rounded-lg 
                ${item.url === path? "bg-pink-600 text-white": "text-black"} 
                hover:bg-pink-400 hover:text-white`}>
                <Link href={item.url}>{item.title}</Link>
              </span>
            );
          })}
        </div>
      </div>

      <div className="md:hidden select-none flex flex-col justify-start items-start">
        <div
          onClick={() => setExpanded(!expanded)}
          className="font-bold text-lg"
        >
          Menu
        </div>
        {expanded ? (
          <div className="absolute bg-teal-200 text-black my-[80%] flex flex-col">
            {items.map((item, i) => {
              return (
                <span
                  key={i}
                  className="p-2 hover:bg-pink-600 hover:text-white"
                >
                  <Link href={item.url}>{item.title}</Link>
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LogoMenu;
