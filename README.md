# Aplicações para cenários reais

## Executando o repositório

- Clone o repositório e abra sua raiz no terminal;
- Execute o comando: `npm install`;
- Garanta que em sua máquina você possua o MySQL instalado;
    - Crie um arquivo '.env' com base no '.env.sample' e configure corretamente sua conexão ao banco de dados;
- Execute a aplicação com `npm start`, ou no modo de desenvolvimento: `npm run start:dev`;

## Gerando Build

- Execute o comando `npm run build`;

A distribuição estará na pasta `build`;

## Rotas da API

### Users

- GET /users
> Retorna todos os usuários do sistema;
> Precisa de Sessão Iniciada

- POST /users
body: {
    name: "string",
    password: "string",
    email: "string"
}
> Cria um novo usuário
> Precisa de Sessão Iniciada

### Auth

- POST /auth/login
body: {
    email: "string",
    password: "string"
}
> Cria uma sessão com um usuário existente

- POST /auth/logout
> Finaliza a sessão de um usuário