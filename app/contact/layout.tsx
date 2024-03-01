import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Handsome Nyathi",
  description: "Get in touch with Handsome Nyathi",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
