import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Handsome Nyathi",
  description: "Get to know Handsome Nyathi in this section",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
