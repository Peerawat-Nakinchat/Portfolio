"use client";

import { PrinterIcon } from "@/components/icons";

export function PrintButton({ label }: { label: string }) {
  return <button className="ui-button ui-button-primary cursor-pointer print:hidden" type="button" onClick={() => window.print()}><PrinterIcon />{label}</button>;
}

