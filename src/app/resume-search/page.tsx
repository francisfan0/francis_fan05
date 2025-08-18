"use client";

import { useEffect } from "react";
import Layout from "../../layout/Layout";
import ResumeSearch from "../../pages/ResumeSearch";
import PasswordProtection from "../../components/PasswordProtection";
import { Analytics } from "@vercel/analytics/react";

export default function ResumeSearchPage() {
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
        <PasswordProtection>
          <ResumeSearch />
        </PasswordProtection>
      </Layout>
      <Analytics />
    </>
  );
}
