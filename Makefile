.DEFAULT_GOAL := help

.PHONY: help up down restart build logs ps shell clean

help: ## Exibe os comandos disponíveis
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*##/ {printf "\033[36m%-12s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

up: ## Sobe o ambiente local em segundo plano
	docker compose up -d --build --force-recreate

down: ## Para e remove os contêineres do projeto
	docker compose down

restart: ## Reinicia o ambiente local
	docker compose down
	docker compose up -d --build

build: ## Reconstrói a imagem sem iniciar contêineres
	docker compose build

logs: ## Acompanha os logs do front-end
	docker compose logs -f web

ps: ## Mostra o estado dos contêineres
	docker compose ps

shell: ## Abre um shell no contêiner do front-end
	docker compose exec web sh

clean: ## Remove contêineres e o volume local de dependências
	docker compose down --volumes --remove-orphans
