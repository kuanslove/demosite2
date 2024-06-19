import React from "react";

function PricePage() {
  const planItems = [
    "Unlimited Posts",
    "Unlimited Users",
    "Custom domain",
    "Dashboard Analytics",
    "Access to Discord",
    "Premium Support",
  ];
  return (
    <div className="px-6 max-w-[64rem] mx-auto lg:pt-32">
      <div className="title_section max-w-[64rem] mx-auto">
        <h1 className="mt-12 text-3xl md:text-6xl font-bold">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-xl">
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>
      <div className="p-8 mt-8 grid grid-cols-1 border rounded-lg border-gray-500 md:grid-cols-[1fr_200px]">
        <div className="plan_detail">
          <div className="font-bold text-2xl">
            What's included in the PRO plan
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {planItems.map((p, i) => {
              return (
                <span
                  key={i}
                  className="flex flex-row items-center text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2 h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {p}
                </span>
              );
            })}
          </div>
        </div>
        <div className="plan_fee mt-6 md:mt-0 flex gap-4 flex-col justify-start items-center">
          <div>
            <p className="text-7xl font-bold">$19</p>
            <p className="text-gray-600 text-sm text-center">Billed Monthly</p>
          </div>
          <div
            className="p-2 px-6 w-full rounded-lg flex items-center 
          justify-center bg-white text-black hover:bg-gray-200
          md:w-auto
          "
          >
            Get Started
          </div>
        </div>
      </div>
      <div className="mt-2 p-2">
        Taxonomy is a demo app.{" "}
        <span className="font-bold">
          You can test the upgrade and won't be charged.
        </span>
      </div>
    </div>
  );
}

export default PricePage;
