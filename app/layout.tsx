import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Toaster } from "@/components/ui/toaster";
import { ThemeContextProvider } from "@/lib/themeContext";
import { Footer } from "@/components/footer";
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
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <ThemeContextProvider>
        <body className={`${poppins.className} dark w-full`}>
          <Nav />
          {children}
          <Footer />
          <Toaster />
        </body>
      </ThemeContextProvider>
    </html>
  );
}
