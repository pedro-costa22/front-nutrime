import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const userCookie = req.cookies.get('user')?.value;

  if (!userCookie) {
    return NextResponse.redirect(new URL('/acesso-negado', req.url));
  }

  const user = JSON.parse(userCookie);
  if (!user.emailActive) {
    return NextResponse.redirect(new URL('/confirmar-email', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/teste'],
};
