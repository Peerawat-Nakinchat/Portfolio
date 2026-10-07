import Link from "next/link";
import { BriefcaseIcon, CloseIcon, FileTextIcon, HistoryIcon, MailIcon, MenuIcon, UserIcon } from "@/components/icons";
import type { Lang } from "@/lib/i18n";
import { copy } from "@/lib/i18n";

export function SiteHeader({ lang, alternatePath = "" }: { lang: Lang; alternatePath?: string }) {
  const c = copy[lang];
  const nav = [
    { label: c.navWork, href: `/${lang}/projects`, icon: BriefcaseIcon },
    { label: c.navExperience, href: `/${lang}#experience`, icon: HistoryIcon },
    { label: c.navAbout, href: `/${lang}#about`, icon: UserIcon },
    { label: c.navResume, href: `/${lang}/resume`, icon: FileTextIcon },
    { label: c.navContact, href: `/${lang}#contact`, icon: MailIcon },
  ];

  return <>
    <a href="#main" className="fixed -top-20 left-5 z-[100] bg-[#3157d5] px-4 py-3 text-[14px] font-semibold text-white focus:top-4">{c.skip}</a>
    <header className="sticky top-0 z-50 bg-[#f7f7f5]/90 text-[#17181c] backdrop-blur-xl print:hidden">
      <div className="mx-auto flex h-16 w-[calc(100%-40px)] max-w-[1200px] items-center justify-between sm:w-[calc(100%-72px)]">
        <Link href={`/${lang}`} className="group inline-flex items-center gap-2 font-[family-name:var(--display)] text-[16px] font-semibold tracking-[-.02em]" aria-label="Peerawat Nakinchat home">
          <span>Peerawat Nakinchat</span><span className="size-1.5 rounded-full bg-[#3157d5] transition-transform duration-300 group-hover:scale-[1.8]" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {nav.map((item) => <Link key={item.href} href={item.href} className="relative py-2 text-[14px] font-medium text-[#666a73] transition-colors after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#3157d5] after:transition-transform hover:text-[#17181c] hover:after:scale-x-100">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-5">
          <div className="flex items-center rounded-full bg-[#e9eae6] p-0.5 font-[family-name:var(--mono)] text-[11px] tracking-[.06em]" role="group" aria-label={lang === "en" ? "Language" : "ภาษา"}>
            <Link href={`/th${alternatePath}`} hrefLang="th" aria-current={lang === "th" ? "page" : undefined} className={`rounded-full px-2.5 py-1.5 transition-[background-color,color,box-shadow] duration-200 ${lang === "th" ? "bg-white text-[#17181c] shadow-[0_1px_4px_rgba(23,24,28,.10)]" : "text-[#8b8e94] hover:text-[#17181c]"}`}>TH</Link>
            <Link href={`/en${alternatePath}`} hrefLang="en" aria-current={lang === "en" ? "page" : undefined} className={`rounded-full px-2.5 py-1.5 transition-[background-color,color,box-shadow] duration-200 ${lang === "en" ? "bg-white text-[#17181c] shadow-[0_1px_4px_rgba(23,24,28,.10)]" : "text-[#8b8e94] hover:text-[#17181c]"}`}>EN</Link>
          </div>
          <details className="group relative md:hidden">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full bg-[#e9eae6] text-[#17181c] transition-colors hover:bg-[#dfe1dc] [&::-webkit-details-marker]:hidden"><MenuIcon className="group-open:hidden" /><CloseIcon className="hidden group-open:block" /><span className="sr-only">{lang === "en" ? "Open navigation" : "เปิดเมนู"}</span></summary>
            <nav className="absolute top-12 right-0 z-50 w-[min(280px,calc(100vw-40px))] rounded-[20px] bg-[#17181c] p-3 text-white shadow-[0_24px_60px_rgba(23,25,31,.22)]" aria-label="Mobile navigation">{nav.map((item) => <Link key={item.href} href={item.href} className="group/item flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] text-white/70 transition-colors hover:bg-white/[.07] hover:text-white"><item.icon className="text-[#91a7ff]" /><span>{item.label}</span></Link>)}</nav>
          </details>
        </div>
      </div>
    </header>
  </>;
}
