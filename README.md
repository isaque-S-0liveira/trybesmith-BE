# My Awesome Project

## Contexto

O foco principal deste projeto é, com base nos ensinamentos da **Trybe**, desenvolver uma API para gerenciar uma loja de itens medievais, utilizando **TypeScript** e o ORM **Sequelize**. A aplicação foi construída com foco em operações de **CRUD** (Create, Read, Update, Delete) para produtos e pedidos, seguindo a arquitetura **MSC (Model-Service-Controller)**.

<details>
  <summary>O que é a Trybe?🤔</summary>
  A Trybe é uma escola de desenvolvimento web genuinamente comprometida com o sucesso profissional de seus estudantes. Com o Modelo de Sucesso Compartilhado (MSC) oferecido pela Trybe Fintech, uma instituição financeira autorizada pelo Banco Central do Brasil, os alunos têm a opção de pagar apenas quando estiverem trabalhando.
</details>

<details>
  <summary>🎲 Diagrama Entidade Relacionamento</summary>
  <div style="display:flex; justify-content:center;  align-items:center; width="100%">
  <img src="Preview/erTrybeSmith.png" alt="page1"/>
  </div>
</details>

Algumas rotas da API requerem autenticação via **JWT (JSON Web Token)** para garantir a segurança e controle de acesso. Além disso, foram implementados testes automatizados para cobrir as funcionalidades das camadas **Service** e **Controller**, garantindo um alto nível de qualidade no código e corretude das operações.

A API permite o cadastro de produtos, listagem de pedidos, login de usuários, e todas as operações são integradas ao banco de dados por meio do Sequelize, que facilita a comunicação com o **MySQL**. A lógica do sistema também garante que cada produto tenha um pedido único, reforçando o conceito de itens exclusivos e artesanais.

### Funcionalidades Principais:
- Cadastro de novos produtos no banco de dados.
- Listagem de todos os produtos cadastrados.
- Listagem de pedidos, incluindo os produtos associados a cada pedido.
- Autenticação de usuários com **JWT** e validação de credenciais no banco de dados.

---

## Tecnologias Usadas

- [Node.js](https://nodejs.org/) - Plataforma para execução do JavaScript no servidor.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática ao código.
- [Express](https://expressjs.com/) - Framework para construir APIs com Node.js.
- [Sequelize](https://sequelize.org/) - ORM para interagir com o banco de dados MySQL de forma fácil e eficiente.
- [MySQL](https://www.mysql.com/) - Banco de dados relacional utilizado para armazenar informações de produtos e pedidos.
- [JWT (JSON Web Token)](https://jwt.io/) - Ferramenta para geração de tokens de autenticação.
- [Mocha](https://mochajs.org/) - Framework de testes para JavaScript.
- [Chai](https://www.chaijs.com/) - Biblioteca de asserções para testes, utilizada em conjunto com o Mocha.
- [Sinon](https://sinonjs.org/) - Ferramenta para criação de mocks, stubs e spies em testes.


## Entre em contato:
<a href="mailto:zazac3179@gmail.com" target="_blank">
  <img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail" height="40" width="auto" />
</a>
<a href="https://www.linkedin.com/in/isaque-s-oliveira/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="isaque oliveira" height="30" width="40" /></a>
<a href="https://wa.me/5574981510614" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/whatsapp.svg" alt="WhatsApp" height="30" width="40" /></a>
