# LinkTree Clone 🌐

Este projeto é um clone funcional do LinkTree, desenvolvido com o objetivo de criar uma página personalizada para compartilhar múltiplos links em uma interface simples e elegante.

## Funcionalidades

- **Gerenciamento de Links:**
  - Adicione, edite e remova links dinamicamente.
  - Links com animações ao passar o mouse para uma experiência interativa.

- **Personalização:**
  - Integração de imagem de perfil personalizada.
  - Adicione títulos e descrições para identificar o usuário.

- **Estilização Responsiva:**
  - Layout adaptável para diferentes dispositivos, incluindo smartphones, tablets e desktops.

## Tecnologias Utilizadas

- **React** com Vite para configuração de build
- **TypeScript** para tipagem segura
- **TailwindCSS** para estilização moderna e responsiva
- **Firebase** para autenticação e gerenciamento de dados

## Estrutura do Projeto

- **App.tsx:** Componente principal que organiza a estrutura da aplicação.
- **main.tsx:** Ponto de entrada para renderização do React.
- **firebaseConnection.ts:** Configuração e integração com o Firebase.
- **CSS:** Arquivos de estilo criados com TailwindCSS para um layout responsivo e interativo.

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/linktree-clone.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd linktree-clone
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o Firebase:
   - Substitua as variáveis no arquivo **firebaseConnection.ts** com as credenciais do seu projeto Firebase.

5. Execute a aplicação:
   ```bash
   npm run dev
   ```

6. Acesse no navegador:
   ```
   http://localhost:5173
   ```

## Estrutura de Diretórios

```plaintext
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Private.tsx
│   │   └── Header/
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── firebaseConnection.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── routes.tsx
│   └── vite-env.d.ts
└── package.json
```

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido por Yuri Teodoro**
