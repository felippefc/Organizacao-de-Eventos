📱 Aplicativo de Organização de Eventos

Aplicação mobile desenvolvida em React Native com Expo e TypeScript para organização de eventos internos de uma empresa.

O app permite cadastrar, visualizar, filtrar, atualizar e remover eventos, consumindo uma API REST previamente disponibilizada.

🚀 Tecnologias utilizadas

React Native

Expo

TypeScript

Axios

React Navigation

AsyncStorage

Jest (testes unitários básicos)

📋 Funcionalidades
✅ Funcionalidades obrigatórias

Listagem de eventos

Filtro de eventos por título

Visualização de detalhes do evento

Cadastro de novo evento

Atualização do status do evento

Remoção de evento

Integração com API REST

Tratamento de estados de loading e erro

⭐ Funcionalidades bônus

Persistência local com AsyncStorage

Validação de formulário

Testes unitários básicos

🧱 Estrutura do projeto
src/
 ├── api/            # Integração com API (axios)
 ├── navigation/     # Rotas e navegação
 ├── screens/        # Telas da aplicação
 ├── storage/        # Persistência local (AsyncStorage)
 ├── types/          # Tipagens TypeScript
 ├── utils/          # Funções utilitárias (validação)
 └── tests/          # Testes unitários

⚙️ Pré-requisitos

Node.js (versão 16 ou superior)

npm ou yarn

Expo CLI

▶️ Como executar o projeto
1️⃣ Clone o repositório
git clone <https://github.com/felippefc/Organizacao-de-Eventos.git>
cd <Organizacao-de-Eventos>

2️⃣ Instale as dependências
npm install


ou

yarn install

3️⃣ Execute o projeto
npm start


ou

yarn start


Abra o app no Expo Go ou emulador Android/iOS.

🌐 API utilizada

A aplicação consome uma[API REST local.](https://github.com/MatheusAndrade23/internal-events-api)

Base URL: http://localhost:3000

Documentação Swagger disponível em /docs

A API não possui autenticação

Os dados não persistem após reinicialização do servidor

🧪 Testes unitários

Testes unitários básicos foram implementados para validar regras de negócio, como validação de formulário.

Executar testes:
npm test


ou

yarn test

🧠 Decisões técnicas

Componentes funcionais e hooks foram utilizados seguindo boas práticas do React.

A API é tratada como fonte principal de dados, com AsyncStorage atuando como cache/fallback.

A validação de dados é feita no frontend para melhorar a experiência do usuário.

O código foi organizado visando legibilidade e facilidade de manutenção.

👨‍💻 Autor

Desenvolvido por Felippe Feliciano
Desafio técnico – Aplicação Mobile