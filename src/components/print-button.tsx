"use client";

export function PrintButton({ label }: { label: string }) {
  return <button className="relative inline-flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0 text-xs font-bold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] hover:after:w-full print:hidden" type="button" onClick={() => window.print()}>{label} <span aria-hidden="true">↗</span></button>;
}

