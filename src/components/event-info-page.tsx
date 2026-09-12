import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, ChevronRight, MapPin, Music2 } from "lucide-react";
import heroBanner from "../../imgs/banner-hero-02.jpg";
import { attractions, event } from "@/data/site";
import { SiteHeader } from "@/components/site-header";

export function EventInfoPage() {
  return (
    <>
      <SiteHeader />

      <section className="hero">
        <Image
          alt="Arte comemorativa dos 34 anos da Explosão Inferno Coral"
          className="hero-banner"
          fill
          priority
          sizes="100vw"
          src={heroBanner}
        />
      </section>

      <main className="content-page">
        <div className="content-shell">
          <Link className="back-link" href="/">
            <ArrowLeft aria-hidden="true" size={18} /> Voltar ao início
          </Link>

          <p className="section-kicker">{event.shortName}</p>
          <h1 className="content-title">{event.name}</h1>
          <p className="content-lead">{event.description}</p>

          <div className="tickets-info-card">
            <div className="tickets-info-cell">
              <span className="tickets-info-icon"><MapPin aria-hidden="true" size={18} /></span>
              <div>
                <h3>Local</h3>
                <p>{event.place} — {event.address}</p>
              </div>
            </div>
            <div className="tickets-info-cell">
              <span className="tickets-info-icon"><CalendarDays aria-hidden="true" size={18} /></span>
              <div>
                <h3>Data</h3>
                <p>{event.date} {event.time} - {event.endDate} {event.endTime}</p>
              </div>
            </div>
          </div>

          <section className="attractions-section">
            <h2 className="tickets-select-heading">Atrações confirmadas</h2>
            <div className="attractions-list">
              {attractions.map((attraction) => (
                <div className="attraction-card" key={attraction.name}>
                  <span className="tickets-info-icon"><Music2 aria-hidden="true" size={18} /></span>
                  <div>
                    <h3>{attraction.name}</h3>
                    <p>{attraction.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Link className="button button--primary content-cta" href="/evento/festa-explosao-inferno-coral-34-anos/ingressos">
            Comprar Ingresso <ChevronRight aria-hidden="true" size={18} />
          </Link>

          <section className="content-callout">
            <h2>Informações de cancelamento</h2>
            <p>
              O cancelamento poderá ser solicitado em até 7 dias após a compra ou até 48 horas antes do evento, o que
              ocorrer primeiro, desde que o ingresso não tenha sido utilizado. A taxa de serviço não será reembolsável
              e o reembolso seguirá o mesmo meio de pagamento.
            </p>
            <Link href="/politica-cancelamento">
              Ler política completa <ChevronRight aria-hidden="true" size={16} />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
