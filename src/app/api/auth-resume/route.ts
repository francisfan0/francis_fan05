import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Check if password is provided
    if (!password) {
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    // Get the correct password from environment variable
    const correctPassword = process.env.RESUME_SEARCH_PASSWORD;

    // Check if environment variable is set
    if (!correctPassword) {
      console.error('RESUME_SEARCH_PASSWORD environment variable not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Compare passwords
    if (password === correctPassword) {
      // Generate a simple session token
      const sessionToken = Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
      
      // Create response with success
      const response = NextResponse.json({ 
        success: true, 
        message: 'Authentication successful' 
      });
      
      // Set HTTP-only cookie for session management
      response.cookies.set('resume-auth', sessionToken, {
        httpOnly: true,
        path: '/',
        maxAge: 7200, // 2 hours
        sameSite: 'strict',
      });
      
      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
