# Sistema de design

> Este documento descreve o sistema de design **como implementado** em `src/app/globals.css` e nos componentes de `src/components/`. Ele substitui o rascunho original de Sprint 0 — a direção evoluiu ao longo das sprints seguintes (ver [`TASK.md`](./TASK.md)) e este arquivo deve ser mantido em sincronia com o CSS real do projeto.

## Objetivo da interface

Vitrine mobile-first para a Festa Explosão Inferno Coral | 34 Anos, com identidade de arquibancada/torcida. A página apresenta o evento, permite "navegar" por uma experiência de compra de ingresso e reúne as páginas institucionais — tudo com dados locais de demonstração (`src/data/site.ts`, documentados em [`MOCK_DATA.md`](./MOCK_DATA.md)). Não há pagamento real, cadastro ou integração externa nesta fase; onde a interface simula uma ação de compra, ela deixa isso explícito em texto (ver "Regras de conteúdo" abaixo).

## Ativos de imagem

| Arquivo | Dimensões | Uso atual |
|---|---:|---|
| `imgs/banner-hero-01.jpg` | 1920 × 1080 | Banner full-bleed do hero da Home — torcida em preto e branco com a arte "34" já composta |
| `imgs/banner-hero-02.jpg` | 960 × 540 | Banner full-bleed do hero da página de informações do evento |
| `imgs/banner-hero-branco.jpg` | 960 × 540 | Variante clara do banner-hero, disponível para reuso em telas com fundo claro |
| `imgs/34anos-transparent.png` | — | Arte "34" recortada (fundo transparente), usada no card de evento da Home (`.event-card-art`) |
| `imgs/34anos.png` | — | Versão da arte "34" com fundo, reservada para outros contextos |
| `imgs/LOGOBOLA.png` | 1344 × 1346 | Marca circular — header (`SiteHeader`), footer, avatar do organizador, favicon de origem |
| `imgs/logoperfil-34anos.png` | 1080 × 1080 | Avatar/perfil do organizador, variações quadradas |
| `imgs/TOIC 34 ANOS.png` | 7177 × 3908 | Arte de altíssima resolução, reservada para compartilhamento social/impressão |

Os heroes usam `next/image` com `fill` + `object-fit: cover` (classe `.hero-banner`), preenchendo a seção `.hero` (`aspect-ratio: 16/9`, `min-height: min(56.25vw, 720px)`). Não há mais overlay de texto sobre o banner — a arte já contém a peça de identidade visual ("34" + escudo), e o hero funciona como uma vitrine puramente visual.

## Cores

Variáveis definidas em `:root` (`globals.css`):

| Token | Hex | Uso |
|---|---|---|
| `--red` | `#A80404` | Cor de ação — CTAs primários, links, destaques, ícones de status |
| `--red-dark` | `#6F0303` | Hover/active do vermelho |
| `--black` | `#1C1C1C` | Header, footer, superfícies escuras (modal, drawer mobile), texto principal |
| `--white` | `#FFFFFF` | Fundo de cards e superfícies de leitura |
| `--smoke` | `#E9E7E7` | Bordas e divisores em fundo claro |
| `--ink-muted` | `#65615F` | Texto secundário sobre fundo claro |

Tons complementares usados pontualmente (não formalizados como variável, mas consistentes em toda a base):

| Hex | Uso |
|---|---|
| `#fafafa` / `#f7f6f6` | Fundo de página em telas de conteúdo (`.content-page`, `.tickets-page`, `.policy-page`, `.empty-page`, `.events-section`) |
| `#f7e2e2` | Fundo dos chips de ícone circulares (`.tickets-info-icon`, `.cart-summary-icon`) |
| `#fdf3f3` / `#f0d6d6` | Fundo/borda de avisos e disclaimers (`.tickets-disclaimer`, `.policy-content aside`) |
| `#8a8585` / `#696565` | Rótulos e textos auxiliares de menor ênfase (labels de `.event-facts`, `.ticket-perk`) |

Princípio: vermelho é sinal de ação e status, não cor de fundo predominante. As páginas de conteúdo/produto (ingressos, informações do evento, políticas, estados vazios) são claras e neutras; o preto é reservado ao header, footer e superfícies "modais" (drawer mobile, modal de interesse).

