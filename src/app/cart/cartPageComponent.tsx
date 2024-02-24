'use client'
import * as React from 'react';
import CartPageForm from './cartForm';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import Link from 'next/link';
import { fetcher, formatVnd } from '@/utils';
import useSWR from 'swr';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { useEffect, useState } from 'react';
import { changeCartToken } from '@/lib/features/cart/cartSlice';

export interface ICartPageComponentProps {
    cartId: RequestCookie | undefined
}

export default function CartPageComponent(props: ICartPageComponentProps) {
    const { cartId } = props;
    const cartRedux = useAppSelector((state: RootState) => state.cart.cartToken);
    console.log(cartRedux);
    const { data, error, mutate, isLoading } = useSWR<ICart>(`/api/cart/${cartRedux}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false
    });

    const cartItem = data?.items;
    let total = 0;

    if (cartItem)
        for (let i = 0; i < data.items.length; i++) {
            const item = data.items[i];
            const quantity = item.quantity;
            const price = item.product.discount;

            total += quantity * price;
        }

    return (
        <div className='lg:flex gap-x-7'>
            <div className='bg-white w-full lg:w-2/3 h-max mb-4'>
                <h1 className='text-xl px-4 py-2.5 font-bold border-b'>Giỏ hàng của bạn</h1>
                <CartPageForm cart={data} />
            </div>
            <div className='bg-white w-full lg:w-1/3 p-4 h-max'>
                <h2 className='text-xl font-bold pt-2.5 pb-4 border-b'>Thông tin đơn hàng</h2>
                <div className='text-base py-2.5 font-bold mb-2.5 border-b'>
                    <p className='flex items-center justify-between'>
                        Tổng tiền:
                        <span className='text-red-500 text-2xl'>{formatVnd(total)}</span>
                    </p>
                </div>
                <div>
                    <p>Phí vận chuyển sẽ được tính ở phần thanh toán</p>
                    {
                        !total &&
                        <>
                            <div className='px-4 py-2.5 bg-red-50 border border-red-100 text-red-500 mt-2.5 rounded'>Giỏ hàng của bạn hiện chưa đạt mức tối thiểu để thanh toán.</div>
                        </>
                    }
                    <Link href={'/checkout'} className={`block text-center ${total ? '!bg-red-500' : '!bg-slate-500 pointer-events-none'} uppercase w-full !text-white py-2.5 mt-2.5 font-bold rounded`}>Thanh toán</Link>
                </div>
            </div>
        </div>
    );
}
