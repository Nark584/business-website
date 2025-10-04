# 🚀 Guia de Deploy na Vercel

## 📋 **Pré-requisitos**

1. **Conta na Vercel** (gratuita): https://vercel.com
2. **GitHub/GitLab** para versionamento
3. **Domínios** configurados no Cloudflare

## 🎯 **Estrutura do Projeto**

```
vercel-landing-system/
├── package.json          # Configuração do projeto
├── vercel.json           # Configuração da Vercel
├── public/               # Arquivos estáticos
│   ├── index.html        # Landing page principal
│   ├── privacy-policy.html
│   ├── terms-of-service.html
│   ├── cookie-policy.html
│   └── contact.html
└── api/                  # API endpoints
    └── tracking.js       # Endpoint de tracking
```

## 🔧 **Configuração dos Domínios**

### **1. Editar `vercel.json`**

```json
{
  "version": 2,
  "name": "landing-pages-system",
  "builds": [
    {
      "src": "public/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/public/$1"
    }
  ],
  "domains": [
    "dominio1.com",
    "dominio2.com", 
    "dominio3.com",
    "dominio4.com",
    "dominio5.com"
  ]
}
```

### **2. Configurar Domínios na Vercel**

1. Acesse o dashboard da Vercel
2. Vá em **Settings** → **Domains**
3. Adicione cada domínio:
   - `dominio1.com`
   - `dominio2.com`
   - `dominio3.com`
   - `dominio4.com`
   - `dominio5.com`

## 🌐 **Configuração do Cloudflare**

### **1. DNS Records**

Para cada domínio, configure no Cloudflare:

```
Tipo: CNAME
Nome: @
Conteúdo: cname.vercel-dns.com

Tipo: CNAME  
Nome: www
Conteúdo: cname.vercel-dns.com
```

### **2. SSL/TLS**

- **Modo**: Full (Strict)
- **Always Use HTTPS**: Ativado
- **HSTS**: Ativado

### **3. Page Rules (Opcional)**

```
dominio1.com/*
- Always Use HTTPS: ON
- Cache Level: Standard
```

## 📤 **Deploy na Vercel**

### **Método 1: GitHub (Recomendado)**

1. **Criar repositório no GitHub**
2. **Fazer upload dos arquivos**
3. **Conectar na Vercel**:
   - Acesse https://vercel.com
   - Clique em **"New Project"**
   - Importe do GitHub
   - Configure as variáveis de ambiente

### **Método 2: Vercel CLI**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login na Vercel
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

## ⚙️ **Variáveis de Ambiente**

Configure na Vercel Dashboard:

```
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
GOOGLE_ADS_CONVERSION_ID=AW-CONVERSION_ID
GOOGLE_ADS_CONVERSION_LABEL=CONVERSION_LABEL
```

## 🔄 **Configuração de Domínios**

### **1. Adicionar Domínios na Vercel**

```bash
# Via CLI
vercel domains add dominio1.com
vercel domains add dominio2.com
vercel domains add dominio3.com
vercel domains add dominio4.com
vercel domains add dominio5.com
```

### **2. Verificar DNS**

```bash
# Verificar se os domínios estão funcionando
nslookup dominio1.com
nslookup dominio2.com
```

## 📊 **Monitoramento**

### **1. Analytics da Vercel**

- Acesse o dashboard da Vercel
- Monitore performance e tráfego
- Configure alertas

### **2. Google Analytics**

- Configure no `index.html`
- Monitore conversões
- Acompanhe comportamento dos usuários

## 🚀 **Deploy Automático**

### **1. GitHub Actions (Opcional)**

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🔧 **Configurações Avançadas**

### **1. Headers de Segurança**

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### **2. Cache Control**

```json
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 📱 **Teste dos Domínios**

### **1. Checklist de Teste**

- [ ] `dominio1.com` carrega corretamente
- [ ] `dominio2.com` carrega corretamente  
- [ ] `dominio3.com` carrega corretamente
- [ ] `dominio4.com` carrega corretamente
- [ ] `dominio5.com` carrega corretamente
- [ ] SSL funciona em todos os domínios
- [ ] Formulários funcionam
- [ ] Analytics está funcionando
- [ ] Cookies estão funcionando

### **2. Comandos de Teste**

```bash
# Testar HTTPS
curl -I https://dominio1.com

# Testar redirecionamento
curl -I http://dominio1.com

# Testar performance
lighthouse https://dominio1.com
```

## 🎯 **Próximos Passos**

1. **Deploy inicial** com 1 domínio
2. **Teste completo** da funcionalidade
3. **Adicionar demais domínios**
4. **Configurar Google Ads**
5. **Monitorar performance**

## 🆘 **Troubleshooting**

### **Problema: Domínio não carrega**
- Verificar DNS no Cloudflare
- Aguardar propagação (até 24h)
- Verificar configuração na Vercel

### **Problema: SSL não funciona**
- Verificar modo SSL no Cloudflare
- Aguardar certificado SSL
- Verificar CNAME records

### **Problema: Formulários não funcionam**
- Verificar API endpoints
- Verificar CORS
- Verificar logs da Vercel

## 📞 **Suporte**

- **Vercel Docs**: https://vercel.com/docs
- **Cloudflare Docs**: https://developers.cloudflare.com
- **Status Pages**: 
  - Vercel: https://vercel-status.com
  - Cloudflare: https://www.cloudflarestatus.com

---

**🎉 Parabéns! Seu sistema está pronto para aprovar campanhas no Google Ads!**
