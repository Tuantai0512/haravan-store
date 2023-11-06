import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    const res = await request.json();
    let result = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(res)
    });
    let data = await result.json();

    const token = data?.access_token;

    if(token){
        return NextResponse.json(token);
    }else{
        return NextResponse.json(data)
    }
}