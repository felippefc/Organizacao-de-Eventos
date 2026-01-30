# 📱 Aplicativo de Organização de Eventos

Aplicação mobile desenvolvida em React Native com Expo e TypeScript para organização de eventos internos de uma empresa.

O app permite cadastrar, visualizar, filtrar, atualizar e remover eventos, consumindo uma API REST previamente disponibilizada.

## 🚀 Tecnologias utilizadas

-React Native

-Expo

-TypeScript

-Axios

-React Navigation

-AsyncStorage

-Jest (testes unitários básicos)

## 📋 Funcionalidades

-Listagem de eventos

-Filtro de eventos por título

-Visualização de detalhes do evento

-Cadastro de novo evento

-Atualização do status do evento

-Remoção de evento

-Integração com API REST

-Tratamento de estados de loading e erro

-Persistência local com AsyncStorage

-Validação de formulário

-Testes unitários básicos

## 🗂️ Estrutura do Projeto
```
src/
 ├── api/            # Integração com API (axios)
 ├── navigation/     # Rotas e navegação
 ├── screens/        # Telas da aplicação
 ├── types/          # Tipagens TypeScript
 ├── utils/          # Funções utilitárias  Persistência local (AsyncStorage)
      └── tests/          # Testes unitários
 ````

## ⚙️ Pré-requisitos

-Node.js (versão 16 ou superior) <br/>
-npm ou yarn <br/>
-Expo CLI <br/>

## ▶️ Como executar o projeto
1️⃣ Clone o repositório e navegue até a pasta do projeto


2️⃣ Instale as dependências <br/>
```
npm install
```


ou
```
yarn install
```
3️⃣ Execute o projeto <br/>
```
npm start
```

ou
```
yarn start
```

Abra o app no Expo Go ou emulador Android/iOS.

## 🌐 API utilizada

A aplicação consome uma [API REST local.](https://github.com/MatheusAndrade23/internal-events-api)

-Base URL: http://localhost:3000

-Documentação Swagger disponível em /docs

-A API não possui autenticação

-Os dados não persistem após reinicialização do servidor

## 🧪 Testes unitários

Testes unitários básicos foram implementados para validar regras de negócio, como validação de formulário.

Executar testes: <br/>
```
npx jest

```

## 🧠 Decisões técnicas

Componentes funcionais e hooks foram utilizados seguindo boas práticas do React.

A API é tratada como fonte principal de dados, com AsyncStorage atuando como cache/fallback.

A validação de dados é feita no frontend para melhorar a experiência do usuário.

O código foi organizado visando legibilidade e facilidade de manutenção.

## 👨‍💻 Autor

Desenvolvido por Felippe Feliciano <br/>
Desafio técnico – Aplicação Mobile
