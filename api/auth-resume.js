export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password } = req.body;

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    // Get the correct password from environment variable
    const correctPassword = process.env.RESUME_SEARCH_PASSWORD;

    // Check if environment variable is set
    if (!correctPassword) {
      console.error('RESUME_SEARCH_PASSWORD environment variable not set');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Compare passwords
    if (password === correctPassword) {
      // Generate a simple session token (you could use JWT for more security)
      const sessionToken = Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
      
      // Set HTTP-only cookie for session management
      res.setHeader('Set-Cookie', `resume-auth=${sessionToken}; HttpOnly; Path=/; Max-Age=7200; SameSite=Strict`);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Authentication successful' 
      });
    } else {
      return res.status(401).json({ 
        error: 'Invalid password' 
      });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}
