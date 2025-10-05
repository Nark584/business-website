# 🌐 Configuração dos 5 Domínios

## 📋 **Seus Domínios:**
1. `accounts-u.fun`
2. `accounts-u.online`
3. `accounts-u.xyz`
4. `accounts-v.fun`
5. `accounts-v.online`

## 🚀 **Configuração na Vercel:**

### **1. Adicionar Domínios:**
- Acesse: https://vercel.com/dashboard
- Vá em **Settings** → **Domains**
- Clique **"Add Domain"**
- Adicione cada domínio:
  - `accounts-u.fun`
  - `accounts-u.online`
  - `accounts-u.xyz`
  - `accounts-v.fun`
  - `accounts-v.online`

### **2. Configurar DNS no Cloudflare:**
Para cada domínio, configure:
```
Tipo: CNAME
Nome: @
Conteúdo: cname.vercel-dns.com

Tipo: CNAME
Nome: www
Conteúdo: cname.vercel-dns.com
```

## 🏷️ **Configuração de Tags por Domínio:**

### **Domínio 1: accounts-u.fun**
- GA4 ID: `G-XXXXXXXXX1`
- GTM ID: `GTM-XXXXXX1`
- Ads Conversion: `AW-XXXXXXXXX1/CONVERSION_LABEL1`

### **Domínio 2: accounts-u.online**
- GA4 ID: `G-XXXXXXXXX2`
- GTM ID: `GTM-XXXXXX2`
- Ads Conversion: `AW-XXXXXXXXX2/CONVERSION_LABEL2`

### **Domínio 3: accounts-u.xyz**
- GA4 ID: `G-XXXXXXXXX3`
- GTM ID: `GTM-XXXXXX3`
- Ads Conversion: `AW-XXXXXXXXX3/CONVERSION_LABEL3`

### **Domínio 4: accounts-v.fun**
- GA4 ID: `G-XXXXXXXXX4`
- GTM ID: `GTM-XXXXXX4`
- Ads Conversion: `AW-XXXXXXXXX4/CONVERSION_LABEL4`

### **Domínio 5: accounts-v.online**
- GA4 ID: `G-XXXXXXXXX5`
- GTM ID: `GTM-XXXXXX5`
- Ads Conversion: `AW-XXXXXXXXX5/CONVERSION_LABEL5`

## 🎯 **Estratégia de Aprovação:**

### **Fase 1: Teste (1 domínio)**
1. Configure `accounts-u.fun` primeiro
2. Suba campanha no Google Ads
3. Teste aprovação
4. Colete dados por 1-2 semanas

### **Fase 2: Expansão (4 domínios)**
1. Se aprovou, configure os outros 4
2. Use mesma estrutura
3. Suba campanhas paralelas
4. Monitore performance

### **Fase 3: Ativação (quando quiser)**
1. Ative redirecionamento via dashboard
2. Configure URLs de destino
3. Monitore redirecionamentos

## 📊 **Monitoramento por Domínio:**

### **Google Analytics:**
- Configure 5 propriedades separadas
- Monitore performance individual
- Compare dados entre domínios

### **Google Ads:**
- Crie 5 contas separadas
- Configure conversion tracking
- Monitore ROI por domínio

### **Dashboard:**
- Acesse: `https://accounts-u.fun/dashboard.html`
- Monitore todos os domínios
- Controle redirecionamentos

## 🔄 **Atualização Rápida:**

### **Para mudar tags:**
1. Edite `public/index.html`
2. Substitua IDs das tags
3. `git add . && git commit -m "Update tags" && git push origin main`
4. Aguarde 1 minuto
5. Todos os domínios atualizados

### **Para ativar redirecionamento:**
1. Acesse dashboard de qualquer domínio
2. Clique "Ativar Redirecionamento"
3. Configure URL de destino
4. Sistema ativa em todos os domínios

## 🎉 **Vantagens dos Seus Domínios:**

### **✅ Nomes Neutros:**
- Não suspeitos para o Google
- Parecem legítimos
- Fáceis de lembrar

### **✅ Extensões Variadas:**
- .fun, .online, .xyz
- Diversificação de risco
- Maior chance de aprovação

### **✅ Padrão Consistente:**
- accounts-u, accounts-v
- Fácil de gerenciar
- Escalável

## 🚀 **Próximos Passos:**

1. **Configure 1 domínio** na Vercel
2. **Teste funcionamento**
3. **Suba primeira campanha**
4. **Aguarde aprovação**
5. **Configure demais domínios**
6. **Expanda campanhas**

---

**🎯 Seus domínios são perfeitos para aprovação!**
