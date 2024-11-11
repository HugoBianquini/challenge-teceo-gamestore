# Infinite GameStore

<img width="1667" alt="Captura de Tela 2024-11-11 às 10 48 34" src="https://github.com/user-attachments/assets/aace806e-8fba-4940-afa3-1f3ef74e0880">

## Descrição

O projeto **Infinite GameStore** é uma aplicação completa que combina um backend robusto em NestJS, um banco de dados PostgreSQL e um frontend performático utilizando React com Vite. O objetivo principal é implementar um sistema de infinite scroll virtualizado que permite a visualização de um número ilimitado de itens (games), além de funcionalidades que permitem a alteração individual dos itens e ações em massa, como aplicar descontos a todos os itens selecionados.

Este projeto foi desenvolvido para garantir uma boa performance em cenários desafiantes que envolvem grandes quantidades de dados.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js
- Docker
- Yarn

## Estrutura do Repositório

- **backend**: Backend desenvolvido em NestJS, que utiliza PostgreSQL e possui módulos para games e categories. Suporta paginação de games e inclui o Prisma como ORM.
- **frontend**: Frontend desenvolvido em React com Vite, utilizando _react-virtuoso_ para implementar o infinite scroll e virtualização.

## Instruções para Execução

### Executando Backend e Frontend com Docker

Para rodar os projetos `backend` e `frontend` em conjunto, utilize o Docker Compose.

1. Clone o repositório:

   ```bash
   git clone https://github.com/HugoBianquini/challenge-teceo-gamestore.git
   cd challenge-teceo-gamestore
   ```

2. Execute o Docker Compose:

   ```bash
   docker compose up -d
   ```

3. Após os contêineres subirem:
   - O frontend estará acessível em: `http://localhost:5173`
   - O backend estará acessível em: `http://localhost:3000`

OBS: Recomendo utilizar o frontend no computador, o layout ainda não está responsivo para dispositivos menores

### Banco de Dados

Ao executar o comando docker compose up, o Prisma irá gerar automaticamente um seed para popular o banco de dados PostgreSQL com **500 games**. Isso facilita o processo de desenvolvimento e testes, permitindo que você interaja com dados já existentes na aplicação.

Com isso, pode ser que nos primeiros segundos o frontend não consiga realizar as requisições ao backend, uma vez que existe um pequeno delay para a criação do seed no banco de dados. Caso aconteça, aguarde alguns segundos e recarregue a página.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
