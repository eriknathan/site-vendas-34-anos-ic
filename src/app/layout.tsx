import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://explosao34anos.test"),
  title: {
    default: "Explosão Inferno Coral | 34 Anos",
    template: "%s | Explosão Inferno Coral",
  },
  description: "Acompanhe as novidades da Festa Explosão Inferno Coral | 34 Anos.",
  openGraph: {
    title: "Explosão Inferno Coral | 34 Anos",
    description: "Acompanhe as novidades da Festa Explosão Inferno Coral | 34 Anos.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
