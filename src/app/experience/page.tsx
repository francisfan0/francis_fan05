import type { Metadata } from "next";
import Layout from "../../layout/Layout";
import Experience from "../../pages/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work and research experience, including Databricks, Ramen Inc., and Yale CS.",
};

export default function ExperiencePage() {
  return (
    <Layout>
      <Experience />
    </Layout>
  );
}
