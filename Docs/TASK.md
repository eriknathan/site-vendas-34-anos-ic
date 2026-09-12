# Plano de Sprints — Plataforma de Ingressos Explosão Inferno Coral

**Base:** `PRD.md` v1.0 (setembro/2026)  
**Escopo da fase atual:** vitrine front-end navegável, responsiva e baseada em dados locais de demonstração.  
**Fora do escopo desta fase:** autenticação, banco de dados em produção, pagamentos, emissão de ingressos/QR code, webhooks e integrações externas.  
**Cadência sugerida:** sprints de 2 semanas.

## Decisões técnicas aprovadas

| Área | Decisão |
|---|---|
| Front-end | Next.js com App Router e TypeScript |
| Estilos/UI | Tailwind CSS e shadcn/ui |
| Dados próprios | Dados locais de demonstração nesta fase; PostgreSQL ou SQLite serão avaliados antes de persistência em produção |
| Integrações | Nenhuma nesta fase; ticketing white-label será avaliado em etapa futura |

> **Diretriz:** os CTAs de compra devem permanecer em modo demonstrativo, sem checkout, armazenamento de dados pessoais, pagamento ou QR code. A definição entre PostgreSQL e SQLite fica adiada até a fase em que houver persistência de dados.

## Premissas e dependências

- Antes da publicação, o organizador fornecerá logo em alta resolução, imagens autorizadas, CNPJ/razão social, contatos e redes sociais.
- Os dados ainda pendentes do evento de lançamento (local, data/horário, descrição e política específica) precisam estar aprovados antes da Sprint 3.
- Textos jurídicos de privacidade, termos e cancelamento exigem validação do responsável jurídico/contábil da organização antes de publicação definitiva.

## Visão de entrega

| Sprint | Objetivo | Resultado de saída |
|---|---|---|
| 0 | Descobrir e planejar a experiência visual | Direção visual, ativos inventariados e conteúdo pendente mapeado |
| 1 | Criar a base visual e estrutural | Vitrine responsiva navegável, alinhada à marca |
| 2 | Construir páginas e conteúdo local | Páginas públicas completas com dados demonstrativos |
| 3 | Validar e entregar o front-end | Interface revisada, acessível e pronta para futura integração |
| Fase futura | Integrar a operação de ticketing | Backlog de autenticação, checkout e operação priorizado |

---

## Sprint 0 — Descoberta visual e preparação

**Objetivo:** definir a direção da interface e reunir tudo que é necessário para iniciar o front-end.

- [x] Inventariar os ativos recebidos: logo circular (`imgs/LOGOBOLA.png`), arte comemorativa horizontal (`imgs/TOIC 34 ANOS.png`) e versão para perfil (`imgs/logoperfil-34anos.png`).
- [x] Definir a direção visual inicial: vermelho, preto e branco; linguagem de celebração dos 34 anos; hero baseado na arte comemorativa e no escudo da torcida.
- [x] Confirmar a stack do front-end: Next.js com App Router e TypeScript, Tailwind CSS e shadcn/ui.
- [x] Definir identidade visual provisória: os ativos recebidos serão usados como referência; fontes e fotos adicionais poderão ser substituídas antes da publicação.
- [x] Consolidar ficha fictícia do evento “Festa Explosão Inferno Coral | 34 Anos” em `MOCK_DATA.md`, com data, local, descrição, faixa etária e regras demonstrativas.
- [x] Definir dados públicos fictícios do organizador em `MOCK_DATA.md`; não devem ser publicados como dados reais.
- [x] Definir destino temporário do CTA: modal local “As vendas ainda não começaram”, sem formulário, redirecionamento ou compra.
- [x] Definir estados institucionais provisórios em `MOCK_DATA.md`, deixando explícita a ausência de venda, cadastro e coleta de dados.

**Critério de aceite:** concluído — direção visual e stack registradas; ativos inventariados; dados fictícios canônicos e destino demonstrativo do CTA definidos.

## Sprint 1 — Fundação da vitrine e design responsivo

**Objetivo:** disponibilizar a experiência pública base, mobile-first, com a identidade da Explosão Inferno Coral.

- [x] Configurar projeto Next.js (App Router e TypeScript) e Tailwind CSS, com dados locais de demonstração. A adoção de componentes shadcn/ui será feita conforme cada componente reutilizável for necessário.
- [x] Configurar ambiente local com Docker (`Dockerfile`, `compose.yaml`, `.env` e `Makefile`), com hot reload e inicialização via `docker compose up -d` ou `make up`.
- [x] Implementar a primeira base responsiva e componentes reutilizáveis: header, footer, botões, badge de status, card de evento e modal demonstrativo.
- [x] Aplicar identidade visual inicial, foco visível, navegação por teclado e respeito a `prefers-reduced-motion`.
- [x] Criar Home (`/`) com banner de destaque, próximo evento, navegação e CTA “Acompanhar novidades”.
- [x] Criar página de detalhe (`/evento/[slug]`) com arte, data, horário, local, descrição e CTA demonstrativo.
- [x] Criar perfil do organizador (`/[organizador]`) com marca, cidade e contato demonstrativo.
- [x] Implementar CTA demonstrativo na vitrine; o canal “Anuncie também” e WhatsApp real permanecem para a fase em que houver contatos oficiais.
- [x] Criar estrutura inicial de SEO: metadados globais, título e descrição da aplicação.

