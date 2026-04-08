import { NextResponse } from 'next/server';

export function middleware() {
  return new NextResponse('🚧 BLOCKED', { status: 503 });
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};