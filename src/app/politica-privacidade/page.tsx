import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const sections = [
  ["Introdução", "A privacidade e a segurança de dados pessoais são fundamentais. Esta política descreve as práticas que deverão ser aplicadas quando a plataforma estiver integrada a serviços de cadastro, compra e atendimento."],
  ["Coleta de informações", "Em uma fase com vendas ativas, poderão ser coletados dados necessários ao cadastro, à compra e ao atendimento, sempre conforme a LGPD, o Marco Civil da Internet e demais normas aplicáveis. Nesta versão demonstrativa, não há cadastro, compra ou coleta de dados pessoais."],
  ["Controladora de dados", "A organização responsável pelo evento deverá adotar medidas técnicas e organizacionais para proteger informações contra acesso não autorizado e tratamento inadequado. O usuário também deve proteger suas credenciais de acesso."],
  ["Compartilhamento de informações", "Dados só poderão ser compartilhados com parceiros necessários à operação, ao cumprimento de obrigações legais ou à proteção de direitos, sempre para finalidades informadas e com medidas de segurança adequadas."],
  ["Segurança e retenção", "As informações devem ser protegidas por medidas técnicas, físicas e administrativas e mantidas somente pelo período necessário às finalidades informadas ou exigidas por lei. Depois disso, deverão ser descartadas ou anonimizadas de forma apropriada."],
  ["Seus direitos", "Você pode solicitar acesso, correção, exclusão ou oposição ao tratamento dos seus dados, nos limites previstos pela legislação. O canal oficial de atendimento será divulgado antes da abertura das vendas."],
  ["Alterações e links externos", "Esta política pode ser atualizada para refletir mudanças legais ou operacionais. Links para sites externos seguem as políticas próprias de cada organização."],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="policy-page">
        <div className="policy-content">
          <Link className="back-link" href="/">
            <ArrowLeft aria-hidden="true" size={18} /> Voltar ao início
          </Link>
          <p className="policy-kicker">Versão demonstrativa</p>
          <h1>Política de Privacidade</h1>
          <aside>
            Este texto usa o conteúdo de referência fornecido e precisa de revisão jurídica antes de qualquer coleta
            de dados ou venda de ingressos.
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
