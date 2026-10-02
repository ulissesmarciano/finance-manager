# FinanceManager

> Aplicação web de controle financeiro pessoal desenvolvida com foco em aprendizado, arquitetura de software e desenvolvimento Front-end com Angular.

## 📌 Sobre o projeto

O **FinanceManager** é uma aplicação de controle financeiro pessoal desenvolvida do zero com o objetivo de criar uma experiência moderna e intuitiva para acompanhamento das finanças.

O projeto será desenvolvido inicialmente com **dados mockados**, permitindo explorar e consolidar os conceitos do Angular antes da implementação do Backend.

A aplicação terá recursos para acompanhamento de receitas, despesas, transações, cartões, contas bancárias, orçamentos e metas financeiras.

O desenvolvimento seguirá uma abordagem **Mobile First**, garantindo uma experiência consistente em dispositivos móveis, tablets e desktops.

## 🎯 Objetivos

- Aprender e aprofundar conhecimentos em Angular
- Aplicar TypeScript em um projeto real
- Desenvolver uma aplicação utilizando arquitetura organizada e componentes reutilizáveis
- Praticar desenvolvimento responsivo com abordagem Mobile First
- Trabalhar com formulários, validações e gerenciamento de estado
- Criar uma interface moderna baseada em um projeto visual de referência
- Evoluir posteriormente a aplicação para uma arquitetura Full Stack
- Integrar o Front-end com uma API REST desenvolvida em Java e Spring Boot
- Utilizar PostgreSQL para persistência dos dados
- Praticar testes automatizados, Docker e boas práticas de desenvolvimento

## 🚀 Funcionalidades

### Autenticação

- [ ] Login
- [ ] Cadastro
- [ ] Recuperação de senha
- [ ] Validação de formulários

### Dashboard

- [ ] Patrimônio líquido
- [ ] Total de receitas
- [ ] Total de despesas
- [ ] Despesas fixas vs. variáveis
- [ ] Taxa de economia mensal
- [ ] Gráfico de receitas vs. despesas
- [ ] Distribuição de despesas por categoria
- [ ] Transações recentes

### Transações

- [ ] Listagem de transações
- [ ] Filtros
- [ ] Adicionar transação
- [ ] Editar transação
- [ ] Excluir transação
- [ ] Classificação por categoria
- [ ] Classificação entre receita e despesa
- [ ] Classificação entre fixa e variável
- [ ] Métodos de pagamento

### Cartões e Contas

- [ ] Cartões de crédito
- [ ] Limite disponível
- [ ] Fatura e vencimento
- [ ] Contas bancárias
- [ ] Distribuição de saldo
- [ ] Reservas financeiras

### Orçamentos e Metas

- [ ] Orçamento por categoria
- [ ] Progresso dos gastos
- [ ] Alertas de limite
- [ ] Metas financeiras
- [ ] Acompanhamento de progresso

### Configurações

- [ ] Perfil
- [ ] Preferências
- [ ] Aparência
- [ ] Notificações
- [ ] Segurança

## 🛠️ Tecnologias

### Front-end

- Angular
- TypeScript
- HTML5
- SCSS
- Angular Router
- Tailwind CSS
- Angular Material Icons

### Futuras integrações

- Java
- Spring Boot
- PostgreSQL
- REST API
- Docker

### Qualidade

- Testes unitários
- Testes de integração
- Lint
- Formatação de código

> As tecnologias e ferramentas poderão evoluir durante o desenvolvimento conforme novos requisitos e aprendizados forem incorporados ao projeto.

## 🏗️ Arquitetura

A aplicação será organizada buscando separar responsabilidades e favorecer a reutilização de componentes.

A estrutura inicial do projeto utiliza uma organização simples, que será evoluída gradualmente conforme novas necessidades surgirem.

```text
src/
└── app/
    ├── components/
    │   ├── shared/
    │   │   ├── button/
    │   │   ├── input/
    │   │   ├── select/
    │   │   ├── checkbox/
    │   │   ├── toggle/
    │   │   ├── badge/
    │   │   ├── avatar/
    │   │   ├── card/
    │   │   ├── modal/
    │   │   ├── tooltip/
    │   │   ├── loading/
    │   │   └── empty-state/
    │   │
    │   ├── dashboard/
    │   ├── transactions/
    │   ├── cards-accounts/
    │   ├── budgets/
    │   └── settings/
    │
    ├── screen/
    │   ├── login/
    │   ├── register/
    │   ├── dashboard/
    │   ├── transactions/
    │   ├── cards-accounts/
    │   ├── budgets/
    │   ├── settings/
    │   └── not-found/
    │
    ├── services/
    │
    ├── app.ts
    ├── app.html
    ├── app.scss
    ├── app.routes.ts
    └── app.config.ts