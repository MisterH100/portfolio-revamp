import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { ThemeContextProvider } from "@/lib/themeContext";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "900"],
});

export const metadata: Metadata = {
  title: "Handsome Nyathi Portfolio",
  description: "Meet your next developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <ThemeContextProvider>
        <body className={`${poppins.className} dark w-full`}>
          <Nav />
          {children}
        </body>
      </ThemeContextProvider>
    </html>
  );
}
