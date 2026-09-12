import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="policy-page">
        <div className="policy-content">
          <Link className="back-link" href="/">
            <ArrowLeft aria-hidden="true" size={18} /> Voltar ao início
          </Link>
          <p className="policy-kicker">Versão demonstrativa</p>
          <h1>Termos de Uso</h1>
          <aside>
            Esta vitrine não realiza venda, cadastro, pagamento ou coleta de dados. Estes termos são provisórios e
            devem ser revisados antes da abertura das vendas.
          </aside>
          <section>
            <h2>Uso da plataforma</h2>
            <p>
              O conteúdo apresentado é informativo e demonstrativo. Datas, horários, regras e disponibilidade podem
              ser atualizados quando o evento for oficialmente publicado.
            </p>
          </section>
          <section>
            <h2>Conteúdo do evento</h2>
            <p>
              O organizador será responsável por divulgar informações claras sobre o evento, suas regras de acesso e
              os canais oficiais de atendimento.
            </p>
          </section>
          <section>
            <h2>Futuras vendas</h2>
            <p>
              Quando as vendas forem abertas, os termos específicos do checkout, da política de privacidade e da
              política de cancelamento serão apresentados para aceite.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
