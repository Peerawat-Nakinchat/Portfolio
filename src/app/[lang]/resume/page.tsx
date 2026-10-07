import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PrintButton } from "@/components/print-button";
import { DownloadIcon, FacebookIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { experience, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { copy, isLang, t } from "@/lib/i18n";

const shell = "mx-auto w-[calc(100%-40px)] max-w-[1040px] sm:w-[calc(100%-72px)]";
const label = "type-label";

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
          <h1 className="type-display text-[#17181c] print:text-[64px]">Peerawat<br /><span className="text-[#3157d5]">Nakinchat</span></h1>
          <div><p className="type-lead text-[#45484f] print:text-[15px]">{c.resumeIntro}</p><div className="mt-7 flex flex-wrap items-center gap-3 text-[14px] font-semibold print:hidden"><PrintButton label={c.print} />{profile.resumePdf && <a href={profile.resumePdf} download className="ui-button ui-button-secondary"><DownloadIcon /><span>{c.downloadPdf}</span></a>}</div></div>
        </div>
      </header>

      <section className="mt-24 grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16 print:mt-16 print:grid-cols-[140px_1fr] print:gap-8">
        <h2 className="type-side-heading text-[#3157d5]">{c.experience}</h2>
        <div className="space-y-14">{experience.map((item) => <article key={item.company} className="grid gap-4 sm:grid-cols-[190px_1fr] sm:gap-8 print:grid-cols-[130px_1fr] print:gap-5"><span className={`text-[#898c93] sm:whitespace-nowrap print:whitespace-normal ${label}`}>{t(item.dates, lang)}</span><div><h3 className="type-card-title text-[#17181c] print:text-[26px]">{item.company}</h3><p className="mt-2 text-[15px] font-medium leading-[1.6] text-[#3157d5]">{t(item.role, lang)}</p><p className="type-body mt-4 max-w-[650px] text-[#62666f] print:text-[11px]">{t(item.description, lang)}</p></div></article>)}</div>
      </section>

      <section className="mt-24 grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16 print:mt-16 print:grid-cols-[140px_1fr] print:gap-8">
        <h2 className="type-side-heading text-[#3157d5]">{c.selected}</h2>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">{projects.slice(0, 4).map((project) => <article key={project.slug}><span className={`text-[#999ca2] ${label}`}>{project.category === "system" ? c.system : c.website}</span><h3 className="mt-3 font-[family-name:var(--display)] text-[22px] font-semibold leading-[1.2] tracking-[-.015em] text-[#17181c] print:text-[20px]">{project.title}</h3><p className="type-small mt-3 text-[#6c7078] print:text-[10px]">{t(project.lead, lang)}</p></article>)}</div>
      </section>

      <section className="mt-24 grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16 print:mt-16 print:grid-cols-[140px_1fr] print:gap-8">
        <h2 className="type-side-heading text-[#3157d5]">{c.capabilities}</h2>
        <div className="grid gap-9 sm:grid-cols-3">{[{ title: "Frontend", value: "React · Next.js · TypeScript" }, { title: "Integration", value: "ERP · API proxy · State management" }, { title: "Backend", value: "MVC · Clean Architecture · Service layer" }].map((item) => <div key={item.title}><h3 className="type-subhead font-semibold text-[#17181c]">{item.title}</h3><p className="type-small mt-2 text-[#777a82]">{item.value}</p></div>)}</div>
      </section>

      {(profile.email || profile.facebook || profile.github || profile.linkedin) && <section className="mt-24 grid gap-12 lg:grid-cols-[180px_1fr] lg:gap-16 print:mt-16 print:grid-cols-[140px_1fr] print:gap-8"><h2 className="type-side-heading text-[#3157d5]">{c.navContact}</h2><div className="flex flex-wrap gap-3 print:gap-x-7 print:gap-y-2">{profile.email && <a className="ui-button ui-button-secondary print:min-h-0 print:border-0 print:bg-transparent print:p-0" href={`mailto:${profile.email}`}><MailIcon />{profile.email}</a>}{profile.facebook && <a className="ui-button ui-button-secondary print:min-h-0 print:border-0 print:bg-transparent print:p-0" href={profile.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon />Facebook</a>}{profile.github && <a className="ui-button ui-button-secondary print:min-h-0 print:border-0 print:bg-transparent print:p-0" href={profile.github} target="_blank" rel="noopener noreferrer"><GithubIcon />GitHub</a>}{profile.linkedin && <a className="ui-button ui-button-secondary print:min-h-0 print:border-0 print:bg-transparent print:p-0" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon />LinkedIn</a>}</div></section>}
    </div>
  </main><SiteFooter lang={lang} /></>;
}

