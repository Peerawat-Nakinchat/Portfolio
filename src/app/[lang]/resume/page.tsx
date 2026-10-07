import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PrintButton } from "@/components/print-button";
import { experience, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { copy, isLang, t } from "@/lib/i18n";

const shell = "mx-auto w-[calc(100%-40px)] max-w-[1040px] sm:w-[calc(100%-72px)]";
const label = "font-[family-name:var(--mono)] text-[10px] tracking-[.12em] uppercase";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "th" ? "เรซูเม่" : "Resume", alternates: { canonical: `/${lang}/resume`, languages: { en: "/en/resume", th: "/th/resume" } } };
}

export default async function ResumePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: value } = await params;
  if (!isLang(value)) notFound();
  const lang = value;
  const c = copy[lang];

  return <><SiteHeader lang={lang} alternatePath="/resume" /><main id="main" className="bg-[#f7f7f5] print:bg-white">
    <div className={`${shell} pt-16 pb-28 sm:pt-24 sm:pb-36 print:w-full print:max-w-none print:p-0`}>
      <header>
        <div className="flex flex-wrap items-center justify-between gap-4"><p className={`text-[#3157d5] ${label}`}>CURRICULUM VITAE / {new Date().getFullYear()}</p><p className={`text-[#8b8e95] ${label}`}>{c.role}</p></div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-20 print:grid-cols-[1fr_280px]">
          <h1 className="font-[family-name:var(--display)] text-[clamp(46px,6vw,78px)] font-semibold leading-[.92] tracking-[-.05em] text-[#17181c] print:text-[72px]">Peerawat<br /><span className="text-[#3157d5]">Nakinchat</span></h1>
          <div><p className="text-[16px] leading-[1.7] text-[#45484f] print:text-[15px]">{c.resumeIntro}</p><div className="mt-7 flex flex-wrap items-center gap-6 text-[12px] font-semibold print:hidden"><PrintButton label={c.print} />{profile.resumePdf && <a href={profile.resumePdf} download className="group inline-flex items-center gap-2 text-[#686b72] transition-colors hover:text-[#3157d5]"><span>{c.downloadPdf}</span><span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a>}</div></div>
        </div>
      </header>

      <section className="mt-24 grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16 print:mt-16 print:grid-cols-[140px_1fr] print:gap-8">
        <h2 className={`text-[#3157d5] ${label}`}>{c.experience}</h2>
        <div className="space-y-14">{experience.map((item) => <article key={item.company} className="grid gap-4 sm:grid-cols-[175px_1fr] sm:gap-8 print:grid-cols-[130px_1fr] print:gap-5"><span className={`text-[#898c93] ${label}`}>{t(item.dates, lang)}</span><div><h3 className="font-[family-name:var(--display)] text-[clamp(25px,3vw,36px)] font-semibold leading-[1.05] text-[#17181c] print:text-[26px]">{item.company}</h3><p className="mt-2 text-[14px] font-medium text-[#3157d5]">{t(item.role, lang)}</p><p className="mt-4 max-w-[650px] text-[14px] leading-[1.75] text-[#62666f] print:text-[11px]">{t(item.description, lang)}</p></div></article>)}</div>
      </section>

      <section className="mt-24 grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16 print:mt-16 print:grid-cols-[140px_1fr] print:gap-8">
        <h2 className={`text-[#3157d5] ${label}`}>{c.selected}</h2>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">{projects.slice(0, 4).map((project) => <article key={project.slug}><span className={`text-[#999ca2] ${label}`}>{project.category === "system" ? c.system : c.website}</span><h3 className="mt-3 font-[family-name:var(--display)] text-[24px] font-semibold leading-[1.1] text-[#17181c] print:text-[20px]">{project.title}</h3><p className="mt-3 text-[13px] leading-[1.65] text-[#6c7078] print:text-[10px]">{t(project.lead, lang)}</p></article>)}</div>
      </section>

      <section className="mt-24 grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16 print:mt-16 print:grid-cols-[140px_1fr] print:gap-8">
        <h2 className={`text-[#3157d5] ${label}`}>{c.capabilities}</h2>
        <div className="grid gap-9 sm:grid-cols-3">{[{ title: "Frontend", value: "React · Next.js · TypeScript" }, { title: "Integration", value: "ERP · API proxy · State management" }, { title: "Backend", value: "MVC · Clean Architecture · Service layer" }].map((item) => <div key={item.title}><h3 className="font-[family-name:var(--display)] text-[20px] font-semibold text-[#17181c]">{item.title}</h3><p className="mt-2 text-[12px] leading-[1.7] text-[#777a82]">{item.value}</p></div>)}</div>
      </section>

      {(profile.email || profile.github || profile.linkedin) && <section className="mt-24 grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16 print:mt-16 print:grid-cols-[140px_1fr] print:gap-8"><h2 className={`text-[#3157d5] ${label}`}>{c.navContact}</h2><div className="flex flex-wrap gap-x-7 gap-y-3 text-[13px] [&_a]:font-medium [&_a]:text-[#555961] [&_a]:transition-colors [&_a:hover]:text-[#3157d5]">{profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}{profile.github && <a href={profile.github}>GitHub ↗</a>}{profile.linkedin && <a href={profile.linkedin}>LinkedIn ↗</a>}</div></section>}
    </div>
  </main><SiteFooter lang={lang} /></>;
}

