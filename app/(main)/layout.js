import React from "react";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";

function MainLayout({ children }) {
  const menuItems = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/#features",
      title: "Features",
    },
    {
      url: "/pricing",
      title: "Pricing",
    },
    {
      url: "/blog",
      title: "Blog",
    },
    {
      url: "/docs",
      title: "Documentation",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader menuitems={menuItems} />
      <div className="flex-1">
      {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
