# Direção visual — Sprint 0

## Objetivo da interface

Criar uma vitrine mobile-first para a Festa Explosão Inferno Coral | 34 Anos. A página deve transmitir pertencimento e energia de arquibancada, mas manter a leitura objetiva de data, local, status e ação. Nesta fase, o site apresenta o evento; não vende ingresso nem simula checkout.

## Ativos disponíveis

| Arquivo | Dimensões | Uso definido |
|---|---:|---|
| `imgs/TOIC 34 ANOS.png` | 7177 × 3908 | Arte principal do hero e compartilhamento social |
| `imgs/LOGOBOLA.png` | 1344 × 1346 | Marca circular para header, footer e favicon de origem |
| `imgs/logoperfil-34anos.png` | 1080 × 1080 | Avatar/perfil do organizador e variações quadradas |

Todos os arquivos têm fundo claro. A aplicação precisa preservar espaço de respiro ao redor das artes e evitar recortes agressivos do escudo.

## Sistema de design

### Cores

| Nome | Hex | Uso |
|---|---|---|
| Vermelho Inferno | `#A80404` | Ação principal, destaques e detalhes da celebração |
| Preto Arquibancada | `#1C1C1C` | Header, footer e textos de maior contraste |
| Branco Bandeira | `#FFFFFF` | Fundo e superfícies de leitura |
| Cinza Fumaça | `#E9E7E7` | Divisores, fundos secundários e estados desabilitados |
| Vinho Profundo | `#6F0303` | Hover/foco do vermelho e gradientes discretos, quando necessários |

### Tipografia

- **Display:** `Barlow Condensed`, peso 700–800, para títulos e chamadas de evento. É uma família compacta e esportiva, adequada à energia da arte de 34 anos sem competir com ela.
- **Texto e interface:** `Inter`, peso 400–700, para informações práticas e boa legibilidade em telas pequenas.
- Títulos em caixa normal; o peso e a escala devem dar ênfase, sem depender de rótulos em caixa alta ou palavras coloridas isoladas.

### Princípios

- A arte comemorativa é o momento memorável: hero amplo, com o número 34 e a marca como protagonistas.
- O restante da página é calmo e funcional: fundo branco, blocos amplos e hierarquia clara para as informações do evento.
- O vermelho é sinal de ação e status, não cor de fundo predominante.
- Cards só agrupam conteúdo que realmente se comporta como unidade, como um evento ou bloco de serviço; não serão usados como decoração repetitiva.
- Transições serão restritas ao feedback de ações e respeitarão `prefers-reduced-motion`.

## Estrutura proposta

Alinhamento geral à esquerda; o hero usa composição centralizada em telas pequenas e uma grade de duas colunas a partir de desktop.

```text
┌──────────────────────────────────────────────────────┐
│ logo                 Eventos   Sobre        Entrar    │
├──────────────────────────────────────────────────────┤
│  [arte 34 anos]        Festa Explosão Inferno Coral   │
│                          34 Anos                       │
│                          Data e local em breve         │
│                          [Acompanhar novidades]        │
├──────────────────────────────────────────────────────┤
│ Próximos eventos                                       │
│ [imagem]  Festa 34 Anos       Em breve                 │
├──────────────────────────────────────────────────────┤
│ A Explosão Inferno Coral       Contatos e redes        │
├──────────────────────────────────────────────────────┤
│ marca · políticas · informações do organizador        │
└──────────────────────────────────────────────────────┘
```

Na rota de evento, a ação será “Acompanhar novidades” ou outro destino aprovado na Sprint 0. Nunca “Comprar ingresso” enquanto não houver uma integração de compra.

## Revisão de originalidade

A primeira tendência seria usar um painel preto integral com vermelho intenso em todos os elementos, o que apagaria os detalhes da arte e tornaria as informações cansativas. A direção foi ajustada para deixar o hero carregar a intensidade da comemoração e manter o corpo em branco, com contraste e ritmo mais próximos de um cartaz de torcida bem diagramado do que de uma landing page genérica. A tipografia condensada dá personalidade esportiva sem recorrer a tratamentos decorativos excessivos.

## Conteúdo da demonstração

Os dados da interface durante o desenvolvimento estão centralizados em `MOCK_DATA.md`. Eles definem o evento, organizador, textos provisórios e o CTA local. Todos são fictícios e serão substituídos antes de publicação pública.
