import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectIndex } from "@/components/project-index";
import { copy, isLang } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "th" ? "ผลงาน" : "Projects", alternates: { canonical: `/${lang}/projects`, languages: { en: "/en/projects", th: "/th/projects" } } };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: value } = await params;
  if (!isLang(value)) notFound();
  const lang = value;
  const c = copy[lang];
  return <><SiteHeader lang={lang} alternatePath="/projects" /><main id="main" className="bg-[#f2f0e9]"><div className="mx-auto w-[calc(100%-48px)] max-w-[1480px] pt-20 pb-24 sm:w-[calc(100%-80px)] md:pt-28 md:pb-36">
    <div className="mb-16 grid gap-7 border-t border-[#171b1a]/25 pt-6 lg:grid-cols-[.3fr_1fr] lg:gap-10"><p className="font-[family-name:var(--mono)] text-[11px] tracking-[.12em] text-[#aa4b31] uppercase">WORK / 01—06</p><div className="grid gap-5 md:grid-cols-[1fr_250px] md:items-end"><h1 className="font-[family-name:var(--display)] text-[clamp(64px,8.5vw,148px)] font-medium leading-[.83] tracking-[-.09em]">{lang === "en" ? <>Selected<br /><span className="font-[family-name:var(--serif)] tracking-normal font-normal italic text-[#aa4b31]">projects.</span></> : <>ผลงาน<br /><span className="font-[family-name:var(--serif)] tracking-normal font-normal text-[#aa4b31]">ที่เลือกไว้</span></>}</h1><p className="max-w-[260px] text-[14px] leading-[1.6] text-[#626b63]">{c.selectedDesc}</p></div></div>
    <ProjectIndex lang={lang} />
  </div></main><SiteFooter lang={lang} /></>;
}

