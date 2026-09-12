import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const sections = [
  ["Preâmbulo", "Em uma futura integração, a plataforma de ingressos poderá atuar na divulgação, comercialização, gestão de pedidos e controle de acesso, conforme autorização do organizador e legislação aplicável."],
  ["Solicitação de cancelamento", "O consumidor poderá solicitar cancelamento pelo canal oficial do organizador. Como referência operacional, o pedido deverá ser feito em até 7 dias corridos após a compra ou até 48 horas antes do início do evento, o que ocorrer primeiro, desde que o ingresso não tenha sido utilizado."],
  ["Taxa de serviço", "Quando houver taxa de serviço de um provedor de ticketing, sua natureza e reembolsabilidade deverão ser apresentadas de forma clara no checkout e na política específica do evento. A regra definitiva depende do fornecedor e de revisão jurídica."],
  ["Forma de reembolso", "Quando elegível, o reembolso deverá observar o meio de pagamento utilizado e os fluxos do organizador e do provedor. Dados bancários ou chave PIX só poderão ser solicitados por canal seguro e validado."],
  ["Cancelamento do evento e segurança", "Em caso de não realização ou alteração substancial do evento, o organizador e o provedor deverão comunicar os compradores e aplicar os procedimentos de reembolso definidos. Validações adicionais podem ser necessárias para prevenção de fraude."],
  ["Disposições finais", "Esta política é demonstrativa e poderá ser atualizada para adequação legal e operacional antes do início das vendas."],
];

export default function CancellationPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="policy-page">
        <div className="policy-content">
          <Link className="back-link" href="/">
            <ArrowLeft aria-hidden="true" size={18} /> Voltar ao início
          </Link>
          <p className="policy-kicker">Versão demonstrativa</p>
          <h1>Política de Cancelamento e Reembolso</h1>
          <aside>
            Não há venda ativa neste site. Este texto é uma adaptação de referência e exige validação jurídica e do
            futuro provedor de ticketing.
          </aside>
          {sections.map(([title, text]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
