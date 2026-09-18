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

  return <footer id="contact" className="bg-[#171b1a] text-[#f2f0e9] print:hidden">
    <div className="mx-auto w-[calc(100%-48px)] max-w-[1480px] pt-20 pb-7 sm:w-[calc(100%-80px)] md:pt-28">
      <div className="flex items-center gap-5 font-[family-name:var(--mono)] text-[11px] tracking-[.12em] text-[#f36b43]"><span>04 / {c.navContact}</span><span className="h-px w-14 bg-[#f36b43]" /></div>
      <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
        <div><h2 className="max-w-[1000px] font-[family-name:var(--display)] text-[clamp(54px,8vw,130px)] font-medium leading-[.94] tracking-[-.085em]">{c.contact}</h2><p className="mt-8 max-w-[540px] text-[16px] leading-[1.6] text-white/60">{c.contactText}</p></div>
        <div className="border-t border-white/25 lg:border-0">
          {links.length ? links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="group flex items-center justify-between border-b border-white/25 py-4 text-[20px] transition-colors hover:text-[#f36b43]"><span>{link.label}</span><span className="text-[15px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></a>) : <p className="py-5 font-[family-name:var(--mono)] text-[11px] leading-[1.6] tracking-[.04em] text-white/55">{c.contactPending}</p>}
          <Link href={`/${lang}/resume`} className="group flex items-center justify-between border-b border-white/25 py-4 text-[20px] transition-colors hover:text-[#f36b43]"><span>{c.navResume}</span><span className="text-[15px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></Link>
        </div>
      </div>
      <div className="mt-24 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-5 font-[family-name:var(--mono)] text-[10px] tracking-[.08em] text-white/50"><span>© {new Date().getFullYear()} {profile.name.toUpperCase()}</span><span>DESIGN × DEVELOPMENT</span><a href="#main" className="text-white/80 transition-colors hover:text-[#f36b43]">BACK TO TOP ↑</a></div>
    </div>
  </footer>;
}

