# Como rodar o projeto

Este projeto é uma vitrine Next.js (App Router + TypeScript) com dados locais de demonstração — não há banco de dados nem serviços externos obrigatórios para rodar localmente.

## Pré-requisitos

| Ferramenta | Versão sugerida |
|---|---|
| Node.js | 22+ (o `Dockerfile` usa `node:22-alpine`) |
| npm | Instalado junto com o Node |
| Docker + Docker Compose | Apenas se for rodar via container |

## Passo comum: variáveis de ambiente

Antes de qualquer um dos dois caminhos abaixo, copie o arquivo de exemplo:

```bash
cp .env.example .env
```

Variáveis disponíveis (`.env.example`):

| Variável | Padrão | Uso |
|---|---|---|
| `COMPOSE_PROJECT_NAME` | `explosao-34-anos` | Prefixo do nome do container |
| `APP_PORT` | `3000` | Porta exposta no host pelo Docker Compose |

---

## Opção 1 — Rodando com Docker (recomendado)

O projeto já vem com `Dockerfile`, `compose.yaml` e um `Makefile` com atalhos.

```bash
make up
```

Isso equivale a `docker compose up -d --build --force-recreate` e sobe o app em segundo plano, com hot reload (o código local é montado como volume dentro do container).

Acesse: [http://localhost:3000](http://localhost:3000) (ou a porta definida em `APP_PORT`).

Outros atalhos do `Makefile`:

| Comando | Efeito |
|---|---|
| `make logs` | Acompanha os logs do container `web` |
| `make ps` | Mostra o status dos containers |
| `make shell` | Abre um shell (`sh`) dentro do container |
| `make restart` | Derruba e sobe novamente o ambiente |
| `make down` | Para e remove os containers |
| `make clean` | Remove containers, órfãos e o volume de `node_modules` |

Sem `make`, os mesmos comandos podem ser rodados diretamente com `docker compose <comando>` (ex.: `docker compose up -d --build --force-recreate`).

## Opção 2 — Rodando sem Docker (local, com Node)

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000).

### Outros scripts npm

| Comando | Efeito |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento (Turbopack) |
| `npm run build` | Gera o build de produção |
| `npm run start` | Roda o build de produção (rodar `npm run build` antes) |
| `npm run lint` | Roda o ESLint no projeto |

---

## Build de produção via Docker

O `Dockerfile` tem um estágio `production` (multi-stage build) que gera um build standalone do Next.js:

```bash
docker build --target production -t explosao-34-anos:prod .
docker run -p 3000:3000 explosao-34-anos:prod
```

## Solução de problemas

- **Porta 3000 já em uso**: defina outra porta em `APP_PORT` (Docker) ou rode `npm run dev -- -p 3001` (local).
- **Alterações no código não refletem no Docker**: confirme que o volume `.:/app` está montado (já configurado em `compose.yaml`) e que o `node_modules` não foi corrompido — nesse caso, `make clean` seguido de `make up` recria tudo do zero.
- **Cache do Turbopack corrompido** (erros de `.next/dev/cache`): pare o servidor, apague a pasta `.next` e rode novamente.

## Documentação relacionada

Os demais documentos do projeto estão em `Docs/`:

- [`PRD.md`](./PRD.md) — requisitos de produto
- [`TASK.md`](./TASK.md) — plano de sprints
- [`DESIGN.md`](./DESIGN.md) — direção visual
- [`MOCK_DATA.md`](./MOCK_DATA.md) — dados fictícios de demonstração
- [`INTEGRATION.md`](./INTEGRATION.md) — pontos de extensão para integrações futuras
