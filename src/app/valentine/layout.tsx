import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valentine",
  description: "A valentine page.",
};

export default function ValentineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
