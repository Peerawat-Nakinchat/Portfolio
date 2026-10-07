export type Lang = "en" | "th";

export const languages: Lang[] = ["en", "th"];
export const isLang = (value: string): value is Lang => languages.includes(value as Lang);
export type Localized = Record<Lang, string>;
export const t = (value: Localized, lang: Lang) => value[lang];

export const copy = {
  en: {
    navWork: "Work", navExperience: "Experience", navAbout: "About", navResume: "Resume", navContact: "Contact",
    role: "Software developer", heroLine1: "I build software", heroLine2: "for the way", heroLine3: "people work.",
    heroDesc: "I’m Peerawat Nakinchat, a software developer working across frontend, system integration, and backend structure to turn business workflows into software people can actually use.",
    viewWork: "Explore selected work", resume: "View résumé", selected: "Selected work", selectedDesc: "Business platforms, connected systems, and web experiences.",
    allWork: "All projects", viewCase: "Read the case study", visit: "Visit live site", project: "Project", type: "Type", system: "System", website: "Website",
    experience: "Experience", experienceDesc: "Learning by building useful things in real teams.", about: "A little about me", aboutLead: "I work across the product boundary—from the interface people touch to the systems and services behind it.",
    aboutText: "I’m a software developer with a full-stack perspective. My strongest interest is in the structure behind useful products: backend logic, clear data flow, and reliable integrations. I also care about the interface where that work becomes understandable to people. I keep learning by building systems for actual workflows.",
    capabilities: "Working knowledge", contact: "Let’s make something useful.", contactText: "For a role, collaboration, or a conversation about software, I’d be glad to connect.",
    contactPending: "Contact details are being added.", back: "Back to projects", next: "Next project", overview: "Overview", context: "Problem & context", scope: "My contribution", features: "What the product does", architecture: "Architecture", decisions: "Stack & structure", approach: "How I approached it", reflection: "What I learned", technologies: "Stack", constraints: "Evidence & privacy", privacy: "Private system details and credentials are intentionally omitted.",
    resumeIntro: "Software developer working across frontend interfaces, system integration, and backend structure.", print: "Print / save as PDF", downloadPdf: "Download PDF", live: "Live site", noPublic: "Internal project", period: "Period", responsibility: "Responsibilities", source: "Project source", sourceNote: "The public product is linked where available. Internal implementation details are described only at the level confirmed by the project brief.",
    skip: "Skip to content"
  },
  th: {
    navWork: "ผลงาน", navExperience: "ประสบการณ์", navAbout: "เกี่ยวกับ", navResume: "เรซูเม่", navContact: "ติดต่อ",
    role: "นักพัฒนาซอฟต์แวร์", heroLine1: "ผมพัฒนาซอฟต์แวร์", heroLine2: "ให้สอดคล้องกับ", heroLine3: "วิธีทำงานของคน", 
    heroDesc: "ผม พีรวัฒน์ นาคินชาติ นักพัฒนาซอฟต์แวร์ที่ทำงานตั้งแต่ฟรอนต์เอนด์ การเชื่อมต่อระบบ ไปจนถึงโครงสร้างแบ็กเอนด์ เพื่อเปลี่ยนขั้นตอนธุรกิจให้เป็นซอฟต์แวร์ที่คนใช้งานได้จริง",
    viewWork: "ดูผลงานที่เลือก", resume: "ดูเรซูเม่", selected: "ผลงานที่เลือก", selectedDesc: "แพลตฟอร์มธุรกิจ ระบบที่เชื่อมต่อกัน และประสบการณ์บนเว็บ",
    allWork: "ผลงานทั้งหมด", viewCase: "อ่านกรณีศึกษา", visit: "ไปยังเว็บไซต์", project: "โครงการ", type: "ประเภท", system: "ระบบ", website: "เว็บไซต์",
    experience: "ประสบการณ์", experienceDesc: "เรียนรู้ผ่านการสร้างสิ่งที่ใช้ได้จริงร่วมกับทีม", about: "เกี่ยวกับผม", aboutLead: "ผมทำงานครอบคลุมทั้งหน้าจอที่ผู้ใช้สัมผัส และระบบกับบริการที่ทำงานอยู่เบื้องหลัง",
    aboutText: "ผมเป็นนักพัฒนาซอฟต์แวร์ที่มองงานแบบฟูลสแตก สนใจโครงสร้างเบื้องหลังผลิตภัณฑ์ที่ใช้งานได้จริง ทั้งตรรกะแบ็กเอนด์ การไหลของข้อมูล และการเชื่อมต่อระบบที่เชื่อถือได้ ขณะเดียวกันก็ใส่ใจหน้าจอที่ช่วยให้ผู้ใช้เข้าใจระบบ และเรียนรู้อย่างต่อเนื่องจากการสร้างงานสำหรับขั้นตอนการทำงานจริง",
    capabilities: "ความสามารถที่ใช้", contact: "มาสร้างสิ่งที่มีประโยชน์กัน", contactText: "หากสนใจร่วมงาน พูดคุย หรือแลกเปลี่ยนเรื่องซอฟต์แวร์ ยินดีที่ได้รู้จักครับ",
    contactPending: "กำลังเพิ่มช่องทางการติดต่อ", back: "กลับไปยังผลงาน", next: "โครงการถัดไป", overview: "ภาพรวม", context: "โจทย์และบริบท", scope: "ส่วนที่ผมรับผิดชอบ", features: "ระบบทำอะไรได้", architecture: "สถาปัตยกรรม", decisions: "Stack และโครงสร้าง", approach: "วิธีที่ผมใช้ทำ", reflection: "สิ่งที่ผมได้เรียนรู้", technologies: "Stack", constraints: "หลักฐานและความเป็นส่วนตัว", privacy: "ไม่แสดงรายละเอียดระบบภายในหรือข้อมูลรับรองการเข้าถึง",
    resumeIntro: "นักพัฒนาซอฟต์แวร์ที่ทำงานตั้งแต่หน้าจอฟรอนต์เอนด์ การเชื่อมต่อระบบ ไปจนถึงโครงสร้างแบ็กเอนด์", print: "พิมพ์ / บันทึกเป็น PDF", downloadPdf: "ดาวน์โหลด PDF", live: "เว็บไซต์", noPublic: "โครงการภายใน", period: "ช่วงเวลา", responsibility: "หน้าที่", source: "แหล่งข้อมูลโครงการ", sourceNote: "มีลิงก์ผลิตภัณฑ์ที่เผยแพร่สาธารณะ ส่วนรายละเอียดภายในจะอธิบายตามข้อมูลที่ยืนยันในโจทย์เท่านั้น",
    skip: "ข้ามไปยังเนื้อหา"
  }
} as const;
