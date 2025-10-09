# 🏷️ Configuração de Tags para 5 Contas Google Ads

## 📋 **Tags que Precisam ser Configuradas:**

### **1. Google Analytics (GA4):**
```html
<!-- Substitua GA_MEASUREMENT_ID pelo ID de cada conta -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **2. Google Tag Manager:**
```html
<!-- Substitua GTM-XXXXXXX pelo ID de cada conta -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Noscript -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### **3. Google Ads Conversion:**
```html
<!-- Substitua AW-CONVERSION_ID/CONVERSION_LABEL -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'
  });
</script>
```

## 🎯 **Configuração por Domínio:**

### **Domínio 1:**
- GA4 ID: `G-XXXXXXXXX1`
- GTM ID: `GTM-XXXXXX1`
- Ads Conversion: `AW-XXXXXXXXX1/CONVERSION_LABEL1`

### **Domínio 2:**
- GA4 ID: `G-XXXXXXXXX2`
- GTM ID: `GTM-XXXXXX2`
- Ads Conversion: `AW-XXXXXXXXX2/CONVERSION_LABEL2`

### **Domínio 3:**
- GA4 ID: `G-XXXXXXXXX3`
- GTM ID: `GTM-XXXXXX3`
- Ads Conversion: `AW-XXXXXXXXX3/CONVERSION_LABEL3`

### **Domínio 4:**
- GA4 ID: `G-XXXXXXXXX4`
- GTM ID: `GTM-XXXXXX4`
- Ads Conversion: `AW-XXXXXXXXX4/CONVERSION_LABEL4`

### **Domínio 5:**
- GA4 ID: `G-XXXXXXXXX5`
- GTM ID: `GTM-XXXXXX5`
- Ads Conversion: `AW-XXXXXXXXX5/CONVERSION_LABEL5`

## 🔄 **Como Atualizar Tags:**

### **Método 1: Editar Diretamente**
1. Edite `public/index.html`
2. Substitua os IDs
3. Commit e push:
```bash
git add .
git commit -m "Update tags for domain X"
git push origin main
```

### **Método 2: Variáveis de Ambiente**
1. Na Vercel, vá em Settings → Environment Variables
2. Adicione:
   - `GA_MEASUREMENT_ID`
   - `GTM_ID`
   - `ADS_CONVERSION_ID`
   - `ADS_CONVERSION_LABEL`

## 📊 **Monitoramento por Conta:**

### **Google Analytics:**
- Acesse: https://analytics.google.com
- Veja dados de cada domínio
- Configure goals e conversões

### **Google Ads:**
- Acesse: https://ads.google.com
- Veja performance de cada conta
- Configure remarketing

### **Google Tag Manager:**
- Acesse: https://tagmanager.google.com
- Configure tags dinâmicas
- Monitore disparos

## 🎯 **Estratégia de Teste:**

### **1. Testar um Domínio:**
- Configure tags para domínio 1
- Teste funcionamento
- Verifique dados

### **2. Replicar para Outros:**
- Use o mesmo padrão
- Mude apenas os IDs
- Teste cada domínio

### **3. Monitorar Performance:**
- Acompanhe dados diariamente
- Ajuste tags se necessário
- Otimize conversões
