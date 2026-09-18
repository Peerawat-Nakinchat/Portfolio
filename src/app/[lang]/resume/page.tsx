import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PrintButton } from "@/components/print-button";
import { experience, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { copy, isLang, t } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "th" ? "เรซูเม่" : "Resume", alternates: { canonical: `/${lang}/resume`, languages: { en: "/en/resume", th: "/th/resume" } } };
}

export default async function ResumePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: value } = await params;
  if (!isLang(value)) notFound();
  const lang = value;
  const c = copy[lang];
  return <><SiteHeader lang={lang} alternatePath="/resume" /><main id="main" className="bg-[#f2f0e9] print:bg-white"><div className="mx-auto w-[calc(100%-48px)] max-w-[1480px] pt-20 pb-28 sm:w-[calc(100%-80px)] md:pt-28 print:w-full print:p-0">
    <div className="border-t border-[#171b1a]/30 pt-5"><div className="flex items-center justify-between gap-4 font-[family-name:var(--mono)] text-[11px] tracking-[.12em] text-[#aa4b31] uppercase"><span>CURRICULUM VITAE / {new Date().getFullYear()}</span><span>{c.role}</span></div><h1 className="mt-12 font-[family-name:var(--display)] text-[clamp(56px,9vw,154px)] font-medium leading-[.82] tracking-[-.09em] print:mt-8 print:text-[64px]">Peerawat<br />Nakinchat<span className="text-[#f36b43]">.</span></h1><div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-[#171b1a]/30 pt-6 print:mt-9"><p className="max-w-[650px] font-[family-name:var(--serif)] tracking-normal text-[clamp(26px,2.7vw,42px)] italic leading-[1.16] print:text-[25px]">{c.resumeIntro}</p><div className="flex items-center gap-6 print:hidden"><PrintButton label={c.print} />{profile.resumePdf && <a href={profile.resumePdf} download className="border-b border-[#171b1a] pb-1 text-[13px] font-medium">{c.downloadPdf} ↗</a>}</div></div></div>

    <div className="mt-20 grid gap-12 lg:grid-cols-[.28fr_1fr] lg:gap-[6vw] print:mt-10 print:grid-cols-[.25fr_1fr] print:gap-8"><h2 className="font-[family-name:var(--mono)] text-[11px] tracking-[.12em] text-[#aa4b31] uppercase">01 / {c.experience}</h2><div className="border-t border-[#171b1a]/25">{experience.map((item) => <article key={item.company} className="grid gap-3 border-b border-[#171b1a]/25 py-7 sm:grid-cols-[180px_1fr] sm:gap-8 print:grid-cols-[150px_1fr] print:py-4"><span className="font-[family-name:var(--mono)] text-[11px] leading-[1.5] text-[#aa4b31]">{t(item.dates, lang)}</span><div><h3 className="font-[family-name:var(--display)] text-[clamp(26px,2.5vw,39px)] font-medium leading-none tracking-[-.055em] print:text-[27px]">{item.company}</h3><p className="mt-2 font-[family-name:var(--serif)] tracking-normal text-[22px] italic text-[#aa4b31] print:text-[16px]">{t(item.role, lang)}</p><p className="mt-4 max-w-[640px] text-[14px] leading-[1.65] text-[#4f5651] print:mt-2 print:text-[11px]">{t(item.description, lang)}</p></div></article>)}</div></div>

    <div className="mt-20 grid gap-12 lg:grid-cols-[.28fr_1fr] lg:gap-[6vw] print:mt-10 print:grid-cols-[.25fr_1fr] print:gap-8"><h2 className="font-[family-name:var(--mono)] text-[11px] tracking-[.12em] text-[#aa4b31] uppercase">02 / {c.selected}</h2><div className="border-t border-[#171b1a]/25">{projects.slice(0, 4).map((project, index) => <article key={project.slug} className="grid gap-3 border-b border-[#171b1a]/25 py-6 sm:grid-cols-[180px_1fr] sm:gap-8 print:grid-cols-[150px_1fr] print:py-3"><span className="font-[family-name:var(--mono)] text-[11px] text-[#aa4b31]">0{index + 1} / {project.category === "system" ? c.system : c.website}</span><div><h3 className="font-[family-name:var(--display)] text-[clamp(25px,2.3vw,36px)] font-medium leading-none tracking-[-.05em] print:text-[24px]">{project.title}</h3><p className="mt-2 max-w-[640px] text-[14px] leading-[1.55] text-[#4f5651] print:text-[11px]">{t(project.lead, lang)}</p></div></article>)}</div></div>

    <div className="mt-20 grid gap-12 lg:grid-cols-[.28fr_1fr] lg:gap-[6vw] print:mt-10 print:grid-cols-[.25fr_1fr] print:gap-8"><h2 className="font-[family-name:var(--mono)] text-[11px] tracking-[.12em] text-[#aa4b31] uppercase">03 / {c.capabilities}</h2><div className="grid gap-5 border-t border-[#171b1a]/25 pt-6 sm:grid-cols-3"><div><h3 className="font-[family-name:var(--serif)] tracking-normal text-[25px] italic">Frontend</h3><p className="mt-2 text-[13px] leading-[1.65]">React · Next.js · TypeScript</p></div><div><h3 className="font-[family-name:var(--serif)] tracking-normal text-[25px] italic">Integration</h3><p className="mt-2 text-[13px] leading-[1.65]">ERP · API proxy · State management</p></div><div><h3 className="font-[family-name:var(--serif)] tracking-normal text-[25px] italic">Backend</h3><p className="mt-2 text-[13px] leading-[1.65]">MVC · Service layer</p></div></div></div>

    {(profile.email || profile.github || profile.linkedin) && <div className="mt-20 grid gap-12 lg:grid-cols-[.28fr_1fr] lg:gap-[6vw] print:mt-10 print:grid-cols-[.25fr_1fr] print:gap-8"><h2 className="font-[family-name:var(--mono)] text-[11px] tracking-[.12em] text-[#aa4b31] uppercase">04 / {c.navContact}</h2><div className="flex flex-wrap gap-7 border-t border-[#171b1a]/25 pt-6 text-[13px] underline underline-offset-4">{profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}{profile.github && <a href={profile.github}>{profile.github}</a>}{profile.linkedin && <a href={profile.linkedin}>{profile.linkedin}</a>}</div></div>}
  </div></main><SiteFooter lang={lang} /></>;
}

