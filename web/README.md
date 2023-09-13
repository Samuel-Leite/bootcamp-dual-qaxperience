# Testes E2E com Cypress

## Introdução
Segue o projeto E2E da aplicação HealthXp através do Bootcamp Dual Experience da QAXperience.

### Pré-requisitoss:
* VS Code
* Node.js

## Como executar o projeto:
* Clonar o projeto na máquina local
* Executar no terminal a linha de comando "npm install"
* Configurar o arquivo dotEnv com as variáveis do banco de dados ElephantSQL
* Executar o comando "npx cypress open" em modo assistido

## Estrututa do projeto
| Diretório                   | Finalidade                                    |
| ----------------------------| ----------------------------------------------|
| ./cypress/e2e               | Cenários de testes                            |
| ./cypress/fixture           | Massa de dados para os cenários de testes     |
| ./cypress/support/pages     | Page Objects de cada página da aplicação      |
| ./cypress/support/commands  | Configuração de funções genéricaslicação      |