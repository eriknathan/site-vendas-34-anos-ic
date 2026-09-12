"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  ExternalLink,
  Globe,
  Instagram,
  MapPin,
  MessageCircle,
  Minus,
  Navigation,
  Phone,
  Plus,
  ShoppingCart,
  Tag,
} from "lucide-react";
import { useMemo, useState } from "react";
import logo from "../../imgs/LOGOBOLA.png";
import { event, organizer, tickets } from "@/data/site";
import { InterestModal } from "@/components/interest-modal";
import { SiteHeader } from "@/components/site-header";

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const MAX_PER_TICKET = 8;

export function TicketsPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>(() =>
    Object.fromEntries(tickets.map((ticket) => [ticket.id, 0])),
  );
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const venueQuery = `${event.place}, ${event.city.replace(" — ", ", ")}`;
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(venueQuery)}&output=embed`;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueQuery)}`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venueQuery)}`;
  const phoneHref = `tel:+55${organizer.phone.replace(/\D/g, "")}`;

  const { totalPrice, totalFee, ticketCount } = useMemo(
    () =>
      tickets.reduce(
        (totals, ticket) => {
          const qty = quantities[ticket.id] ?? 0;
          return {
            totalPrice: totals.totalPrice + qty * ticket.price,
            totalFee: totals.totalFee + qty * ticket.fee,
            ticketCount: totals.ticketCount + qty,
          };
        },
        { totalPrice: 0, totalFee: 0, ticketCount: 0 },
      ),
    [quantities],
  );

  const changeQuantity = (id: string, delta: number) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.min(MAX_PER_TICKET, Math.max(0, (current[id] ?? 0) + delta)),
    }));
  };

  const applyCoupon = () => {
    setCouponMessage(
      coupon.trim()
        ? "Cupons de desconto serão validados quando as vendas forem abertas."
        : "Informe um código para aplicar.",
    );
  };

  return (
    <>
      <SiteHeader />
      <main className="tickets-page">
        <div className="tickets-shell">
          <Link className="back-link" href="/evento/festa-explosao-inferno-coral-34-anos">
            <ArrowLeft aria-hidden="true" size={18} /> Voltar ao evento
          </Link>

          <div className="tickets-grid">
            <div className="tickets-main">
              <h1 className="tickets-title">{event.name}</h1>

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

              <p className="tickets-disclaimer">
                Vendas ainda não abertas — esta é uma prévia da experiência de compra, sem processamento real de pagamento.
              </p>

              <h2 className="tickets-select-heading">Selecione um ingresso para comprar</h2>

              <div className="coupon-row">
                <span className="coupon-label"><Tag aria-hidden="true" size={16} /> Possui algum cupom?</span>
                <input
                  className="coupon-input"
                  onChange={(evt) => setCoupon(evt.target.value)}
                  placeholder="Seu código"
                  type="text"
                  value={coupon}
                />
                <button className="coupon-apply" onClick={applyCoupon} type="button">Aplicar</button>
                {couponMessage && <p className="coupon-message">{couponMessage}</p>}
              </div>

              <div className="ticket-list">
                {tickets.map((ticket) => {
                  const qty = quantities[ticket.id] ?? 0;
                  return (
                    <article className="ticket-item" key={ticket.id}>
                      <div className="ticket-item-info">
                        <h3>{ticket.name}</h3>
                        <p>{ticket.description}</p>
                        <p className="ticket-price">
                          {currency.format(ticket.price)} <small>+ {currency.format(ticket.fee)} taxa</small>
                        </p>
                        {ticket.perk && (
                          <p className="ticket-perk">Este ingresso acompanha: <strong>{ticket.perk}</strong></p>
                        )}
                      </div>
                      <div className="qty-stepper">
                        <button
                          aria-label={`Diminuir quantidade de ${ticket.name}`}
                          className="qty-minus"
                          disabled={qty === 0}
                          onClick={() => changeQuantity(ticket.id, -1)}
                          type="button"
                        >
                          <Minus aria-hidden="true" size={16} />
                        </button>
                        <span className="qty-value">{qty}</span>
                        <button
                          aria-label={`Aumentar quantidade de ${ticket.name}`}
                          className="qty-plus"
                          disabled={qty === MAX_PER_TICKET}
                          onClick={() => changeQuantity(ticket.id, 1)}
                          type="button"
                        >
                          <Plus aria-hidden="true" size={16} />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="cart-summary-bar">
                <div className="cart-summary-info">
                  <span className="cart-summary-icon"><ShoppingCart aria-hidden="true" size={20} /></span>
                  <div>
                    <p className="cart-summary-total">
                      {currency.format(totalPrice)} <small>+ {currency.format(totalFee)} taxa</small>
                    </p>
                    <p className="cart-summary-count">{ticketCount} {ticketCount === 1 ? "ingresso" : "ingressos"}</p>
                  </div>
                </div>
              </div>

              <button className="buy-button" onClick={() => setModalOpen(true)} type="button">
                Comprar Ingresso
              </button>
              <p className="tickets-legal-note">
                Ao comprar, você concorda com a <Link href="/politica-cancelamento">política de cancelamento</Link> e os{" "}
                <Link href="/termos-de-uso">termos de uso</Link>.
              </p>
            </div>

            <aside className="tickets-sidebar">
              <section className="organizer-card">
                <h2>Organizador</h2>
                <div className="organizer-identity">
                  <Image alt={`Escudo da ${organizer.name}`} height={44} src={logo} width={44} />
                  <span>{organizer.name}</span>
                </div>
                <div className="organizer-socials">
                  <a aria-label="Instagram" href={organizer.instagram} rel="noreferrer" target="_blank">
                    <Instagram aria-hidden="true" size={18} />
                  </a>
                  <a aria-label="WhatsApp" href={organizer.whatsapp} rel="noreferrer" target="_blank">
                    <MessageCircle aria-hidden="true" size={18} />
                  </a>
                  <a aria-label="Ligar para o organizador" href={phoneHref}>
                    <Phone aria-hidden="true" size={18} />
                  </a>
                  <a aria-label="Site oficial" href={organizer.site} rel="noreferrer" target="_blank">
                    <Globe aria-hidden="true" size={18} />
                  </a>
                </div>
                <p className="organizer-reservations">
                  Informações e reservas: <a href={phoneHref}>{organizer.phone}</a>
                </p>
              </section>

              <section className="map-card">
                <h2>Local</h2>
                <div className="map-frame-wrap">
                  <a className="map-open-link" href={mapsSearchUrl} rel="noreferrer" target="_blank">
                    <ExternalLink aria-hidden="true" size={14} /> Abrir no Maps
                  </a>
                  <iframe
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapsEmbedSrc}
                    title={`Mapa de ${event.place}`}
                  />
                </div>
                <p className="map-venue-name">{event.place}</p>
                <a className="route-button" href={mapsDirectionsUrl} rel="noreferrer" target="_blank">
                  <Navigation aria-hidden="true" size={16} /> Abrir Rota
                </a>
              </section>
            </aside>
          </div>
        </div>
      </main>

      <InterestModal onClose={() => setModalOpen(false)} open={modalOpen} />
    </>
  );
}
