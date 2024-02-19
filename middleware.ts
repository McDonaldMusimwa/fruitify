import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';

const authConfig = {
  providers: [],
  callbacks: {
    authorized({ request, auth }: any) {
      const protectedPaths = [
        /\/shipping/,
        /\/payment/,
        /\/place-order/,
        /\/profile/,
        /\/order\/(.*)/,
        /\/admin/,
      ];
      const { pathname } = request.nextUrl;
      if (protectedPaths.some(p => p.test(pathname))) return !!auth; // Ensure you're returning a boolean value here
      return true;
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth } = NextAuth(authConfig);


export  const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}