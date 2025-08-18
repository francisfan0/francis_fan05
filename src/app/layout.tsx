import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "../index.css";
import "../App.css";
import "../layout/Layout.css";
import "../pages/HomePage.css";
import "../pages/Courses.css";
import "../pages/Projects.css";
import "../pages/Photography.css";

// Bootstrap CSS - import at the end to ensure it overrides custom styles
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export { metadata } from "./constants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="z_dWtmQBw6gE1R3XH5k-xkYCf2hBA7Xjq1cdWnzd3Rc"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/monkey-facing-left-svgrepo-com.svg"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
