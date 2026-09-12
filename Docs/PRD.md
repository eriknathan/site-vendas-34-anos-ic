# PRD — Plataforma de Venda de Ingressos | Explosão Inferno Coral 34 Anos

**Documento:** Product Requirements Document
**Versão:** 1.0
**Data:** Setembro/2026
**Torcida:** Explosão Inferno Coral
**Evento de referência:** Festa 34 Anos
**Baseado em:** Análise do site imperio49anos.com.br (Torcida Império Alviverde, powered by Ticket King)

---

## 1. Visão Geral

### 1.1 Contexto
Torcidas organizadas frequentemente promovem eventos comemorativos (aniversários, festas temáticas, encontros) que precisam de um canal digital simples, confiável e com identidade visual própria para vender ingressos. O modelo de referência analisado usa um site "white-label" — uma página com a marca da torcida, mas rodando sobre uma infraestrutura de ticketing já pronta (login, checkout, antifraude, políticas legais).

### 1.2 Objetivo do produto
Criar uma página de venda de ingressos personalizada para a **Explosão Inferno Coral**, com a mesma lógica do modelo de referência: uma "vitrine" do evento **Festa 34 Anos** com identidade visual da torcida, conectada a um back-end de ticketing (próprio ou de terceiros) que cuide de pagamento, emissão de ingresso e controle de acesso.

### 1.3 Fora de escopo (v1)
- Múltiplos organizadores/marketplace completo (a v1 é para uma única torcida/marca)
- App mobile nativo
- Emissão de ingresso físico impresso pela própria torcida (fica a cargo do provedor de ticketing)

---

## 2. Personas

| Persona | Descrição | Necessidade principal |
|---|---|---|
| **Torcedor comprador** | Sócio/torcedor que quer comprar ingresso para o evento | Comprar rápido, com segurança, e receber o ingresso digital |
| **Organizador (diretoria da torcida)** | Responsável por criar/gerir o evento | Publicar evento, acompanhar vendas, definir política de cancelamento |
| **Suporte/Atendimento** | Responde dúvidas e solicitações de reembolso | Canal de contato claro (WhatsApp/e-mail) |

---

## 3. Estrutura de páginas (Sitemap)

Baseado no modelo de referência, o site deve ter:

| Rota | Página | Função |
|---|---|---|
| `/` | Home | Banner do(s) evento(s) em destaque, lista de "próximos eventos", navegação (Principais eventos, Categorias, Parceiros) |
| `/evento/[slug]` | Detalhe do evento | Nome, local, data/hora, descrição, política específica do evento, dados do organizador, botão de compra |
| `/entrar` | Login/Cadastro | Autenticação do torcedor (e-mail/senha ou social login) |
| `/minha-conta` | Área logada | Histórico de compras, ingressos ativos, dados cadastrais |
| `/politica-privacidade` | Institucional | Política de privacidade (LGPD) |
| `/politica-cancelamento` | Institucional | Regras de cancelamento e reembolso |
| `/[organizador]` | Perfil do organizador | Dados da torcida, contatos, redes sociais, eventos vinculados |

### 3.1 Componentes de navegação (header/footer)
- **Header:** logo, menu (Principais eventos / Categorias / Parceiros / Anuncie também), botão "Entrar"
- **Footer:** logo, links institucionais (Início, Minha conta), links de ajuda (políticas), contato (telefone/WhatsApp/e-mail), redes sociais, CNPJ e copyright, selo/certificação do provedor de pagamento

---

## 4. Funcionalidades (Features)

### 4.1 Essenciais (MVP)
- [ ] **Listagem de eventos** — cards com imagem, nome, data, status ("Vendas liberadas", "Esgotado", "Em breve")
- [ ] **Página de evento individual** com:
  - Galeria/banner de imagem do evento
  - Local (endereço completo) e data/hora de início e fim
  - Descrição livre do evento
  - Política específica do evento (ex.: idade mínima, documento exigido, regras de acesso)
  - Link para política de cancelamento
  - Dados do organizador com contatos (WhatsApp, telefone, redes sociais, site)
