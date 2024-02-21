import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: any }) {
    const cartId = context.params.cartId;
    
    let result = await fetch(`http://localhost:8080/api/v1/cart/${cartId}`, { cache: 'no-store' });
    let data = await result.json();

    return NextResponse.json(data, { status: result.status });
}