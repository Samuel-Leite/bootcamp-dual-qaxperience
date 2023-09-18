# Testes E2E Dual com Cypress e CodeceptJS

## Introdução
Segue o projeto E2E da aplicação HealthXp através do Bootcamp Dual Experience da QAXperience contemplando aplicação web e mobile, e o uso da API Helper para acessar ao banco de dados.

### Pré-requisitoss:
* VS Code
* Node.js
* Java 11
* ElephantSQL (acessar o banco de dados)
* Git e Git Bash

## Como executar o projeto:
* Clonar o projeto na máquina local
* Executar no terminal a linha de comando "npm install" nos quatro arquivos com suas respectivas funcionalidades
* Configurar o arquivo dotEnv com as variáveis do banco de dados ElephantSQL, segue o modelo de configuração no README.md em cada arquivo (helper e web)

## Estrututa do projeto
| Diretório                   | Finalidade                                                                    |
| ----------------------------| ------------------------------------------------------------------------------|
| ./app-healthxp              | Arquivos da aplicação contemplando o back-end e o front-end                   |
| ./helpers                   | API Helper para acessar ao banco de dados e personalizar a massa de teste     |
| ./mobile                    | Automação de testes mobile utilizando CodeceptJS e Appium                     |
| ./web                       | Automação de testes mobile utilizando Cypress                                 |


## Inicialização do projeto HealthXP
* Com 2 abas no terminal correspondente ao app-healthxp, em cada aba (WEB e API), executar o comando "npm run dev"
* No terminal correspondente ao Helper, executar o comando "npm run dev"