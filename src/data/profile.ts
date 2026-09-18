export const profile: { name: string; email: string; github: string; linkedin: string; resumePdf: string } = {
  name: "Peerawat Nakinchat",
  email: "",
  github: "https://github.com/Peerawat-Nakinchat",
  linkedin: "",
  resumePdf: "",
};

export const experience = [
  {
    company: "Mango Consultant",
    role: { en: "Software Developer Intern", th: "นักพัฒนาซอฟต์แวร์ฝึกงาน" },
    dates: { en: "3 Nov 2025 — 31 Mar 2026", th: "3 พ.ย. 2568 — 31 มี.ค. 2569" },
    description: { en: "Developed an ISO-based IT support web system. Built backend code with MVC and a service layer, connected backend and frontend, contributed to the interface, and improved UX/UI.", th: "พัฒนาระบบเว็บสนับสนุนงาน IT ตามแนวทาง ISO เขียนแบ็กเอนด์ด้วย MVC และ service layer เชื่อมต่อกับฟรอนต์เอนด์ มีส่วนร่วมกับหน้าจอ และปรับปรุง UX/UI" }
  },
  {
    company: "ZatService Company",
    role: { en: "Installation Support Intern", th: "นักศึกษาฝึกงานฝ่ายสนับสนุนการติดตั้ง" },
    dates: { en: "Jun — Sep 2021", th: "มิ.ย. — ก.ย. 2564" },
    description: { en: "Installation support internship.", th: "ฝึกงานด้านการสนับสนุนการติดตั้ง" }
  }
] as const;
