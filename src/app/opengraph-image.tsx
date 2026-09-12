import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 72, color: "white", background: "linear-gradient(120deg, #111 0%, #1c1c1c 60%, #a80404 100%)" }}><div style={{ fontSize: 36, fontWeight: 700 }}>Explosão Inferno Coral</div><div style={{ fontSize: 136, fontWeight: 900, lineHeight: 1 }}>34 anos</div><div style={{ fontSize: 28 }}>Festa, força e arquibancada.</div></div>, { ...size });
}
