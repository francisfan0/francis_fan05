import type { Metadata } from "next";
import Layout from "../../layout/Layout";
import Photography from "../../pages/Photography";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Photography by Francis Fan from national parks, Seattle, and more.",
};

export default function PhotographyPage() {
  return (
    <Layout>
      <Photography />
    </Layout>
  );
}
