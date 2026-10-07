export const profile: { name: string; email: string; facebook: string; github: string; linkedin: string; resumePdf: string } = {
  name: "Peerawat Nakinchat",
  email: "minlovely2547@gmail.com",
  facebook: "https://www.facebook.com/share/1CZvhVGeAv/",
  github: "https://github.com/Peerawat-Nakinchat",
  linkedin: "",
  resumePdf: "",
};

export const experience = [
  {
    company: "HOP Chafe",
    role: { en: "Full-stack Developer · Contract", th: "นักพัฒนา Full-stack · สัญญาจ้าง" },
    dates: { en: "3-month contract", th: "สัญญาจ้าง 3 เดือน" },
    description: {
      en: "Developed both the frontend and backend of a recruitment management system used across three companies. Built multi-tenant workflows covering job openings, applicant screening, interviews, offers, onboarding, and employee data transfer to ERP.",
      th: "พัฒนาทั้ง Frontend และ Backend ของระบบ Recruitment Management ที่ใช้งานร่วมกัน 3 บริษัท ออกแบบให้รองรับ Multi-tenant ตั้งแต่เปิดตำแหน่ง รับสมัคร คัดกรอง สัมภาษณ์ ออกข้อเสนอ รับเข้าทำงาน และส่งข้อมูลพนักงานต่อไปยัง ERP"
    }
  },
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
