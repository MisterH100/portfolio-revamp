import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects by Handsome Nyathi",
  description: "Dive into what I can do with my skills",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
