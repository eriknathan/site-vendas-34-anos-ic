export type EventStatus = "Vendas liberadas" | "Esgotado" | "Em breve" | "Encerrado";

export const event = {
  name: "Festa Explosão Inferno Coral | 34 Anos",
  shortName: "Festa 34 Anos",
  status: "Em breve" as EventStatus,
  date: "12 de dezembro de 2026",
  time: "21h",
  endDate: "13 de dezembro de 2026",
  endTime: "4h",
  place: "Centro de Convenções de Pernambuco",
  city: "Recife — PE",
  address: "Endereço completo a confirmar",
  description:
    "A Explosão Inferno Coral celebra 34 anos de história, arquibancada e paixão. Uma noite de encontro para a torcida, com atrações confirmadas.",
};

export type Attraction = {
  name: string;
  role: string;
};

export const attractions: Attraction[] = [
  { name: "Banda Inferno ao Vivo", role: "Show principal da noite" },
  { name: "MC Arquibancada", role: "Apresentação e hino da torcida" },
  { name: "Bloco de Percussão Explosão", role: "Bateria oficial da torcida" },
  { name: "DJ Fúria Coral", role: "Abertura e encerramento da pista" },
];

export const organizer = {
  name: "Explosão Inferno Coral",
  city: "Recife — PE",
  phone: "(81) 99999-0000",
  email: "contato@exemplo-explosao34anos.test",
  legalName: "Associação Cultural Explosão Inferno Coral — dados demonstrativos",
  cnpj: "00.000.000/0001-00",
  instagram: "https://instagram.com/explosao34anos.demo",
  whatsapp: "https://wa.me/5581999990000?text=Ol%C3%A1%2C%20quero%20acompanhar%20as%20novidades%20da%20Festa%2034%20Anos.",
  site: "https://explosao34anos.test",
};

export type Ticket = {
  id: string;
  name: string;
  description: string;
  price: number;
  fee: number;
  perk?: string;
};

export const tickets: Ticket[] = [
  {
    id: "pista",
    name: "Pista - Lote 1",
    description: "Acesso à pista comemorativa da Festa 34 Anos. Detalhes sobre a retirada da camiseta ainda serão divulgados.",
    price: 90,
    fee: 7.2,
    perk: "Camiseta comemorativa 34 Anos",
  },
  {
    id: "camarote",
    name: "Camarote - Lote 1",
    description: "Área exclusiva de camarote com vista privilegiada do palco. Detalhes sobre a retirada da camiseta ainda serão divulgados.",
    price: 160,
    fee: 12.8,
    perk: "Camiseta comemorativa 34 Anos",
  },
  {
    id: "copo",
    name: "Copo Explosão 34 Anos 550ml",
    description: "Copo comemorativo de edição limitada da Festa 34 Anos. Retirada no dia do evento.",
    price: 20,
    fee: 1.6,
  },
];
