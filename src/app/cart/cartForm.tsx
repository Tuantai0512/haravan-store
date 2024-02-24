'use client'
import { fetcher } from '@/utils';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import * as React from 'react';
import useSWR from 'swr';
import CartFormItem from './cartFormItem';

export interface ICartPageItemProps {
    cart: ICart | undefined
}

export default function CartPageForm(props: ICartPageItemProps) {
    const { cart } = props;
    
    return (
        <div className='px-2 lg:px-4 py-5 text-base'>
            {cart && cart.items.length != 0 ?
                <>
                    <p className='px-2 lg:px-0 mb-5'>Bạn đang có <strong>{cart.items.length} sản phẩm</strong> trong giỏ hàng</p>
                    <div className='border rounded-lg'>
                        {cart.items.map((item) => {
                            return (
                                <div className='px-2.5 py-4 border-b' key={item.id}>
                                    <CartFormItem cartItem={item} cartId={cart.id}/>
                                </div>
                            )
                        })}
                    </div>
                </>
                :
                <p className='px-2 lg:px-0'>Giỏ hàng của bạn đang trống</p>
            }
        </div>
    );
}
