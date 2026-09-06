import type { Metadata } from "next";
import Layout from "../../layout/Layout";
import InitialsGame from "../../pages/InitialsGame";
import PasswordProtection from "../../components/PasswordProtection";

export const metadata: Metadata = {
  title: "Initials Game",
  description: "A hidden initials game.",
};

export default function InitialsGamePage() {
  return (
    <Layout>
      <PasswordProtection>
        <InitialsGame />
      </PasswordProtection>
    </Layout>
  );
}
