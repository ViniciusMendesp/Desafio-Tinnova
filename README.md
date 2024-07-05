## Desafio-Tinnova

Este projeto consiste em um formulário de cadastro de usuários com uma página adicional para visualização dos usuários cadastrados.

## Getting Started

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- Node.js
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Instale as dependências:

```bash
npm install
# or
yarn
# or
pnpm
```

## Rodando o projeto

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev

```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto em execução.

## Testes

Para executar os testes:

```bash
npm test
# ou
yarn test
# ou
pnpm test

```

## Funcionalidades

O projeto é um sistema simples de cadastro de usuários com duas principais funcionalidades:

- **Cadastro de Usuários**: Permite adicionar novos usuários ao sistema.
- **Visualização de Usuários Cadastrados**: Mostra a lista de usuários atualmente cadastrados, exibindo seus dados como nome, CPF, telefone e e-mail.
- **Exclusão de Usuários**: Permite remover usuários cadastrados do sistema.

## Tecnologias Principais Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor.
- **TypeScript**: Linguagem de programação para desenvolvimento mais seguro e com tipagem estática.
- **Axios**: Cliente HTTP para realizar requisições à API de usuários.
- **Tailwind CSS**: Framework CSS para estilização rápida e flexível.
- **Jest e Testing Library**: Utilizados para testes unitários e de integração.

## Descrição da Solução Utilizada

### Arquitetura Moderna

Utilizei o Next.js como framework principal, aproveitando sua arquitetura que suporta Server-Side Rendering (SSR) e Incremental Static Regeneration (ISR), garantindo uma aplicação rápida e responsiva.

### TypeScript

Implementei TypeScript para tipagem estática, melhorando a robustez do código e facilitando a manutenção ao longo do desenvolvimento.

### Estilização Flexível

Adotei o Tailwind CSS para estilização dos componentes, o que permitiu um desenvolvimento ágil e consistente com aplicação de padrões de design modernos.

### Integração de APIs

Utilizei o Axios para realizar integrações eficientes com APIs externas, como a API de cadastro e visualização de usuários.

### Testes Automatizados

Implementei testes unitários e de integração utilizando Jest e Testing Library para garantir a estabilidade e a qualidade do código ao longo do ciclo de desenvolvimento.

### Documentação e Padronização

Adotei boas práticas de documentação e padronização de código, facilitando a colaboração entre os membros da equipe e garantindo a escalabilidade do projeto.
