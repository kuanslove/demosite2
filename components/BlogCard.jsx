import React from "react";

import Image from "next/image";
function BlogCard({ item }) {
  return (
    <div>
      <Image src={item.logo} width={804} height={452} className="rounded-lg" />
      <div className="blog_title text-xl font-bold py-2">{item.title}</div>
      <div className="text-gray-600">{item.content}</div>
      <div className="text-sm py-2 text-gray-600">{item.timestamp}</div>
    </div>
  );
}

export default BlogCard;
