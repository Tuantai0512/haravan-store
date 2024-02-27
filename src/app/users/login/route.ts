import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const req = await request.json();
    let result = await fetch(`${process.env.URL_SERVER}/api/v1/users/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    });
    let data = await result.json();

    const token = data?.access_token;

    
    if(token){
        const response = NextResponse.json({message: 'Login sucessfully'});
        response.cookies.set({
            name: 'access_token',
            value: token,
            httpOnly: true,
            maxAge: 60000 * 60 * 24 /* (1 day) */
        })
        return response
    }else{
        return NextResponse.json(data, { status: 400 });
    }
}