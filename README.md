# Hello World Express Application

Esta é uma aplicação Express.js escrita em TypeScript que fornece uma API simples para buscar usuários de um banco de dados PostgreSQL.

## Estrutura do Projeto

```
src/
├── app.ts                  # Arquivo principal da aplicação
├── controllers
│   └── userController.ts   # Controlador para manipulação de usuários
├── models
│   └── userModel.ts        # Modelo para acesso aos dados de usuários
└── routers
    └── userRouters.ts      # Rotas relacionadas a usuários
```

## Requisitos

- Node.js
- PostgreSQL
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd hello-world-express
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env` na raiz do projeto com as credenciais do seu banco de dados PostgreSQL:
```
PG_HOST=localhost
PG_PORT=5432
PG_USER=seu_usuario
PG_PASSWORD=sua_senha
PG_DATABASE=nome_do_banco
```

4. Verifique se o banco de dados possui uma tabela chamada `usuarios`.

## Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000`.

## Endpoints da API

- **GET /** - Rota de verificação de conectividade com o banco de dados
- **GET /api/user** - Retorna uma lista de todos os usuários do banco de dados

## Tecnologias Utilizadas

- Express.js - Framework web
- TypeScript - Superset JavaScript com tipagem estática
- PostgreSQL - Banco de dados relacional
- dotenv - Gerenciamento de variáveis de ambiente
- morgan - Middleware de logging HTTP
- cors - Middleware para habilitar CORS

## Desenvolvimento

Para adicionar novos recursos, siga a estrutura MVC:
1. Crie modelos na pasta `models/`
2. Implemente controladores na pasta `controllers/`
3. Defina rotas na pasta `routers/`
4. Importe e registre as novas rotas em `app.ts`