"use client";

import { useState } from "react";
import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/data/projects";
import type { Lang } from "@/lib/i18n";
import { copy, t } from "@/lib/i18n";

export function ProjectIndex({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(0);
  const c = copy[lang];
  return <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-[6vw]">
    <div className="order-2 border-t border-[#171b1a]/30 lg:order-1">{projects.map((project, index) => <Link key={project.slug} href={`/${lang}/projects/${project.slug}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} className={`group grid grid-cols-[50px_1fr_auto] items-baseline gap-3 border-b border-[#171b1a]/25 py-[clamp(24px,2.8vw,44px)] transition-colors hover:text-[#aa4b31] sm:grid-cols-[70px_1fr_auto] ${active === index ? "text-[#aa4b31]" : ""}`}><span className="font-[family-name:var(--mono)] text-[11px]">0{index + 1}</span><span><strong className="block font-[family-name:var(--display)] text-[clamp(26px,3vw,48px)] font-medium leading-[1.03] tracking-[-.06em]">{project.title}</strong><small className="mt-2 block font-[family-name:var(--mono)] text-[10px] uppercase tracking-[.07em] text-[#6a716b]">{t(project.subtitle, lang)}</small></span><span className="text-[23px] font-light transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></Link>)}</div>
    <aside className="order-1 self-start lg:sticky lg:top-8 lg:order-2"><div className="group overflow-hidden"><ProjectVisual project={projects[active]} lang={lang} /></div><div className="mt-5 grid grid-cols-[70px_1fr] gap-4 border-t border-[#171b1a]/25 pt-4"><span className="font-[family-name:var(--mono)] text-[11px] text-[#aa4b31]">0{active + 1} / 06</span><div><h2 className="font-[family-name:var(--serif)] tracking-normal text-[clamp(25px,2.8vw,42px)] italic leading-[1.1]">{projects[active].title}</h2><p className="mt-3 max-w-[500px] text-[14px] leading-[1.65] text-[#626b63]">{t(projects[active].lead, lang)}</p><Link href={`/${lang}/projects/${projects[active].slug}`} className="mt-6 inline-flex items-center gap-3 border-b border-[#171b1a] pb-1 text-[13px] font-medium hover:text-[#aa4b31]">{c.viewCase} <span>↗</span></Link></div></div></aside>
  </div>;
}

