import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { copy } from "@/lib/i18n";
import { profile } from "@/data/profile";

export function SiteFooter({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const links = [
    profile.email && { label: "Email", href: `mailto:${profile.email}` },
    profile.github && { label: "GitHub", href: profile.github },
    profile.linkedin && { label: "LinkedIn", href: profile.linkedin },
  ].filter(Boolean) as { label: string; href: string }[];

  return <footer id="contact" className="bg-[#17181c] text-white print:hidden">
    <div className="mx-auto w-[calc(100%-40px)] max-w-[1200px] pt-24 pb-8 sm:w-[calc(100%-72px)] sm:pt-28">
      <p className="font-[family-name:var(--mono)] text-[10px] tracking-[.1em] text-[#91a7ff] uppercase">{c.navContact}</p>
      <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-24">
        <div><h2 className="max-w-[760px] font-[family-name:var(--display)] text-[clamp(36px,4.5vw,60px)] font-semibold leading-[1.05] tracking-[-.04em]">{c.contact}</h2><p className="mt-6 max-w-[520px] text-[14px] leading-[1.8] text-white/50">{c.contactText}</p></div>
        <div className="flex flex-col items-start gap-4">
          {links.length ? links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="group inline-flex items-center gap-3 text-[15px] font-medium text-white/70 transition-colors hover:text-white"><span>{link.label}</span><span className="text-[#7895ff] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a>) : <p className="text-[13px] leading-[1.7] text-white/45">{c.contactPending}</p>}
          <Link href={`/${lang}/resume`} className="group inline-flex items-center gap-3 text-[15px] font-medium text-white/70 transition-colors hover:text-white"><span>{c.navResume}</span><span className="text-[#7895ff] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></Link>
        </div>
      </div>
      <div className="mt-24 flex flex-wrap items-center justify-between gap-5 font-[family-name:var(--mono)] text-[9px] tracking-[.08em] text-white/30"><span>© {new Date().getFullYear()} {profile.name.toUpperCase()}</span><span>SOFTWARE · SYSTEMS · WEB</span><a href="#main" className="group inline-flex items-center gap-2 text-white/55 transition-colors hover:text-white"><span>BACK TO TOP</span><span className="transition-transform group-hover:-translate-y-1">↑</span></a></div>
    </div>
  </footer>;
}

