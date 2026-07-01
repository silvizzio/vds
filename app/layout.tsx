import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/docs/top-bar";
import { Sidebar } from "@/components/docs/sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vizzio Design System",
  description:
    "Components, foundations, and usage guidance for Vizzio product surfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <TopBar />
        <div className="mx-auto flex w-full max-w-[1400px]">
          <Sidebar />
          <main className="min-w-0 flex-1 px-6 py-10 md:px-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
