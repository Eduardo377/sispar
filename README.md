# SISPAR - Sistema de Gestão de Despesas 💸

Bem-vindo à documentação oficial do **SISPAR**, um sistema de gestão de reembolsos e despesas desenvolvido com foco em modularidade, usabilidade e escalabilidade. 🧠🧩

---

## 📚 Índice

1. [🧠 Visão Geral](#-visão-geral)
2. [🧱 Componentes e Suas Funções](#-componentes-e-suas-funções)
3. [⚙️ Lógica de Funcionamento](#️-lógica-de-funcionamento)
4. [🎨 Estilização com SCSS Modules](#-estilização-com-scss-modules)
5. [🧰 Bibliotecas Utilizadas](#-bibliotecas-utilizadas)
6. [💾 Persistência com localStorage](#-persistência-com-localstorage)
7. [✅ Boas Práticas Adotadas](#-boas-práticas-adotadas)
8. [🖥️ Como Rodar o Projeto Localmente](#️-como-rodar-o-projeto-localmente)
9. [🔧 Comandos de Instalação e Execução](#-comandos-de-instalação-e-execução)
10. [📂 Estrutura de Pastas](#-estrutura-de-pastas)
11. [📝 Licença](#-licença)

---

## 🧠 Visão Geral

O **SISPAR** é um sistema React moderno para controle e solicitação de reembolsos, permitindo que usuários insiram valores, datas, categorias e visualizem seus lançamentos em uma tabela organizada com resumos dinâmicos.

Ele foi desenvolvido com:

- React 19.1.0 ⚛️
- Vite ⚡
- SCSS Modules 🎨
- React Router DOM v7 🧭
- UUID para identificação única de itens 🆔
- Classnames para controle dinâmico de classes CSS 📌
- ESLint customizado para manter qualidade de código 🧼

---

## 🧱 Componentes e Suas Funções

- **Breadcrumb** 🧭: Navegação hierárquica do sistema.
- **Login/Forms** 🔐: Tela de login com formulário estilizado.
- **Modal** 📦: Confirmação de ações críticas.
- **Navbar** 🧭: Barra de navegação principal.
- **Dashboard/Cards** 📊: Resumo visual dos reembolsos.
- **BoxDate** 📅: Seleção de intervalo de datas.
- **BoxInfos** 🧾: Informações adicionais sobre o solicitante.
- **FormContainer** 🧰: Agrupamento de todos os campos de entrada.
- **SummarySection** 📌: Resumo dos dados inseridos.
- **Table** 🗂️: Listagem dos reembolsos adicionados.
- **Values** 💵: Campos para inserção de valores.


---

## ⚙️ Lógica de Funcionamento

- Os dados preenchidos nos campos são armazenados no `localStorage`.
- Cada item adicionado recebe um `UUID` único.
- Ao excluir, uma modal de confirmação é exibida.
- O estado é controlado via React Hooks (`useState`, `useEffect`) para reatividade.
- A tabela e os resumos se atualizam automaticamente ao adicionar ou remover itens.

---

## 🎨 Estilização com SCSS Modules

O projeto usa **SCSS Modules** para escopo isolado por componente, evitando conflitos de classes e permitindo customização mais controlada.

Exemplo:
```scss
// boxDate.module.scss
.wrapper {
    display: flex;
  gap: 1rem;
}
```

```jsx
import styles from "./BoxDate.module.scss";
<div className={styles.wrapper}>...</div>;
```
- Cada componente tem seu próprio `.module.scss`, garantindo isolamento e organização do CSS.
- Utilização de variáveis, nesting e mixins para manter um estilo limpo e reutilizável.



---

## 🧰 Bibliotecas Utilizadas

- **React Router DOM v7** → Roteamento SPA
- **UUID** → Geração de identificadores únicos
- **Classnames** → Manipulação condicional de classes CSS
- **ESLint customizado** → Regras personalizadas para manter padrão de código limpo

---

## 💾 Persistência com localStorage

Todos os dados de reembolso são salvos no `localStorage` usando `JSON.stringify` e recuperados com `JSON.parse`. Isso permite que os dados persistam mesmo após recarregar a página.

```jsx
localStorage.setItem("reembolsos", JSON.stringify(data));
const reembolsos = JSON.parse(localStorage.getItem("reembolsos"));
```

---

## ✅ Boas Práticas Adotadas

- Separação de responsabilidades por componente
- Modularização dos estilos (SCSS Modules)
- Reutilização de componentes
- Uso de identificadores únicos com UUID
- ESLint configurado para manter boas práticas de código
- Semântica de HTML mantida com `aria-labels` e elementos apropriados
- Limpeza de código e consistência no uso de hooks

---

## 🖥️ Como Rodar o Projeto Localmente

Pré-requisitos:

   - Node.js 18+

   - npm ou yarn

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/SISPAR.git
   cd SISPAR
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse em: [http://localhost:5173](http://localhost:5173)

---

## 🔧 Comandos de Instalação e Execução

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Visualizar build localmente
npm run preview
```

---

## 📂 Estrutura de Pastas


```bash
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
        └── ws-sispar.svg
    ├── src
    │   ├── App.jsx
    │   ├── assets
    │   │   ├── Dashboard
    │   │   │   ├── N-Análises.png
    │   │   │   ├── N-Aprovados.png
    │   │   │   ├── N-Rejeitados.png
    │   │   │   ├── N-Solicitados.png
    │   │   │   ├── arrowLeftCancel.png
    │   │   │   ├── arrowRight.png
    │   │   │   ├── binVentor.png
    │   │   │   ├── cruzVector.png
    │   │   │   ├── descriptionReasonVector.png
    │   │   │   ├── sistemaAtualizado.png
    │   │   │   ├── solicitarAnálises.png
    │   │   │   ├── solicitarHistórico.png
    │   │   │   ├── solicitarReembolso.png
    │   │   │   └── vectorHomeIndice.png
    │   │   ├── Header
    │   │   │   ├── avatarProfile.png
    │   │   │   ├── bottonAnalise.png
    │   │   │   ├── bottonHistórico.png
    │   │   │   ├── bottonHome.png
    │   │   │   ├── bottonReembolso.png
    │   │   │   ├── bottonSair.png
    │   │   │   └── imagem-fechar-header.png
    │   │   ├── Tela-Login
    │   │   │   ├── cargo-ship-ocean.png
    │   │   │   └── logo-ws.png
    │   │   ├── solicitacao
    │   │   │   ├── arrowDown.png
    │   │   │   ├── calendar-icon.png
    │   │   │   ├── checkVector.png
    │   │   │   └── deleteVector.png
    │   │   └── ws-sispar.png
    │   ├── components
    │   │   ├── breadcrumb
    │   │   │   ├── Breadcrumb.jsx
    │   │   │   └── breadcrumb.module.scss
    │   │   ├── login
    │   │   │   └── forms
    │   │   │   │   ├── Forms.jsx
    │   │   │   │   └── forms.module.scss
    │   │   ├── modal
    │   │   │   ├── Modal.jsx
    │   │   │   └── modal.module.scss
    │   │   ├── navbar
    │   │   │   ├── Navbar.jsx
    │   │   │   └── navbar.module.scss
    │   │   ├── reembolsos
    │   │   │   └── dashboard
    │   │   │   │   └── cards
    │   │   │   │       ├── Card.jsx
    │   │   │   │       └── card.module.scss
    │   │   └── solicitacoes
    │   │   │   ├── boxDate
    │   │   │       ├── BoxDate.jsx
    │   │   │       └── boxDate.module.scss
    │   │   │   ├── boxInfos
    │   │   │       ├── BoxInfos.jsx
    │   │   │       └── boxInfos.module.scss
    │   │   │   ├── formContainer
    │   │   │       ├── FormContainer.jsx
    │   │   │       └── formContainer.module.scss
    │   │   │   ├── summarySection
    │   │   │       ├── SummarySection.jsx
    │   │   │       └── summarySection.module.scss
    │   │   │   ├── table
    │   │   │       ├── table.jsx
    │   │   │       └── table.module.scss
    │   │   │   └── values
    │   │   │       ├── Values.jsx
    │   │   │       └── values.module.scss
    │   ├── data
    │   │   └── initialTableData.json
    │   ├── global.scss
    │   ├── hooks
    │   │   └── useSolicitacao.jsx
    │   ├── main.jsx
    │   ├── pages
    │       ├── analise
    │       │   ├── Analise.jsx
    │       │   └── analise.module.scss
    │       ├── historico
    │       │   ├── historico.jsx
    │       │   └── historico.module.scss
    │       ├── home
    │       │   ├── Home.jsx
    │       │   └── home.module.scss
    │       ├── login
    │       │   ├── Login.jsx
    │       │   └── login.module.scss
    │       ├── reembolsos
    │       │   ├── Reembolsos.jsx
    │       │   └── reembolsos.module.scss
    │       └── solicitacao
    │           ├── solicitacao.jsx
    │           └── solicitacao.module.scss
    ├── vercel.json
    └── vite.config.js

```

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License**.  
Sinta-se à vontade para usar, modificar e compartilhar. 🤝

```text
MIT License

Copyright (c) 2025 Eduardo Gomes
```

---

Feito com 💙 por [Eduardo Gomes](https://github.com/Eduardo377)