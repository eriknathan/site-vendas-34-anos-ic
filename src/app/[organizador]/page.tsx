import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import logo from "../../../imgs/LOGOBOLA.png";
import { organizer } from "@/data/site";
import { SiteHeader } from "@/components/site-header";

export default function OrganizerPage() {
  return (
    <>
      <SiteHeader />
      <main className="content-page">
        <div className="content-shell organizer-page">
          <Link className="back-link" href="/">
            <ArrowLeft aria-hidden="true" size={18} /> Voltar ao início
          </Link>
          <Image alt={`Escudo da ${organizer.name}`} className="organizer-logo" priority src={logo} />
          <p className="section-kicker">{organizer.city}</p>
          <h1 className="content-title">{organizer.name}</h1>
          <p className="content-lead">
            Desde a arquibancada, para a arquibancada. Acompanhe as novidades da Festa 34 Anos.
          </p>
          <p className="organizer-contact">Contato demonstrativo: {organizer.email}</p>
        </div>
      </main>
    </>
  );
}