**Critério de aceite:** concluído — Home, evento e perfil do organizador funcionam com dados demonstrativos, em desktop e celular; os CTAs não simulam compra nem apontam para integrações externas.

## Sprint 2 — Páginas públicas e conteúdo local

**Objetivo:** completar a navegação pública usando dados locais, sem fluxos transacionais.

- [x] Cadastrar o primeiro evento com dados demonstrativos, URL `/evento/festa-explosao-inferno-coral-34-anos` e status centralizado no conteúdo local.
- [x] Implementar estrutura de status para “Vendas liberadas”, “Esgotado”, “Em breve” e “Encerrado”; o evento demonstrativo permanece como “Em breve”.
- [ ] Publicar Política de Privacidade (`/politica-privacidade`), Política de Cancelamento (`/politica-cancelamento`) e Termos de Uso, revisados pelo responsável competente. As três páginas demonstrativas já foram criadas e aguardam revisão jurídica.
- [x] Exibir no footer CNPJ, razão social, copyright, contatos e links institucionais demonstrativos; identificação de provedor de pagamento fica para fase futura.
- [x] Garantir que a regra de cancelamento esteja clara na página do evento e na política demonstrativa: até 7 dias após compra ou 48h antes do evento, o que ocorrer primeiro; ingresso não utilizado; taxa não reembolsável; reembolso no mesmo meio de pagamento.
- [x] Implementar CTA/estado demonstrativo, deixando explícito que as vendas ainda não estão disponíveis e que não há coleta de dados.
- [x] Revisar textos, imagens alternativas, foco visível, metadados, Open Graph, sitemap e robots das páginas públicas.

**Critério de aceite:** concluído tecnicamente — todas as páginas públicas previstas estão navegáveis e coerentes; informações não fornecidas usam estados de “em breve”, sem simular uma transação real. A revisão jurídica formal das políticas permanece pendente.

## Sprint 3 — Qualidade e entrega do front-end

**Objetivo:** tornar a vitrine robusta, acessível e pronta para receber integrações futuras.

- [x] Criar estados vazios para “Minha conta” e “Entrar”, explicando que os recursos estarão disponíveis quando as vendas forem abertas.
- [x] Validar navegação, estados de evento, CTA demonstrativo, formulários locais e links de suporte no build de produção.
- [x] Executar revisão de acessibilidade: teclado, foco visível, contraste, textos alternativos e preferência por movimento reduzido.
- [x] Executar revisão responsiva nos tamanhos de tela prioritários e otimizar as imagens fornecidas.
- [x] Revisar SEO: title, description, Open Graph, favicon, sitemap e URLs canônicas.
- [x] Documentar os pontos de extensão para futura integração em `INTEGRATION.md`.

**Critério de aceite:** concluído — a interface funciona em desktop e celular, não contém integração externa simulada como real e pode receber uma fonte de dados/checkout posteriormente sem redesenho estrutural.

## Fase futura — Backlog de integrações e operação

- [ ] Categorias de eventos e filtros na Home.
- [ ] Múltiplos lotes com virada automática por data/estoque e preços escalonados.
- [ ] Dashboard do organizador com vendas, relatórios e exportações.
- [ ] Check-in com leitura de QR code.
- [ ] Desconto/programa de sócio-torcedor.
- [ ] Notificações por e-mail e WhatsApp sobre a compra e alterações do evento.
- [ ] Parceiros, patrocinadores e avaliações de eventos passados.
- [ ] Fila virtual e plano de escala para grandes aberturas de venda.
- [ ] Integração com provedor white-label: checkout, PIX/cartão/boleto, ingresso digital, QR code, antifraude e reembolso.
- [ ] Autenticação, “Minha conta”, persistência de dados e escolha entre PostgreSQL/SQLite.

## Riscos a acompanhar

| Risco | Dono sugerido | Ação de controle |
|---|---|---|
| Dados do evento chegam tarde | Organizador | Estabelecer data-limite antes da Sprint 2 |
| Textos legais inadequados | Jurídico/Organizador | Aprovar documentos antes de abrir vendas |
| CTA sugere compra real sem haver checkout | Produto/Design | Usar texto e estado “em breve” inequívocos |
| Integração futura exigir mudanças visuais | Técnico/Produto | Manter dados e CTAs desacoplados desde a Sprint 1 |
