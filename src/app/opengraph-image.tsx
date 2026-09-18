import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "#171b1a", color: "#f2f0e9" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #5c615d", paddingBottom: 25, fontSize: 22, fontFamily: "Arial" }}><strong>PN<span style={{ color: "#f36b43" }}>.</span></strong><span style={{ color: "#a3aaa3", fontSize: 14 }}>PORTFOLIO / SOFTWARE DEVELOPER</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "Arial", fontSize: 124, fontWeight: 700, lineHeight: .92, letterSpacing: -8 }}><span>Peerawat</span><span>Nakinchat<span style={{ color: "#f36b43" }}>.</span></span></div>
      <div style={{ display: "flex", borderTop: "1px solid #5c615d", paddingTop: 22, fontSize: 17, fontFamily: "Arial", justifyContent: "space-between" }}><span>WEB APPLICATIONS · BUSINESS SYSTEMS · INTEGRATIONS</span><span>SELECTED WORK ↗</span></div>
    </div>,
    size
  );
}

