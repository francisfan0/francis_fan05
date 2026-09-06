import type { Metadata } from "next";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";

export const metadata: Metadata = {
  title: {
    absolute: "Francis Fan",
  },
  description:
    "Hi, I'm Francis. I'm currently at Yale pursuing a combined BS/MS in Computer Science. Don't hesitate to reach out with any questions!",
};

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
