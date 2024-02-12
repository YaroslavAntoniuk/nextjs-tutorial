import { NextResponse } from 'next/server';

export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.rul));
}

export const config = {
  matcher: ['/about/:path*'],
};
