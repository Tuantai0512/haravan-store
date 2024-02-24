import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const req = await request.json();
    let result = await fetch('http://localhost:8080/api/v1/users/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    });
    let data = await result.json();

    return NextResponse.json(data, {status: result.status});
}