# PROJETO-ONG-FRONTEND

## 🐾 Plataforma Digital: AuAu Ajuda - Resgate e Adoção de Animais Domésticos

> Repositório finalizado sob conformidade WCAG 2.1 Nível AA e arquitetura Single Page Application (SPA).

Este projeto consiste no desenvolvimento de uma plataforma web completa para a ONG "AuAu Ajuda", com o objetivo de ampliar o alcance da organização, facilitar a captação de recursos e engajar voluntários, aplicando, de forma integrada, os fundamentos de desenvolvimento Front-end.

---

## 🛠️ Tecnologias e Arquitetura

| Categoria | Detalhe | Finalidade |
| :--- | :--- | :--- |
| **Linguagens** | HTML5, CSS3, JavaScript (ESM) | Base estrutural, estilização avançada e interatividade. |
| **Arquitetura** | **Single Page Application (SPA)** | Utiliza JavaScript (`spa.js` e `fetch`) para carregar o conteúdo principal (`<main>`) dinamicamente, evitando o recarregamento da página e proporcionando uma experiência fluida. |
| **Metodologia** | **Design System** via Variáveis CSS e **GitFlow** para versionamento. | Garante consistência visual, escalabilidade, e histórico de desenvolvimento organizado. |

---

## 🚀 Entregas Concluídas (I, II, III e IV)

### 🎯 Entrega I: Estrutura Semântica (HTML5)

Foco na fundação e acessibilidade estrutural.
* **Semântica:** Uso correto de `<header>`, `<nav>`, `<main>`, `<figure>`, e `aria-label`.
* **Formulário Complexo:** `cadastro.html` implementado com todos os campos solicitados (Nome, CPF, E-mail, Endereço, etc.).
* **Validação Nativa:** Uso de `required`, `type="email"`, `type="tel"`, e `pattern` para simular máscaras de entrada (CPF, CEP, Telefone).

### 🎨 Entrega II: Estilização e Leiautes (CSS3 Avançado)

Foco no visual profissional e modularidade.
* **Design System:** Criação de um sistema de variáveis (`:root`) para cores (8+), espaçamento modular (`--space-*`) e tipografia.
* **Leiautes:** Implementação de **CSS Grid** (estrutura `body`) e **Flexbox** (navegação, alinhamento).
* **Responsividade:** Definição de **5 Breakpoints** (incluindo Mobile-First) e tipografia fluida para escala proporcional de texto.

### 🖥️ Entrega III: Interatividade e Funcionalidades (JavaScript)

Foco na dinâmica da aplicação.
* **SPA Funcional:** Scripts (`spa.js`) configurados para interceptar a navegação e injetar conteúdo estático (`projetos.html`, `cadastro.html`) no container `<main id="app-content">`.
* **Código Modular:** Lógica segmentada em `main.js`, `spa.js`, e `validation.js` (uso de `import`/`export`).
* **Verificação de Consistência:** Implementação da lógica JavaScript (`validation.js`) para validar a consistência do CPF e fornecer feedback de erro dinâmico via **Templates JS**.

---

## ✅ Entrega IV: Qualidade Profissional, WCAG e Deploy

### 1. Acessibilidade (WCAG 2.1 Nível AA)

Assegura que o projeto seja usável por pessoas com deficiência.

* **Contraste:** Garantido o contraste mínimo de 4.5:1 para texto normal (corrente) no tema padrão.
* **Navegação por Teclado:** Estilização rigorosa do estado **`:focus`** em **todos** os elementos interativos (`a`, `button`, `input`) com um `outline` de alto contraste (Verde Cítrico), cumprindo o requisito de foco visível.
* **Modo Escuro Acessível:** Implementação da *media query* **`@media (prefers-color-scheme: dark)`** no CSS para fornecer um modo escuro de alto contraste, conforme a preferência do sistema operacional do usuário.
* **Suporte a Leitores de Tela:** Uso de `aria-label` na navegação e atributos `alt` em imagens (já implementado nas entregas I e II).

### 2. Controle de Versão e Processo (Processo Profissional)

* **Estratégia de Branching:** Histórico construído utilizando a metodologia **GitFlow** (`main`, `develop`, *feature branches*).
* **Histórico de Commits Semântico:** Todos os commits foram padronizados usando prefixos (Ex: `feat:`, `style:`, `fix:`, `chore:`).
* **Releases:** O projeto final foi marcado com uma **tag de versionamento semântico** (`v1.0.0`), indicando a versão de produção.
* **Documentação/Gestão:** Utilização de **Pull Requests** documentados e simulação de **Issues** e **Milestones** no GitHub.

### 3. Otimização para Produção

* **Minificação de Ativos:** O código CSS (`style.css`), JavaScripts (`main.js`, `spa.js`, `validation.js`) e imagens foram processados para criar versões otimizadas (`*.min.css`, `*.min.js`), garantindo o carregamento mais rápido do site em produção.

---

## 📁 Estrutura de Arquivos

O projeto segue esta estrutura base, com todos os assets centralizados:

/projeto-ong-frontend ├── index.html <-- Contêiner principal do SPA ├── projetos.html <-- Conteúdo injetável (Projetos) ├── cadastro.html <-- Conteúdo injetável (Formulário) ├── README.md <-- Documentação Técnica (Este arquivo) └── /Imagens ├── /css │ └── style.min.css <-- CSS Final (WCAG/Layout) ├── /js │ ├── main.min.js <-- Inicialização JS │ └── validation.min.js <-- Validação avançada └── ... (arquivos de imagem otimizados)