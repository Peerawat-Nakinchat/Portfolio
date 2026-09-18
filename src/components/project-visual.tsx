import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

const frame = "relative isolate flex aspect-[1.35] w-full flex-col overflow-hidden p-[clamp(24px,3vw,48px)] sm:aspect-[1.58]";
const largeFrame = "relative isolate flex aspect-[1.13] w-full flex-col overflow-hidden p-[clamp(24px,5vw,72px)] sm:aspect-[1.9]";
const smallLabel = "font-[family-name:var(--mono)] text-[10px] leading-[1.5] tracking-[.09em] uppercase sm:text-[11px]";

export function ProjectVisual({ project, lang, large = false }: { project: Project; lang: Lang; large?: boolean }) {
  const base = large ? largeFrame : frame;

  if (project.image) return <div className={`${base} bg-[#a4a9a3] p-0`}>
    <Image src={project.image} alt={t(project.imageAlt!, lang)} fill sizes={large ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 60vw"} loading={large ? "eager" : "lazy"} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
    <div className="relative z-10 mt-auto flex items-center justify-between bg-[#171b1a] px-5 py-4 text-[#f2f0e9] sm:px-8"><span className={smallLabel}>{project.title}</span><span className={smallLabel}>LIVE WEBSITE ↗</span></div>
  </div>;

  if (project.visual === "pipeline") return <div className={`${base} justify-between bg-[#cbd3c7] text-[#18221e]`} role="img" aria-label="Conceptual recruitment workflow: candidate, interview, evaluation, offer, hire">
    <div className={`flex justify-between border-b border-[#18221e]/30 pb-4 ${smallLabel}`}><span>HOP CHAFE / RECRUITMENT</span><span>01 — 05</span></div>
    <div className="flex items-end justify-between gap-6 py-6"><p className="font-[family-name:var(--serif)] tracking-normal text-[clamp(43px,5.2vw,96px)] leading-[.95] italic">From first<br />conversation<br />to first day.</p><span className="hidden font-[family-name:var(--mono)] text-[11px] text-[#18221e]/55 md:block">A CONNECTED HIRING WORKFLOW<br />CONCEPTUAL SYSTEM MAP</span></div>
    <div className="grid grid-cols-5 gap-1 border-t border-[#18221e]/35 pt-4 sm:gap-4">{["Candidate", "Interview", "Evaluation", "Offer", "Hire"].map((step, index) => <div key={step} className="min-w-0"><span className={`${smallLabel} text-[#ab4d31]`}>0{index + 1}</span><div className="mt-2 h-[2px] bg-[#18221e]/45" /><span className="mt-3 block truncate text-[clamp(8px,.9vw,13px)] font-medium">{step}</span></div>)}</div>
  </div>;

  if (project.visual === "flow") return <div className={`${base} justify-between bg-[#d9c5ad] text-[#292a24]`} role="img" aria-label="Conceptual connection: browser to Next.js to server-side API proxy to ERP">
    <div className={`flex justify-between border-b border-[#292a24]/30 pb-4 ${smallLabel}`}><span>NICONICO / MEMBER</span><span>02 — 04</span></div>
    <div className="flex items-end justify-between gap-3 py-5"><p className="font-[family-name:var(--display)] text-[clamp(36px,4.5vw,84px)] font-medium leading-[.92] tracking-[-.075em]">A useful account.<br /><span className="font-[family-name:var(--serif)] tracking-normal font-normal italic text-[#a9482f]">A protected edge.</span></p><span className="hidden text-[clamp(70px,10vw,165px)] font-light leading-none text-[#292a24]/15 sm:block">↗</span></div>
    <div className="grid grid-cols-[repeat(7,minmax(0,1fr))] items-center border-t border-[#292a24]/35 pt-5 font-[family-name:var(--mono)] text-[clamp(8px,.9vw,13px)]"><span>Browser</span><span className="text-center text-[#a9482f]">→</span><span>Next.js</span><span className="text-center text-[#a9482f]">→</span><span>API proxy</span><span className="text-center text-[#a9482f]">→</span><span>ERP</span></div>
  </div>;

  if (project.visual === "career") return <div className={`${base} justify-between bg-[#e2ded3] text-[#202524]`} role="img" aria-label="NICONICO Career editorial project visual">
    <div className={`flex justify-between border-b border-[#202524]/30 pb-4 ${smallLabel}`}><span>NICONICO / CAREER</span><span>03 / PUBLIC PLATFORM</span></div>
    <div className="flex items-end justify-between gap-5"><p className="font-[family-name:var(--display)] text-[clamp(45px,7vw,120px)] font-medium leading-[.82] tracking-[-.09em]">The next<br /><span className="font-[family-name:var(--serif)] tracking-normal font-normal italic text-[#a9482f]">chapter.</span></p><span className="mb-1 text-[clamp(48px,6vw,100px)] font-light leading-none">↗</span></div>
    <div className={`border-t border-[#202524]/30 pt-4 ${smallLabel}`}>CAREER PLATFORM / VISIT THE LIVE PRODUCT</div>
  </div>;

  return <div className={`${base} justify-between bg-[#c7c9bd] text-[#1b2420]`} role="img" aria-label="Conceptual MVC and service layer diagram">
    <div className={`flex justify-between border-b border-[#1b2420]/30 pb-4 ${smallLabel}`}><span>MANGO CONSULTANT / INTERNAL SYSTEM</span><span>06 / SOFTWARE</span></div>
    <p className="font-[family-name:var(--serif)] tracking-normal text-[clamp(42px,6vw,112px)] leading-[.96] italic">Support needs<br />structure.</p>
    <div className="flex flex-wrap gap-2 border-t border-[#1b2420]/35 pt-4 font-[family-name:var(--mono)] text-[10px] uppercase sm:text-[12px]"><span>01 / Interface</span><span className="mx-2 text-[#a9482f]">→</span><span>02 / Controller</span><span className="mx-2 text-[#a9482f]">→</span><span>03 / Service layer</span></div>
  </div>;
}


