import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectIndex } from "@/components/project-index";
import { ArrowRightIcon, BriefcaseIcon, FileTextIcon, MonitorIcon, PlugIcon, ServerIcon } from "@/components/icons";
import { experience, profile } from "@/data/profile";
import { copy, isLang, t } from "@/lib/i18n";

const shell = "mx-auto w-[calc(100%-40px)] max-w-[1200px] sm:w-[calc(100%-72px)]";
const overline = "type-label";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { alternates: { canonical: `/${lang}`, languages: { en: "/en", th: "/th" } } };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: value } = await params;
  if (!isLang(value)) notFound();
  const lang = value;
  const c = copy[lang];
  const focusAreas = lang === "en" ? [
    { title: "Frontend", text: "Responsive interfaces, reusable components, forms, and state shaped around the user flow.", tools: "React · Next.js · TypeScript", icon: MonitorIcon },
    { title: "Integration", text: "Web applications connected to APIs, ERP, calendars, email, and external services.", tools: "REST API · ERP · Google Calendar", icon: PlugIcon },
    { title: "Backend", text: "Business logic and data flow separated into layers that are easier to trace and change.", tools: "MVC · Clean Architecture · Service layer", icon: ServerIcon },
  ] : [
    { title: "Frontend", text: "หน้าจอ Responsive, Component ที่ใช้ซ้ำได้ รวมถึง Form และ State ที่วางตาม Flow ของผู้ใช้", tools: "React · Next.js · TypeScript", icon: MonitorIcon },
    { title: "Integration", text: "เชื่อมเว็บเข้ากับ API, ERP, ปฏิทิน อีเมล และบริการภายนอก", tools: "REST API · ERP · Google Calendar", icon: PlugIcon },
    { title: "Backend", text: "แยก Business Logic และ Data Flow เป็นชั้นที่ตามปัญหาและแก้ไขต่อได้ง่าย", tools: "MVC · Clean Architecture · Service layer", icon: ServerIcon },
  ];

  return <>
    <SiteHeader lang={lang} />
    <main id="main" className="bg-[#f7f7f5]">
      <section id="about" className="scroll-mt-24 pt-16 pb-28 sm:pt-24 sm:pb-36" aria-labelledby="hero-title"><div className={`${shell} grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-20`}>
        <div className="pt-2">
          <p className={`text-[#3157d5] ${overline}`}>Peerawat Nakinchat · {c.role}</p>
          <h1 id="hero-title" className="type-page-title mt-7 max-w-[800px] text-[#17181c]">{lang === "en" ? <>I’m Peerawat Nakinchat.<br /><span className="text-[#3157d5]">Software Developer.</span></> : <>ผม พีรวัฒน์ นาคินชาติ<br /><span className="text-[#3157d5]">นักพัฒนาซอฟต์แวร์</span></>}</h1>
          <p className="type-subhead mt-7 max-w-[700px] font-medium text-[#34363b]">{lang === "en" ? "I work across frontend, backend, and system integration." : "ผมทำงานครอบคลุม Frontend, Backend และ System Integration"}</p>
          <p className="type-lead mt-4 max-w-[700px] text-[#65686f]">{c.heroDesc}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-[14px] font-semibold">
            <Link href="#work" className="ui-button ui-button-primary ui-button-mobile-wide group"><BriefcaseIcon /><span>{c.viewWork}</span><ArrowRightIcon className="transition-transform group-hover:translate-x-1" /></Link>
            <Link href={`/${lang}/resume`} className="ui-button ui-button-soft ui-button-mobile-wide group"><FileTextIcon /><span>{c.resume}</span></Link>
          </div>
        </div>
        <aside className="rounded-[28px] bg-[#eceef4] p-6 sm:p-8" aria-label={lang === "en" ? "Core areas" : "ขอบเขตงานหลัก"}>
          <p className={`text-[#3157d5] ${overline}`}>{lang === "en" ? "CORE AREAS" : "ขอบเขตงานหลัก"}</p>
          <div className="mt-7 space-y-7">{focusAreas.map((item) => <div key={item.title} className="grid grid-cols-[32px_1fr] gap-3"><span className="flex size-8 items-center justify-center rounded-full bg-white text-[#3157d5] shadow-[0_1px_4px_rgba(23,24,28,.08)]"><item.icon className="size-4" /></span><div><h2 className="type-subhead font-semibold text-[#17181c]">{item.title}</h2><p className="type-small mt-2 text-[#656a75]">{item.text}</p><p className="type-label mt-3 text-[#8b8f99]">{item.tools}</p></div></div>)}</div>
        </aside>
      </div></section>

      <section id="work" className="scroll-mt-24 pb-32 sm:pb-40" aria-labelledby="work-title"><div className={shell}>
        <div className="mb-14 max-w-[760px] sm:mb-20"><p className={`text-[#3157d5] ${overline}`}>{c.selected}</p><h2 id="work-title" className="type-section-title mt-5 text-[#17181c]">{lang === "en" ? "Projects that show what I can build." : "โปรเจกต์ที่แสดงสิ่งที่ผมทำได้จริง"}</h2><p className="type-body mt-5 max-w-[680px] text-[#686b72]">{lang === "en" ? "Open any project to see the problem, my responsibility, the product flow, and the structure behind it." : "กดเข้าไปดูแต่ละโปรเจกต์ได้ว่าโจทย์คืออะไร ผมรับผิดชอบส่วนไหน ระบบทำอะไรได้ และวางโครงสร้างอย่างไร"}</p></div>
        <ProjectIndex lang={lang} />
      </div></section>

      <section id="experience" className="scroll-mt-24 pb-32 sm:pb-40" aria-labelledby="experience-title"><div className={shell}>
        <div className="max-w-[720px]"><p className={`text-[#3157d5] ${overline}`}>{c.navExperience}</p><h2 id="experience-title" className="type-section-title mt-5 text-[#17181c]">{c.experience}</h2><p className="type-body mt-4 text-[#686b72]">{c.experienceDesc}</p></div>
        <div className="mt-14 max-w-[960px] space-y-14">{experience.map((item) => <article key={item.company} className="grid gap-4 sm:grid-cols-[190px_1fr] sm:gap-12"><p className="type-small text-[#888b92] sm:whitespace-nowrap">{t(item.dates, lang)}</p><div><h3 className="type-card-title text-[#17181c]">{item.company}</h3><p className="mt-2 text-[15px] font-medium leading-[1.6] text-[#3157d5]">{t(item.role, lang)}</p><p className="type-body mt-4 max-w-[650px] text-[#686b72]">{t(item.description, lang)}</p></div></article>)}</div>
      </div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Software Developer", url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/${lang}`, sameAs: [profile.facebook, profile.github, profile.linkedin].filter(Boolean) }).replace(/</g, "\\u003c") }} />
    <SiteFooter lang={lang} />
  </>;
}




