# 🔥 Sistema de Controle de Gás – Frontend

Aplicação frontend desenvolvida para controle de consumo de gás em condomínios.  
O projeto simula um ambiente real de sistema corporativo, com autenticação,
proteção de rotas, registro de leituras e integração com API REST.

---

## 🚀 Funcionalidades

- Login e cadastro (simulado)
- Controle de sessão via `localStorage`
- Proteção de rotas (guard)
- Registro de consumo de gás
- Seleção de gasômetros (apartamentos)
- Validação de formulário
- Mensagens de feedback animadas
- Layout responsivo (mobile e desktop)
- Fallback para ambiente sem backend

---

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, responsividade)
- JavaScript (ES6+)
- API REST (Django – backend opcional)

---

## 📂 Estrutura do Projeto

frontend/
├─ login.html
├─ pages/
│ └─ dashboard.html
├─ css/
│ └─ style.css
├─ HTML/
  ├─ index.html
  └── dashboard.html
├─ js/
│ ├─ auth.js
│ ├─ guard.js
│ ├─ logout.js
│ ├─ api.js
│ └─ leituras.js
└─ assets/
└─ fundo.png

---

## ▶️ Como Executar o Projeto

### ✔ Opção 1 — Somente Frontend
1. Clone o repositório
2. Abra o arquivo `login.html` no navegador
3. Faça login para acessar o dashboard

> Esta opção utiliza dados simulados caso a API não esteja disponível.

---

### ✔ Opção 2 — Com Backend (Opcional)
1. Inicie a API local (Django)
2. Certifique-se de que os endpoints estejam ativos:
   - `/api/gasometros/`
   - `/api/leituras/`
3. O frontend consumirá automaticamente os dados reais

---

## 🔐 Autenticação

A autenticação é simulada utilizando `localStorage` para fins de demonstração
do fluxo de login, proteção de rotas e logout.

---

## 📡 Integração com API

O sistema está preparado para consumir uma API REST real.

```js
const API_URL = "http://127.0.0.1:8000/api";
Caso a API não esteja disponível, o sistema utiliza dados mockados,
garantindo funcionamento em ambientes como GitHub Pages.

🎯 Objetivo do Projeto
Demonstrar domínio de fundamentos de frontend, organização de código,
boas práticas de UX e integração com APIs REST em um cenário próximo ao
de aplicações corporativas reais.

🧠 Considerações Técnicas
JavaScript puro foi utilizado para evidenciar domínio dos fundamentos

Código modularizado para evitar duplicações

Separação clara entre autenticação, regras de negócio e integração

Layout adaptado para dispositivos móveis
