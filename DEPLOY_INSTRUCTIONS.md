# 🚀 Instruções de Deploy - Vercel

## Status Atual
✅ Build concluído com sucesso  
✅ Arquivos de produção gerados em `dist/`  
✅ Chave API configurada: `AIzaSyCbhII1b3ZfVSfTURjt9Sfa-8QGiJnk_XI`  
✅ Configuração do Vercel criada (`vercel.json`)  

## 📋 Passos para Deploy Manual

### 1. Acesse o Vercel
- Vá para [vercel.com](https://vercel.com)
- Faça login na sua conta

### 2. Criar Novo Projeto
- Clique em **"New Project"**
- Escolha uma das opções abaixo:

#### Opção A: Upload de Arquivos
1. Clique em **"Browse"** ou arraste os arquivos
2. Selecione TODOS os arquivos do projeto (exceto `node_modules/` e `node-v20.10.0-darwin-x64/`)
3. Ou comprima o projeto em um ZIP e faça upload

#### Opção B: Conectar Repositório Git
1. Se você tiver um repositório GitHub/GitLab/Bitbucket
2. Conecte e selecione o repositório
3. O Vercel detectará automaticamente que é um projeto Vite

### 3. Configurar Build
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Configurar Variáveis de Ambiente
Na seção **Environment Variables**, adicione:
- **Name**: `GEMINI_API_KEY`
- **Value**: `AIzaSyCbhII1b3ZfVSfTURjt9Sfa-8QGiJnk_XI`
- **Environment**: Production (e Development se necessário)

### 5. Deploy
- Clique em **"Deploy"**
- Aguarde o processo de build e deploy
- Você receberá um link público da aplicação

## 🔧 Alternativa: Deploy da Pasta dist/

Se preferir fazer deploy apenas dos arquivos estáticos:

1. Acesse [vercel.com](https://vercel.com)
2. Arraste a pasta `dist/` para a área de deploy
3. Configure a variável `GEMINI_API_KEY` nas configurações do projeto
4. A aplicação será deployada instantaneamente

## 📁 Arquivos Importantes para o Deploy

```
✅ dist/index.html
✅ dist/assets/index-DThnclpG.js
✅ dist/assets/index-DxxRuV9I.css
✅ vercel.json (configuração)
✅ package.json (dependências)
✅ .env (variáveis - não incluir no Git)
```

## 🎯 Resultado Esperado

Após o deploy, você terá:
- ✅ URL pública da aplicação
- ✅ HTTPS automático
- ✅ CDN global
- ✅ API Gemini funcionando
- ✅ Interface de voz ativa

## 🔍 Verificação Pós-Deploy

1. Acesse a URL fornecida pelo Vercel
2. Teste a funcionalidade de voz
3. Verifique se a API Gemini está respondendo
4. Confirme que todos os recursos estão carregando

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs de build no Vercel
2. Confirme se a variável `GEMINI_API_KEY` está configurada
3. Teste localmente com `npm run preview`
