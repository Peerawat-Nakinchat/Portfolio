import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";
import { experience, profile } from "@/data/profile";
import { copy, isLang, t, type Lang } from "@/lib/i18n";

const shell = "mx-auto w-[calc(100%-48px)] max-w-[1480px] sm:w-[calc(100%-80px)]";
const overline = "font-[family-name:var(--mono)] text-[10px] tracking-[.12em] uppercase sm:text-[11px]";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { alternates: { canonical: `/${lang}`, languages: { en: "/en", th: "/th" } } };
}

function Feature({ lang, index, reverse = false }: { lang: Lang; index: number; reverse?: boolean }) {
  const project = projects[index];
  const c = copy[lang];
  return <Reveal><article className="border-t border-[#171b1a]/25 py-10 sm:py-14">
    <div className={`grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-[6vw] ${reverse ? "lg:grid-cols-[1.2fr_.8fr]" : ""}`}>
      <div className={`flex flex-col justify-between ${reverse ? "lg:order-2" : ""}`}>
        <div>
          <div className={`flex items-center justify-between text-[#aa4b31] ${overline}`}><span>0{index + 1} / 06</span><span>{project.category === "system" ? c.system : c.website}</span></div>
          <h3 className="mt-10 font-[family-name:var(--display)] text-[clamp(48px,5.3vw,86px)] font-medium leading-[.95] tracking-[-.075em]">{project.title}<span className="text-[#f36b43]">.</span></h3>
          <p className="mt-3 font-[family-name:var(--serif)] tracking-normal text-[clamp(20px,2.1vw,32px)] italic text-[#aa4b31]">{t(project.subtitle, lang)}</p>
          <p className="mt-8 max-w-[430px] text-[15px] leading-[1.7] text-[#4f5651] sm:text-[17px]">{t(project.lead, lang)}</p>
        </div>
        <div className="mt-10"><p className={`mb-5 text-[#626b63] ${overline}`}>{project.technology.slice(0, 3).join(" / ") || "PUBLIC WEB EXPERIENCE"}</p><Link href={`/${lang}/projects/${project.slug}`} className="group flex max-w-[320px] items-center justify-between border-t border-[#171b1a] py-4 text-[15px] font-medium transition-colors hover:text-[#aa4b31]"><span>{c.viewCase}</span><span className="text-[24px] font-light transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></Link></div>
      </div>
      <Link href={`/${lang}/projects/${project.slug}`} aria-label={`${c.viewCase}: ${project.title}`} className={`group block overflow-hidden ${reverse ? "lg:order-1" : ""}`}><ProjectVisual project={project} lang={lang} /></Link>
    </div>
  </article></Reveal>;
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: value } = await params;
  if (!isLang(value)) notFound();
  const lang = value;
  const c = copy[lang];

  return <>
    <SiteHeader lang={lang} />
    <main id="main">
      <section className="bg-[#171b1a] text-[#f2f0e9]" aria-labelledby="hero-title"><div className={`${shell} flex min-h-[calc(100svh-76px)] flex-col justify-between pt-[clamp(70px,10vh,130px)] pb-7`}>
        <div className={`flex items-start justify-between gap-4 text-white/55 ${overline}`}><span>PORTFOLIO / {new Date().getFullYear()}</span><span className="hidden sm:block">SOFTWARE × SYSTEMS × INTERFACES</span><span className="sm:hidden">01 / 04</span></div>
        <div className="mt-20"><p className={`mb-7 text-[#f36b43] ${overline}`}>{c.role} / {lang === "en" ? "THAILAND" : "ประเทศไทย"}</p><h1 id="hero-title" className="font-[family-name:var(--display)] text-[clamp(56px,10.5vw,190px)] font-medium leading-[.77] tracking-[-.095em] max-[420px]:text-[clamp(56px,14vw,70px)]"><span className="block">Peerawat</span><span className="mt-[.13em] block">Nakinchat<span className="text-[#f36b43]">.</span></span></h1></div>
        <div className="mt-20 grid gap-8 border-t border-white/25 pt-7 md:grid-cols-[.8fr_1.15fr_auto] md:items-end md:gap-10"><p className="font-[family-name:var(--serif)] tracking-normal text-[clamp(31px,3.1vw,55px)] leading-[1.03] italic text-[#f36b43]">{lang === "en" ? "Software developer." : "นักพัฒนาซอฟต์แวร์"}</p><p className="max-w-[500px] text-[15px] leading-[1.65] text-white/65 sm:text-[17px]">{c.heroDesc}</p><Link href="#work" aria-label={c.viewWork} className="group flex size-[68px] items-center justify-center rounded-full border border-white/35 text-[28px] font-light transition-colors hover:border-[#f36b43] hover:bg-[#f36b43] hover:text-[#171b1a] md:size-[86px]">↓</Link></div>
      </div></section>

      <section id="work" className="bg-[#f2f0e9] py-20 sm:py-28" aria-labelledby="work-title"><div className={shell}>
        <div className="mb-16 grid gap-7 border-t border-[#171b1a]/25 pt-6 md:grid-cols-[.33fr_1fr] md:gap-14"><p className={`text-[#aa4b31] ${overline}`}>01 / {c.selected}</p><div className="grid gap-5 md:grid-cols-[1fr_250px] md:items-end"><h2 id="work-title" className="max-w-[900px] font-[family-name:var(--display)] text-[clamp(52px,6.7vw,112px)] font-medium leading-[.94] tracking-[-.08em]">{lang === "en" ? <>Work built for<br /><span className="font-[family-name:var(--serif)] tracking-normal font-normal italic text-[#aa4b31]">real workflows.</span></> : <>ผลงานสำหรับ<br /><span className="font-[family-name:var(--serif)] tracking-normal font-normal text-[#aa4b31]">การใช้งานจริง</span></>}</h2><p className="max-w-[270px] text-[14px] leading-[1.6] text-[#5d655f]">{c.selectedDesc}</p></div></div>
        <Feature lang={lang} index={0} />
        <Feature lang={lang} index={1} reverse />
        <Reveal><article className="border-t border-[#171b1a]/25 py-10 sm:py-14"><Link href={`/${lang}/projects/${projects[2].slug}`} className="group grid gap-6 lg:grid-cols-[.2fr_1fr_.4fr] lg:items-center"><div className={`text-[#aa4b31] ${overline}`}>03 / {c.system}</div><div><h3 className="font-[family-name:var(--display)] text-[clamp(48px,6vw,104px)] font-medium leading-[.92] tracking-[-.08em] transition-transform duration-300 group-hover:translate-x-2">NICONICO Career<span className="text-[#f36b43]">.</span></h3><p className="mt-5 max-w-[580px] text-[15px] leading-[1.6] text-[#5d655f]">{t(projects[2].lead, lang)}</p></div><span className="hidden justify-self-end font-[family-name:var(--serif)] tracking-normal text-[110px] font-normal italic leading-none text-[#aa4b31] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 lg:block">↗</span></Link></article></Reveal>
        <Reveal><article className="grid gap-0 border-t border-[#171b1a]/25 pt-10 lg:grid-cols-[1.25fr_.75fr]"><Link href={`/${lang}/projects/${projects[3].slug}`} className="group block overflow-hidden"><ProjectVisual project={projects[3]} lang={lang} /></Link><div className="flex flex-col justify-between bg-[#e4dbd2] p-[clamp(28px,4vw,64px)]"><div className={`flex justify-between text-[#aa4b31] ${overline}`}><span>04 / 06</span><span>{c.website}</span></div><div className="py-12"><h3 className="font-[family-name:var(--display)] text-[clamp(48px,5vw,84px)] font-medium leading-[.95] tracking-[-.075em]">Skin MD<br />Thailand<span className="text-[#f36b43]">.</span></h3><p className="mt-5 max-w-[360px] text-[15px] leading-[1.65] text-[#4f5651]">{t(projects[3].lead, lang)}</p></div><Link href={`/${lang}/projects/${projects[3].slug}`} className="group flex items-center justify-between border-t border-[#171b1a] pt-4 text-[15px] font-medium"><span>{c.viewCase}</span><span className="text-[25px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></Link></div></article></Reveal>
        <Link href={`/${lang}/projects`} className="group mt-12 flex items-center justify-between border-y border-[#171b1a] py-5 font-[family-name:var(--display)] text-[clamp(22px,2.5vw,38px)] font-medium tracking-[-.04em] transition-colors hover:text-[#aa4b31]"><span>{c.allWork} <span className="ml-2 align-top font-[family-name:var(--mono)] text-[11px] font-normal tracking-normal">(06)</span></span><span className="transition-transform group-hover:translate-x-2">↗</span></Link>
      </div></section>

      <section id="experience" className="bg-[#e5e3dc] py-20 sm:py-28" aria-labelledby="experience-title"><div className={`${shell} grid gap-14 lg:grid-cols-[.38fr_1fr] lg:gap-[7vw]`}><div><p className={`text-[#aa4b31] ${overline}`}>02 / {c.navExperience}</p><h2 id="experience-title" className="mt-7 font-[family-name:var(--display)] text-[clamp(52px,5.8vw,96px)] font-medium leading-[.92] tracking-[-.08em]">{c.experience}<span className="text-[#f36b43]">.</span></h2><p className="mt-6 max-w-[310px] text-[15px] leading-[1.6] text-[#5d655f]">{c.experienceDesc}</p></div><div>{experience.map((item, index) => <article key={item.company} className="grid gap-4 border-t border-[#171b1a]/25 py-8 sm:grid-cols-[.28fr_1fr] sm:gap-10"><div className={`text-[#aa4b31] ${overline}`}>0{index + 1} / {t(item.dates, lang)}</div><div><h3 className="font-[family-name:var(--display)] text-[clamp(30px,3vw,50px)] font-medium leading-none tracking-[-.055em]">{item.company}</h3><p className="mt-3 font-[family-name:var(--serif)] tracking-normal text-[23px] italic text-[#aa4b31]">{t(item.role, lang)}</p><p className="mt-5 max-w-[620px] text-[14px] leading-[1.7] text-[#4f5651] sm:text-[16px]">{t(item.description, lang)}</p></div></article>)}</div></div></section>

      <section id="about" className="bg-[#f2f0e9] py-20 sm:py-28" aria-labelledby="about-title"><div className={`${shell} grid gap-14 lg:grid-cols-[.32fr_1fr] lg:gap-[7vw]`}><p className={`text-[#aa4b31] ${overline}`}>03 / {c.navAbout}</p><div><h2 id="about-title" className="max-w-[1050px] font-[family-name:var(--serif)] tracking-normal text-[clamp(39px,4.5vw,74px)] leading-[1.13] italic">{c.aboutLead}</h2><p className="mt-8 max-w-[760px] text-[16px] leading-[1.7] text-[#4f5651] sm:text-[19px]">{c.aboutText}</p><div className="mt-16 grid gap-4 border-t border-[#171b1a]/25 pt-6 md:grid-cols-3"><div><span className={`text-[#aa4b31] ${overline}`}>01 / FRONTEND</span><p className="mt-3 text-[14px] leading-[1.6]">React · Next.js · TypeScript<br /><span className="text-[#687069]">HOP / NICONICO Member</span></p></div><div><span className={`text-[#aa4b31] ${overline}`}>02 / INTEGRATION</span><p className="mt-3 text-[14px] leading-[1.6]">ERP · API proxy<br /><span className="text-[#687069]">NICONICO Member</span></p></div><div><span className={`text-[#aa4b31] ${overline}`}>03 / BACKEND</span><p className="mt-3 text-[14px] leading-[1.6]">MVC · Service layer<br /><span className="text-[#687069]">ISO IT Support</span></p></div></div></div></div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Software Developer", url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/${lang}`, sameAs: [profile.github, profile.linkedin].filter(Boolean) }).replace(/</g, "\\u003c") }} />
    <SiteFooter lang={lang} />
  </>;
}




