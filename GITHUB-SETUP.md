# 🚀 Configuração do GitHub para Deploy na Vercel

## 📋 **Passos para Subir no GitHub**

### **1. Criar Repositório no GitHub**

1. Acesse https://github.com
2. Clique em **"New repository"**
3. Configure:
   - **Repository name**: `landing-pages-system`
   - **Description**: `Landing pages system for Google Ads approval - Optimized for Japanese market`
   - **Visibility**: Public (para Vercel gratuito)
   - **Initialize**: NÃO marque nenhuma opção (já temos arquivos)

### **2. Conectar Repositório Local ao GitHub**

```bash
# Adicionar remote do GitHub (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/landing-pages-system.git

# Renomear branch para main
git branch -M main

# Fazer push inicial
git push -u origin main
```

### **3. Deploy na Vercel via GitHub**

1. Acesse https://vercel.com
2. Clique em **"New Project"**
3. Selecione **"Import Git Repository"**
4. Escolha seu repositório `landing-pages-system`
5. Configure:
   - **Project Name**: `landing-pages-system`
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (deixe vazio)
   - **Output Directory**: `public`

### **4. Configurar Domínios na Vercel**

1. No dashboard da Vercel, vá em **Settings** → **Domains**
2. Adicione seus 5 domínios:
   - `dominio1.com`
   - `dominio2.com`
   - `dominio3.com`
   - `dominio4.com`
   - `dominio5.com`

### **5. Configurar Cloudflare**

Para cada domínio, configure no Cloudflare:

```
Tipo: CNAME
Nome: @
Conteúdo: cname.vercel-dns.com

Tipo: CNAME
Nome: www
Conteúdo: cname.vercel-dns.com
```

## 🔄 **Deploy Automático**

Após configurar, qualquer push no GitHub fará deploy automático:

```bash
# Fazer alterações nos arquivos
# Fazer commit
git add .
git commit -m "Update landing page"

# Push para GitHub (deploy automático)
git push origin main
```

## 📊 **Monitoramento**

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repository**: https://github.com/SEU_USUARIO/landing-pages-system
- **Deploy Logs**: Vercel → Project → Deployments

## 🎯 **Vantagens do GitHub + Vercel**

### **✅ Deploy Automático**
- Push no GitHub = Deploy automático
- Preview de cada branch
- Rollback fácil

### **✅ Versionamento**
- Histórico completo
- Colaboração fácil
- Backup automático

### **✅ Integração**
- GitHub Actions (opcional)
- Pull requests com preview
- Issues e projetos

## 🚀 **Comandos Úteis**

```bash
# Ver status do git
git status

# Ver commits
git log --oneline

# Ver branches
git branch

# Criar nova branch
git checkout -b feature/nova-funcionalidade

# Voltar para main
git checkout main

# Merge branch
git merge feature/nova-funcionalidade
```

## 📞 **Suporte**

- **GitHub Docs**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs
- **Git Tutorial**: https://git-scm.com/docs

---

**🎉 Pronto! Agora é só subir no GitHub e conectar na Vercel!**
