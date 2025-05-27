# 📤 Como Publicar no GitHub

## 🎯 Objetivo
Publicar o projeto no GitHub para depois fazer deploy automático no Vercel.

## 📋 Passos Detalhados

### 1. Preparar Arquivos para Upload
Você precisa fazer upload destes arquivos principais:

#### ✅ Arquivos Essenciais:
```
├── App.tsx
├── index.css
├── index.html
├── index.tsx
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
├── .gitignore
├── README.md
├── components/ (pasta completa)
├── contexts/ (pasta completa)
├── hooks/ (pasta completa)
├── lib/ (pasta completa)
```

#### ❌ NÃO incluir:
```
├── .env (contém chave API - não deve ser público)
├── node_modules/ (muito grande)
├── node-v20.10.0-darwin-x64/ (muito grande)
├── node.tar.gz (desnecessário)
├── dist/ (será gerado automaticamente)
```

### 2. Criar Repositório no GitHub

1. **Acesse**: [github.com](https://github.com)
2. **Faça login** na sua conta
3. **Clique em**: "New repository" (botão verde)
4. **Configure**:
   - **Repository name**: `avatares-personalizados` (ou nome de sua escolha)
   - **Description**: `Aplicação React com avatares personalizados usando Google Gemini API`
   - **Visibility**: Public (para usar Vercel gratuito)
   - **✅ Marque**: "Add a README file" (pode sobrescrever depois)
   - **Não marque**: .gitignore e license (já temos)
5. **Clique em**: "Create repository"

### 3. Upload dos Arquivos

#### Opção A: Upload via Interface Web (Recomendado)
1. **No repositório criado**, clique em "uploading an existing file"
2. **Arraste ou selecione** todos os arquivos listados acima
3. **Organize as pastas**: 
   - Crie as pastas `components/`, `contexts/`, `hooks/`, `lib/`
   - Faça upload dos arquivos de cada pasta separadamente
4. **Commit message**: "Initial commit - Avatares Personalizados"
5. **Clique em**: "Commit changes"

#### Opção B: Upload por Pasta (Se Opção A não funcionar)
1. **Crie cada pasta** individualmente no GitHub
2. **Upload arquivos** pasta por pasta:
   - Primeiro os arquivos da raiz
   - Depois `components/` com todos seus arquivos
   - Depois `contexts/`, `hooks/`, `lib/`

### 4. Verificar Upload
Confirme que o repositório contém:
- ✅ Todos os arquivos .tsx, .ts, .json
- ✅ Pastas components/, contexts/, hooks/, lib/
- ✅ vercel.json e .gitignore
- ✅ README.md
- ❌ Não deve ter .env, node_modules/, dist/

### 5. Deploy Automático no Vercel

Após publicar no GitHub:

1. **Acesse**: [vercel.com](https://vercel.com)
2. **Clique em**: "New Project"
3. **Conecte GitHub**: Autorize o Vercel a acessar seus repositórios
4. **Selecione**: o repositório `avatares-personalizados`
5. **Configure**:
   - **Framework Preset**: Vite (detectado automaticamente)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. **Environment Variables**: Adicione `GEMINI_API_KEY` = `AIzaSyCbhII1b3ZfVSfTURjt9Sfa-8QGiJnk_XI`
7. **Clique em**: "Deploy"

## 🎉 Resultado Final

Você terá:
- ✅ Código fonte público no GitHub
- ✅ Deploy automático no Vercel
- ✅ URL pública da aplicação
- ✅ Atualizações automáticas a cada commit

## 📝 Dicas Importantes

1. **Nunca commite** o arquivo `.env` (já está no .gitignore)
2. **A chave API** deve ser configurada apenas no Vercel
3. **Cada push** no GitHub irá redesployar automaticamente
4. **O build** será feito automaticamente pelo Vercel

## 🔗 Links Úteis

- [GitHub](https://github.com)
- [Vercel](https://vercel.com)
- [Documentação Vercel + GitHub](https://vercel.com/docs/git)
