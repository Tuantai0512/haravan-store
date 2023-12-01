import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    let result = await fetch(`http://localhost:8080${request.nextUrl.pathname}`, { cache: 'force-cache' });
    let data = await result.json();

    return NextResponse.json(data);
}