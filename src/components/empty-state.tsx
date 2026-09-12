import Link from "next/link";
import { ArrowLeft, BellRing } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

type EmptyStateProps = { title: string; description: string };

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <>
      <SiteHeader />
      <main className="empty-page">
        <section className="empty-card">
          <BellRing aria-hidden="true" size={34} />
          <p className="policy-kicker">Em breve</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link className="back-link" href="/">
            <ArrowLeft aria-hidden="true" size={18} /> Voltar ao início
          </Link>
        </section>
      </main>
    </>
  );
}
