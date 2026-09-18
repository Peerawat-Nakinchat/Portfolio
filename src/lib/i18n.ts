export type Lang = "en" | "th";

export const languages: Lang[] = ["en", "th"];
export const isLang = (value: string): value is Lang => languages.includes(value as Lang);
export type Localized = Record<Lang, string>;
export const t = (value: Localized, lang: Lang) => value[lang];

export const copy = {
  en: {
    navWork: "Work", navExperience: "Experience", navAbout: "About", navResume: "Resume", navContact: "Contact",
    role: "Software developer", heroLine1: "I build software", heroLine2: "for the way", heroLine3: "people work.",
    heroDesc: "I’m Peerawat Nakinchat. I build web applications, business systems, and integrations with attention to the people using them.",
    viewWork: "Explore selected work", resume: "View résumé", selected: "Selected work", selectedDesc: "Business platforms, connected systems, and web experiences.",
    allWork: "All projects", viewCase: "Read the case study", visit: "Visit live site", project: "Project", type: "Type", system: "System", website: "Website",
    experience: "Experience", experienceDesc: "Learning by building useful things in real teams.", about: "A little about me", aboutLead: "I care about the structure behind useful products—and the interface that makes it understandable.",
    aboutText: "I’m a software developer moving toward full-stack work. My strongest interest is in the structure behind useful products: backend logic, clear data flow, and reliable integrations. I also care about the interface where that work becomes understandable to people. I keep learning by building systems for actual workflows.",
    capabilities: "Working knowledge", contact: "Let’s make something useful.", contactText: "For a role, collaboration, or a conversation about software, I’d be glad to connect.",
    contactPending: "Contact details are being added.", back: "Back to projects", next: "Next project", overview: "Overview", context: "Context", scope: "Scope of work", features: "System capabilities", architecture: "Architecture", decisions: "Technical perspective", reflection: "Reflection", technologies: "Technology", constraints: "What can be shown", privacy: "Private system details and credentials are intentionally omitted.",
    resumeIntro: "Software developer focused on web applications, business systems, and integrations.", print: "Print / save as PDF", downloadPdf: "Download PDF", live: "Live site", noPublic: "Internal project", period: "Period", responsibility: "Responsibilities", source: "Project source", sourceNote: "The public product is linked where available. Internal implementation details are described only at the level confirmed by the project brief.",
    skip: "Skip to content"
  },
  th: {
    navWork: "ผลงาน", navExperience: "ประสบการณ์", navAbout: "เกี่ยวกับ", navResume: "เรซูเม่", navContact: "ติดต่อ",
    role: "นักพัฒนาซอฟต์แวร์", heroLine1: "ผมพัฒนาซอฟต์แวร์", heroLine2: "ให้สอดคล้องกับ", heroLine3: "วิธีทำงานของคน", 
    heroDesc: "ผม พีรวัฒน์ นาคินชาติ พัฒนาเว็บแอปพลิเคชัน ระบบธุรกิจ และการเชื่อมต่อระบบ โดยใส่ใจคนที่ใช้งานจริง",
    viewWork: "ดูผลงานที่เลือก", resume: "ดูเรซูเม่", selected: "ผลงานที่เลือก", selectedDesc: "แพลตฟอร์มธุรกิจ ระบบที่เชื่อมต่อกัน และประสบการณ์บนเว็บ",
    allWork: "ผลงานทั้งหมด", viewCase: "อ่านกรณีศึกษา", visit: "ไปยังเว็บไซต์", project: "โครงการ", type: "ประเภท", system: "ระบบ", website: "เว็บไซต์",
    experience: "ประสบการณ์", experienceDesc: "เรียนรู้ผ่านการสร้างสิ่งที่ใช้ได้จริงร่วมกับทีม", about: "เกี่ยวกับผม", aboutLead: "ผมใส่ใจทั้งโครงสร้างเบื้องหลังระบบ และหน้าจอที่ทำให้คนใช้งานเข้าใจได้",
    aboutText: "ผมเป็นนักพัฒนาซอฟต์แวร์ที่มุ่งไปสู่งานฟูลสแตก สนใจโครงสร้างเบื้องหลังผลิตภัณฑ์ที่ใช้งานได้จริง ทั้งตรรกะแบ็กเอนด์ การไหลของข้อมูล และการเชื่อมต่อระบบที่เชื่อถือได้ ขณะเดียวกันก็ใส่ใจหน้าจอที่ช่วยให้ผู้ใช้เข้าใจระบบ และเรียนรู้อย่างต่อเนื่องจากการสร้างงานสำหรับขั้นตอนการทำงานจริง",
    capabilities: "ความสามารถที่ใช้", contact: "มาสร้างสิ่งที่มีประโยชน์กัน", contactText: "หากสนใจร่วมงาน พูดคุย หรือแลกเปลี่ยนเรื่องซอฟต์แวร์ ยินดีที่ได้รู้จักครับ",
    contactPending: "กำลังเพิ่มช่องทางการติดต่อ", back: "กลับไปยังผลงาน", next: "โครงการถัดไป", overview: "ภาพรวม", context: "บริบท", scope: "ขอบเขตงาน", features: "ความสามารถของระบบ", architecture: "สถาปัตยกรรม", decisions: "มุมมองทางเทคนิค", reflection: "สิ่งที่ได้เรียนรู้", technologies: "เทคโนโลยี", constraints: "ข้อมูลที่เผยแพร่ได้", privacy: "ไม่แสดงรายละเอียดระบบภายในหรือข้อมูลรับรองการเข้าถึง",
    resumeIntro: "นักพัฒนาซอฟต์แวร์ที่มุ่งเน้นเว็บแอปพลิเคชัน ระบบธุรกิจ และการเชื่อมต่อระบบ", print: "พิมพ์ / บันทึกเป็น PDF", downloadPdf: "ดาวน์โหลด PDF", live: "เว็บไซต์", noPublic: "โครงการภายใน", period: "ช่วงเวลา", responsibility: "หน้าที่", source: "แหล่งข้อมูลโครงการ", sourceNote: "มีลิงก์ผลิตภัณฑ์ที่เผยแพร่สาธารณะ ส่วนรายละเอียดภายในจะอธิบายตามข้อมูลที่ยืนยันในโจทย์เท่านั้น",
    skip: "ข้ามไปยังเนื้อหา"
  }
} as const;
