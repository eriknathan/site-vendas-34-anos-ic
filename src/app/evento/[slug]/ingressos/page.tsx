import type { Metadata } from "next";
import { TicketsPage } from "@/components/tickets-page";

export const metadata: Metadata = {
  title: "Ingressos | Festa 34 Anos",
  description: "Selecione seu ingresso para a Festa Explosão Inferno Coral | 34 Anos.",
};

export default function TicketsRoute() {
  return <TicketsPage />;
}
