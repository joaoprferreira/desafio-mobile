# ✅ Desafio Mobile - Bennu

Este repositório apresenta minha solução para o desafio proposto pela Bennu, onde desenvolvi um aplicativo de lista de tarefas (TO-DO) utilizando **React Native**, com foco em boas práticas, escalabilidade e testes.

<img src="./BennuTaskApp.gif" alt="app" style="width:200px;"/>

---

## 📋 Requisitos para rodar o projeto

Antes de começar, certifique-se de ter instalado:

- **Node.js** na versão `v23.0.0` (sugestão: use `nvm use` para garantir a versão correta)
- **Yarn** como gerenciador de pacotes
- Ambiente configurado para desenvolvimento em **React Native** (Android)
- [Especificações completas do desafio](../desafio-mobile/Regras.md)

---

## ⚙️ Como executar o projeto

### 🔌 Backend

1. Acesse o diretório raiz do backend:

   ```bash
   cd server.js
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

---

### 📱 Frontend (App React Native)

1. Vá até a pasta do projeto:

   ```bash
   cd bennuTaskAPp
   ```

2. Instale os pacotes necessários:

   ```bash
   yarn
   ```

3. Inicie o Metro Bundler:
   ```bash
   yarn start
   ```

---

### 📦 Build do aplicativo

#### Para Android:

```bash
adb reverse tcp:9001 tcp:9001
yarn android
```

<!-- #### Para iOS:
```bash
yarn ios
``` -->

---

## 🛠️ Tecnologias e bibliotecas utilizadas

- **React Native** (v0.70.5) → [Documentação oficial](https://reactnative.dev/docs/environment-setup)
- **TypeScript**
- **Redux Toolkit**, **Redux Persist** e **Redux Query**
- **Styled Components**
- **React Navigation**
- **React Native Dotenv**
- **Jest** + **Testing Library**
- **Yarn** como gerenciador de pacotes

---

## 📝 Considerações

- Realizei ajustes na API para permitir a conclusão de tarefas via PATCH/PUT.
- Todos os requisitos do desafio foram atendidos, com exceção do `Styled System`, que foi substituído pelo `Styled Components`, oferecendo a mesma eficiência na composição visual dos componentes.

---
