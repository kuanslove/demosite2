import React from "react";
import Image from "next/image";
import p1 from "@/public/blogs/blog-post-1.webp";
import p2 from "@/public/blogs/blog-post-2.webp";
import p3 from "@/public/blogs/blog-post-3.webp";
import p4 from "@/public/blogs/blog-post-4.webp";
import BlogCard from "@/components/BlogCard";

function BlogPage() {
  const posts = [
    {
      logo: p1,
      title: "Preview Mode for Headless CMS",
      content: "How to implement preview mode in your headless CMS.",
      timestamp: "April 9, 2023",
    },
    {
      logo: p2,
      title: "Dynamic Routing and Static Regeneration",
      content:
        "How to use incremental static regeneration using dynamic routes.",
      timestamp: "March 4, 2023",
    },
    {
      logo: p3,
      title: "Server and Client Components",
      content:
        "React Server Components allow developers to build applications that span the server and client.",
      timestamp: "January 8, 2023",
    },
    {
      logo: p4,
      title: "Deploying Next.js Apps",
      content: "How to deploy your Next.js apps on Vercel.",
      timestamp: "January 2, 2023",
    },
  ];

  return (
    <div className="max-w-[64rem] mx-auto container">
      <div className="title_section pt-6 lg:pt-10">
        <h1 className="text-4xl font-bold lg:text-5xl">Blog</h1>
      </div>
      <div className="my-5 text-xl text-gray-600">
        <p>A blog built using Contentlayer. Posts are written in MDX.</p>
      </div>
      <hr className="border border-b-0 border-gray-400"></hr>
      <div className="blog_section w-full mt-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((p, i) => {
            return (
              <div key={i}>
                <BlogCard item={p} />
              </div>
            );
          })}
        </div>
      </div>
      {/* <Image src={p1} width={804} height={542} alt={"Post 1"} /> */}
    </div>
  );
}

export default BlogPage;
