import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";

const caption = "font-[family-name:var(--mono)] text-[9px] tracking-[.07em] uppercase sm:text-[10px]";
const micro = "text-[9px] leading-[1.4] sm:text-[10px]";

function Chrome({ title }: { title: string }) {
  return <div className="flex h-7 items-center gap-2 bg-[#f2f2ef] px-3 sm:h-9 sm:px-4">
    <div className="flex gap-1"><span className="size-1.5 rounded-full bg-[#d3d3cf]" /><span className="size-1.5 rounded-full bg-[#d3d3cf]" /><span className="size-1.5 rounded-full bg-[#d3d3cf]" /></div>
    <span className={`ml-1 text-[#969690] ${caption}`}>{title}</span>
  </div>;
}

function HrInterface({ lang, priority = false }: { lang: Lang; priority?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <Image src="/images/hop-chafe-hr-ui.jpg" alt={lang === "en" ? "HOP Chafe HR recruitment dashboard" : "หน้าแดชบอร์ดระบบสรรหาบุคลากร HOP Chafe HR"} fill sizes="(max-width: 768px) 100vw, 90vw" priority={priority} className="object-cover object-left transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-black/55 px-5 py-4 text-white backdrop-blur-sm sm:px-7"><span className={caption}>HOP CHAFE HR</span><span className={caption}>{lang === "en" ? "ACTUAL INTERFACE" : "หน้าระบบจริง"}</span></div>
    </div>
  );
}

function MemberInterface({ lang, priority = false }: { lang: Lang; priority?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#eef0f6]">
      <div className="absolute inset-0 right-[18%] overflow-hidden"><Image src="/images/niconico-member-login.jpg" alt={lang === "en" ? "NICONICO Member login interface" : "หน้าล็อกอินระบบสมาชิก NICONICO"} fill sizes="(max-width: 768px) 80vw, 72vw" priority={priority} className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]" /></div>
      <div className="absolute top-[2%] right-[1%] h-[96%] w-[31%] drop-shadow-[0_20px_30px_rgba(20,29,59,.24)] transition-transform duration-700 ease-out group-hover:-translate-y-1"><Image src="/images/niconico-member-mobile.png" alt={lang === "en" ? "NICONICO rewards interface on mobile" : "หน้ารางวัลของระบบสมาชิก NICONICO บนมือถือ"} fill sizes="(max-width: 768px) 30vw, 26vw" priority={priority} className="object-contain object-right" /></div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-black/55 px-5 py-4 text-white backdrop-blur-sm sm:px-7"><span className={caption}>NICONICO MEMBER</span><span className={caption}>{lang === "en" ? "ACTUAL INTERFACES" : "หน้าระบบจริง"}</span></div>
    </div>
  );
}

function CareerInterface({ lang, priority = false }: { lang: Lang; priority?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      <Image src="/images/niconico-career-ui.jpg" alt={lang === "en" ? "NICONICO career website interface" : "หน้าเว็บไซต์ร่วมงานกับ NICONICO"} fill sizes="(max-width: 768px) 100vw, 90vw" priority={priority} className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-black/55 px-5 py-4 text-white backdrop-blur-sm sm:px-7"><span className={caption}>NICONICO CAREER</span><span className={caption}>{lang === "en" ? "ACTUAL INTERFACE" : "หน้าระบบจริง"}</span></div>
    </div>
  );
}

function SupportInterface({ lang }: { lang: Lang }) {
  return <div className="absolute inset-[7%] overflow-hidden bg-white shadow-[0_22px_60px_rgba(27,44,33,.12)]">
    <Chrome title="INTERNAL / IT SUPPORT" />
    <div className="grid h-[calc(100%-1.75rem)] grid-cols-[20%_1fr] sm:h-[calc(100%-2.25rem)]"><aside className="bg-[#e1e9de] p-2 sm:p-4"><strong className={`text-[#31513a] ${micro}`}>IT SUPPORT</strong><div className={`mt-5 space-y-2 text-[#66806b] ${caption}`}><p className="font-medium text-[#31513a]">Requests</p><p>Approvals</p><p>Assets</p><p>Reports</p></div></aside><div className="bg-[#f6f7f4] p-3 sm:p-5"><div className="flex items-start justify-between"><div><p className={`text-[#949892] ${caption}`}>SERVICE DESK</p><h3 className="mt-1 text-[10px] font-semibold text-[#263029] sm:text-[15px]">{lang === "en" ? "Support requests" : "รายการแจ้งปัญหา"}</h3></div><span className={`bg-[#dfe9dc] px-2 py-1 text-[#45634c] ${caption}`}>ISO FLOW</span></div><div className="mt-4 grid grid-cols-[1fr_20%_20%] gap-2 bg-white p-2 sm:mt-6 sm:p-3"><span className={`text-[#989c97] ${caption}`}>REQUEST</span><span className={`text-[#989c97] ${caption}`}>STATUS</span><span className={`text-[#989c97] ${caption}`}>OWNER</span>{[["Email access", "In progress", "IT-01"], ["Printer issue", "Review", "IT-02"], ["New device", "Approved", "IT-01"], ["VPN request", "Pending", "IT-03"]].flatMap((row) => row.map((cell, index) => <span key={`${row[0]}-${cell}`} className={`truncate py-1 ${index === 1 ? "text-[#427150]" : "text-[#4c514d]"} ${micro}`}>{cell}</span>))}</div></div></div>
  </div>;
}

export function ProjectVisual({ project, lang, large = false }: { project: Project; lang: Lang; large?: boolean }) {
  const frame = large ? "relative aspect-[1.05] overflow-hidden bg-[#e7e7e2] sm:aspect-[1.72]" : "relative aspect-[1.22] overflow-hidden bg-[#e7e7e2] sm:aspect-[1.48]";
  const imagePosition = project.slug === "alangkan-thai" ? "object-left" : "object-center";

  if (project.image) return <div className={frame}>
    <Image src={project.image} alt={t(project.imageAlt!, lang)} fill sizes={large ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 50vw"} priority={large} className={`object-cover ${imagePosition} transition-transform duration-700 ease-out group-hover:scale-[1.02]`} />
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-black/55 px-5 py-4 text-white backdrop-blur-sm sm:px-7"><span className={caption}>{project.title}</span><span className={caption}>{lang === "en" ? "PUBLIC WEBSITE" : "เว็บไซต์สาธารณะ"}</span></div>
  </div>;

  if (project.visual === "pipeline") return <div className={`${frame} bg-[#e5e8eb]`}><HrInterface lang={lang} priority={large} /></div>;
  if (project.visual === "flow") return <div className={`${frame} bg-[#dfe3eb]`}><MemberInterface lang={lang} priority={large} /></div>;
  if (project.visual === "career") return <div className={`${frame} bg-[#e5e8eb]`}><CareerInterface lang={lang} priority={large} /></div>;
  return <div className={`${frame} bg-[#dfe6dc]`}><SupportInterface lang={lang} /><span className={`absolute right-3 bottom-2 text-[#687568] ${caption}`}>{lang === "en" ? "INTERFACE RECONSTRUCTION" : "ภาพจำลองจากโครงสร้างจริง"}</span></div>;
}


