import React from "react";
import FeatureCard from "./FeatureCard";

function Features({ items }) {
  return (
    <div id="features" className="max-w-[64rem] mx-auto px-4">
      <h1 className="mt-10 sm:mt-64 text-center font-bold text-3xl sm:text-3xl md:text-6xl">
        Features
      </h1>
      <p
        className="p-4 mt-4 mx-auto text-center max-w-[42rem] leading-normal text-muted-foreground 
      sm:text-xl sm:leading-8 text-gray-700"
      >
        This project is an experiment to see how a modern app, with features
        like auth, subscriptions, API routes, and static pages would work in
        Next.js 13 app dir.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((f, i) => {
          return <FeatureCard key={i} item={f} />;
        })}
      </div>
      <div className="mt-4 mx-auto text-center md:max-w-[58rem] sm:text-lg">
        Taxonomy also includes a blog and a full-featured documentation site
        built using Contentlayer and MDX.
      </div>
    </div>
  );
}

export default Features;
