import type { Metadata } from "next";
import Layout from "../../layout/Layout";
import ResumeSearch from "../../pages/ResumeSearch";
import PasswordProtection from "../../components/PasswordProtection";

export const metadata: Metadata = {
  title: "Resume Search",
  description: "Search through resume topics, tools, and project writeups.",
};

export default function ResumeSearchPage() {
  return (
    <Layout>
      <PasswordProtection>
        <ResumeSearch />
      </PasswordProtection>
    </Layout>
  );
}
