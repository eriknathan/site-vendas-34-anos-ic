import type { MetadataRoute } from "next";

const baseUrl = "https://explosao34anos.test";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/evento/festa-explosao-inferno-coral-34-anos", "/evento/festa-explosao-inferno-coral-34-anos/ingressos", "/explosao-inferno-coral", "/politica-privacidade", "/politica-cancelamento", "/termos-de-uso"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
