import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { getProject, projects } from "@/data/projects";
import { copy, isLang, languages, t } from "@/lib/i18n";

const shell = "mx-auto w-[calc(100%-40px)] max-w-[1200px] sm:w-[calc(100%-72px)]";
const eyebrow = "font-[family-name:var(--mono)] text-[10px] tracking-[.1em] uppercase";
const chapterTitle = "mt-4 font-[family-name:var(--display)] text-[clamp(30px,3.5vw,46px)] font-semibold leading-[1.08] text-[#17181c]";

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
  const number = projects.indexOf(project) + 1;
  const next = projects[number % projects.length];
  const chapters = [c.context, c.scope, c.features, c.decisions, c.approach, c.reflection];

  return <><SiteHeader lang={lang} alternatePath={`/projects/${slug}`} /><main id="main" className="bg-[#f7f7f5]">
    <section className="pt-10 pb-20 sm:pt-16 sm:pb-28"><div className={shell}>
      <Link href={`/${lang}/projects`} className={`group inline-flex items-center gap-2 text-[#7a7d84] transition-colors hover:text-[#3157d5] ${eyebrow}`}><span className="text-[15px] transition-transform group-hover:-translate-x-1">←</span>{c.back}</Link>
      <div className="mt-14 grid gap-9 lg:grid-cols-[1fr_380px] lg:items-end lg:gap-20">
        <div><p className={`text-[#3157d5] ${eyebrow}`}>{project.category === "system" ? c.system : c.website} · CASE STUDY</p><h1 className="mt-5 max-w-[800px] font-[family-name:var(--display)] text-[clamp(42px,5.8vw,76px)] font-semibold leading-[1] tracking-[-.045em] text-[#17181c]">{project.title}</h1></div>
        <div><p className="text-[17px] font-medium leading-[1.5] text-[#3157d5] sm:text-[20px]">{t(project.subtitle, lang)}</p><p className="mt-4 text-[14px] leading-[1.85] text-[#65686f] sm:text-[15px]">{t(project.lead, lang)}</p></div>
      </div>
      <div className="mt-14 sm:mt-20"><ProjectVisual project={project} lang={lang} large /></div>
      <dl className="mt-9 grid gap-7 text-[13px] sm:grid-cols-3 sm:gap-12">
        <div><dt className={`text-[#97999f] ${eyebrow}`}>{c.type}</dt><dd className="mt-2 leading-[1.7] text-[#34363b]">{project.category === "system" ? c.system : c.website}</dd></div>
        <div><dt className={`text-[#97999f] ${eyebrow}`}>{c.technologies}</dt><dd className="mt-2 leading-[1.7] text-[#34363b]">{project.technology.length ? project.technology.join(" · ") : (lang === "en" ? "Private implementation" : "ไม่เปิดเผยรายละเอียดภายใน")}</dd></div>
        <div><dt className={`text-[#97999f] ${eyebrow}`}>{c.live}</dt><dd className="mt-2">{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/live inline-flex items-center gap-2 font-semibold text-[#17181c] transition-colors hover:text-[#3157d5]"><span>{c.visit}</span><span className="transition-transform group-hover/live:translate-x-1 group-hover/live:-translate-y-1">↗</span></a> : <span className="text-[#777a81]">{c.noPublic}</span>}</dd></div>
      </dl>
    </div></section>

    <section className="pb-28 sm:pb-40"><div className={`${shell} grid gap-16 lg:grid-cols-[190px_1fr] lg:gap-20`}>
      <aside className="self-start lg:sticky lg:top-28"><p className={`mb-6 text-[#3157d5] ${eyebrow}`}>{lang === "en" ? "CONTENTS" : "เนื้อหา"}</p><nav aria-label="Case study sections" className="hidden space-y-3 lg:block">{chapters.map((chapter, index) => <a key={chapter} href={`#chapter-${index + 1}`} className="block text-[12px] text-[#92949a] transition-colors hover:text-[#17181c]">{chapter}</a>)}</nav></aside>
      <div className="space-y-24 sm:space-y-32">
        <Reveal><section id="chapter-1"><span className={`text-[#3157d5] ${eyebrow}`}>{c.context}</span><h2 className={chapterTitle}>{lang === "en" ? "Why this product needed to exist" : "เหตุผลที่ระบบนี้ต้องถูกสร้างขึ้น"}</h2><p className="mt-7 max-w-[780px] text-[clamp(18px,1.8vw,24px)] leading-[1.65] text-[#34363b]">{t(project.context, lang)}</p></section></Reveal>
        <Reveal><section id="chapter-2"><span className={`text-[#3157d5] ${eyebrow}`}>{c.scope}</span><h2 className={chapterTitle}>{c.scope}</h2><p className="mt-7 max-w-[780px] text-[16px] leading-[1.85] text-[#5f626a]">{t(project.role, lang)}</p></section></Reveal>
        <Reveal><section id="chapter-3"><span className={`text-[#3157d5] ${eyebrow}`}>{c.features}</span><h2 className={chapterTitle}>{lang === "en" ? "The work the product supports" : "งานที่ระบบรองรับ"}</h2><ul className="mt-9 grid gap-x-12 gap-y-7 md:grid-cols-2">{project.capabilities.map((item, index) => <li key={item.en} className="grid grid-cols-[28px_1fr] gap-3"><span className={`pt-1 text-[#9b9da2] ${eyebrow}`}>{String(index + 1).padStart(2, "0")}</span><span className="text-[15px] leading-[1.7] text-[#3d4046]">{t(item, lang)}</span></li>)}</ul></section></Reveal>
      </div>
    </div></section>

    {(project.visual === "flow" || project.visual === "support") && <section className="pb-28 sm:pb-40"><div className={shell}><div className="bg-[#17181c] px-6 py-14 text-white sm:px-10 sm:py-20 lg:px-16"><p className={`text-[#91a7ff] ${eyebrow}`}>{c.architecture}</p><div className="mt-7 grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end lg:gap-20"><h2 className="max-w-[680px] font-[family-name:var(--display)] text-[clamp(30px,4vw,54px)] font-semibold leading-[1.08]">{project.visual === "flow" ? (lang === "en" ? "The browser never talks to ERP directly." : "เบราว์เซอร์ไม่เชื่อมต่อ ERP โดยตรง") : (lang === "en" ? "Request flow stays separate from service logic." : "Request Flow แยกออกจาก Service Logic")}</h2><div className="flex flex-wrap items-center gap-3 font-[family-name:var(--mono)] text-[9px] text-white/55">{(project.visual === "flow" ? ["Browser", "Next.js", "API proxy", "ERP"] : ["Interface", "Controller", "Service layer"]).map((node, index, nodes) => <span key={node} className="contents"><span>{node}</span>{index < nodes.length - 1 && <span className="text-[#91a7ff]">→</span>}</span>)}</div></div></div></div></section>}

    <section className="pb-28 sm:pb-40"><div className={`${shell} grid gap-16 lg:grid-cols-[190px_1fr] lg:gap-20`}>
      <p className={`text-[#3157d5] ${eyebrow}`}>{lang === "en" ? "BUILD NOTES" : "รายละเอียดการพัฒนา"}</p>
      <div className="space-y-24 sm:space-y-32">
        <Reveal><section id="chapter-4"><span className={`text-[#3157d5] ${eyebrow}`}>{c.decisions}</span><h2 className={chapterTitle}>{c.decisions}</h2><div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-[family-name:var(--mono)] text-[9px] uppercase tracking-[.06em] text-[#85878d]">{project.technology.length ? project.technology.map((item) => <span key={item}>{item}</span>) : <span>{lang === "en" ? "Private / not documented" : "ไม่เปิดเผย / ไม่มีข้อมูลยืนยัน"}</span>}</div><p className="mt-7 max-w-[780px] text-[16px] leading-[1.85] text-[#5f626a]">{t(project.technical, lang)}</p>{project.architecture && <div className="mt-11"><p className={`mb-6 text-[#3157d5] ${eyebrow}`}>{lang === "en" ? "SYSTEM LAYERS" : "ชั้นของระบบ"}</p><ol className="grid gap-x-10 gap-y-5 md:grid-cols-2">{project.architecture.map((item, index) => <li key={item.en} className="grid grid-cols-[28px_1fr] gap-3 text-[14px] leading-[1.75] text-[#62656c]"><span className={`pt-1 text-[#9b9da2] ${eyebrow}`}>{String(index + 1).padStart(2, "0")}</span><span>{t(item, lang)}</span></li>)}</ol></div>}</section></Reveal>
        <Reveal><section id="chapter-5"><span className={`text-[#3157d5] ${eyebrow}`}>{c.approach}</span><h2 className={chapterTitle}>{c.approach}</h2><p className="mt-7 max-w-[780px] text-[clamp(18px,1.8vw,24px)] leading-[1.65] text-[#34363b]">{t(project.approach, lang)}</p></section></Reveal>
        <Reveal><section id="chapter-6"><span className={`text-[#3157d5] ${eyebrow}`}>{c.reflection}</span><h2 className={chapterTitle}>{c.reflection}</h2><blockquote className="mt-7 max-w-[790px] font-[family-name:var(--display)] text-[clamp(22px,2.6vw,34px)] font-medium leading-[1.45] text-[#3157d5]">“{t(project.reflection, lang)}”</blockquote></section></Reveal>
        <div><span className={`text-[#9a9ca2] ${eyebrow}`}>{c.constraints}</span><p className="mt-3 max-w-[680px] text-[12px] leading-[1.75] text-[#85888f]">{c.sourceNote} {c.privacy}</p></div>
      </div>
    </div></section>

    <Link href={`/${lang}/projects/${next.slug}`} className="group block bg-[#eceef4] py-16 text-[#17181c] transition-colors hover:bg-[#e5e8f1] sm:py-20"><span className={`${shell} block text-[#7e8188] ${eyebrow}`}>{c.next}</span><strong className={`${shell} mt-5 flex items-end justify-between gap-6 font-[family-name:var(--display)] text-[clamp(34px,4.5vw,58px)] font-semibold leading-[1] tracking-[-.04em]`}><span>{next.title}</span><span className="text-[#3157d5] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">↗</span></strong></Link>
  </main><SiteFooter lang={lang} /></>;
}


