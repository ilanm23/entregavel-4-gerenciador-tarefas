
# Entregável 4 - Gerenciador de Tarefas

## Desenvolvimento de Interfaces Dinâmicas e Reativas

Projeto desenvolvido utilizando React, JavaScript e Tailwind CSS.

## Objetivo

Desenvolver uma aplicação interativa para praticar o compartilhamento de estados entre componentes utilizando Lifting State Up e a utilização do useEffect para controlar efeitos colaterais.

## Funcionalidades

- Adicionar novas tarefas.
- Listar tarefas cadastradas.
- Marcar tarefas como concluídas.
- Excluir tarefas.
- Contabilizar tarefas pendentes.
- Atualizar automaticamente o título da aba do navegador.
- Contador de tempo da sessão utilizando setInterval.
- Limpeza do intervalo utilizando clearInterval.

## Tecnologias utilizadas

- React
- JavaScript
- Tailwind CSS
- Vite

## Estrutura dos componentes

- App.jsx: componente pai responsável pelo estado das tarefas.
- Formulario.jsx: componente responsável por cadastrar novas tarefas.
- Lista.jsx: componente responsável por exibir, concluir e excluir tarefas.
- Timer.jsx: componente responsável por contar o tempo da sessão.

## Como executar o projeto

1. Clonar o repositório.
2. Entrar na pasta do projeto.
3. Executar npm install.
4. Executar npm run dev.
5. Abrir o endereço indicado no terminal.

## Reflexão

### O que acontece se omitirmos o array de dependências do useEffect?

Quando omitimos o array de dependências do useEffect, o efeito é executado após cada renderização do componente. Isso pode provocar execuções desnecessárias e até loops infinitos, dependendo do código utilizado.

### Como funciona o fluxo de dados no Lifting State Up?

O Lifting State Up consiste em elevar o estado de um componente filho para o componente pai, permitindo que vários componentes compartilhem os mesmos dados.

O componente pai controla o estado e envia informações para os filhos através de props. Os componentes filhos podem comunicar alterações ao pai através de funções recebidas por props.

Assim, o fluxo de dados acontece de cima para baixo, enquanto os eventos e solicitações de alteração são comunicados de baixo para cima.

Essa organização facilita o compartilhamento de informações e mantém os componentes mais organizados.
