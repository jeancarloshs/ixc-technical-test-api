
# Desafio para Dev Back-End - IXC Soft

Este repositório contém o desafio de programação proposto para a vaga de Desenvolvedor Backend Pleno na IXC Soft. O objetivo deste desafio é avaliar suas habilidades técnicas e conhecimentos em desenvolvimento de software, especialmente voltados para o backend.

## Considerações sobre o desafio
* O prazo para entrega da solução é de 3 dias corridos, contados a partir da data de recebimento do desafio.
* Utilização das seguintes linguagens NodeJS Express e React/NextJS


## Descrição do Desafio
O desafio consiste em desenvolver uma aplicação Full-Stack utilizando NodeJS Express e React/NextJS, que seja capaz de realizar as seguintes funcionalidades:

## Funcionalidades

- Tela de Login para Autenticação dos usuários
- Tela de Cadastro para novos Usuarios
- Utilizar o banco de dados MongoDB
- Funcionalidade de macro para troca de mensagens em tempo real
## Instalação

Para instalar as dependencias

```bash
  npm install
```
Para rodar em modo dev
```bash
  npm run dev
```
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT` = 3001

`DB_USER` = usuario do seu banco de dados

`DB_PASS` = senha do seu banco de dados

`DB_NAME` = nome do seu banco de dados

`DB_HOST` = url host do seu banco de dados

`DB_COLLECTION` = nome da collection que voce ira utilizar no seu banco de dados

`SECRET` = secret para criptografar o JWT Token

## Documentação da API

#### Autenticar na API para trazer o token

```http
  POST /api/v1/user/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. O EMAIL do usuario para autenticar |
| `password`      | `string` | **Obrigatório**. O PASSWORD do usuario para autenticar |

#### Para Criar um Novo Usuario

```http
  POST /api/v1/user/create
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O NOME do usuario para visualizar as mensagens |
| `email`      | `string` | **Obrigatório**. O EMAIL do usuario para autenticar |
| `password`      | `string` | **Obrigatório**. O PASSWORD do usuario para autenticar |

#### Para Trazer a conversa entre 2 usuario

```http
  GET /api/v1/get/messages/:user1ID/:user2ID
```

#### Para Registrar uma mensagem no banco

```http
  POST /api/v1/sent/message
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O NOME do usuario para enviar as mensagens |
| `email`      | `string` | **Obrigatório**. O EMAIL do usuario para enviar as mensagens |
| `receivedID`      | `string` | **Obrigatório**. O receivedID do usuario para enviar as mensagens |
| `sendToID`      | `string` | **Obrigatório**. O sendToID do usuario para enviar as mensagens |

## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

Nesse projeto consegui me aperfeiçoar no desenvolvimento Back-End, utilizando o banco de dados MongoDB, havia utilizado somente uma vez em caso de estudo, foi algo desafiador, pois estou habituado a utilizar o MySql ou Postgres, isso me fez sair da zona de conforto, também utilizei nesse projeto JWT Token para autenticação das chamadas das rotas, para mante-las seguras, e algo que nunca havia trabalhado foi o Socket.IO, foi algo bem trabalhoso de desenvolver, pois nunca havia desenvolvido algo com ele, somente conhecia atravez de videos e blogs como o medium
## Stack utilizada

**Front-end:** React, NextJS, TailwindCSS

**Back-end:** Node, Express, Socket.io


## Autores

- [@jeancarloshs](https://www.github.com/jeancarloshs)

