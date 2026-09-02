# FinanceManager

> Aplicação web de controle financeiro pessoal desenvolvida com foco em aprendizado, arquitetura de software e desenvolvimento Front-end com Angular.

## 📌 Sobre o projeto

O **FinanceManager** é uma aplicação de controle financeiro pessoal desenvolvida do zero com o objetivo de criar uma experiência moderna e intuitiva para acompanhamento das finanças.

O projeto será desenvolvido inicialmente com **dados mockados**, permitindo explorar e consolidar os conceitos do Angular antes da implementação do Backend.

A aplicação terá recursos para acompanhamento de receitas, despesas, transações, cartões, contas bancárias, orçamentos e metas financeiras.

O desenvolvimento seguirá uma abordagem **Mobile First**, garantindo uma experiência consistente em dispositivos móveis, tablets e desktops.

## 🎯 Objetivos

* Aprender e aprofundar conhecimentos em Angular
* Aplicar TypeScript em um projeto real
* Desenvolver uma aplicação utilizando arquitetura organizada e componentes reutilizáveis
* Praticar desenvolvimento responsivo com abordagem Mobile First
* Trabalhar com formulários, validações e gerenciamento de estado
* Criar uma interface moderna baseada em um projeto visual de referência
* Evoluir posteriormente a aplicação para uma arquitetura Full Stack
* Integrar o Front-end com uma API REST desenvolvida em Java e Spring Boot
* Utilizar PostgreSQL para persistência dos dados
* Praticar testes automatizados, Docker e boas práticas de desenvolvimento

## 🚀 Funcionalidades

### Autenticação

* [ ] Login
* [ ] Cadastro
* [ ] Recuperação de senha
* [ ] Validação de formulários

### Dashboard

* [ ] Patrimônio líquido
* [ ] Total de receitas
* [ ] Total de despesas
* [ ] Despesas fixas vs. variáveis
* [ ] Taxa de economia mensal
* [ ] Gráfico de receitas vs. despesas
* [ ] Distribuição de despesas por categoria
* [ ] Transações recentes

### Transações

* [ ] Listagem de transações
* [ ] Filtros
* [ ] Adicionar transação
* [ ] Editar transação
* [ ] Excluir transação
* [ ] Classificação por categoria
* [ ] Classificação entre receita e despesa
* [ ] Classificação entre fixa e variável
* [ ] Métodos de pagamento

### Cartões e Contas

* [ ] Cartões de crédito
* [ ] Limite disponível
* [ ] Fatura e vencimento
* [ ] Contas bancárias
* [ ] Distribuição de saldo
* [ ] Reservas financeiras

### Orçamentos e Metas

* [ ] Orçamento por categoria
* [ ] Progresso dos gastos
* [ ] Alertas de limite
* [ ] Metas financeiras
* [ ] Acompanhamento de progresso

### Configurações

* [ ] Perfil
* [ ] Preferências
* [ ] Aparência
* [ ] Notificações
* [ ] Segurança

## 🛠️ Tecnologias

### Front-end

* Angular
* TypeScript
* HTML5
* SCSS
* Angular Router

### Futuras integrações

* Java
* Spring Boot
* PostgreSQL
* REST API
* Docker

### Qualidade

* Testes unitários
* Testes de integração
* Lint
* Formatação de código

> As tecnologias e ferramentas poderão evoluir durante o desenvolvimento conforme novos requisitos e aprendizados forem incorporados ao projeto.

## 🏗️ Arquitetura

A aplicação será organizada buscando separar responsabilidades e favorecer a reutilização de componentes.

Estrutura inicial prevista:

```text
src/
└── app/
    ├── core/
    ├── shared/
    ├── features/
    ├── layout/
    └── ...
```

A arquitetura será evoluída gradualmente conforme novas funcionalidades forem implementadas.

## 📱 Design

O FinanceManager seguirá uma abordagem **Mobile First**, priorizando inicialmente a experiência em dispositivos móveis e posteriormente adaptando a interface para tablets e desktops.

