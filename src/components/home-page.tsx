"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight, Clock3, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import logo from "../../imgs/LOGOBOLA.png";
import heroArt from "../../imgs/34anos-transparent.png";
import heroBanner from "../../imgs/banner-hero-01.jpg";
import { event, organizer } from "@/data/site";
import { InterestModal } from "@/components/interest-modal";
import { SiteHeader } from "@/components/site-header";

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const openInterest = () => setModalOpen(true);

  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero">
          <Image
            alt="Torcida da Explosão Inferno Coral comemorando os 34 anos"
            className="hero-banner"
            fill
            priority
            sizes="100vw"
            src={heroBanner}
          />
        </section>

        <section className="events-section" id="eventos">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Calendário da torcida</p>
                <h2>Próximo encontro</h2>
              </div>
              <span className="heading-rule" aria-hidden="true" />
            </div>

            <article className="event-card">
              <div className="event-card-art">
                <Image alt="Arte comemorativa dos 34 anos" src={heroArt} />
              </div>
              <div className="event-card-body">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <dl className="event-facts">
                  <div><dt><CalendarDays aria-hidden="true" size={18} /> Data</dt><dd>{event.date}</dd></div>
                  <div><dt><Clock3 aria-hidden="true" size={18} /> Horário</dt><dd>{event.time}</dd></div>
                  <div><dt><MapPin aria-hidden="true" size={18} /> Local</dt><dd>{event.place}, {event.city}</dd></div>
                </dl>
                <div className="event-card-actions">
                  <Link className="text-link" href="/evento/festa-explosao-inferno-coral-34-anos">
                    Ver informações do evento <ChevronRight aria-hidden="true" size={18} />
                  </Link>
                  <Link className="button button--primary" href="/evento/festa-explosao-inferno-coral-34-anos/ingressos">
                    Comprar Ingresso <ChevronRight aria-hidden="true" size={18} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

      </main>

      <footer className="site-footer" id="contato">
        <div className="footer-accent" aria-hidden="true" />
        <div className="container footer-main">
          <div className="footer-brand-column">
            <Image alt="Escudo da Explosão Inferno Coral" className="footer-mark" src={logo} />
            <div className="social-links" aria-label="Redes sociais demonstrativas">
              <button aria-label="Instagram" onClick={openInterest} type="button"><Instagram aria-hidden="true" size={22} /></button>
              <button aria-label="Facebook" onClick={openInterest} type="button"><Facebook aria-hidden="true" size={22} /></button>
              <button aria-label="YouTube" onClick={openInterest} type="button"><Youtube aria-hidden="true" size={22} /></button>
              <button aria-label="X" onClick={openInterest} type="button"><Twitter aria-hidden="true" size={22} /></button>
            </div>
          </div>
          <div className="footer-column">
            <h2>Institucional</h2>
            <a href="#eventos">Início</a>
            <Link href="/minha-conta">Minha conta</Link>
          </div>
          <div className="footer-column">
            <h2>Ajuda</h2>
            <Link href="/politica-privacidade">Política de privacidade</Link>
            <Link href="/politica-cancelamento">Política de cancelamento</Link>
            <Link href="/termos-de-uso">Termos de uso</Link>
          </div>
          <div className="footer-column footer-contact">
            <h2>Contato</h2>
            <p><Phone aria-hidden="true" size={17} /> {organizer.phone}</p>
            <p><Mail aria-hidden="true" size={17} /> {organizer.email}</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Explosão Inferno Coral · {organizer.legalName} · CNPJ {organizer.cnpj}</p>
          <p>Festa 34 Anos</p>
        </div>
      </footer>

      <InterestModal onClose={() => setModalOpen(false)} open={modalOpen} />
    </>
  );
}
