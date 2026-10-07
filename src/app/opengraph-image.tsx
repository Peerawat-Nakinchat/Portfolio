import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "#f7f7f5", color: "#17181c" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, fontFamily: "Arial" }}><strong>PEERAWAT<span style={{ color: "#3157d5" }}>.</span></strong><span style={{ color: "#777a81", fontSize: 14 }}>PORTFOLIO / SOFTWARE DEVELOPER</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "Arial", fontSize: 124, fontWeight: 700, lineHeight: .92, letterSpacing: -8 }}><span>Software for</span><span style={{ color: "#3157d5" }}>real workflows.</span></div>
      <div style={{ display: "flex", fontSize: 17, fontFamily: "Arial", justifyContent: "space-between", color: "#60636b" }}><span>WEB APPLICATIONS · BUSINESS SYSTEMS · INTEGRATIONS</span><span>SELECTED WORK ↗</span></div>
    </div>,
    size
  );
}

