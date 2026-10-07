import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/data/projects";
import type { Lang } from "@/lib/i18n";
import { copy, t } from "@/lib/i18n";

const label = "font-[family-name:var(--mono)] text-[10px] tracking-[.1em] uppercase";

export function ProjectIndex({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12 lg:gap-y-24">
    {projects.map((project, index) => <article key={project.slug} className="group min-w-0">
      <Link href={`/${lang}/projects/${project.slug}`} aria-label={`${c.viewCase}: ${project.title}`} className="block overflow-hidden bg-[#e9e9e4] transition-[transform,background-color] duration-500 ease-out hover:-translate-y-1 hover:bg-[#e3e4df] focus-visible:-translate-y-1 focus-visible:outline-offset-[-3px] motion-reduce:hover:translate-y-0">
        <ProjectVisual project={project} lang={lang} />
      </Link>
      <div className="pt-6">
        <div className={`flex items-center justify-between gap-4 text-[#878a92] ${label}`}><span>0{index + 1}</span><span>{project.category === "system" ? c.system : c.website}</span></div>
        <h2 className="mt-4 font-[family-name:var(--display)] text-[clamp(26px,2.5vw,38px)] font-semibold leading-[1.08] text-[#17181c]"><Link href={`/${lang}/projects/${project.slug}`} className="transition-colors duration-200 hover:text-[#3157d5]">{project.title}</Link></h2>
        <p className="mt-2 text-[14px] font-medium text-[#3157d5]">{t(project.subtitle, lang)}</p>
        <p className="mt-4 max-w-[590px] text-[14px] leading-[1.75] text-[#646871] sm:text-[15px]">{t(project.lead, lang)}</p>
        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-[family-name:var(--mono)] text-[9px] uppercase tracking-[.06em] text-[#92959c]">{project.technology.length ? project.technology.slice(0, 5).map((item) => <span key={item}>{item}</span>) : <span>{lang === "en" ? "Public website" : "เว็บไซต์สาธารณะ"}</span>}</div>
        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] font-semibold">
          <Link href={`/${lang}/projects/${project.slug}`} className="group/case inline-flex items-center gap-2 text-[#17181c] transition-colors hover:text-[#3157d5]"><span>{c.viewCase}</span><span className="transition-transform group-hover/case:translate-x-1">→</span></Link>
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/live inline-flex items-center gap-2 text-[#6d7078] transition-colors hover:text-[#3157d5]"><span>{c.visit}</span><span className="transition-transform group-hover/live:translate-x-1 group-hover/live:-translate-y-1">↗</span></a> : <span className="font-normal text-[#a0a2a8]">{c.noPublic}</span>}
        </div>
      </div>
    </article>)}
  </div>;
}