## Tipografia

- **Família única:** `Poppins` (400–900), carregada via Google Fonts no topo de `globals.css`. Usada tanto para títulos quanto para texto de interface — não há uma segunda família de exibição condensada nesta fase (diferente do plano original de Sprint 0, que previa `Barlow Condensed`).
- `h1`, `h2`, `h3` compartilham `line-height: .98` e herdam Poppins; cada contexto define seu próprio `font-size` (não há uma escala tipográfica única — os tamanhos são calibrados por componente, veja a tabela abaixo).

| Elemento | font-size (`clamp`) | peso | contexto |
|---|---|---|---|
| `.event-card h3` | 31–44px | 800 | Título do card de evento na Home |
| `.content-title` | 32–52px | herda `h1` (800) | Título da página de informações do evento / organizador |
| `.tickets-title` | 24–32px | 800 | Título na tela de ingressos |
| `.section-heading h2` | 39–56px | herda `h2` | "Próximo encontro" (Home) |
| `.hero-heading` (legado) | 30–46px | 800, uppercase | Não usado nas telas atuais; classe mantida no CSS caso o hero volte a ter texto |
| `.policy-content h1` | 32–52px | herda `h1` | Título das páginas institucionais |
| `.empty-card h1` | 28–40px | herda `h1` | Título dos estados vazios |
| `.section-kicker` / `.policy-kicker` | 12px | 700, uppercase, tracking .06em | Rótulo pequeno acima de títulos, sempre em `--red` |

## Espaçamento, grid e raios

- **Container público:** `.container { width: min(1120px, calc(100% - 40px)); }` — usado nas seções da Home.
- **Shells de conteúdo:** `.tickets-shell` (1180px) e `.content-shell` (720px, mais estreito para leitura em coluna única) — compartilham o mesmo padrão de página (`.tickets-page`, `.content-page`, `.policy-page`: `min-height: 100vh; padding: 48px 20px 90px; background: #fafafa`).
- **Breakpoint único:** `max-width: 760px` concentra praticamente todo o ajuste responsivo (menu mobile, grids que colapsam para 1 coluna, paddings reduzidos). Há um breakpoint secundário em `430px` só para o grid do footer.
- **Raios de borda:**
  - `6px` — botões retangulares (`.button`)
  - `10px` — inputs, chips de ícone, avisos (`.tickets-info-icon`, `.tickets-disclaimer`)
  - `14px` — cards de conteúdo (`.ticket-item`, `.tickets-info-card`, `.content-callout`, `.attraction-card`, `.map-frame-wrap`)
  - `16px` — cards de página inteira (`.policy-content`, `.empty-card`)
  - `24px` — card de destaque (`.event-card`, o maior elemento da Home)
  - `999px` — pílulas (nav do header, `.header-action`, `.coupon-apply`, `.buy-button`, avatares)
  - `50%` — avatares/logos circulares

## Sombras

| Contexto | Valor |
|---|---|
| Cards de conteúdo (política, estado vazio, ingressos) | `0 20px 48px rgba(28,28,28,.08)` |
| `.event-card` (repouso → hover) | `0 24px 56px rgba(28,28,28,.09)` → `0 30px 72px rgba(28,28,28,.14)` |
| Botão primário (repouso → hover) | `0 10px 28px rgba(113,0,0,.32)` → escurece o fundo, não a sombra |
| `.buy-button` (repouso → hover) | `0 18px 40px rgba(168,4,4,.28)` → `0 22px 48px rgba(168,4,4,.34)` |
| Header ao rolar (`.is-scrolled`) | `0 12px 32px rgba(0,0,0,.32)` |
| Modal de interesse | `0 25px 70px rgba(0,0,0,.45)` |

## Ícones

