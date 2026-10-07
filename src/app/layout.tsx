import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/noto-sans-thai/thai-400.css";
import "@fontsource/noto-sans-thai/thai-500.css";
import "@fontsource/noto-sans-thai/thai-600.css";
import "@fontsource/noto-sans-thai/latin-400.css";
import "@fontsource/noto-sans-thai/latin-500.css";
import "@fontsource/noto-sans-thai/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: { default: "Peerawat Nakinchat — Software Developer", template: "%s — Peerawat Nakinchat" },
  description: "Peerawat Nakinchat builds web applications, business systems, and integrations.",
  openGraph: { type: "website", title: "Peerawat Nakinchat — Software Developer", description: "Web applications, business systems, and integrations." },
  twitter: { card: "summary_large_image", title: "Peerawat Nakinchat — Software Developer", description: "Web applications, business systems, and integrations." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="scroll-smooth motion-reduce:scroll-auto"><body className="m-0 bg-[#f7f7f5] text-[#17181c] antialiased selection:bg-[#3157d5] selection:text-white [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#3157d5] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-[#3157d5] motion-reduce:[&_*]:transition-none print:bg-white print:text-black">{children}</body></html>;
}

