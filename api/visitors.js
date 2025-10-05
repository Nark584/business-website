// API para gerenciar visitantes - Banco de dados simples com JSON
export default function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // Simular banco de dados em memória
    let visitors = [
        {
            id: 1,
            timestamp: '2024-12-05 00:15:30',
            domain: 'accounts-u.fun',
            device: 'Mobile',
            country: 'Brasil',
            ip: '192.168.1.100',
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
        },
        {
            id: 2,
            timestamp: '2024-12-05 00:12:15',
            domain: 'accounts-u.online',
            device: 'Desktop',
            country: 'Brasil',
            ip: '192.168.1.101',
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        {
            id: 3,
            timestamp: '2024-12-05 00:08:42',
            domain: 'accounts-u.xyz',
            device: 'Mobile',
            country: 'Brasil',
            ip: '192.168.1.102',
            userAgent: 'Mozilla/5.0 (Android 10; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0'
        },
        {
            id: 4,
            timestamp: '2024-12-05 00:05:18',
            domain: 'accounts-v.fun',
            device: 'Desktop',
            country: 'Brasil',
            ip: '192.168.1.103',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        },
        {
            id: 5,
            timestamp: '2024-12-05 00:02:55',
            domain: 'accounts-u.fun',
            device: 'Mobile',
            country: 'Brasil',
            ip: '192.168.1.104',
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)'
        }
    ];
    
    if (req.method === 'GET') {
        try {
            // Retornar lista de visitantes
            const { limit = 50 } = req.query;
            const limitedVisitors = visitors.slice(0, parseInt(limit));
            
            // Estatísticas
            const stats = {
                totalVisitors: visitors.length + 142, // Simulação
                todayVisitors: visitors.length,
                onlineNow: Math.floor(Math.random() * 8) + 2,
                uniqueVisitors: visitors.length + 67, // Simulação
                byDomain: {
                    'accounts-u.fun': visitors.filter(v => v.domain === 'accounts-u.fun').length,
                    'accounts-u.online': visitors.filter(v => v.domain === 'accounts-u.online').length,
                    'accounts-u.xyz': visitors.filter(v => v.domain === 'accounts-u.xyz').length,
                    'accounts-v.fun': visitors.filter(v => v.domain === 'accounts-v.fun').length,
                    'accounts-v.online': visitors.filter(v => v.domain === 'accounts-v.online').length
                }
            };
            
            res.status(200).json({
                success: true,
                visitors: limitedVisitors,
                stats: stats,
                timestamp: new Date().toISOString()
            });
            
        } catch (error) {
            console.error('❌ Erro ao buscar visitantes:', error);
            res.status(500).json({
                success: false,
                error: 'Erro interno do servidor'
            });
        }
    }
    
    if (req.method === 'POST') {
        try {
            const { domain, device, country, ip, userAgent } = req.body;
            
            // Criar novo visitante
            const newVisitor = {
                id: visitors.length + 1,
                timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19),
                domain: domain || 'unknown',
                device: device || 'Unknown',
                country: country || 'Unknown',
                ip: ip || 'unknown',
                userAgent: userAgent || 'unknown'
            };
            
            // Adicionar à lista (simular persistência)
            visitors.unshift(newVisitor);
            
            // Manter apenas os últimos 100 visitantes
            if (visitors.length > 100) {
                visitors = visitors.slice(0, 100);
            }
            
            console.log('📊 Novo visitante registrado:', newVisitor);
            
            res.status(200).json({
                success: true,
                visitor: newVisitor,
                message: 'Visitante registrado com sucesso'
            });
            
        } catch (error) {
            console.error('❌ Erro ao registrar visitante:', error);
            res.status(500).json({
                success: false,
                error: 'Erro ao registrar visitante'
            });
        }
    }
}
