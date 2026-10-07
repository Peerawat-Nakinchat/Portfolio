import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectIndex } from "@/components/project-index";
import { experience, profile } from "@/data/profile";
import { copy, isLang, t } from "@/lib/i18n";

const shell = "mx-auto w-[calc(100%-40px)] max-w-[1200px] sm:w-[calc(100%-72px)]";
const overline = "font-[family-name:var(--mono)] text-[10px] tracking-[.1em] uppercase";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { alternates: { canonical: `/${lang}`, languages: { en: "/en", th: "/th" } } };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: value } = await params;
  if (!isLang(value)) notFound();
  const lang = value;
  const c = copy[lang];
  const strengths = lang === "en" ? [
    { title: "Interface development", text: "Responsive product interfaces, reusable components, and state built around the real user journey.", tools: "React · Next.js · TypeScript" },
    { title: "System integration", text: "Clear and secure boundaries between web products, APIs, ERP, calendars, email, and external services.", tools: "REST API · ERP · Google Calendar" },
    { title: "Backend structure", text: "Business rules arranged into understandable layers so the system remains traceable and easier to change.", tools: "MVC · Clean Architecture · Service layer" },
  ] : [
    { title: "Interface Development", text: "หน้าจอ Responsive, Component ที่นำกลับมาใช้ซ้ำ และ State ที่ออกแบบตามเส้นทางใช้งานจริง", tools: "React · Next.js · TypeScript" },
    { title: "System Integration", text: "วางขอบเขตการเชื่อมเว็บ API, ERP, ปฏิทิน อีเมล และบริการภายนอกให้ชัดเจนและปลอดภัย", tools: "REST API · ERP · Google Calendar" },
    { title: "Backend Structure", text: "จัด Business Rule เป็นชั้นที่เข้าใจง่าย เพื่อให้ตามรอยระบบและแก้ไขต่อได้สะดวก", tools: "MVC · Clean Architecture · Service layer" },
  ];

  return <>
    <SiteHeader lang={lang} />
    <main id="main" className="bg-[#f7f7f5]">
      <section className="pt-20 pb-28 sm:pt-28 sm:pb-40" aria-labelledby="hero-title"><div className={shell}>
        <p className={`text-[#3157d5] ${overline}`}>{c.role} · Bangkok, Thailand</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end lg:gap-20">
          <h1 id="hero-title" className="max-w-[820px] font-[family-name:var(--display)] text-[clamp(42px,6vw,78px)] font-semibold leading-[1.02] tracking-[-.045em] text-[#17181c]">{lang === "en" ? <>I build software for <span className="text-[#3157d5]">real business workflows.</span></> : <>ผมพัฒนาซอฟต์แวร์สำหรับ <span className="text-[#3157d5]">ขั้นตอนธุรกิจที่ใช้งานจริง</span></>}</h1>
          <div className="pb-1"><p className="text-[15px] leading-[1.85] text-[#5e6168] sm:text-[16px]">{c.heroDesc}</p><div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-semibold"><Link href="#work" className="group inline-flex items-center gap-2 text-[#17181c] transition-colors hover:text-[#3157d5]"><span>{c.viewWork}</span><span className="transition-transform group-hover:translate-x-1">→</span></Link><Link href={`/${lang}/resume`} className="group inline-flex items-center gap-2 text-[#70737a] transition-colors hover:text-[#3157d5]"><span>{c.resume}</span><span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></Link></div></div>
        </div>
      </div></section>

      <section id="work" className="pb-32 sm:pb-44" aria-labelledby="work-title"><div className={shell}>
        <div className="mb-16 grid gap-7 lg:grid-cols-[240px_1fr] lg:gap-16 sm:mb-20"><p className={`text-[#3157d5] ${overline}`}>{c.selected}</p><div><h2 id="work-title" className="max-w-[720px] font-[family-name:var(--display)] text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] text-[#17181c]">{lang === "en" ? "Products, platforms, and websites built for actual use." : "ผลิตภัณฑ์ ระบบ และเว็บไซต์ที่สร้างเพื่อใช้งานจริง"}</h2><p className="mt-5 max-w-[660px] text-[14px] leading-[1.8] text-[#686b72] sm:text-[15px]">{lang === "en" ? "Each project explains the context, what I was responsible for, how the system is structured, and how I worked through it." : "แต่ละโปรเจกต์อธิบายบริบท ส่วนที่ผมรับผิดชอบ โครงสร้างระบบ และวิธีที่ผมใช้ทำงาน"}</p></div></div>
        <ProjectIndex lang={lang} />
      </div></section>

      <section id="about" className="pb-32 sm:pb-44" aria-labelledby="about-title"><div className={shell}>
        <div className="grid gap-9 lg:grid-cols-[240px_1fr] lg:gap-16"><p className={`text-[#3157d5] ${overline}`}>{c.navAbout}</p><div><h2 id="about-title" className="max-w-[830px] font-[family-name:var(--display)] text-[clamp(32px,4vw,52px)] font-semibold leading-[1.12] text-[#17181c]">{c.aboutLead}</h2><p className="mt-6 max-w-[720px] text-[15px] leading-[1.85] text-[#60636a]">{c.aboutText}</p></div></div>
        <div className="mt-16 grid gap-12 lg:ml-[304px] lg:grid-cols-3 lg:gap-10">{strengths.map((item) => <article key={item.title}><h3 className="font-[family-name:var(--display)] text-[21px] font-semibold text-[#17181c]">{item.title}</h3><p className="mt-4 text-[14px] leading-[1.8] text-[#676a71]">{item.text}</p><p className={`mt-6 text-[#92949a] ${overline}`}>{item.tools}</p></article>)}</div>
      </div></section>

      <section id="experience" className="pb-32 sm:pb-44" aria-labelledby="experience-title"><div className={shell}>
        <div className="grid gap-9 lg:grid-cols-[240px_1fr] lg:gap-16"><div><p className={`text-[#3157d5] ${overline}`}>{c.navExperience}</p><h2 id="experience-title" className="mt-5 font-[family-name:var(--display)] text-[clamp(30px,3.5vw,46px)] font-semibold text-[#17181c]">{c.experience}</h2></div><div className="space-y-14">{experience.map((item) => <article key={item.company} className="grid gap-4 sm:grid-cols-[175px_1fr] sm:gap-10"><p className="text-[12px] leading-[1.7] text-[#888b92]">{t(item.dates, lang)}</p><div><h3 className="font-[family-name:var(--display)] text-[26px] font-semibold leading-[1.1] text-[#17181c]">{item.company}</h3><p className="mt-2 text-[14px] font-medium text-[#3157d5]">{t(item.role, lang)}</p><p className="mt-4 max-w-[610px] text-[14px] leading-[1.8] text-[#686b72]">{t(item.description, lang)}</p></div></article>)}</div></div>
      </div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Software Developer", url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/${lang}`, sameAs: [profile.github, profile.linkedin].filter(Boolean) }).replace(/</g, "\\u003c") }} />
    <SiteFooter lang={lang} />
  </>;
}




