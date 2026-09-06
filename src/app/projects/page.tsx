import type { Metadata } from "next";
import Layout from "../../layout/Layout";
import Projects from "../../pages/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Francis Fan, including Auren, Yale Clubs, and robotics work.",
};

export default function ProjectsPage() {
  return (
    <Layout>
      <Projects />
    </Layout>
  );
}
