import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: any }) {
    const cartId = context.params.cartId;
    
    let result = await fetch(`${process.env.URL_SERVER}/api/v1/cart/${cartId}`, { cache: 'no-store' });
    let data = await result.json();

    return NextResponse.json(data, { status: result.status });
}

export async function PUT(request: NextRequest, context: { params: any }) {

    const req = await request.json();
    const cartId = context.params.cartId;
    
    let result = await fetch(`${process.env.URL_SERVER}/api/v1/cart/${cartId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
    });
    let data = await result.json();

    if(result.status == 200){
        cookies().set('cart_id', '');
    }

    return NextResponse.json(data, { status: result.status });
}