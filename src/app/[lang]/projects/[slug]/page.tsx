import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { getProject, projects } from "@/data/projects";
import { copy, isLang, languages, t } from "@/lib/i18n";

const shell = "mx-auto w-[calc(100%-48px)] max-w-[1480px] sm:w-[calc(100%-80px)]";
const eyebrow = "font-[family-name:var(--mono)] text-[10px] tracking-[.12em] uppercase sm:text-[11px]";

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
  const chapters = [c.context, c.scope, c.features, c.decisions, c.reflection];

  return <><SiteHeader lang={lang} alternatePath={`/projects/${slug}`} /><main id="main">
    <section className="bg-[#171b1a] text-[#f2f0e9]"><div className={`${shell} pt-8 pb-20 sm:pt-12 sm:pb-28`}>
      <Link href={`/${lang}/projects`} className={`inline-flex items-center gap-3 text-white/60 transition-colors hover:text-[#f36b43] ${eyebrow}`}><span className="text-xl">←</span>{c.back}</Link>
      <div className={`mt-20 flex items-center justify-between border-t border-white/25 pt-5 text-[#f36b43] ${eyebrow}`}><span>CASE STUDY / 0{number}—06</span><span>{project.category === "system" ? c.system : c.website}</span></div>
      <h1 className="mt-10 max-w-[1250px] font-[family-name:var(--display)] text-[clamp(62px,9.5vw,165px)] font-medium leading-[.86] tracking-[-.09em]">{project.title}<span className="text-[#f36b43]">.</span></h1>
      <div className="mt-12 grid gap-8 border-t border-white/25 pt-6 md:grid-cols-[.45fr_1fr] md:gap-14"><p className="font-[family-name:var(--serif)] tracking-normal text-[clamp(28px,3.1vw,48px)] italic leading-[1.1] text-[#f36b43]">{t(project.subtitle, lang)}</p><p className="max-w-[740px] text-[clamp(17px,1.8vw,26px)] leading-[1.45] text-white/70">{t(project.lead, lang)}</p></div>
    </div></section>

    <section className="bg-[#f2f0e9]"><div className={`${shell} pt-8 sm:pt-12`}><ProjectVisual project={project} lang={lang} large /><div className="grid gap-7 border-b border-[#171b1a]/25 py-7 md:grid-cols-3 md:gap-10"><div><span className={`text-[#aa4b31] ${eyebrow}`}>{c.type}</span><p className="mt-2 text-[15px]">{project.category === "system" ? c.system : c.website}</p></div><div><span className={`text-[#aa4b31] ${eyebrow}`}>{c.technologies}</span><p className="mt-2 text-[15px]">{project.technology.length ? project.technology.join(" / ") : "—"}</p></div><div><span className={`text-[#aa4b31] ${eyebrow}`}>{c.live}</span><p className="mt-2 text-[15px]">{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="border-b border-[#171b1a] pb-0.5 hover:text-[#aa4b31]">{c.visit} ↗</a> : c.noPublic}</p></div></div></div></section>

    <section className="bg-[#f2f0e9] py-20 sm:py-28"><div className={`${shell} grid gap-12 lg:grid-cols-[.3fr_1fr] lg:gap-[6vw]`}><aside className="self-start lg:sticky lg:top-8"><p className={`mb-6 text-[#aa4b31] ${eyebrow}`}>IN THIS PROJECT</p><nav aria-label="Case study sections" className="hidden border-t border-[#171b1a]/25 lg:block">{chapters.map((chapter, index) => <a key={chapter} href={`#chapter-${index + 1}`} className="flex items-center gap-4 border-b border-[#171b1a]/25 py-3 text-[13px] text-[#677069] transition-colors hover:text-[#aa4b31]"><span className={`text-[#aa4b31] ${eyebrow}`}>0{index + 1}</span>{chapter}</a>)}</nav></aside><div>
      <Reveal><section id="chapter-1" className="border-t border-[#171b1a]/25 pt-7 pb-20"><span className={`text-[#aa4b31] ${eyebrow}`}>01 / {c.context}</span><h2 className="mt-5 font-[family-name:var(--display)] text-[clamp(44px,5vw,86px)] font-medium leading-[.95] tracking-[-.075em]">{c.context}<span className="text-[#f36b43]">.</span></h2><p className="mt-8 max-w-[760px] font-[family-name:var(--serif)] tracking-normal text-[clamp(24px,2.65vw,40px)] leading-[1.25]">{t(project.context, lang)}</p></section></Reveal>
      <Reveal><section id="chapter-2" className="border-t border-[#171b1a]/25 pt-7 pb-20"><span className={`text-[#aa4b31] ${eyebrow}`}>02 / {c.scope}</span><h2 className="mt-5 font-[family-name:var(--display)] text-[clamp(44px,5vw,86px)] font-medium leading-[.95] tracking-[-.075em]">{c.scope}<span className="text-[#f36b43]">.</span></h2><p className="mt-8 max-w-[720px] text-[17px] leading-[1.7] text-[#4f5651] sm:text-[21px]">{t(project.role, lang)}</p></section></Reveal>
      <Reveal><section id="chapter-3" className="border-t border-[#171b1a]/25 pt-7 pb-20"><span className={`text-[#aa4b31] ${eyebrow}`}>03 / {c.features}</span><h2 className="mt-5 font-[family-name:var(--display)] text-[clamp(44px,5vw,86px)] font-medium leading-[.95] tracking-[-.075em]">{c.features}<span className="text-[#f36b43]">.</span></h2><ul className="mt-10 border-t border-[#171b1a]/25">{project.capabilities.map((item, index) => <li key={item.en} className="grid grid-cols-[55px_1fr] gap-4 border-b border-[#171b1a]/25 py-5 sm:grid-cols-[80px_1fr]"><span className={`pt-2 text-[#aa4b31] ${eyebrow}`}>0{index + 1}</span><span className="font-[family-name:var(--serif)] tracking-normal text-[clamp(25px,2.5vw,39px)] leading-[1.12]">{t(item, lang)}</span></li>)}</ul></section></Reveal>
    </div></div></section>

    {(project.visual === "flow" || project.visual === "support") && <section className="bg-[#26342d] py-16 text-[#f2f0e9] sm:py-24"><div className={shell}><p className={`text-[#f36b43] ${eyebrow}`}>{c.architecture} / VERIFIED CONCEPT</p><h2 className="mt-8 max-w-[1000px] font-[family-name:var(--serif)] tracking-normal text-[clamp(35px,4.5vw,70px)] italic leading-[1.05]">{project.visual === "flow" ? (lang === "en" ? "Keep the connection on the server." : "เก็บการเชื่อมต่อไว้ที่เซิร์ฟเวอร์") : (lang === "en" ? "Separate flow from service logic." : "แยกขั้นตอนการทำงานจากตรรกะบริการ")}</h2><div className="mt-14 grid grid-cols-3 gap-2 border-y border-white/25 py-5 sm:gap-6 md:grid-cols-4">{(project.visual === "flow" ? ["Browser", "Next.js", "API proxy", "ERP"] : ["Interface", "Controller", "Service layer"]).map((node, index) => <div key={node} className="border-l border-[#f36b43] pl-3 sm:pl-5"><span className={`text-[#f36b43] ${eyebrow}`}>0{index + 1}</span><strong className="mt-6 block font-[family-name:var(--display)] text-[clamp(16px,2.2vw,34px)] font-medium tracking-[-.04em]">{node}</strong></div>)}</div></div></section>}

    <section className="bg-[#f2f0e9] py-20 sm:py-28"><div className={`${shell} grid gap-12 lg:grid-cols-[.3fr_1fr] lg:gap-[6vw]`}><p className={`text-[#aa4b31] ${eyebrow}`}>TECHNICAL NOTES / 04—05</p><div><Reveal><section id="chapter-4" className="border-t border-[#171b1a]/25 pt-7 pb-20"><span className={`text-[#aa4b31] ${eyebrow}`}>04 / {c.decisions}</span><h2 className="mt-5 font-[family-name:var(--display)] text-[clamp(44px,5vw,86px)] font-medium leading-[.95] tracking-[-.075em]">{c.decisions}<span className="text-[#f36b43]">.</span></h2><p className="mt-8 max-w-[720px] text-[17px] leading-[1.7] text-[#4f5651] sm:text-[21px]">{t(project.technical, lang)}</p></section></Reveal><Reveal><section id="chapter-5" className="border-t border-[#171b1a]/25 pt-7 pb-20"><span className={`text-[#aa4b31] ${eyebrow}`}>05 / {c.reflection}</span><h2 className="mt-5 font-[family-name:var(--display)] text-[clamp(44px,5vw,86px)] font-medium leading-[.95] tracking-[-.075em]">{c.reflection}<span className="text-[#f36b43]">.</span></h2><blockquote className="mt-8 max-w-[800px] border-l-2 border-[#f36b43] pl-6 font-[family-name:var(--serif)] tracking-normal text-[clamp(27px,3.3vw,50px)] italic leading-[1.18]">{t(project.reflection, lang)}</blockquote></section></Reveal><div className="border-t border-[#171b1a]/25 pt-6"><span className={`text-[#aa4b31] ${eyebrow}`}>{c.constraints}</span><p className="mt-3 max-w-[650px] text-[13px] leading-[1.65] text-[#677069]">{c.sourceNote} {c.privacy}</p></div></div></div></section>

    <Link href={`/${lang}/projects/${next.slug}`} className="group block bg-[#d8c5b2] px-6 py-14 transition-colors hover:bg-[#d3b9a1] sm:px-10 sm:py-20"><span className={`${shell} block font-[family-name:var(--mono)] text-[11px] uppercase tracking-[.12em] text-[#aa4b31]`}>{c.next} / 0{number % projects.length + 1}</span><strong className={`${shell} mt-8 flex items-end justify-between gap-5 font-[family-name:var(--display)] text-[clamp(46px,7vw,120px)] font-medium leading-[.9] tracking-[-.085em]`}><span>{next.title}</span><span className="text-[#aa4b31] transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">↗</span></strong></Link>
  </main><SiteFooter lang={lang} /></>;
}


