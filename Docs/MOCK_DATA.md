# Dados fictícios de demonstração

> Estes dados existem somente para construir e validar a interface. Exceto pelo local já confirmado do evento, eles não representam evento, empresa, contatos, preços ou canais reais e devem ser substituídos antes de qualquer publicação pública.

## Organizador

| Campo | Valor fictício |
|---|---|
| Nome público | Explosão Inferno Coral |
| Razão social | Associação Cultural Explosão Inferno Coral — dados demonstrativos |
| CNPJ | 00.000.000/0001-00 — fictício |
| E-mail | contato@exemplo-explosao34anos.test |
| Telefone | (81) 99999-0000 — fictício |
| WhatsApp | `https://wa.me/5581999990000?text=Olá%2C%20quero%20acompanhar%20as%20novidades%20da%20Festa%2034%20Anos.` |
| Instagram | `@explosao34anos.demo` |
| Site | `https://explosao34anos.test` |

## Evento de destaque

| Campo | Valor fictício |
|---|---|
| Nome | Festa Explosão Inferno Coral \| 34 Anos |
| Slug | `festa-explosao-inferno-coral-34-anos` |
| Status | Em breve |
| Início | 12 de dezembro de 2026, 21h |
| Encerramento | 13 de dezembro de 2026, 4h |
| Local | Centro de Convenções de Pernambuco |
| Endereço | A confirmar |
| Categoria | Festa |
| Classificação | 18 anos |
| Arte principal | `imgs/TOIC 34 ANOS.png` |
| Logo/organizador | `imgs/LOGOBOLA.png` |

### Descrição

> A Explosão Inferno Coral celebra 34 anos de história, arquibancada e paixão. Uma noite de encontro para a torcida, com atrações confirmadas. Acompanhe os canais oficiais para receber as próximas novidades.

### Atrações confirmadas (demonstrativas)

Exibidas na página de informações do evento (`/evento/[slug]`), apenas para validar o layout. Nomes e papéis fictícios.

| Atração | Papel |
|---|---|
| Banda Inferno ao Vivo | Show principal da noite |
| MC Arquibancada | Apresentação e hino da torcida |
| Bloco de Percussão Explosão | Bateria oficial da torcida |
| DJ Fúria Coral | Abertura e encerramento da pista |

### Regras demonstrativas

- Evento fictício destinado a maiores de 18 anos.
- Será obrigatório apresentar documento oficial com foto na entrada quando o evento for real.
- A programação e os horários desta página são demonstrativos e podem ser alterados.
- Não há venda de ingresso, cadastro ou pagamento nesta versão do site.

### CTA da fase atual

**Texto:** `Acompanhar novidades`  
**Comportamento:** abrir modal local confirmando: “As vendas ainda não começaram. Acompanhe os canais oficiais da Explosão Inferno Coral para saber das novidades.”  
**Sem redirecionamento, coleta de dados ou integração externa nesta fase.**

### Ingressos (demonstrativos)

Usados na tela de seleção de ingresso (`/evento/[slug]`), apenas para validar o layout. Preços e lotes fictícios.

| Ingresso | Preço | Taxa | Brinde |
|---|---:|---:|---|
| Pista - Lote 1 | R$ 90,00 | R$ 7,20 | Camiseta comemorativa 34 Anos |
| Camarote - Lote 1 | R$ 160,00 | R$ 12,80 | Camiseta comemorativa 34 Anos |
| Copo Explosão 34 Anos 550ml | R$ 20,00 | R$ 1,60 | — |

**Comportamento do botão "Comprar Ingresso":** a seleção de ingressos e o cálculo do carrinho funcionam no front-end para demonstrar a experiência, mas o botão não processa pagamento — ele abre o mesmo modal “vendas ainda não começaram”. Cupom de desconto é apenas visual nesta fase.

## Páginas institucionais — conteúdo demonstrativo

| Página | Estado nesta fase |
|---|---|
| Política de privacidade | Página com aviso de conteúdo demonstrativo; informar que não há cadastro ou coleta de dados pelo site. |
| Política de cancelamento | Página com aviso de que não há vendas abertas; apresentar a regra de referência do PRD apenas como conteúdo sujeito a revisão jurídica. |
| Minha conta | Estado vazio: “A área de conta estará disponível quando as vendas forem abertas.” |
| Entrar | Estado vazio: “O acesso à conta será disponibilizado junto com as vendas.” |
