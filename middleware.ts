import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export async function middleware() {
  const isMaintenance = await get('maintenance');

  if (!isMaintenance) {
    return NextResponse.next();
  }

  return new NextResponse(
    '🚧 Site is temporarily under maintenance. Please try again later.',
    { status: 503 }
  );
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images).*)'],
};