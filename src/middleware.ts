import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isLoginPath = path === '/account/login'

    const token = request.cookies.get('access_token');

    if(path == '/account/register'){
        return NextResponse.next();
    }

    if(isLoginPath && token){
        return NextResponse.redirect(new URL('/account', request.url))
    }

    if(!isLoginPath && !token){
        return NextResponse.redirect(new URL('/account/login', request.url))
    }

    /* if(path == '/checkout' && !cartId){
        return NextResponse.redirect(new URL('/', request.url));
    } */
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/account',
        '/account/:path*'
    ],
}