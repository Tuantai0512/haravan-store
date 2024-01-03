import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const cookieStore = cookies()
    const token = cookieStore.get('access_token');
    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { value } = token;
    let result = await fetch(`http://localhost:8080/api/v1/addresses`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${value}`
        },
        cache: 'no-store'
    });
    let data = await result.json();

    return NextResponse.json(data);
}

export async function POST(request: NextRequest) {

    const cookieStore = cookies()
    const token = cookieStore.get('access_token');
    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { value } = token;
    const req = await request.json();
    let result = await fetch(`http://localhost:8080/api/v1/addresses`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${value}`
        },
        body: JSON.stringify(req)
    });
    let data = await result.json();
    return NextResponse.json(data);
}

