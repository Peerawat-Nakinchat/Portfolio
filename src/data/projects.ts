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
  architecture?: Localized[];
  approach: Localized;
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
    subtitle: { en: "Full‑stack multi‑tenant recruitment system", th: "ระบบสรรหาบุคลากรแบบ Full‑stack และ Multi‑tenant" },
    lead: { en: "I built both the frontend and backend of a recruitment management system used across three companies—from public job applications to hiring and ERP handoff.", th: "ผมพัฒนาทั้ง Frontend และ Backend ของระบบ Recruitment Management ที่ใช้ร่วมกัน 3 บริษัท ตั้งแต่เปิดรับสมัคร คัดเลือก ออกข้อเสนอ ไปจนถึงรับเข้าทำงานและส่งข้อมูลต่อ ERP" },
    context: { en: "The original recruitment process contained many connected rules, screens, and data sources. I first reverse-engineered the existing workflow and data model, then rebuilt it as one system where HR can follow every candidate while each company sees only its own data and configuration.", th: "กระบวนการสรรหาเดิมมีทั้งกฎ หน้าจอ และข้อมูลที่เชื่อมกันหลายส่วน ผมเริ่มจากแกะ workflow และ data model ของระบบเดิมอย่างละเอียด แล้วเรียบเรียงใหม่เป็นระบบเดียวที่ HR ติดตามผู้สมัครได้ตั้งแต่ต้นจนจบ โดยแต่ละบริษัทเห็นเฉพาะข้อมูลและการตั้งค่าของตัวเอง" },
    role: { en: "I owned the work end to end: analyzing the existing HR process, designing the frontend flow, building the API and business rules, mapping the database, and integrating SSO, ERP, Google Calendar, email, uploads, contracts, and the public career site. I also implemented the multi-tenant model for three companies, including brand-scoped sessions, reads, writes, settings, branding, and career content.", th: "ผมรับผิดชอบงานแบบ End-to-end ตั้งแต่แกะกระบวนการ HR เดิม ออกแบบ flow ฝั่งหน้าจอ สร้าง API และ business rule ทำ database mapping และเชื่อม SSO, ERP, Google Calendar, Email, Upload, สัญญา และเว็บไซต์ Career รวมถึงออกแบบ Multi-tenant ให้รองรับ 3 บริษัท โดยแยกสิทธิ์ session การอ่าน–เขียนข้อมูล การตั้งค่า Branding และเนื้อหา Career ตามบริษัท" },
    capabilities: [
      { en: "Recruitment board with 8 stages and 25 detailed statuses", th: "Recruitment Board 8 ขั้นตอน พร้อมสถานะย่อย 25 แบบ" },
      { en: "Candidate profiles, screening answers, documents, history, and duplicate checks", th: "ข้อมูลผู้สมัคร คำตอบคัดกรอง เอกสาร ประวัติ และการตรวจผู้สมัครซ้ำ" },
      { en: "Position and job-posting management with ERP master data", th: "จัดการตำแหน่งและประกาศงาน พร้อมดึง Master Data จาก ERP" },
      { en: "Interview scheduling, reschedule requests, Google Calendar, and Meet links", th: "นัดและเลื่อนสัมภาษณ์ เชื่อม Google Calendar และสร้าง Google Meet" },
      { en: "Structured interview evaluation through secure public links", th: "แบบประเมินสัมภาษณ์ที่ส่งให้ผู้ประเมินผ่านลิงก์เฉพาะ" },
      { en: "Offer magic links, candidate decisions, signatures, and contract PDFs", th: "ส่งข้อเสนอผ่าน Magic Link รับลายเซ็น และจัดการสัญญา PDF" },
      { en: "Document-template editor with variables, DOCX import, and PDF preview", th: "เครื่องมือสร้าง Template พร้อมตัวแปร นำเข้า DOCX และ Preview PDF" },
      { en: "HR dashboard covering KPIs, funnel, SLA, trends, offer outcomes, and risk", th: "Dashboard สำหรับ KPI, Funnel, SLA, แนวโน้ม ผลข้อเสนอ และตำแหน่งเสี่ยง" },
      { en: "Per-company career pages, branding, permissions, settings, and Google accounts", th: "Career Page, Branding, สิทธิ์ การตั้งค่า และบัญชี Google แยกตามบริษัท" },
      { en: "SSO, role-based access, ERP hire sync, retention, and PDPA settings", th: "SSO, Role-based Access, ERP Hire Sync, Retention และการตั้งค่า PDPA" },
    ],
    technical: { en: "The product is split into three independently deployable applications: an authenticated HR admin app, a public career app, and an Elysia API. The frontend is feature-first; server data stays in TanStack Query while Zustand is limited to interface state. The backend uses Clean Architecture per feature with domain, application, infrastructure, and presentation layers over Drizzle and PostgreSQL.", th: "ระบบแยกเป็น 3 แอปที่ Deploy ได้อิสระ ได้แก่ HR Admin สำหรับพนักงาน เว็บไซต์ Career สำหรับผู้สมัคร และ Elysia API ฝั่ง Frontend จัดแบบ Feature-first ใช้ TanStack Query ดูแล Server State และใช้ Zustand เฉพาะ UI State ส่วน Backend แยก Clean Architecture ต่อ Feature เป็น Domain, Application, Infrastructure และ Presentation ทำงานผ่าน Drizzle กับ PostgreSQL" },
    architecture: [
      { en: "HR Admin · Next.js 16, React 19, MUI, TanStack Query, and Zustand", th: "HR Admin · Next.js 16, React 19, MUI, TanStack Query และ Zustand" },
      { en: "Public Career · Separate Next.js app resolving company identity from the request hostname", th: "Public Career · Next.js แยกอีกแอป และเลือกบริษัทจาก hostname ของ request" },
      { en: "API · Bun, Elysia, feature-level Clean Architecture, Drizzle ORM, and PostgreSQL", th: "API · Bun, Elysia, Clean Architecture แยกตาม Feature, Drizzle ORM และ PostgreSQL" },
      { en: "Tenant boundary · Session brandId plus repository filters and write validators isolate company data", th: "Tenant Boundary · ใช้ brandId ใน Session ร่วมกับ Repository Filter และ Write Validator เพื่อแยกข้อมูลบริษัท" },
      { en: "Integrations · OIDC SSO, ERP metadata and hire sync, Google Calendar/Meet, Resend, DOCX, and PDF", th: "Integration · OIDC SSO, ERP Metadata และ Hire Sync, Google Calendar/Meet, Resend, DOCX และ PDF" },
    ],
    approach: { en: "I did not start from the screens. I traced the real process from a job posting and application through screening, interview, evaluation, offer, documents, and hire. I then mapped every transition, permission, and side effect before splitting the work into frontend features and backend use cases. For multi-tenancy, I treated company identity as a server-side boundary: the session resolves brandId, repositories scope reads, validators block cross-brand writes, and public career sites resolve their brand from the hostname.", th: "ผมไม่ได้เริ่มจากวาดหน้าจอ แต่ไล่กระบวนการจริงตั้งแต่ประกาศงาน รับใบสมัคร คัดกรอง สัมภาษณ์ ประเมิน ส่งข้อเสนอ เตรียมเอกสาร จนถึงรับเข้าทำงาน แล้วจึง map ทุก transition, permission และ side effect ก่อนแยกเป็น Feature ฝั่ง Frontend กับ Use Case ฝั่ง Backend ส่วน Multi-tenant ผมวางบริษัทเป็นขอบเขตที่ตรวจจาก Server: Session ระบุ brandId, Repository กรองข้อมูลตอนอ่าน, Validator กันการเขียนข้ามบริษัท และเว็บไซต์ Career เลือกแบรนด์จาก hostname" },
    reflection: { en: "The hardest part was not building individual screens; it was keeping the same business rules consistent across three companies, three applications, public links, and external services. Making tenant scope and pipeline transitions explicit turned that complexity into something the team could trace and maintain.", th: "ส่วนที่ยากไม่ใช่การทำหน้าจอแต่ละหน้า แต่คือการทำให้ business rule เดียวกันทำงานถูกต้องข้าม 3 บริษัท 3 แอป Public Link และบริการภายนอก การกำหนด Tenant Scope กับ Pipeline Transition ให้ชัดเจนช่วยให้ระบบซับซ้อนนี้ตามรอยและดูแลต่อได้" },
    technology: ["Next.js 16", "React 19", "TypeScript", "MUI", "TanStack Query", "Zustand", "Bun", "Elysia", "Drizzle ORM", "PostgreSQL", "OIDC SSO", "Google Calendar API", "ERP integration"], liveUrl: "https://hr.hopchafe.co.th/"
  },
  {
    slug: "niconico-member", title: "NICONICO Member", category: "system", visual: "flow", evidence: "brief",
    subtitle: { en: "ERP-connected member rewards platform", th: "แพลตฟอร์มสมาชิกและสิทธิประโยชน์ที่เชื่อม ERP" },
    lead: { en: "I built a responsive member platform that brings accounts, ERP product and reward catalogs, point balances, product and coupon exchanges, owned rewards, history, and profile management into one customer journey.", th: "ผมพัฒนาแพลตฟอร์มสมาชิกแบบ Responsive ที่รวมบัญชีสมาชิก แค็ตตาล็อกสินค้าและของรางวัลจาก ERP คะแนน การแลกสินค้าและคูปอง สิทธิ์ที่มี ประวัติ และการจัดการโปรไฟล์ไว้ใน Journey เดียว" },
    context: { en: "Member, product, point, reward, and coupon data already lived across business systems, but customers needed one experience that remained clear on both desktop and mobile. The website also had to adapt its identity for different affiliate brands without exposing ERP details to the browser.", th: "ข้อมูลสมาชิก สินค้า คะแนน ของรางวัล และคูปองอยู่ในระบบธุรกิจเดิม แต่ลูกค้าต้องการประสบการณ์เดียวที่ใช้งานง่ายทั้ง Desktop และ Mobile เว็บไซต์ยังต้องปรับ Identity ให้เหมาะกับแต่ละแบรนด์ โดยไม่เปิดรายละเอียดการเชื่อม ERP ไว้ในเบราว์เซอร์" },
    role: { en: "I worked across the member-facing Next.js application and its server-side integration layer. The scope covered account flows, product and reward interfaces, cart state, points and exchanges, coupons, history, profile editing, validation, internationalization, responsive navigation, and configurable brand presentation.", th: "ผมทำงานครอบคลุมทั้งแอป Next.js ฝั่งสมาชิกและชั้นเชื่อมต่อระบบฝั่งเซิร์ฟเวอร์ ตั้งแต่ Flow บัญชี หน้าสินค้าและของรางวัล Cart คะแนนและการแลก คูปอง ประวัติ การแก้ไขโปรไฟล์ Validation ระบบสองภาษา Navigation แบบ Responsive และการปรับหน้าตาตามแบรนด์" },
    capabilities: [
      { en: "Registration, email verification, sign-in, and password recovery", th: "สมัครสมาชิก ยืนยันอีเมล เข้าสู่ระบบ และกู้รหัสผ่าน" },
      { en: "ERP product and reward catalogs with search and product details", th: "แค็ตตาล็อกสินค้าและของรางวัลจาก ERP พร้อมค้นหาและดูรายละเอียด" },
      { en: "Persistent reward cart with quantity controls and point estimates", th: "Cart ของรางวัลที่จดจำรายการ ปรับจำนวน และคำนวณคะแนน" },
      { en: "Point balance, earning history, and clear insufficient-balance states", th: "ยอดคะแนน ประวัติการได้คะแนน และสถานะเมื่อคะแนนไม่พอ" },
      { en: "Product-reward exchange and owned rewards with remaining units and expiry", th: "แลกสินค้าและดูสิทธิ์ที่มี พร้อมจำนวนคงเหลือและวันหมดอายุ" },
      { en: "Coupon catalog, point exchange, and owned-coupon statuses", th: "แค็ตตาล็อกคูปอง แลกด้วยคะแนน และติดตามสถานะคูปองที่มี" },
      { en: "Combined product, coupon, and point activity history", th: "ประวัติสินค้า คูปอง และความเคลื่อนไหวของคะแนน" },
      { en: "Profile editing, email-change verification, membership tier, and point-reset information", th: "แก้ไขโปรไฟล์ ยืนยันการเปลี่ยนอีเมล ระดับสมาชิก และข้อมูลรอบรีเซ็ตคะแนน" },
      { en: "Thai–English interface with responsive desktop and mobile navigation", th: "หน้าจอไทย–อังกฤษ พร้อม Navigation สำหรับ Desktop และ Mobile" },
      { en: "Configurable company identity, logo, colors, and theme", th: "ปรับชื่อบริษัท โลโก้ สี และ Theme ตามแบรนด์" },
    ],
    technical: { en: "The frontend uses a feature-first structure on Next.js App Router. TanStack Query manages server data, Zustand keeps the cart responsive and persistent, and React Hook Form with Zod handles forms and validation. The browser calls a same-origin server layer that translates ERP data into the contracts required by each screen, keeping the member interface independent from ERP response details. Thai and English content is handled through next-intl, while MUI provides the responsive interface and configurable theme.", th: "Frontend จัดโครงสร้างแบบ Feature-first บน Next.js App Router ใช้ TanStack Query ดูแลข้อมูลจากเซิร์ฟเวอร์, Zustand ทำให้ Cart ตอบสนองเร็วและจดจำรายการ และใช้ React Hook Form ร่วมกับ Zod สำหรับ Form กับ Validation เบราว์เซอร์เรียกชั้น Server แบบ Same-origin ซึ่งแปลงข้อมูลจาก ERP ให้เป็น Contract ที่แต่ละหน้าต้องใช้ ทำให้หน้าจอสมาชิกไม่ผูกกับรูปแบบ Response ของ ERP โดยตรง ส่วนเนื้อหาไทย–อังกฤษใช้ next-intl และใช้ MUI สร้าง Responsive Interface กับ Theme ที่ปรับได้" },
    architecture: [
      { en: "Member interface · Next.js 16 App Router, React 19, MUI, responsive navigation, and next-intl", th: "Member Interface · Next.js 16 App Router, React 19, MUI, Responsive Navigation และ next-intl" },
      { en: "State and forms · TanStack Query, persistent Zustand cart, React Hook Form, and Zod", th: "State และ Form · TanStack Query, Zustand Cart แบบ Persist, React Hook Form และ Zod" },
      { en: "Integration layer · Same-origin server routes map member, catalog, point, reward, coupon, and profile data", th: "Integration Layer · Server Route แบบ Same-origin แปลงข้อมูลสมาชิก สินค้า คะแนน ของรางวัล คูปอง และโปรไฟล์" },
      { en: "ERP boundary · The browser works with page-focused contracts instead of ERP response shapes", th: "ERP Boundary · เบราว์เซอร์ทำงานกับ Contract ของแต่ละหน้าแทนการผูกกับ Response ของ ERP" },
      { en: "Brand configuration · Shared product structure with configurable identity, logo, palette, and company information", th: "Brand Configuration · ใช้โครงสร้างผลิตภัณฑ์ร่วมกันและปรับ Identity, Logo, Palette และข้อมูลบริษัทได้" },
    ],
    approach: { en: "I mapped the complete member journey from account creation through browsing, cart, exchange confirmation, owned rewards, history, and profile changes. I kept the UI focused on member actions, then placed ERP mapping and business responses behind a clear integration boundary. This made loading, empty, insufficient-point, unavailable-item, success, and retry states part of the product flow instead of afterthoughts.", th: "ผมไล่ Journey สมาชิกตั้งแต่สร้างบัญชี เลือกสินค้า ใส่ Cart ยืนยันการแลก ดูสิทธิ์ที่มี ประวัติ และแก้ข้อมูลส่วนตัว โดยให้ UI สนใจเฉพาะ Action ของสมาชิก แล้ววางการแปลงข้อมูล ERP กับผลลัพธ์ทางธุรกิจไว้หลัง Integration Boundary ที่ชัดเจน ทำให้สถานะ Loading, Empty, คะแนนไม่พอ, สินค้าไม่พร้อม, สำเร็จ และลองใหม่ ถูกออกแบบเป็นส่วนหนึ่งของ Flow ตั้งแต่ต้น" },
    reflection: { en: "The difficult part was keeping one member journey coherent while account, point, reward, coupon, and brand data came from different concerns. A clear boundary between interface state, server data, and ERP mapping made the experience easier to reason about and safer to evolve.", th: "ส่วนที่ยากคือการทำให้ Journey เดียวของสมาชิกยังต่อเนื่อง แม้ข้อมูลบัญชี คะแนน ของรางวัล คูปอง และ Branding จะมีเงื่อนไขต่างกัน การแยก Interface State, Server Data และ ERP Mapping ออกจากกันช่วยให้ตามเหตุผลของระบบง่ายขึ้นและแก้ไขต่อได้ปลอดภัยกว่าเดิม" },
    technology: ["Next.js 16", "React 19", "TypeScript", "MUI", "TanStack Query", "Zustand", "React Hook Form", "Zod", "next-intl", "ERP integration", "Vitest"], liveUrl: "https://crm.nico-nico.co.th/"
  },
  {
    slug: "niconico-career", title: "NICONICO Career", category: "system", visual: "career", evidence: "brief",
    subtitle: { en: "Career platform", th: "แพลตฟอร์มสมัครงาน" },
    lead: { en: "A public career website that introduces NICONICO and gives interested candidates a clear route to available opportunities.", th: "เว็บไซต์สมัครงานของ NICONICO ที่ช่วยให้ผู้สมัครรู้จักบริษัทและไปต่อยังโอกาสร่วมงานได้ง่าย" },
    context: { en: "People arriving at a career site usually have two questions: what is this company like, and where can I apply? The page needs to answer both without making them search around.", th: "คนที่เข้าหน้า Career มักอยากรู้สองเรื่อง คือบริษัทเป็นอย่างไรและสมัครงานตรงไหน หน้านี้จึงต้องตอบทั้งสองเรื่องโดยไม่ให้ผู้ใช้ต้องหาเองหลายรอบ" },
    role: { en: "I’m presenting this project through the public experience that can be reviewed today. Private implementation details and individual ownership that have not been documented are left out.", th: "ผมนำเสนอโปรเจกต์นี้ผ่านประสบการณ์บนเว็บไซต์ที่เปิดดูได้จริง ส่วนรายละเอียดภายในและขอบเขตงานเฉพาะที่ยังไม่มีข้อมูลยืนยันจะไม่ใส่เพิ่ม" },
    capabilities: [{ en: "Public career experience", th: "ประสบการณ์เว็บไซต์สมัครงาน" }],
    technical: { en: "The live website can be reviewed, but its private stack and internal architecture are not documented here.", th: "มีเว็บไซต์จริงให้เปิดดูได้ แต่ยังไม่มีข้อมูลยืนยันเกี่ยวกับ Stack และโครงสร้างระบบภายใน จึงไม่ระบุเพิ่ม" },
    approach: { en: "I look at the page as a short path: introduce the company, show why someone might want to join, then make the next action obvious. That is the part of the experience this case study focuses on.", th: "ผมมองหน้านี้เป็นเส้นทางสั้น ๆ เริ่มจากแนะนำบริษัท บอกเหตุผลที่คนน่าจะอยากร่วมงาน แล้วทำให้ขั้นตอนถัดไปเห็นชัด กรณีศึกษาจึงโฟกัสที่ประสบการณ์ส่วนนี้" },
    reflection: { en: "A career page does not need to explain everything. It needs to give enough context for the right person to take the next step.", th: "หน้า Career ไม่จำเป็นต้องอธิบายทุกอย่าง แต่ต้องให้ข้อมูลพอที่คนซึ่งสนใจจะตัดสินใจไปขั้นต่อไปได้" },
    technology: [], liveUrl: "https://career.nico-nico.co.th/"
  },
  {
    slug: "skin-md-thailand", title: "Skin MD Thailand", category: "website", visual: "skin", evidence: "public",
    subtitle: { en: "Product website", th: "เว็บไซต์ผลิตภัณฑ์" },
    lead: { en: "A Thai–English product website for Skin MD Shielding Lotion, covering benefits, ingredients, reviews, and ways to order.", th: "เว็บไซต์สินค้า Skin MD Shielding Lotion รองรับไทย–อังกฤษ มีทั้งจุดเด่น ส่วนผสม รีวิว และช่องทางสั่งซื้อ" },
    context: { en: "Visitors need to understand an unfamiliar skincare product before they feel comfortable buying it. The page therefore has to explain what it does, show supporting information, and make ordering easy.", th: "ผู้เข้าชมต้องเข้าใจสินค้าดูแลผิวที่ยังไม่คุ้นก่อนจึงจะตัดสินใจซื้อ หน้าเว็บจึงต้องอธิบายว่าสินค้าช่วยอะไร มีข้อมูลรองรับ และสั่งซื้อได้อย่างไร" },
    role: { en: "I’m showing this work through the public-facing website: its bilingual content, product presentation, and the route from learning about the product to contacting or ordering.", th: "ผมนำเสนองานนี้ผ่านเว็บไซต์ที่ผู้ใช้เห็นจริง ทั้งเนื้อหาสองภาษา การนำเสนอสินค้า และเส้นทางตั้งแต่ทำความรู้จักสินค้าไปจนถึงการติดต่อหรือสั่งซื้อ" },
    capabilities: [{ en: "Thai and English content", th: "เนื้อหาภาษาไทยและอังกฤษ" }, { en: "Product and ingredient storytelling", th: "นำเสนอผลิตภัณฑ์และส่วนผสม" }, { en: "Contact and order paths", th: "ช่องทางติดต่อและสั่งซื้อ" }],
    technical: { en: "This case study covers the public website and its content structure. The private implementation stack is not listed because it has not been confirmed.", th: "กรณีศึกษานี้อธิบายเว็บไซต์สาธารณะและโครงสร้างเนื้อหา ส่วน Stack ภายในยังไม่มีข้อมูลยืนยันจึงไม่ใส่เพิ่ม" },
    approach: { en: "I arranged the story in the same order a customer would ask questions: what is it, why should I trust it, what is inside it, what do other customers say, and where can I buy it? Thai and English follow the same order.", th: "ผมเรียงเนื้อหาตามคำถามที่ลูกค้าน่าจะถาม คือสินค้าอะไร น่าเชื่อถืออย่างไร มีส่วนผสมอะไร คนอื่นใช้แล้วเป็นอย่างไร และซื้อได้ที่ไหน ทั้งภาษาไทยและอังกฤษใช้ลำดับเดียวกัน" },
    reflection: { en: "For a product site, clearer information can do more than adding another visual effect. People need confidence before they need decoration.", th: "สำหรับเว็บสินค้า ข้อมูลที่ชัดช่วยได้มากกว่าการเพิ่มลูกเล่น เพราะผู้ใช้ต้องการความมั่นใจก่อนความสวยงาม" },
    technology: [], liveUrl: "https://www.skinmdthailand.com/en/", image: "/images/skin-md-ui.jpg", imageAlt: { en: "Skin MD Shielding Lotion public website interface", th: "หน้าเว็บไซต์สาธารณะของ Skin MD Shielding Lotion" }
  },
  {
    slug: "alangkan-thai", title: "Alangkan Thai", category: "website", visual: "construction", evidence: "public",
    subtitle: { en: "Construction services website", th: "เว็บไซต์บริการก่อสร้าง" },
    lead: { en: "A construction service website covering design, construction, building systems, materials, consultation, and cost evaluation.", th: "เว็บไซต์บริการก่อสร้างที่รวมงานออกแบบ ก่อสร้าง งานระบบ วัสดุ การให้คำปรึกษา และการประเมินราคา" },
    context: { en: "The company offers several related services. The website needs to make that range easy to scan and give potential clients a clear way to start a conversation about their project.", th: "บริษัทมีบริการที่เกี่ยวข้องกันหลายด้าน หน้าเว็บจึงต้องสรุปให้ดูง่าย และพาลูกค้าที่มีโครงการไปยังช่องทางเริ่มพูดคุยได้ชัดเจน" },
    role: { en: "I’m showing this project through the public website: how the service categories are presented, how project information is grouped, and how visitors reach consultation or cost evaluation.", th: "ผมนำเสนอโปรเจกต์นี้ผ่านหน้าเว็บที่เปิดดูได้จริง โดยดูทั้งการจัดหมวดบริการ การเรียงข้อมูลโครงการ และเส้นทางที่พาผู้ใช้ไปขอคำปรึกษาหรือประเมินราคา" },
    capabilities: [{ en: "Service overview", th: "ภาพรวมบริการ" }, { en: "Project consultation path", th: "ช่องทางปรึกษาโครงการ" }, { en: "Thai-language content", th: "เนื้อหาภาษาไทย" }],
    technical: { en: "This case study covers the structure visible on the public site. The private development stack is not listed because it has not been confirmed.", th: "กรณีศึกษานี้อธิบายโครงสร้างที่เห็นจากเว็บไซต์สาธารณะ ส่วน Stack ที่ใช้พัฒนายังไม่มีข้อมูลยืนยันจึงไม่ระบุ" },
    approach: { en: "I grouped the content around the decision a potential client is making: what the company can do, which service fits the project, and how to ask for advice or a price estimate.", th: "ผมจัดเนื้อหาตามสิ่งที่ลูกค้าต้องตัดสินใจ คือบริษัททำอะไรได้ บริการไหนตรงกับโครงการ และจะติดต่อเพื่อขอคำแนะนำหรือประเมินราคาอย่างไร" },
    reflection: { en: "When a company has many services, the page should reduce choices into a path instead of presenting one long list.", th: "เมื่อบริษัทมีหลายบริการ หน้าเว็บควรช่วยเปลี่ยนตัวเลือกจำนวนมากให้เป็นเส้นทาง ไม่ใช่แค่แสดงรายการยาว ๆ" },
    technology: [], liveUrl: "https://www.alangkanthai.net", image: "/images/alangkan-ui.jpg", imageAlt: { en: "Alangkan Thai public website interface", th: "หน้าเว็บไซต์สาธารณะของอลังการ ไทย" }
  },
  {
    slug: "iso-it-support", title: "ISO IT Support", category: "system", visual: "support", evidence: "brief",
    subtitle: { en: "Internal support system · Mango Consultant", th: "ระบบสนับสนุนภายใน · Mango Consultant" },
    lead: { en: "During my internship, I developed part of an internal IT support system built around ISO-based work processes.", th: "ระหว่างฝึกงาน ผมพัฒนาระบบสนับสนุนงาน IT ภายในที่อ้างอิงขั้นตอนการทำงานตามแนวทาง ISO" },
    context: { en: "The system supports internal IT work where requests and actions need to follow a defined process. Its real screens and operational data cannot be published.", th: "ระบบใช้กับงาน IT ภายในที่คำขอและการดำเนินงานต้องผ่านขั้นตอนชัดเจน หน้าจอจริงและข้อมูลการทำงานจึงไม่สามารถเผยแพร่ได้" },
    role: { en: "I developed backend code using MVC with a service layer, connected backend endpoints to the frontend, worked on parts of the interface, and adjusted UX/UI based on the actual support workflow.", th: "ผมเขียนแบ็กเอนด์ด้วย MVC และ service layer เชื่อม endpoint เข้ากับฟรอนต์เอนด์ ทำหน้าจอบางส่วน และปรับ UX/UI ให้สอดคล้องกับขั้นตอนงาน support ที่ใช้จริง" },
    capabilities: [{ en: "ISO-based IT support workflows", th: "ขั้นตอนสนับสนุน IT ตามแนวทาง ISO" }, { en: "Backend and frontend integration", th: "เชื่อมต่อแบ็กเอนด์และฟรอนต์เอนด์" }],
    technical: { en: "Controllers receive the request, services hold the business logic, and the frontend calls the exposed endpoints. This keeps request flow separate from the rules used by the support process.", th: "Controller รับคำขอ ส่วน service เก็บ business logic แล้วเปิด endpoint ให้ฟรอนต์เอนด์เรียกใช้ ทำให้ flow ของ request แยกออกจากกฎของงาน support" },
    approach: { en: "I traced one support request from the screen into the controller and service, then back to the response shown to the user. When a rule changed, I kept it in the service instead of adding more conditions to the controller or UI.", th: "ผมไล่คำขอหนึ่งรายการจากหน้าจอเข้า controller และ service แล้วดูผลลัพธ์ที่ย้อนกลับไปแสดงกับผู้ใช้ ถ้ากฎงานเปลี่ยน ผมเก็บการเปลี่ยนนั้นไว้ใน service แทนการเพิ่มเงื่อนไขใน controller หรือ UI" },
    reflection: { en: "This was where MVC stopped being a diagram for me. Separating the layers made changes easier to locate and discuss with the team.", th: "โปรเจกต์นี้ทำให้ MVC ไม่ได้เป็นแค่แผนภาพสำหรับผม การแยกแต่ละชั้นช่วยให้รู้ว่าต้องแก้ตรงไหนและคุยกับทีมได้ชัดขึ้น" },
    technology: ["MVC", "Service layer", "Frontend/backend integration"]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