- [ ] **Checkout de compra** — seleção de tipo/lote de ingresso, quantidade, pagamento (PIX, cartão, boleto)
- [ ] **Login/cadastro de conta**
- [ ] **Área "Minha conta"** — histórico de pedidos e ingressos (com QR code/código de acesso)
- [ ] **Canal "Anuncie também"** — link direto para WhatsApp da torcida/organização para prospecção de outros eventos
- [ ] **Páginas institucionais** — política de privacidade e de cancelamento

### 4.2 Desejáveis (v2)
- [ ] Sistema de categorias de eventos (shows, festas, eventos esportivos)
- [ ] Múltiplos lotes de ingresso com preços escalonados por tempo
- [ ] Painel do organizador (dashboard de vendas, check-in via app)
- [ ] Programa de sócio-torcedor / desconto para associados
- [ ] Notificações por e-mail/WhatsApp sobre status da compra
- [ ] Avaliações/depoimentos de eventos passados

### 4.3 Futuras (v3+)
- [ ] Marketplace multi-organizador (outras torcidas/parceiros vendendo na mesma base)
- [ ] Revenda de ingressos entre usuários (com validação antifraude)
- [ ] Integração com redes sociais para compartilhamento automático

---

## 5. Requisitos Funcionais Detalhados

### RF01 — Cadastro e Login
- Usuário deve poder se cadastrar com nome, e-mail, CPF e telefone
- Login via e-mail/senha (avaliar login social como opção futura)
- Recuperação de senha por e-mail

### RF02 — Compra de ingresso
- Sistema deve permitir seleção de quantidade e tipo de ingresso
- Deve validar documento de identidade quando o evento exigir maioridade
- Pagamento via PIX, cartão de crédito e boleto
- Emissão automática de ingresso digital (QR code) após confirmação de pagamento

### RF03 — Cancelamento/Reembolso
- Regra padrão: solicitação em até 7 dias corridos da compra OU até 48h antes do evento (o que ocorrer primeiro), desde que o ingresso não tenha sido utilizado
- Taxa de serviço não reembolsável
- Reembolso segue o mesmo meio de pagamento usado na compra

### RF04 — Gestão de evento (organizador)
- Organizador deve poder criar/editar evento: nome, imagem, local, data, descrição, política específica
- Organizador deve poder definir status do evento (vendas liberadas, esgotado, encerrado)

### RF05 — Conformidade legal
- Política de privacidade alinhada à LGPD
- Termos de uso e política de cancelamento visíveis e aceitos no checkout
- Exibição de CNPJ e razão social no rodapé

---

## 6. Requisitos Não Funcionais

| Categoria | Requisito |
|---|---|
| **Performance** | Carregamento da home e página de evento em até 2s |
| **Segurança** | Criptografia de dados sensíveis, conformidade PCI para pagamentos, antifraude no checkout |
| **Disponibilidade** | 99,5% uptime, especialmente nas janelas de abertura de vendas |
| **Responsividade** | Mobile-first (maioria das compras de ingresso ocorre via celular) |
| **SEO** | Meta tags (title, description, Open Graph) por evento, para bom compartilhamento em redes sociais |
| **Escalabilidade** | Suportar picos de acesso simultâneo na abertura das vendas |

---

## 7. Identidade Visual e Branding

- Logo da **Explosão Inferno Coral** em destaque no header e footer
- Paleta de cores alinhada às cores oficiais da torcida/clube
- Nome do domínio personalizado (ex.: `explosao34anos.com.br` ou similar)
- Selo/rodapé do provedor de ticketing (se for solução white-label de terceiros), mantendo transparência sobre quem processa o pagamento

### 7.1 Paleta de Cores Padrão

| Cor | Hex | Uso sugerido |
|---|---|---|
| 🔴 Vermelho | `#A80404` | Cor primária — CTAs, botões de ação ("Comprar ingresso", "Entrar"), destaques, links ativos |
| ⚫ Preto | `#1C1C1C` | Cor secundária — header, footer, textos principais, fundo em modo escuro |
| ⚪ Branco | `#FFFFFF` | Cor neutra — fundo principal, textos sobre fundo escuro, espaçamento/respiro visual |

