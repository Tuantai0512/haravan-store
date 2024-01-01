import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function GET() {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token');

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { value } = token;

    try {
        let result = await fetch('http://localhost:8080/api/v1/users/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${value}`
            },
        });
        let data = await result.json();
        if (result.status == 401) {
            return NextResponse.json(data, { status: 401 });
        }
        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 401 });
    }
}