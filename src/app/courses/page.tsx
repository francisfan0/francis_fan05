"use client";

import { useEffect } from "react";
import Layout from "../../layout/Layout";
import Courses from "../../pages/Courses";
import { Analytics } from "@vercel/analytics/react";

export default function CoursesPage() {
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
        <Courses />
      </Layout>
      <Analytics />
    </>
  );
}
