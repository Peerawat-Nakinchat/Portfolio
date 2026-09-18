import { notFound } from "next/navigation";
import { isLang, languages } from "@/lib/i18n";

export function generateStaticParams() { return languages.map((lang) => ({ lang })); }

export default async function LanguageLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <div lang={lang} className={lang === "th" ? "[--display:'Noto_Sans_Thai'] [--serif:'Noto_Serif_Thai'] [--body:'Noto_Sans_Thai'] [--mono:'IBM_Plex_Mono'] font-[family-name:var(--body)]" : "[--display:'Space_Grotesk_Variable'] [--serif:'Instrument_Serif'] [--body:'Space_Grotesk_Variable'] [--mono:'IBM_Plex_Mono'] font-[family-name:var(--body)]"}>{children}</div>;
}

