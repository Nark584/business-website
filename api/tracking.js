// API endpoint for tracking visitor data
// This will be used when you activate the redirection system later

export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method === 'POST') {
        try {
            const {
                domain,
                visitorId,
                timeOnPage,
                scrollDepth,
                clicks,
                userAgent,
                referrer,
                timestamp
            } = req.body;
            
            // Log the tracking data (in production, you'd save to database)
            console.log('📊 Visitor tracking data:', {
                domain,
                visitorId,
                timeOnPage,
                scrollDepth,
                clicks,
                userAgent,
                referrer,
                timestamp
            });
            
            // For now, just return success
            // Later you can integrate with your database
            res.status(200).json({
                success: true,
                message: 'Tracking data received',
                timestamp: new Date().toISOString()
            });
            
        } catch (error) {
            console.error('❌ Tracking error:', error);
            res.status(500).json({
                success: false,
                error: 'Failed to process tracking data'
            });
        }
    } else {
        res.status(405).json({
            success: false,
            error: 'Method not allowed'
        });
    }
}
