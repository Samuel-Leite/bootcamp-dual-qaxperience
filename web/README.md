# Testes E2E Dual com Cypress e CodeceptJS

## Introdução
O arquivo correspondente a automação do front-end utilizando o Cypress

## Execução
* No terminal executar o comando "npm run cypress"

## Estrututa do projeto
| Diretório                              | Finalidade                                    |
| ---------------------------------------|-----------------------------------------------|
| ./cypress/e2e                          | Cenários de testes                            |
| ./cypress/fixture                      | Massa de dados para os cenários de testes     |
| ./cypress/support/pages                | Page Objects de cada página da aplicação      |
| ./cypress/support/pages/components     | Componentes da aplicação                      |
| ./cypress/support/commands             | Configuração de funções genéricaslicação      |


## Dados para inserir no arquivo dotEnv concernente ao ElephantSQL e URLs
DB_HOST = '' = informação do server que consta na aba 'Details'
DB_USER = '' = informação do usuário que consta na aba 'Details'
DB_PASSWORD = '' = informação da senha que consta na aba 'Details'
DB_PORT = 5432

API_HELPER = 'http://localhost:5000'
BASE_URL= 'http://localhost:3000'