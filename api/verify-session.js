export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the session cookie
    const sessionCookie = req.headers.cookie
      ?.split(';')
      .find(c => c.trim().startsWith('resume-auth='))
      ?.split('=')[1];

    if (sessionCookie) {
      return res.status(200).json({ 
        authenticated: true,
        message: 'Session valid' 
      });
    } else {
      return res.status(401).json({ 
        authenticated: false,
        message: 'No valid session' 
      });
    }
  } catch (error) {
    console.error('Session verification error:', error);
    return res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}
