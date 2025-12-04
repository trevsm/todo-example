import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import "./global.css";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo app built with Next.js and Material-UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
