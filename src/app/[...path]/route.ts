import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    let result = await fetch(`http://localhost:8080${request.nextUrl.pathname}`, { cache: 'no-store' });
    let data = await result.json();

    return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
    const req = await request.json();
    let result = await fetch(`http://localhost:8080${request.nextUrl.pathname}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
    });
    let data = await result.json();
    return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
    let result = await fetch(`http://localhost:8080${request.nextUrl.pathname}`,{method: 'DELETE'} );
    let data = await result.json();

    return NextResponse.json(data);
}