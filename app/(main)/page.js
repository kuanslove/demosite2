import Image from "next/image";
import ContentHeader from "@/components/ContentHeader";
import Features from "@/components/Features";
import Announcement from "@/components/Announcement";

import NextLogo from "@/public/next.svg";
import ReactLogo from "@/public/react.png";
import DBLogo from "@/public/db.png";
import CSSLogo from "@/public/css.png";
import StrLogo from "@/public/stripe.png";
import AuthLogo from "@/public/auth0.svg";

export default function Home() {

  const features = [
    {
      logo: NextLogo,
      title: "Next 13",
      content: "App dir, Routing, Layouts, Loading UI and API routes.",
    },
    {
      logo: ReactLogo,
      title: "React 18",
      content: "Server and Client Components. Use hook.",
    },
    {
      logo: DBLogo,
      title: "Database",
      content: "ORM using Prisma and deployed on PlanetScale.",
    },
    {
      logo: CSSLogo,
      title: "Components",
      content:
        "UI components built using Radix UI and styled with Tailwind CSS.",
    },
    {
      logo: AuthLogo,
      title: "Authentication",
      content: "Authentication using NextAuth.js and middlewares.",
    },
    {
      logo: StrLogo,
      title: "Subscriptions",
      content: "Free and paid subscriptions using Stripe.",
    },
  ];

  return (
    <div id="app_home">
      <ContentHeader />
      <Features items={features} />
      <Announcement />
    </div>
  );
}
