import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { ArrowRightIcon, BookOpenIcon, ExternalLinkIcon, LockIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import type { Lang } from "@/lib/i18n";
import { copy, t } from "@/lib/i18n";

const label = "type-label";

export function ProjectIndex({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return <div className="space-y-16 sm:space-y-20 lg:space-y-24">
    {projects.map((project, index) => <article key={project.slug} className="group grid min-w-0 gap-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,.85fr)] lg:items-center lg:gap-12">
      <Link href={`/${lang}/projects/${project.slug}`} aria-label={`${c.viewCase}: ${project.title}`} className="block overflow-hidden bg-[#e9e9e4] transition-[transform,background-color] duration-500 ease-out hover:-translate-y-1 hover:bg-[#e3e4df] focus-visible:-translate-y-1 focus-visible:outline-offset-[-3px] motion-reduce:hover:translate-y-0">
        <ProjectVisual project={project} lang={lang} />
      </Link>
      <div className="lg:py-5">
        <div className={`flex items-center justify-between gap-4 text-[#878a92] ${label}`}><span>0{index + 1}</span><span>{project.category === "system" ? c.system : c.website}</span></div>
        <h2 className="type-card-title mt-5 text-[#17181c]"><Link href={`/${lang}/projects/${project.slug}`} className="transition-colors duration-200 hover:text-[#3157d5]">{project.title}</Link></h2>
        <p className="mt-3 text-[16px] font-medium leading-[1.6] text-[#3157d5]">{t(project.subtitle, lang)}</p>
        <p className="type-body mt-5 max-w-[560px] text-[#646871]">{t(project.lead, lang)}</p>
        <div className="type-label mt-6 flex flex-wrap gap-x-3 gap-y-1 text-[#92959c]">{project.technology.length ? project.technology.slice(0, 5).map((item) => <span key={item}>{item}</span>) : <span>{lang === "en" ? "Public website" : "เว็บไซต์สาธารณะ"}</span>}</div>
        <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-[14px] font-semibold">
          <Link href={`/${lang}/projects/${project.slug}`} className="ui-button ui-button-dark group/case"><BookOpenIcon /><span>{c.viewCase}</span><ArrowRightIcon className="transition-transform group-hover/case:translate-x-1" /></Link>
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ui-button ui-button-secondary group/live"><ExternalLinkIcon className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" /><span>{c.visit}</span></a> : <span className="ui-button ui-button-muted" aria-disabled="true"><LockIcon /><span>{c.noPublic}</span></span>}
        </div>
      </div>
    </article>)}
  </div>;
}
