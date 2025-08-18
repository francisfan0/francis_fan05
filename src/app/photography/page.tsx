"use client";

import { useEffect } from "react";
import Layout from "../../layout/Layout";
import Photography from "../../pages/Photography";
import { Analytics } from "@vercel/analytics/react";

export default function PhotographyPage() {
  useEffect(() => {
    // Check and apply the saved theme on component mount
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
      }
    }
  }, []);

  return (
    <>
      <Layout>
        <Photography />
      </Layout>
      <Analytics />
    </>
  );
}
