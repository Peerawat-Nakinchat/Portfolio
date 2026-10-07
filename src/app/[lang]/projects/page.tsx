import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectIndex } from "@/components/project-index";
import { isLang } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { title: lang === "th" ? "ผลงาน" : "Projects", alternates: { canonical: `/${lang}/projects`, languages: { en: "/en/projects", th: "/th/projects" } } };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: value } = await params;
  if (!isLang(value)) notFound();
  const lang = value;

  return <><SiteHeader lang={lang} alternatePath="/projects" /><main id="main" className="bg-[#f7f7f5]">
    <section className="mx-auto w-[calc(100%-40px)] max-w-[1200px] pt-20 pb-28 sm:w-[calc(100%-72px)] sm:pt-28 sm:pb-40">
      <header className="mb-16 sm:mb-20">
        <p className="type-label text-[#3157d5]">{lang === "en" ? "SELECTED WORK" : "ผลงานทั้งหมด"}</p>
        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end lg:gap-20">
          <h1 className="type-page-title text-[#17181c]">{lang === "en" ? "Products built for real use." : "ผลงานจากการใช้งานจริง"}</h1>
          <p className="type-lead text-[#646871]">{lang === "en" ? "Systems for recruitment, members, ERP integration, internal support, and public-facing websites. Each case study explains what the product does and how I worked on it." : "รวมระบบสรรหา ระบบสมาชิก การเชื่อม ERP ระบบสนับสนุนภายใน และเว็บไซต์สาธารณะ แต่ละกรณีศึกษาจะอธิบายว่าระบบทำอะไรและผมทำงานกับมันอย่างไร"}</p>
        </div>
      </header>
      <ProjectIndex lang={lang} />
    </section>
  </main><SiteFooter lang={lang} /></>;
}
