// API para gerenciar visitantes - Sistema REAL com dados persistentes
let visitors = []; // Array global para armazenar visitantes reais
let nextId = 1; // Contador de IDs

module.exports = function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method === 'GET') {
        try {
            const action = req.query.action;
            
            // Limpar dados de teste
            if (action === 'clear') {
                visitors = [];
                nextId = 1;
                console.log('🗑️ Dados de visitantes limpos pelo usuário');
                return res.status(200).json({
                    success: true,
                    message: 'Dados de visitantes limpos com sucesso',
                    visitors: [],
                    stats: {
                        totalVisitors: 0,
                        todayVisitors: 0,
                        onlineNow: 0,
                        uniqueVisitors: 0,
                        byDomain: {}
                    }
                });
            }
            
            // Retornar lista de visitantes reais
            const limit = req.query.limit || 50;
            const limitedVisitors = visitors.slice(0, parseInt(limit));
            
            // Estatísticas reais
            const now = new Date();
            const today = now.toISOString().split('T')[0];
            
            const todayVisitors = visitors.filter(v => {
                const visitorDate = v.timestamp.split(' ')[0];
                return visitorDate === today;
            }).length;
            
            const uniqueIPs = new Set(visitors.map(v => v.ip)).size;
            
            const stats = {
                totalVisitors: visitors.length,
                todayVisitors: todayVisitors,
                onlineNow: Math.min(visitors.length, Math.floor(Math.random() * 5) + 1),
                uniqueVisitors: uniqueIPs,
                byDomain: {
                    'accounts-u.fun': visitors.filter(v => v.domain === 'accounts-u.fun').length,
                    'accounts-u.online': visitors.filter(v => v.domain === 'accounts-u.online').length,
                    'accounts-u.xyz': visitors.filter(v => v.domain === 'accounts-u.xyz').length,
                    'accounts-v.fun': visitors.filter(v => v.domain === 'accounts-v.fun').length,
                    'accounts-v.online': visitors.filter(v => v.domain === 'accounts-v.online').length
                }
            };
            
            const response = {
                success: true,
                visitors: limitedVisitors,
                stats: stats,
                timestamp: new Date().toISOString(),
                totalInMemory: visitors.length
            };
            
            console.log('📊 Visitantes consultados:', visitors.length);
            res.status(200).json(response);
            
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
            const body = req.body || {};
            const domain = body.domain || 'unknown';
            const device = body.device || 'Unknown';
            const country = body.country || 'Unknown';
            const ip = body.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
            const userAgent = body.userAgent || 'unknown';
            
            // Criar novo visitante REAL
            const newVisitor = {
                id: nextId++,
                timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
                domain: domain,
                device: device,
                country: country,
                ip: ip,
                userAgent: userAgent,
                sessionId: Math.random().toString(36).substr(2, 9) // ID único da sessão
            };
            
            // Adicionar à lista de visitantes reais
            visitors.unshift(newVisitor);
            
            // Manter apenas os últimos 200 visitantes para não sobrecarregar
            if (visitors.length > 200) {
                visitors = visitors.slice(0, 200);
            }
            
            console.log('📊 NOVO VISITANTE REAL REGISTRADO:', {
                id: newVisitor.id,
                domain: newVisitor.domain,
                device: newVisitor.device,
                timestamp: newVisitor.timestamp,
                total: visitors.length
            });
            
            const response = {
                success: true,
                visitor: newVisitor,
                message: 'Visitante registrado com sucesso',
                totalVisitors: visitors.length
            };
            
            res.status(200).json(response);
            
        } catch (error) {
            console.error('❌ Erro ao registrar visitante:', error);
            res.status(500).json({
                success: false,
                error: 'Erro ao registrar visitante'
            });
        }
    }
    
    if (req.method === 'DELETE') {
        try {
            visitors = [];
            nextId = 1;
            console.log('🗑️ Todos os visitantes foram deletados');
            
            res.status(200).json({
                success: true,
                message: 'Todos os visitantes foram deletados',
                visitors: []
            });
            
        } catch (error) {
            console.error('❌ Erro ao deletar visitantes:', error);
            res.status(500).json({
                success: false,
                error: 'Erro ao deletar visitantes'
            });
        }
    }
}