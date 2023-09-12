# Food Explorer

Projeto de um cardápio digital direcionado para ser usado por restaurantes com o intuito de ser utilizado como projeto final do curso de full-stack da RocketSeat sendo composto por `Front-End e Back-End`.

O food explorer tem duas personas: o admin e o usuário;

O admin é a pessoa responsável pelo restaurante, logo, pode criar, visualizar, editar e apagar um prato a qualquer momento. Cada contém uma imagem, um nome, uma categoria, uma breve descrição, os ingredientes e o seu preço. Ao clicar em adicionar prato, o admin receberá uma mensagem de sucesso e será redirecionado para a página principal;

O usuário pode visualizar todos os pratos cadastrados e quando clicar em um prato, será redirecionado para uma nova tela com informações mais detalhadas sobre ele.

## 🚀 Começando

Clone o Front-End do meu repositório:
`https://github.com/LorrainePedro/FRONT_FOODEXPLORER.git`
<br>
Clone o Back-End do meu repositório:<br>

`https://github.com/LorrainePedro/BACKEND_FOODEXPLORER.git`

### 📋 Pré-requisitos

Será necessário ter no seu computador tanto o front-end quanto o back-end em execução para que o projeto rode de forma satisfatória.

Com ambos baixados, abrir ambas as pastas e clicar com o botão direito na raiz de cada uma delas e escolher
Abrir com Code(com o VScode devidamente instalado em sua máquina), abrir o terminal do vsCode e seguir o passo a passo de instalação seguinte.

Ou se preferir poderá acessar o projeto pelo terminal utilizando cd e arrastando a pasta do projeto para dentro do terminal.

### 🔧 Instalação Front-End

Para fazer a instalação de todas as dependências necessárias
`npm install`

Para executar o projeto em ambiente de desenvolvimento
`npm run dev`

Acesse a porta `http://localhost:3333`

Obs: Caso necessário navegue pelas pastas src/services/api.js
e escolha entre 
baseURL: "https://rocketfoods-api.onrender.com" ou
baseURL: "http://localhost:3333", conforme seu interesse. Para que isso seja feito basta "invalidar a opçao não desejada com commit "//" no início dela.
Lembrando: Caso opte por localhost, será necessário rodar a API em seu pc. Ao optar pela URL do render acessará a minha API que foi feito deploy pelo onrender.

`Deploy do projeto back-end pelo render: https://rocketfoods-api.onrender.com`
<br>

`Deploy do projeto front-end pelo netlify: https://heartfelt-kelpie-3c01d7.netlify.app`

Para ter acesso ao login de administrador e ter poderes de adicionar, atualizar e deletar pratos, utilize:
`login: admin`
`password: admin`

## 🛠️ Construído com

- Biblioteca para criação de interfaces: `reactJS`
- Setup para criar o projeto no React: `ViteJS`
- CSS-in-JS: `Styled-components`
- Biblioteca de ícones: `react-icons`
- Lib de navegação do projeto: `react-router-dom`

## ✒️ Autora

[Lorraine Pedro](https://github.com/LorrainePedro)

## Referência e apoio

[RocketSeat](https://www.rocketseat.com.br/)

Agradecimento aos colegas de turma que me apoiaram nessa reta final e dedicaram horas no discord para codar junto a mim em momentos de dificuldade.

# FRONT_FOODEXPLORER

![Food Explorer Logo](./src/assets/1.png)
