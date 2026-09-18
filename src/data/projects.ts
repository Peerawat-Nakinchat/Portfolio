import type { Localized } from "@/lib/i18n";

export type Project = {
  slug: string;
  title: string;
  subtitle: Localized;
  category: "system" | "website";
  lead: Localized;
  context: Localized;
  role: Localized;
  capabilities: Localized[];
  technical: Localized;
  reflection: Localized;
  technology: string[];
  liveUrl?: string;
  image?: string;
  imageAlt?: Localized;
  visual: "pipeline" | "flow" | "career" | "skin" | "construction" | "support";
  evidence: "brief" | "public";
};

export const projects: Project[] = [
  {
    slug: "hop-chafe-hr", title: "HOP Chafe HR", category: "system", visual: "pipeline", evidence: "brief",
    subtitle: { en: "Recruitment platform", th: "แพลตฟอร์มสรรหาบุคลากร" },
    lead: { en: "A business application supporting the hiring journey from candidate management to offer and hire.", th: "แอปพลิเคชันธุรกิจที่รองรับกระบวนการสรรหาตั้งแต่จัดการผู้สมัครจนถึงข้อเสนอและการรับเข้าทำงาน" },
    context: { en: "Hiring is a sequence of handoffs. Candidate records, pipeline status, interviews, evaluations, and offers need to stay connected for the people coordinating recruitment.", th: "งานสรรหาเป็นกระบวนการที่ต้องส่งต่องานกัน ข้อมูลผู้สมัคร สถานะ นัดสัมภาษณ์ การประเมิน และข้อเสนอต้องเชื่อมโยงกันสำหรับผู้ประสานงาน" },
    role: { en: "Contributed to a Next.js and TypeScript application, including frontend and backend integration, state management, reusable interface work, and external service integration. The wider system uses multi-tenant concepts; this is presented as a system characteristic rather than an individual architecture claim.", th: "มีส่วนร่วมกับแอปพลิเคชัน Next.js และ TypeScript ทั้งการเชื่อมต่อฟรอนต์เอนด์กับแบ็กเอนด์ การจัดการสถานะ ส่วนติดต่อที่ใช้ซ้ำ และการเชื่อมต่อบริการภายนอก แนวคิด multi-tenant เป็นลักษณะของระบบ ไม่ใช่การอ้างว่าออกแบบสถาปัตยกรรมทั้งหมดด้วยตนเอง" },
    capabilities: [
      { en: "Candidate management and pipeline", th: "จัดการผู้สมัครและลำดับขั้นการสรรหา" },
      { en: "Interview scheduling and evaluation", th: "นัดสัมภาษณ์และประเมินผล" },
      { en: "Offer and hiring workflow", th: "ข้อเสนอและขั้นตอนรับเข้าทำงาน" },
      { en: "Google Calendar integration", th: "เชื่อมต่อ Google Calendar" },
    ],
    technical: { en: "The work brings interface state, business workflows, APIs, and calendar integration into one application. Specific private implementation details are omitted.", th: "งานนี้เชื่อมสถานะหน้าจอ ขั้นตอนธุรกิจ API และปฏิทินไว้ในแอปพลิเคชันเดียว โดยไม่เปิดเผยรายละเอียดการทำงานภายใน" },
    reflection: { en: "Recruitment software works best when each transition is clear to the person making the next decision.", th: "ซอฟต์แวร์สรรหาที่ดีควรทำให้ทุกการเปลี่ยนขั้นตอนชัดเจนต่อผู้ที่ต้องตัดสินใจต่อ" },
    technology: ["Next.js", "React", "TypeScript", "API integration"], liveUrl: "https://hr.hopchafe.co.th/"
  },
  {
    slug: "niconico-member", title: "NICONICO Member", category: "system", visual: "flow", evidence: "brief",
    subtitle: { en: "Member web platform", th: "เว็บแพลตฟอร์มสมาชิก" },
    lead: { en: "A member experience that connects account, catalog, and points information to an ERP system.", th: "ประสบการณ์สมาชิกที่เชื่อมข้อมูลบัญชี แค็ตตาล็อก และคะแนนกับระบบ ERP" },
    context: { en: "Members need one clear place to view their account, browse products, and understand their points balance and history.", th: "สมาชิกต้องการพื้นที่ที่ชัดเจนสำหรับดูบัญชี สินค้า ยอดคะแนน และประวัติคะแนน" },
    role: { en: "Worked with Next.js, React, and TypeScript on the member-facing platform and its ERP integration. The server-side proxy pattern described here is the confirmed integration concept; the extent of individual ownership is not specified.", th: "ทำงานกับ Next.js, React และ TypeScript ในแพลตฟอร์มสมาชิกและการเชื่อมต่อ ERP โดยแนวทาง proxy ฝั่งเซิร์ฟเวอร์เป็นแนวคิดการเชื่อมต่อที่ยืนยันแล้ว ส่วนขอบเขตความรับผิดชอบส่วนบุคคลยังไม่ได้ระบุ" },
    capabilities: [
      { en: "Member account", th: "บัญชีสมาชิก" }, { en: "Product catalog", th: "แค็ตตาล็อกสินค้า" },
      { en: "Points balance", th: "ยอดคะแนน" }, { en: "Points history", th: "ประวัติคะแนน" },
    ],
    technical: { en: "Browser requests pass through Next.js and a server-side API proxy before reaching the ERP. This keeps ERP credentials on the server instead of exposing them in browser code.", th: "คำขอจากเบราว์เซอร์ผ่าน Next.js และ API proxy ฝั่งเซิร์ฟเวอร์ก่อนถึง ERP เพื่อเก็บข้อมูลรับรองของ ERP ไว้บนเซิร์ฟเวอร์ ไม่เปิดเผยในโค้ดเบราว์เซอร์" },
    reflection: { en: "A useful integration is as much about a safe boundary as it is about showing the right data.", th: "การเชื่อมต่อที่ดีต้องคำนึงถึงขอบเขตความปลอดภัยควบคู่กับการแสดงข้อมูลที่ถูกต้อง" },
    technology: ["Next.js", "React", "TypeScript", "ERP integration"], liveUrl: "https://crm.nico-nico.co.th/"
  },
  {
    slug: "niconico-career", title: "NICONICO Career", category: "system", visual: "career", evidence: "brief",
    subtitle: { en: "Career platform", th: "แพลตฟอร์มสมัครงาน" },
    lead: { en: "A career-facing web platform for NICONICO.", th: "เว็บแพลตฟอร์มด้านอาชีพของ NICONICO" },
    context: { en: "The public career site is the entry point for people exploring opportunities with NICONICO.", th: "เว็บไซต์อาชีพเป็นจุดเริ่มต้นสำหรับผู้ที่สนใจโอกาสในการร่วมงานกับ NICONICO" },
    role: { en: "Included in the selected project work. Individual responsibilities and implementation details need confirmation before they can be described further.", th: "เป็นหนึ่งในผลงานที่เลือกแสดง ต้องยืนยันหน้าที่ส่วนบุคคลและรายละเอียดการพัฒนาก่อนอธิบายเพิ่มเติม" },
    capabilities: [{ en: "Public career experience", th: "ประสบการณ์เว็บไซต์สมัครงาน" }],
    technical: { en: "The live product is available for review. Stack and private system design are not claimed here without confirmation.", th: "สามารถดูผลิตภัณฑ์จริงได้ โดยยังไม่ระบุเทคโนโลยีหรือสถาปัตยกรรมภายในที่ไม่ได้ยืนยัน" },
    reflection: { en: "A career page needs to make the path from interest to action easy to understand.", th: "หน้าอาชีพควรทำให้เส้นทางจากความสนใจไปสู่การลงมือสมัครเข้าใจง่าย" },
    technology: [], liveUrl: "https://career.nico-nico.co.th/"
  },
  {
    slug: "skin-md-thailand", title: "Skin MD Thailand", category: "website", visual: "skin", evidence: "public",
    subtitle: { en: "Product website", th: "เว็บไซต์ผลิตภัณฑ์" },
    lead: { en: "A bilingual product story for Skin MD Shielding Lotion.", th: "เว็บไซต์เล่าเรื่องผลิตภัณฑ์ Skin MD Shielding Lotion สองภาษา" },
    context: { en: "The public site presents product benefits, ingredients, customer reviews, and paths to contact or order in Thai and English.", th: "เว็บไซต์สาธารณะแสดงจุดเด่น ส่วนผสม รีวิว และช่องทางติดต่อหรือสั่งซื้อ ทั้งภาษาไทยและอังกฤษ" },
    role: { en: "Included in selected website work. Specific design and development responsibilities need confirmation.", th: "เป็นหนึ่งในผลงานเว็บไซต์ที่เลือกแสดง ต้องยืนยันขอบเขตงานออกแบบและพัฒนาเฉพาะส่วน" },
    capabilities: [{ en: "Thai and English content", th: "เนื้อหาภาษาไทยและอังกฤษ" }, { en: "Product and ingredient storytelling", th: "นำเสนอผลิตภัณฑ์และส่วนผสม" }, { en: "Contact and order paths", th: "ช่องทางติดต่อและสั่งซื้อ" }],
    technical: { en: "This case study focuses on the visible public experience. Implementation details are not inferred from the website.", th: "กรณีศึกษานี้กล่าวถึงประสบการณ์สาธารณะที่มองเห็นได้ ไม่คาดเดารายละเอียดการพัฒนา" },
    reflection: { en: "Product information should help visitors build confidence and find their next step quickly.", th: "ข้อมูลผลิตภัณฑ์ควรช่วยให้ผู้ชมมั่นใจและพบขั้นตอนถัดไปได้เร็ว" },
    technology: [], liveUrl: "https://www.skinmdthailand.com/en/", image: "/images/skinmd-hero.webp", imageAlt: { en: "Skin MD Shielding Lotion product imagery from the public website", th: "ภาพผลิตภัณฑ์ Skin MD Shielding Lotion จากเว็บไซต์สาธารณะ" }
  },
  {
    slug: "alangkan-thai", title: "Alangkan Thai", category: "website", visual: "construction", evidence: "public",
    subtitle: { en: "Construction services website", th: "เว็บไซต์บริการก่อสร้าง" },
    lead: { en: "A public web presence for design, construction, building systems, materials, and project services.", th: "เว็บไซต์นำเสนอบริการออกแบบ ก่อสร้าง งานระบบ วัสดุ และการบริหารโครงการ" },
    context: { en: "The public site introduces Alangkan Thai’s service range and provides ways to request project consultation and cost evaluation.", th: "เว็บไซต์สาธารณะแนะนำบริการของอลังการ ไทย พร้อมช่องทางขอคำปรึกษาและประเมินราคาโครงการ" },
    role: { en: "Included in selected website work. Specific design and development responsibilities need confirmation.", th: "เป็นหนึ่งในผลงานเว็บไซต์ที่เลือกแสดง ต้องยืนยันขอบเขตงานออกแบบและพัฒนาเฉพาะส่วน" },
    capabilities: [{ en: "Service overview", th: "ภาพรวมบริการ" }, { en: "Project consultation path", th: "ช่องทางปรึกษาโครงการ" }, { en: "Thai-language content", th: "เนื้อหาภาษาไทย" }],
    technical: { en: "This case study reflects the visible public website, without attributing unverified implementation decisions.", th: "กรณีศึกษานี้สะท้อนเว็บไซต์สาธารณะ โดยไม่อ้างการตัดสินใจทางเทคนิคที่ยังไม่ได้ยืนยัน" },
    reflection: { en: "A service site has to make a complex offering legible at a glance.", th: "เว็บไซต์บริการต้องทำให้ข้อเสนอที่ซับซ้อนเข้าใจได้ตั้งแต่แรกเห็น" },
    technology: [], liveUrl: "https://www.alangkanthai.net", image: "/images/alangkan-hero.png", imageAlt: { en: "Construction site imagery from Alangkan Thai’s public website", th: "ภาพงานก่อสร้างจากเว็บไซต์สาธารณะของอลังการ ไทย" }
  },
  {
    slug: "iso-it-support", title: "ISO IT Support", category: "system", visual: "support", evidence: "brief",
    subtitle: { en: "Internal support system · Mango Consultant", th: "ระบบสนับสนุนภายใน · Mango Consultant" },
    lead: { en: "An ISO-based IT support web system developed during a software developer internship.", th: "ระบบเว็บสนับสนุนงาน IT ตามแนวทาง ISO ที่พัฒนาระหว่างฝึกงานนักพัฒนาซอฟต์แวร์" },
    context: { en: "An internal tool for IT support workflows. Private screens and operational data are not published.", th: "เครื่องมือภายในสำหรับขั้นตอนงานสนับสนุน IT โดยไม่เผยแพร่หน้าจอและข้อมูลปฏิบัติงานภายใน" },
    role: { en: "Developed backend code using MVC architecture with a service layer, connected backend and frontend, contributed to frontend work, and improved UX/UI.", th: "พัฒนาแบ็กเอนด์ด้วยสถาปัตยกรรม MVC และ service layer เชื่อมต่อแบ็กเอนด์กับฟรอนต์เอนด์ มีส่วนร่วมกับฟรอนต์เอนด์ และปรับปรุง UX/UI" },
    capabilities: [{ en: "ISO-based IT support workflows", th: "ขั้นตอนสนับสนุน IT ตามแนวทาง ISO" }, { en: "Backend and frontend integration", th: "เชื่อมต่อแบ็กเอนด์และฟรอนต์เอนด์" }],
    technical: { en: "The backend separates controller flow from service-layer logic within an MVC structure. Specific modules and data models are omitted until confirmed.", th: "แบ็กเอนด์แยกการทำงานของคอนโทรลเลอร์ออกจากตรรกะใน service layer ภายใต้โครงสร้าง MVC โดยไม่ระบุโมดูลหรือโมเดลข้อมูลที่ยังไม่ได้ยืนยัน" },
    reflection: { en: "Internal tools succeed when the implementation and daily workflow stay close to each other.", th: "เครื่องมือภายในมีคุณค่าเมื่อการพัฒนาสอดคล้องกับขั้นตอนการทำงานประจำวัน" },
    technology: ["MVC", "Service layer", "Frontend/backend integration"]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