Biblioteca única: [`lucide-react`](https://lucide.dev/). Tamanhos usados: `14–24px`, sempre com `aria-hidden="true"` quando acompanhados de texto visível, e `aria-label` no elemento pai quando o ícone é o único conteúdo (botões de ícone). Cor segue o texto ao redor ou `var(--red)` quando o ícone reforça uma ação/destaque.

## Movimento

- Transições restritas a feedback de interação: `transform`, `background-color`, `color`, `box-shadow`, `border-color`, sempre `.2s`–`.45s ease`.
- Únicas animações por keyframe são as do menu mobile (`nav-overlay-in`, `nav-drawer-in`, ambas ≤ `.25s`).
- `@media (prefers-reduced-motion: reduce)` zera globalmente durações de transição/animação (`.01ms`) e desativa scroll suave — aplicado uma única vez no fim de `globals.css`, cobrindo todo o site.

## Header e navegação (`SiteHeader`)

Componente único (`src/components/site-header.tsx`) reaproveitado em **todas** as páginas (Home, ingressos, informações do evento, políticas, organizador, estados vazios) — não existem mais variações de header por página.

- `position: sticky`, fundo escuro translúcido com `backdrop-filter: blur(16px)`, ganha sombra ao rolar (`.is-scrolled`, acionado via `useState` + listener de `scroll`).
- Nav desktop centralizada (`position: absolute; left: 50%`) em formato de pílula, com scroll-spy via `IntersectionObserver` que marca o link ativo (`aria-current="page"`) com base nas seções `#eventos` e `#contato` da Home.
- CTA "Entrar" como botão outline que preenche de vermelho no hover, sempre visível à direita.
- Menu mobile: drawer lateral (`.mobile-nav`) com overlay escurecido (`.mobile-nav-overlay`), fechamento por Esc, clique fora ou botão dedicado, trava de scroll do `body` e devolução de foco ao botão que abriu o menu. O drawer é renderizado **fora** da tag `<header>` (irmão dela) porque o `backdrop-filter` do header cria um novo *containing block* para elementos `position: fixed` — mantê-lo dentro cortava o drawer à altura do header.

## Padrões de página

Duas linguagens visuais coexistem, propositalmente:

1. **Página de marketing (Home):** header escuro, hero full-bleed sem texto, `.events-section` em fundo levemente acinzentado (`#f7f6f6`) com o card de evento como peça central, footer preto com acento vermelho de 7px no topo.
2. **Páginas de conteúdo/produto** (ingressos, informações do evento, políticas, organizador, estados vazios): fundo claro uniforme (`#fafafa`), sem footer, conteúdo dentro de um "shell" centralizado e cards brancos com borda `--smoke` + sombra suave. Esse padrão é compartilhado por `.tickets-page`, `.content-page`, `.policy-page` e `.empty-page` (mesmas regras de `min-height`/`padding`/`background`).

Superfícies escuras remanescentes fora do header/footer: o modal de interesse (`.modal-backdrop` + `.interest-modal`) e o drawer de navegação mobile — ambas usam `--black` e texto claro, reservadas para overlays temporários.

## Inventário de componentes

| Componente | Arquivo | Onde é usado |
|---|---|---|
| `SiteHeader` | `site-header.tsx` | Todas as páginas públicas |
| `HomePage` | `home-page.tsx` | `/` — hero, card "Próximo encontro", footer |
| `EventInfoPage` | `event-info-page.tsx` | `/evento/[slug]` — hero, card local/data, grade de atrações confirmadas, CTA de compra, callout de cancelamento |
| `TicketsPage` | `tickets-page.tsx` | `/evento/[slug]/ingressos` — seleção de ingresso com stepper de quantidade, cupom (visual), resumo do carrinho, mapa embutido do Google Maps, card do organizador |
| `InterestModal` | `interest-modal.tsx` | Acionado por qualquer CTA que ainda não tem destino real (hero da Home, redes sociais do footer, botão final de compra em `TicketsPage`) |
| `EmptyState` | `empty-state.tsx` | `/entrar` e `/minha-conta` — estado "em breve" com ícone, texto e link de volta |
| Página do organizador | `[organizador]/page.tsx` | `/explosao-inferno-coral` — perfil centralizado com logo, kicker de cidade e contato demonstrativo |
| Páginas institucionais | `politica-privacidade`, `politica-cancelamento`, `termos-de-uso` | Cards `.policy-content` com aviso (`aside`) + seções de texto |

### Cartões e listas reutilizados

- **Chip de ícone** (`.tickets-info-icon`, `.cart-summary-icon`): círculo/quadrado arredondado `#f7e2e2` com ícone `--red` — usado em qualquer par "ícone + rótulo + valor" (Local/Data, resumo do carrinho, atrações).
- **Card de item** (`.ticket-item`, `.attraction-card`): borda `--smoke`, `border-radius: 14px`, fundo branco — padrão-base para qualquer lista de itens dentro de uma página de conteúdo.
- **Callout/aviso** (`.content-callout`, `.tickets-disclaimer`, `.policy-content aside`): três variações do mesmo princípio (destaque com borda ou fundo tingido de vermelho) para diferentes níveis de ênfase — de um aviso leve a uma seção com título própria.
- **Link "voltar"** (`.back-link`): um único padrão (ícone `ArrowLeft` + texto, cor `--ink-muted` com hover `--red`) reutilizado em `EventInfoPage`, `TicketsPage`, páginas institucionais, organizador e `EmptyState`.

## Estrutura de rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `HomePage` | Vitrine, hero, próximo evento |
| `/evento/[slug]` | `EventInfoPage` | Informações do evento + atrações confirmadas |
| `/evento/[slug]/ingressos` | `TicketsPage` | Seleção de ingresso (demonstrativa) |
| `/[organizador]` | Página do organizador | Perfil público do organizador |
| `/entrar` | `EmptyState` | Estado vazio — acesso ainda não disponível |
| `/minha-conta` | `EmptyState` | Estado vazio — área de conta ainda não disponível |
| `/politica-privacidade` | Página institucional | Texto de referência, pendente de revisão jurídica |
| `/politica-cancelamento` | Página institucional | Texto de referência, pendente de revisão jurídica |
| `/termos-de-uso` | Página institucional | Texto de referência |

O slug do evento nesta fase é fixo (`festa-explosao-inferno-coral-34-anos`), refletindo os dados de `src/data/site.ts` — não há listagem dinâmica de múltiplos eventos ainda (ver [`INTEGRATION.md`](./INTEGRATION.md) para os pontos previstos de evolução).

## Regras de conteúdo desta fase

- O CTA final da tela de ingressos (`Comprar Ingresso`) **não processa pagamento** — abre o `InterestModal` avisando que as vendas ainda não começaram. Isso é reforçado por um aviso fixo (`.tickets-disclaimer`) na própria tela.
- Cupom de desconto é apenas visual (`applyCoupon` só define uma mensagem, não aplica desconto real).
- Todo conteúdo de evento, organizador, ingressos e atrações é fictício — ver [`MOCK_DATA.md`](./MOCK_DATA.md) para a lista completa e a justificativa de cada dado.
- Nenhuma página faz cadastro, coleta de dados pessoais ou chamada a serviço externo além do embed público do Google Maps (sem chave de API) na tela de ingressos.

## Revisão de originalidade

A tendência mais óbvia seria um site majoritariamente preto e vermelho, do topo ao rodapé — isso cansaria a leitura e faria tudo parecer "ação" o tempo todo. A solução adotada separa dois registros: a Home carrega a intensidade da torcida no header e no hero (foto full-bleed, sem necessidade de texto sobreposto, já que a arte "34" contém a mensagem); as páginas de produto e institucionais adotam um sistema claro, neutro e denso em cards — mais parecido com uma ferramenta de compra bem resolvida do que com uma landing page genérica. O vermelho permanece como o único sinal de ação em ambos os registros, nunca como decoração de fundo.

## Conteúdo da demonstração

Os dados exibidos nesta fase — evento, organizador, ingressos e atrações — estão centralizados em `src/data/site.ts` e documentados em [`MOCK_DATA.md`](./MOCK_DATA.md). Todos são fictícios e serão substituídos antes de qualquer publicação pública. Pontos de extensão para uma futura fonte de dados real (persistência, múltiplos eventos, integrações) estão descritos em [`INTEGRATION.md`](./INTEGRATION.md).
