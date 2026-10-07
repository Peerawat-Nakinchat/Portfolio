import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, className = "", ...props }: IconProps & { children: ReactNode }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`size-[18px] shrink-0 ${className}`} {...props}>{children}</svg>;
}

export function ArrowLeftIcon(props: IconProps) {
  return <Icon {...props}><path d="m10 6-6 6 6 6" /><path d="M4 12h16" /></Icon>;
}

export function ArrowRightIcon(props: IconProps) {
  return <Icon {...props}><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></Icon>;
}

export function ArrowUpIcon(props: IconProps) {
  return <Icon {...props}><path d="m6 10 6-6 6 6" /><path d="M12 4v16" /></Icon>;
}

export function ExternalLinkIcon(props: IconProps) {
  return <Icon {...props}><path d="M14 5h5v5" /><path d="m10 14 9-9" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></Icon>;
}

export function BriefcaseIcon(props: IconProps) {
  return <Icon {...props}><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /><path d="M10 12v2h4v-2" /></Icon>;
}

export function HistoryIcon(props: IconProps) {
  return <Icon {...props}><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l3 2" /></Icon>;
}

export function FileTextIcon(props: IconProps) {
  return <Icon {...props}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4" /><path d="M9 13h6M9 17h6" /></Icon>;
}

export function UserIcon(props: IconProps) {
  return <Icon {...props}><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></Icon>;
}

export function MailIcon(props: IconProps) {
  return <Icon {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></Icon>;
}

export function BookOpenIcon(props: IconProps) {
  return <Icon {...props}><path d="M4 4h5a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4z" /><path d="M20 4h-5a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h5z" /></Icon>;
}

export function LockIcon(props: IconProps) {
  return <Icon {...props}><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></Icon>;
}

export function PrinterIcon(props: IconProps) {
  return <Icon {...props}><path d="M7 8V3h10v5" /><rect x="5" y="14" width="14" height="7" rx="1" /><path d="M5 17H3v-7h18v7h-2" /><path d="M17 12h.01" /></Icon>;
}

export function DownloadIcon(props: IconProps) {
  return <Icon {...props}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></Icon>;
}

export function MonitorIcon(props: IconProps) {
  return <Icon {...props}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></Icon>;
}

export function PlugIcon(props: IconProps) {
  return <Icon {...props}><path d="m8 12 8-8" /><path d="m14 3 4 4" /><path d="M7 8 4 11a5 5 0 0 0 7 7l3-3" /><path d="m4 20 3-3" /></Icon>;
}

export function ServerIcon(props: IconProps) {
  return <Icon {...props}><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01M11 7h7M11 17h7" /></Icon>;
}

export function MenuIcon(props: IconProps) {
  return <Icon {...props}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
}

export function CloseIcon(props: IconProps) {
  return <Icon {...props}><path d="m6 6 12 12M18 6 6 18" /></Icon>;
}

export function FacebookIcon(props: IconProps) {
  return <Icon {...props}><path d="M14.5 21v-8h3l.5-4h-3.5V7c0-1.2.5-2 2.1-2H19V1.5c-.7-.1-1.6-.2-2.8-.2-3.4 0-5.7 2.1-5.7 5.9V9H7v4h3.5v8" /></Icon>;
}

export function GithubIcon(props: IconProps) {
  return <Icon {...props}><path d="M9 19c-4.5 1.4-4.5-2.3-6-2.8" /><path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.2a4.9 4.9 0 0 0-1.3-3.4 4.5 4.5 0 0 0-.1-3.4s-1-.3-3.5 1.3a12 12 0 0 0-6.4 0C6.4 3.2 5.4 3.5 5.4 3.5a4.5 4.5 0 0 0-.1 3.4A4.9 4.9 0 0 0 4 10.3c0 4.8 2.9 5.9 5.7 6.2-.6.5-.7 1.2-.7 2V22" /></Icon>;
}

export function LinkedinIcon(props: IconProps) {
  return <Icon {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 6 0v4" /></Icon>;
}