A identidade visual utiliza como referência uma estética moderna de aplicações fintech.

### Paleta inicial

| Elemento   | Cor       |
| ---------- | --------- |
| Primary    | `#0EA5E9` |
| Accent     | `#F59E0B` |
| Background | `#F8FAFC` |
| Cards      | `#FFFFFF` |
| Text       | `#0F172A` |

O design visual utilizado como referência foi criado previamente para orientar a implementação da interface. A implementação dos componentes e telas será realizada manualmente em Angular como parte do processo de aprendizado.

## 📋 Gerenciamento do projeto

O desenvolvimento será acompanhado através de **GitHub Projects**, utilizando uma metodologia baseada em:

```text
Epic
 └── Story
      └── Task
```

### Fluxo de desenvolvimento

```text
Backlog
   ↓
Ready
   ↓
In Progress
   ↓
Code Review
   ↓
Testing
   ↓
Done
```

As tarefas serão organizadas por funcionalidades e evoluídas incrementalmente.

## 🗺️ Roadmap

### Fase 1 — Setup

* [x] Definição inicial do projeto
* [ ] Configuração do Angular
* [ ] Estrutura da aplicação
* [ ] Configuração do GitHub Project

### Fase 2 — Design System

* [ ] Identidade visual
* [ ] Componentes básicos
* [ ] Componentes financeiros

### Fase 3 — Application Layout

* [ ] Sidebar
* [ ] Header
* [ ] Navegação
* [ ] Responsividade

### Fase 4 — Authentication

* [ ] Login
* [ ] Cadastro
* [ ] Validações

### Fase 5 — Dashboard

* [ ] Dashboard
* [ ] KPIs
* [ ] Gráficos
* [ ] Transações recentes

### Fase 6 — Transactions

* [ ] Listagem
* [ ] Filtros
* [ ] Criar transação
* [ ] Editar transação
* [ ] Excluir transação

### Fase 7 — Cards & Accounts

* [ ] Cartões
* [ ] Contas bancárias
* [ ] Savings

### Fase 8 — Budgets & Goals

* [ ] Orçamentos
* [ ] Metas

### Fase 9 — Settings

* [ ] Configurações
* [ ] Preferências

### Fase 10 — Quality

* [ ] Responsividade
* [ ] Micro-interações
* [ ] UI Polish
* [ ] Testes

### Fase 11 — Full Stack

* [ ] API REST
* [ ] Java + Spring Boot
* [ ] PostgreSQL
* [ ] Autenticação real
* [ ] Persistência
* [ ] Docker

## 💻 Executando o projeto

### Pré-requisitos

* Node.js
* npm
* Angular CLI
* Git

### Instalação

Clone o repositório:

```bash
git clone <repository-url>
```

Entre no diretório:

```bash
cd FinanceManager
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
ng serve
```

A aplicação estará disponível em:

```text
http://localhost:4200
```

## 🌱 Desenvolvimento

O projeto está sendo desenvolvido de forma incremental.

A prioridade inicial é construir o **Front-end em Angular utilizando dados mockados**. Após a consolidação da interface e dos principais fluxos, o projeto será evoluído para uma arquitetura Full Stack.

## 📚 Objetivo de aprendizado

Este projeto faz parte do processo de evolução técnica em:

* Angular
* TypeScript
* Desenvolvimento Front-end
* Arquitetura de aplicações
* Componentização
* Responsividade
* APIs REST
* Java
* Spring Boot
* PostgreSQL
* Docker
* Testes automatizados
* Git e GitHub

O objetivo não é apenas criar uma aplicação funcional, mas compreender **como cada parte da aplicação funciona e como as decisões técnicas se conectam dentro de um projeto real**.

## 📄 Status

🚧 **Em desenvolvimento**

O projeto está em sua fase inicial de desenvolvimento do Front-end.

---

## 👨‍💻 Autor

**Ulisses**

Projeto desenvolvido para estudos, prática de desenvolvimento Full Stack e construção de portfólio.
