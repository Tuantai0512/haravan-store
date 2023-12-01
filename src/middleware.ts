import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isLoginPath = path === '/account/login'

    const token = request.cookies.get('access_token');

    if(isLoginPath && token){
        return NextResponse.redirect(new URL('/account', request.url))
    }

    if(!isLoginPath && !token){
        return NextResponse.redirect(new URL('/account/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/account',
        '/account/:path*'
    ],
}