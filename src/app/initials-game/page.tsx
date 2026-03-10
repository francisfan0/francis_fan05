"use client";

import { useEffect } from "react";
import Layout from "../../layout/Layout";
import InitialsGame from "../../pages/InitialsGame";
import PasswordProtection from "../../components/PasswordProtection";
import { Analytics } from "@vercel/analytics/react";

export default function InitialsGamePage() {
  useEffect(() => {
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
          <InitialsGame />
        </PasswordProtection>
      </Layout>
      <Analytics />
    </>
  );
}
