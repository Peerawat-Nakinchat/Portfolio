import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { copy } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { ArrowRightIcon, ArrowUpIcon, ExternalLinkIcon, FacebookIcon, FileTextIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export function SiteFooter({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const links = [
    profile.facebook && { label: "Facebook", detail: lang === "en" ? "Connect with me" : "พูดคุยและติดตาม", href: profile.facebook, icon: FacebookIcon, external: true },
    profile.github && { label: "GitHub", detail: lang === "en" ? "Browse my code" : "ดูโค้ดและโปรเจกต์", href: profile.github, icon: GithubIcon, external: true },
    profile.linkedin && { label: "LinkedIn", detail: lang === "en" ? "Professional profile" : "โปรไฟล์การทำงาน", href: profile.linkedin, icon: LinkedinIcon, external: true },
    { label: c.navResume, detail: lang === "en" ? "Experience and skills" : "ประสบการณ์และทักษะ", href: `/${lang}/resume`, icon: FileTextIcon, external: false },
  ].filter(Boolean) as { label: string; detail: string; href: string; icon: typeof MailIcon; external: boolean }[];
  const linkClass = "group flex min-h-[84px] items-center justify-between gap-4 rounded-[16px] bg-white/[.065] px-5 py-4 text-left transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#17181c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91a7ff]";

  return <footer id="contact" className="scroll-mt-16 bg-[#17181c] text-white print:hidden">
    <div className="mx-auto w-[calc(100%-40px)] max-w-[1200px] pt-20 pb-8 sm:w-[calc(100%-72px)] sm:pt-24">
      <div className="grid gap-14 lg:grid-cols-[minmax(280px,.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-20">
        <div>
          <p className="type-label text-[#91a7ff]">{c.navContact}</p>
          <h2 className="type-section-title mt-6 max-w-[560px]">{c.contact}</h2>
          <p className="type-body mt-5 max-w-[500px] text-white/55">{c.contactText}</p>
        </div>
        <div>
          {profile.email ? <a href={`mailto:${profile.email}`} className="group flex min-h-[112px] items-center justify-between gap-5 rounded-[20px] bg-[#3157d5] px-5 py-5 transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#3b61df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7 sm:py-6" aria-label={`${lang === "en" ? "Email me at" : "ส่งอีเมลถึง"} ${profile.email}`}>
            <span className="flex min-w-0 items-center gap-4 sm:gap-5"><span className="hidden size-11 shrink-0 place-items-center rounded-full bg-white/12 sm:grid sm:size-12"><MailIcon className="size-5" /></span><span className="min-w-0"><span className="type-label block text-white/65">{lang === "en" ? "SEND AN EMAIL" : "ส่งอีเมล"}</span><span className="mt-1.5 block break-words font-[family-name:var(--display)] text-[clamp(17px,2vw,25px)] font-semibold leading-[1.25] tracking-[-.02em]">{profile.email}</span></span></span>
            <ArrowRightIcon className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-6" />
          </a> : <p className="type-small text-white/45">{c.contactPending}</p>}
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {links.map((link) => {
              const content = <><span className="flex min-w-0 items-center gap-3"><link.icon className="size-5 shrink-0 text-[#91a7ff] transition-colors group-hover:text-[#3157d5]" /><span className="min-w-0"><span className="block text-[14px] font-semibold">{link.label}</span><span className="mt-0.5 block text-[12px] leading-[1.45] text-white/45 transition-colors group-hover:text-[#666a73]">{link.detail}</span></span></span>{link.external ? <ExternalLinkIcon className="size-4 shrink-0 text-white/35 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#3157d5]" /> : <ArrowRightIcon className="size-4 shrink-0 text-white/35 transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-[#3157d5]" />}</>;
              return link.external ? <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{content}</a> : <Link key={link.label} href={link.href} className={linkClass}>{content}</Link>;
            })}
          </div>
        </div>
      </div>
      <div className="type-label mt-20 flex flex-wrap items-center justify-between gap-5 text-white/35"><span>© {new Date().getFullYear()} {profile.name.toUpperCase()}</span><span>SOFTWARE · SYSTEMS · WEB</span><a href="#main" className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"><span>BACK TO TOP</span><ArrowUpIcon className="size-4 transition-transform group-hover:-translate-y-1" /></a></div>
    </div>
  </footer>;
}

