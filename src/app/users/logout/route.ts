import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function GET() {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token');

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { value } = token;
    let result = await fetch(`${process.env.URL_SERVER}/users/logout`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${value}`
        },
    });
    let data = await result.json();

    cookies().delete('access_token');

    return NextResponse.json(data);
}