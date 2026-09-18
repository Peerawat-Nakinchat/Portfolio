import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

export function SiteHeader({ lang, alternatePath = "" }: { lang: Lang; alternatePath?: string }) {
  const c = copy[lang];
  const other = lang === "en" ? "th" : "en";
  const nav = [
    { label: c.navWork, href: `/${lang}/projects` },
    { label: c.navExperience, href: `/${lang}#experience` },
    { label: c.navAbout, href: `/${lang}#about` },
    { label: c.navResume, href: `/${lang}/resume` },
    { label: c.navContact, href: `/${lang}#contact` },
  ];

  return <>
    <a href="#main" className="absolute -top-24 left-4 z-[100] bg-[#f36b43] px-4 py-3 text-[#171b1a] focus:top-3">{c.skip}</a>
    <header className="relative z-40 bg-[#171b1a] text-[#f2f0e9]">
      <div className="mx-auto flex h-[76px] w-[calc(100%-48px)] max-w-[1480px] items-center justify-between border-b border-white/20 sm:w-[calc(100%-80px)]">
        <Link href={`/${lang}`} className="group flex items-baseline gap-3" aria-label="Peerawat Nakinchat home">
          <span className="font-[family-name:var(--display)] text-[27px] font-semibold leading-none tracking-[-.09em]">P<span className="text-[#f36b43]">.</span>N</span>
          <span className="hidden font-[family-name:var(--mono)] text-[10px] tracking-[.08em] text-white/55 lg:inline">PEERAWAT NAKINCHAT</span>
        </Link>

        <nav className="hidden items-center gap-[clamp(22px,2.6vw,44px)] md:flex" aria-label="Primary navigation">
          {nav.map((item, index) => <Link key={item.href} href={item.href} className="group relative py-2 text-[13px] font-medium transition-colors hover:text-[#f36b43]"><span className="mr-1.5 align-top font-[family-name:var(--mono)] text-[9px] text-white/45">0{index + 1}</span>{item.label}<span className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-[#f36b43] transition-transform group-hover:scale-x-100" /></Link>)}
        </nav>

        <div className="flex items-center gap-5">
          <Link href={`/${other}${alternatePath}`} hrefLang={other} className="font-[family-name:var(--mono)] text-[11px] tracking-[.08em] transition-colors hover:text-[#f36b43]" aria-label={lang === "en" ? "Read in Thai" : "Read in English"}>{lang === "en" ? "TH" : "EN"}<span className="ml-1.5 text-[#f36b43]">↗</span></Link>
          <details className="group relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 font-[family-name:var(--mono)] text-[11px] tracking-[.08em] [&::-webkit-details-marker]:hidden"><span>{lang === "en" ? "MENU" : "เมนู"}</span><span className="text-[#f36b43] group-open:rotate-45">+</span></summary>
            <nav className="absolute top-[37px] right-0 z-50 w-[min(300px,calc(100vw-48px))] border border-white/20 bg-[#171b1a] p-5 shadow-xl" aria-label="Mobile navigation">{nav.map((item, index) => <Link key={item.href} href={item.href} className="flex items-center gap-4 border-b border-white/15 py-3 text-[16px] last:border-0"><span className="font-[family-name:var(--mono)] text-[10px] text-[#f36b43]">0{index + 1}</span>{item.label}</Link>)}</nav>
          </details>
        </div>
      </div>
    </header>
  </>;
}

