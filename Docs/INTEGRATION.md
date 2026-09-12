# Pontos de integração futura

## Dados de evento

Hoje, os dados vivem em `src/data/site.ts`. A futura fonte (PostgreSQL ou SQLite) deve manter o mesmo contrato: nome, slug, status, data/hora, local, descrição, política e imagem. Componentes públicos não devem consultar diretamente o banco.

## Autenticação e conta

As rotas `/entrar` e `/minha-conta` são estados vazios. A autenticação deve ser conectada somente quando o provedor de ticketing e a responsabilidade de dados estiverem definidos.

## Checkout

Os CTAs públicos não iniciam pagamento. A futura integração deve substituir o CTA por um redirecionamento/SDK do provedor, sem processar cartão ou QR code nesta aplicação.

## Webhooks e pedidos

Quando existirem, webhooks devem ser validados no servidor e persistir apenas referências necessárias ao estado do pedido. Nenhum segredo deve ser exposto em `NEXT_PUBLIC_*`.
