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























Passo a Passo: Instalar Node.js, TypeScript e Bibliotecas
Passo 1: Instalar o Node.js
1. Baixe e instale o Node.js:
- Acesse o site oficial do Node.js (https://nodejs.org/en/) e baixe a versão LTS (Long Term Support).
- Siga as instruções de instalação de acordo com seu sistema operacional.
2. Verifique a instalação:
No terminal, execute:
```bash
node -v
npm -v
```
Isso deve retornar as versões instaladas do Node.js e do npm.
Passo 2: Criar o projeto Node.js
1. Inicialize o projeto Node.js:
Execute o seguinte comando para gerar o arquivo `package.json`:
```bash
npm init -y
```
Isso cria o arquivo `package.json` que armazena informações sobre as dependências e
configurações do projeto.
Passo 3: Instalar o TypeScript
1. Instale o TypeScript globalmente (opcional):
```bash
npm install -g typescript
```
2. Instale o TypeScript no projeto:
```bash
npm install typescript --save-dev
```
3. Crie o arquivo de configuração do TypeScript:
Execute o comando abaixo para gerar o `tsconfig.json`:
```bash
tsc --init
```
Configure o arquivo `tsconfig.json` para que o TypeScript transpile os arquivos `.ts` para o formato
correto.
Passo 4: Instalar as dependências do projeto
1. Instalar o Express.js:
```bash
npm install express
```
2. Instalar o Prisma:
```bash
npm install prisma @prisma/client
```
3. Instalar o PostgreSQL:
```bash
npm install pg
```
4. Instalar dotenv:
```bash
npm install dotenv
```
5. Instalar morgan:
```bash
npm install morgan
```
6. Instalar cors:
```bash
npm install cors
```
Passo 5: Configurar o TypeScript
1. Crie o diretório para os arquivos TypeScript:
```bash
mkdir src
```
2. Configure o TypeScript para o projeto:
No `tsconfig.json`, ajuste as opções para o seu projeto:
```json
{
 "compilerOptions": {
 "target": "ES6",
 "module": "commonjs",
 "outDir": "./dist",
 "rootDir": "./src",
 "strict": true,
 "esModuleInterop": true
 },
 "include": [
 "src/**/*.ts"
 ]
}
```
Passo 6: Configurar o Express e as bibliotecas
1. Crie o arquivo `src/index.ts`:
```typescript
import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// Rota de exemplo
app.get('/', (req: Request, res: Response) => {
 res.send('Olá, Mundo!');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Servidor rodando na porta ${port}`);
});
```
2. Configure o Prisma para conectar ao PostgreSQL:
No arquivo `prisma/schema.prisma`, defina o datasource para o PostgreSQL:
```prisma
datasource db {
 provider = "postgresql"
 url = env("DATABASE_URL")
}
generator client {
 provider = "prisma-client-js"
}
model User {
 id Int @id @default(autoincrement())
 name String
 email String @unique
}
```
Crie a variável de ambiente `DATABASE_URL` no arquivo `.env` para conectar ao seu banco
PostgreSQL:
```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/NOME_DO_BANCO"
```
Rodar as migrações:
```bash
npx prisma migrate dev
```
Passo 7: Compilar e rodar o projeto
1. Adicionar scripts ao `package.json`:
```json
"scripts": {
 "dev": "tsc && node dist/index.js",
 "start": "tsc && node dist/index.js"
}
```
2. Rodar o servidor:
Compile os arquivos TypeScript e execute o servidor:
```bash
npm run dev
```