<h1 align="center">
  API - KI Imobiliária
</h1>


## 💻 Projeto
Aplicação de cadastro, visualização, atualização e remoção de: usuários, imóveis, categorias de imóveis e agendamento de visitas aos imóveis.

## 🔨 Implementações

- [X] Cadastro, visualização, atualização e remoção de todas as entidades
- [X] Middleware de erro, validação de data/hora, autenticação e de permissão de Administrador.
- [X] Configurações dos testes e conexão com o banco de dados do teste e banco de produção.
- [X] Docker

## ✨ Tecnologias

- [X] Typescript
- [X] NodeJs
- [X] Express
- [X] TypeORM
- [X] Yup 
- [X] JsonWebToken
- [X] Bcrypt
- [X] Tests Jest
- [X] SQLite
- [X] Postgres
- [X] Docker / Docker compose



## 🌐 Regras de negócio

- Rotas com permissão de administrador ou/e com autenticação devem estar devidamente protegidas;
- Não pode ser possível criar mais de um usuário com o mesmo email;
- Ao deletar um usuário, deve-se alterar o seu estado de isActive para false, e caso ja esteja, retornar um erro;
- Quando o usuário efetuar o login, deve-se retornar um json contendo o token;
- Endereços e categorias devem ser únicos;
- Validar se o horário da visita a ser agendada está entre 08h00 as 18h00;
- Validar se o dia da visita a ser agendada corresponde entre segunda-feira a sexta-feira;
- Não pode ser possível realizar dois agendamentos no mesmo horário e data na mesma propriedade.

## Deploy

[Link do deploy](https://documentacaoimobiliaria.vercel.app/) <br>

