import type { Metadata } from "next";
import Layout from "../../layout/Layout";
import Courses from "../../pages/Courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Courses Francis Fan has taken at Yale, including current classes and GPA.",
};

export default function CoursesPage() {
  return (
    <Layout>
      <Courses />
    </Layout>
  );
}
