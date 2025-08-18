"use client";

import { useEffect } from "react";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import { Analytics } from "@vercel/analytics/react";
import "../pages/HomePage.css";

export default function Home() {
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
        <HomePage />
      </Layout>
      <Analytics />
    </>
  );
}
