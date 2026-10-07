import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, LockIcon } from "@/components/icons";
import { getProject, projects } from "@/data/projects";
import { copy, isLang, languages, t } from "@/lib/i18n";

const shell = "mx-auto w-[calc(100%-40px)] max-w-[1200px] sm:w-[calc(100%-72px)]";
const eyebrow = "type-label";
const chapterTitle = "type-card-title mt-4 text-[#17181c]";

export function generateStaticParams() { return languages.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: t(project.lead, isLang(lang) ? lang : "en"), alternates: { canonical: `/${lang}/projects/${slug}`, languages: { en: `/en/projects/${slug}`, th: `/th/projects/${slug}` } }, openGraph: { title: `${project.title} — Peerawat Nakinchat`, description: t(project.lead, isLang(lang) ? lang : "en"), images: project.image ? [project.image] : undefined } };
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: value, slug } = await params;
  const project = getProject(slug);
  if (!isLang(value) || !project) notFound();
  const lang = value;
  const c = copy[lang];
  return <><SiteHeader lang={lang} alternatePath={`/projects/${slug}`} /><main id="main" className="bg-[#f7f7f5]">
    <section className="pt-10 pb-20 sm:pt-16 sm:pb-28"><div className={shell}>
      <Link href={`/${lang}/projects`} className="ui-button ui-button-soft group"><ArrowLeftIcon className="transition-transform group-hover:-translate-x-1" /><span>{c.back}</span></Link>
      <div className="mt-14">
        <p className={`text-[#3157d5] ${eyebrow}`}>{project.category === "system" ? c.system : c.website} · CASE STUDY</p>
        <h1 className="type-page-title mt-5 max-w-[900px] text-[#17181c]">{project.title}</h1>
        <div className="mt-9 grid max-w-[1080px] gap-5 md:grid-cols-[minmax(260px,.78fr)_minmax(0,1.22fr)] md:gap-14 lg:mt-11 lg:gap-20">
          <p className="type-subhead max-w-[460px] text-balance font-medium text-[#3157d5]">{t(project.subtitle, lang)}</p>
          <p className="type-body max-w-[680px] text-pretty text-[#65686f]">{t(project.lead, lang)}</p>
        </div>
      </div>
      <div className="mt-14 sm:mt-16"><ProjectVisual project={project} lang={lang} large /></div>
      <dl className="mt-10 grid gap-8 text-[14px] sm:grid-cols-[.65fr_1.5fr_auto] sm:items-end sm:gap-12">
        <div><dt className={`text-[#898d98] ${eyebrow}`}>{c.type}</dt><dd className="mt-2 leading-[1.7] text-[#34363b]">{project.category === "system" ? c.system : c.website}</dd></div>
        <div><dt className={`text-[#898d98] ${eyebrow}`}>{c.technologies}</dt><dd className="mt-2 leading-[1.7] text-[#34363b]">{project.technology.length ? project.technology.join(" · ") : (lang === "en" ? "Private implementation" : "ไม่เปิดเผยรายละเอียดภายใน")}</dd></div>
        <div><dt className={`text-[#898d98] ${eyebrow}`}>{c.live}</dt><dd className="mt-3">{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary group/live"><ExternalLinkIcon className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" /><span>{c.visit}</span></a> : <span className="ui-button ui-button-muted" aria-disabled="true"><LockIcon /><span>{c.noPublic}</span></span>}</dd></div>
      </dl>
    </div></section>

    <section className="pb-28 sm:pb-40"><div className={`${shell} max-w-[1040px]`}>
      <div className="space-y-24 sm:space-y-32">
        <Reveal><section id="chapter-1" className="scroll-mt-28 grid gap-7 md:grid-cols-[220px_1fr] md:gap-16"><div><span className={`text-[#3157d5] ${eyebrow}`}>{c.context}</span><h2 className={chapterTitle}>{lang === "en" ? "Why this product needed to exist" : "เหตุผลที่ระบบนี้ต้องถูกสร้างขึ้น"}</h2></div><p className="type-lead text-[#34363b]">{t(project.context, lang)}</p></section></Reveal>
        <Reveal><section id="chapter-2" className="scroll-mt-28 grid gap-7 md:grid-cols-[220px_1fr] md:gap-16"><div><span className={`text-[#3157d5] ${eyebrow}`}>{c.scope}</span><h2 className={chapterTitle}>{c.scope}</h2></div><p className="type-body text-[#5f626a]">{t(project.role, lang)}</p></section></Reveal>
        <Reveal><section id="chapter-3" className="scroll-mt-28 grid gap-8 md:grid-cols-[220px_1fr] md:gap-16"><div><span className={`text-[#3157d5] ${eyebrow}`}>{c.features}</span><h2 className={chapterTitle}>{lang === "en" ? "What the product supports" : "งานที่ระบบรองรับ"}</h2></div><ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">{project.capabilities.map((item, index) => <li key={item.en} className="grid grid-cols-[30px_1fr] gap-3"><span className={`pt-1 text-[#9b9da2] ${eyebrow}`}>{String(index + 1).padStart(2, "0")}</span><span className="type-body text-[#3d4046]">{t(item, lang)}</span></li>)}</ul></section></Reveal>
      </div>
    </div></section>

    {(project.visual === "flow" || project.visual === "support") && <section className="pb-28 sm:pb-40"><div className={`${shell} max-w-[1040px] bg-[#17181c] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-14`}><p className={`text-[#91a7ff] ${eyebrow}`}>{c.architecture}</p><div className="mt-7 grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end lg:gap-20"><h2 className="type-section-title max-w-[680px]">{project.visual === "flow" ? (lang === "en" ? "The browser never talks to ERP directly." : "เบราว์เซอร์ไม่เชื่อมต่อ ERP โดยตรง") : (lang === "en" ? "Request flow stays separate from service logic." : "Request Flow แยกออกจาก Service Logic")}</h2><div className="type-label flex flex-wrap items-center gap-3 text-white/60">{(project.visual === "flow" ? ["Browser", "Next.js", "API proxy", "ERP"] : ["Interface", "Controller", "Service layer"]).map((node, index, nodes) => <span key={node} className="contents"><span>{node}</span>{index < nodes.length - 1 && <ArrowRightIcon className="size-3.5 text-[#91a7ff]" />}</span>)}</div></div></div></section>}

    <section className="pb-32 sm:pb-44"><div className={`${shell} max-w-[1040px]`}>
      <p className={`mb-20 text-[#3157d5] sm:mb-24 ${eyebrow}`}>{lang === "en" ? "BUILD NOTES" : "รายละเอียดการพัฒนา"}</p>
      <div className="space-y-24 sm:space-y-32">
        <Reveal><section id="chapter-4" className="scroll-mt-28 grid gap-7 md:grid-cols-[220px_1fr] md:gap-16"><div><span className={`text-[#3157d5] ${eyebrow}`}>{c.decisions}</span><h2 className={chapterTitle}>{c.decisions}</h2></div><div><div className="type-label flex flex-wrap gap-x-4 gap-y-2 text-[#85878d]">{project.technology.length ? project.technology.map((item) => <span key={item}>{item}</span>) : <span>{lang === "en" ? "Private / not documented" : "ไม่เปิดเผย / ไม่มีข้อมูลยืนยัน"}</span>}</div><p className="type-body mt-6 text-[#5f626a]">{t(project.technical, lang)}</p>{project.architecture && <div className="mt-12"><p className={`mb-7 text-[#3157d5] ${eyebrow}`}>{lang === "en" ? "SYSTEM LAYERS" : "ชั้นของระบบ"}</p><ol className="grid gap-x-10 gap-y-6 sm:grid-cols-2">{project.architecture.map((item, index) => <li key={item.en} className="type-small grid grid-cols-[30px_1fr] gap-3 text-[#62656c]"><span className={`pt-1 text-[#9b9da2] ${eyebrow}`}>{String(index + 1).padStart(2, "0")}</span><span>{t(item, lang)}</span></li>)}</ol></div>}</div></section></Reveal>
        <Reveal><section id="chapter-5" className="scroll-mt-28 grid gap-7 md:grid-cols-[220px_1fr] md:gap-16"><div><span className={`text-[#3157d5] ${eyebrow}`}>{c.approach}</span><h2 className={chapterTitle}>{c.approach}</h2></div><p className="type-lead text-[#34363b]">{t(project.approach, lang)}</p></section></Reveal>
        <Reveal><section id="chapter-6" className="scroll-mt-28 grid gap-7 md:grid-cols-[220px_1fr] md:gap-16"><div><span className={`text-[#3157d5] ${eyebrow}`}>{c.reflection}</span><h2 className={chapterTitle}>{c.reflection}</h2></div><blockquote className="type-quote text-[#3157d5]">“{t(project.reflection, lang)}”</blockquote></section></Reveal>
        <div className="pt-2"><span className={`text-[#9a9ca2] ${eyebrow}`}>{c.constraints}</span><p className="type-small mt-3 max-w-[700px] text-[#85888f]">{c.sourceNote} {c.privacy}</p></div>
      </div>
    </div></section>
  </main><SiteFooter lang={lang} /></>;
}


