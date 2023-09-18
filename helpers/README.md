# Testes E2E Dual com Cypress e CodeceptJS

## Introdução
O arquivo da API Helper possui a finalidade de acessar o banco de dados através de API

## Execução
* No terminal executar o comando "npm run dev"

## Estrututa do projeto
| Diretório        | Finalidade                                                             |
| -----------------| -----------------------------------------------------------------------|
| ./app.js         | Funções da API através de métodos para acessar ao banco de dados       |
| ./db.js          | Funções para acessar ao banco de dados                                 |

## Dados para inserir no arquivo dotEnv concernente ao ElephantSQL
DB_HOST = '' = informação do server que consta na aba 'Details'
DB_USER = '' = informação do usuário que consta na aba 'Details'
DB_PASSWORD = '' = informação da senha que consta na aba 'Details'
DB_PORT = 5432