**Diretrizes de aplicação:**
- Fundo geral do site em branco (`#FFFFFF`), com header e footer em preto (`#1C1C1C`) para dar contraste e reforçar identidade
- Vermelho (`#A80404`) reservado para elementos de ação e destaque (botões, badges de status "Vendas liberadas", ícones de destaque) — evitar uso excessivo para não cansar visualmente
- Textos sobre fundo branco em preto (`#1C1C1C`) para boa legibilidade; textos sobre fundo preto em branco (`#FFFFFF`)
- Garantir contraste mínimo (WCAG AA) entre vermelho/preto e branco em botões e textos

---

## 8. Modelo de Negócio / Monetização

- **Taxa de serviço** cobrada sobre cada ingresso vendido (repassada ao provedor de ticketing, se for solução terceirizada)
- Possibilidade de **planos de parceria** com outras marcas/patrocinadores ("Parceiros" no menu)
- Canal de **"Anuncie também"** pode gerar receita adicional divulgando outros eventos na mesma base de usuários

---

## 9. Decisão de Arquitetura: Construir vs. Usar Provedor Existente

O modelo analisado (Império 49 Anos) **não constrói a infraestrutura do zero** — ele usa a Ticket King como provedor white-label. Recomenda-se avaliar:

| Opção | Prós | Contras |
|---|---|---|
| **Usar provedor white-label existente** (ex.: Ticket King, Sympla, Eventbrite White-label) | Rápido para lançar, já resolve pagamento/antifraude/legal | Menos controle sobre marca e dados, taxas do provedor |
| **Construir plataforma própria** | Controle total, marca 100% própria, sem taxas de terceiros | Custo e tempo de desenvolvimento, responsabilidade legal/segurança do zero |

Para uma torcida que quer lançar rápido e não tem equipe técnica própria, a via white-label (como no modelo de referência) é a mais indicada para o MVP.

---

## 10. Métricas de Sucesso

- Número de ingressos vendidos por evento
- Taxa de conversão (visitantes → compradores)
- Taxa de cancelamento/reembolso
- Tempo médio de checkout
- NPS/satisfação dos torcedores compradores

---

## 11. Riscos e Mitigações

| Risco | Mitigação |
|---|---|
| Fraude na compra/revenda de ingressos | Antifraude no checkout, ingresso nominal com QR code único |
| Pico de acesso na abertura das vendas derrubar o site | Infraestrutura escalável / fila virtual de acesso |
| Inadimplência/chargeback | Taxa de serviço não reembolsável, validação de documento na entrada |
| Dependência de fornecedor terceiro (white-label) | Contrato claro de SLA e portabilidade de dados dos clientes |

---

## 12. Evento de Lançamento — Ficha de Referência

Dados a preencher para o primeiro evento publicado na plataforma, seguindo o modelo analisado:

| Campo | Valor |
|---|---|
| **Nome do evento** | Festa Explosão Inferno Coral \| 34 Anos |
| **Torcida/Organizador** | Explosão Inferno Coral |
| **Local** | *[a definir]* |
| **Data e horário** | *[a definir]* |
| **Descrição** | *[a definir]* |
| **Política específica do evento** | Ex.: evento apenas para maiores de idade, com documento de identidade original (sem foto/cópia); cancelamento conforme política padrão (7 dias da compra ou 48h antes do evento) |
| **Contatos do organizador** | Instagram, WhatsApp, Facebook, telefone, site oficial da torcida |
| **URL do evento** | `/evento/festa-explosao-inferno-coral-34-anos` |

---

## 13. Próximos Passos

1. Definir se a solução será white-label (terceirizada) ou construída internamente
2. Levantar identidade visual da torcida (logo, cores, imagens do evento)
3. Definir dados do primeiro evento (nome, data, local, política de cancelamento específica)
4. Configurar domínio e páginas institucionais (privacidade, cancelamento)
5. Configurar canais de contato (WhatsApp, redes sociais)
6. Teste de checkout ponta a ponta antes do lançamento das vendas