import type { Metadata } from "next";
import { EventInfoPage } from "@/components/event-info-page";

export const metadata: Metadata = {
  title: "Festa 34 Anos",
  description: "Informações sobre a Festa Explosão Inferno Coral | 34 Anos.",
};

export default function EventPage() {
  return <EventInfoPage />;
}
