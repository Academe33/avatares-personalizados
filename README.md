# Avatares Personalizados

Uma aplicação React com avatares personalizados usando a API do Google Gemini.

## 🚀 Deploy no Vercel

### Opção 1: Deploy via Interface Web do Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "New Project"
3. Conecte seu repositório GitHub ou faça upload dos arquivos
4. Configure as variáveis de ambiente:
   - `GEMINI_API_KEY`: `AIzaSyCbhII1b3ZfVSfTURjt9Sfa-8QGiJnk_XI`
5. Clique em "Deploy"

### Opção 2: Deploy via Drag & Drop

1. Acesse [vercel.com](https://vercel.com)
2. Arraste a pasta `dist/` para a área de deploy
3. Configure a variável de ambiente `GEMINI_API_KEY`

## 📁 Estrutura do Projeto

```
├── dist/                 # Build de produção
├── components/          # Componentes React
├── contexts/           # Contextos React
├── hooks/              # Hooks customizados
├── lib/                # Utilitários e configurações
├── .env                # Variáveis de ambiente
├── vercel.json         # Configuração do Vercel
└── package.json        # Dependências do projeto
```

## 🔧 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Variáveis de Ambiente

- `GEMINI_API_KEY`: Chave da API do Google Gemini

## 📝 Configuração do Vercel

O arquivo `vercel.json` já está configurado com:
- Build estático usando `@vercel/static-build`
- Roteamento SPA
- Variáveis de ambiente

## 🎯 Funcionalidades

- Avatares personalizados com IA
- Interface de voz interativa
- Integração com Google Gemini API
- Design responsivo
