import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get the session cookie
    const sessionCookie = request.cookies.get('resume-auth');

    if (sessionCookie) {
      return NextResponse.json({ 
        authenticated: true,
        message: 'Session valid' 
      });
    } else {
      return NextResponse.json(
        { 
          authenticated: false,
          message: 'No valid session' 
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
