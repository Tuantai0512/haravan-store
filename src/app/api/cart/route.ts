import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const req = await request.json();
    let result = await fetch(`${process.env.URL_SERVER}/api/v1/cart`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    });
    let data = await result.json();

    const cartId = data?.id;

    const response = NextResponse.json(data, { status: result.status });
    response.cookies.set({
        name: 'cart_id',
        value: cartId,
        httpOnly: true,
        maxAge: 60000 * 60 * 24 /* (1 day) */
    })
    return response
}