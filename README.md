# Calculator — React

**PT-BR:** Minha primeira calculadora em **React** para praticar componentes, estado e eventos. Suporta operações básicas, raiz (√), π, %, parênteses, backspace (⌫) e liga/desliga (⏻).  
**EN (mini):** My first **React** project to practice components, state and events (basic ops, sqrt, π, %, parentheses, backspace, power).

---

## ✨ Funcionalidades
- Dígitos `0–9` e vírgula/ponto (`,` → `.`)
- Operadores: `+  −  ×  ÷  ^  %  (  )`
- **√** (raiz quadrada) e **π**
- **⌫** (apagar último), **AC** (limpar), **⏻** (liga/desliga)
- Display controlado por estado (fluxo unidirecional)

---

## ⌨️ Atalhos de Teclado
- `0–9` → números  
- `/ * - +` → `÷ × − +`  
- `.` → `,`  
- `Enter`/`=` → `=`  
- `Backspace` → `⌫`  
- `Esc`/`Delete` → `AC`  
- `(` e `)` → parênteses

> Quando **OFF** (⏻), os botões ficam desabilitados.

---

## 🧠 O que aprendi
- Componentização (Button, Input, App)
- `useState` + manipulação de eventos
- Normalização de símbolos (`÷`→`/`, `x`→`*`, `^`→`**`, `,`→`.`)
- Regras simples anti-erro (divisão por zero → “Erro”)
- Acessibilidade básica: `aria-label` e foco visível

---

## 🚀 Como rodar
```bash
# 1) Clonar
git clone https://github.com/<seu-usuario>/<seu-repo>.git
cd <seu-repo>

# 2) Instalar dependências
npm install

# 3) Rodar em desenvolvimento
npm start        # ou: npm run dev (se usar Vite)

# 4) Abrir
http://localhost:3000
