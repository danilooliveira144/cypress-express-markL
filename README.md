# 🧪 Testes Automatizados com Cypress

Este repositório contém os testes automatizados desenvolvidos durante o curso Cypress eXpress, com melhorias e funcionalidades extras implementadas por mim.

Os testes cobrem a aplicação web e a API do sistema **MarkL**, que é uma plataforma de gerenciamento de tarefas.

---

## 📦 Tecnologias utilizadas

- [Cypress](https://docs.cypress.io/) v12.20  
- [Node.js](https://nodejs.org/) v18.12.1  
- Projeto Web + API (fornecido no curso)  

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório dos testes

```bash
git clone https://github.com/danilooliveira144/cypress-express-markL.git
cd cypress-express-markL
npm install
```
### 2. Suba o sistema (API + Web)

Em um terminal, suba a API:
```bash
cd caminho-do-projeto-api
npm install
npm run dev
```
Em outro terminal, suba o front-end:
```bash
cd caminho-do-projeto-web
npm install
npm run dev
```

### 3. Instale e excute o Cypress

No terminal que está o projeto, instale o cypress:
```bash
npm add cypress@12.2.0 -D
```
No mesmo terminal, execute o cypress:
```bash
npx cypress open
```
