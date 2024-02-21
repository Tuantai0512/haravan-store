import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    let result = await fetch(`http://localhost:8080/api/v1${request.nextUrl.pathname.substring(4)}`, { cache: 'no-store' });
    let data = await result.json();

    return NextResponse.json(data, { status: result.status });
}

export async function POST(request: NextRequest) {
    const req = await request.json();
    let result = await fetch(`http://localhost:8080/api/v1${request.nextUrl.pathname.substring(4)}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
    });
    let data = await result.json();
    return NextResponse.json(data, { status: result.status });
}

export async function PUT(request: NextRequest) {
    const req = await request.json();
    let result = await fetch(`http://localhost:8080/api/v1${request.nextUrl.pathname.substring(4)}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
    });
    let data = await result.json();
    return NextResponse.json(data, { status: result.status });
}

export async function DELETE(request: NextRequest) {
    let result = await fetch(`http://localhost:8080/api/v1${request.nextUrl.pathname.substring(4)}`,{method: 'DELETE'} );
    let data = await result.json();

    return NextResponse.json(data, { status: result.status });
}