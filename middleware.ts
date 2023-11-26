import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated } from './app/lib/auth';

export const middleware = (request: NextRequest) => {
  const isLogin = true;
  if (!isLogin) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
};

// export function middleware(request: NextRequest) {
//   // Call our authentication function to check the request
//   if (!isAuthenticated(request)) {
//     // Respond with JSON indicating an error message
//     return Response.json(
//       { success: false, message: 'authentication failed' },
//       { status: 401 }
//     );
//   }
// }

export const config = { matcher: ['/dashboard:path*'] };

// import { NextResponse } from 'next/server';
// import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';

// export default withAuth(
//   function middleware(request: NextRequestWithAuth) {
//     const session = request?.nextauth?.token;

//     if (request.nextUrl.pathname === '/') return NextResponse.next();
//     if (!session && request.nextUrl.pathname !== '/auth/login')
//       return NextResponse.redirect(new URL('/auth/login', request.url));
//     if (session && request.nextUrl.pathname !== '/dashboard')
//       return NextResponse.redirect(new URL('/dashboard', request.url));

//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: () => true,
//     },
//   }
// );

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
