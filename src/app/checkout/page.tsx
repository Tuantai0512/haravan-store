import * as React from 'react';
import CheckOut from './checkout';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getData } from '@/utils';

export interface IAppProps {
}

export const metadata: Metadata = {
    title: 'Thanh toán đơn hàng - Haravan Store Clone',
    description: 'Thanh toán đơn hàng tài khoản Haravan Store',
}

export default async function CheckOutPage(props: IAppProps) {

    const cookieStore = cookies();
    const cartId = cookieStore.get('cart_id');

    return (
        <div className='container'>
            <CheckOut cartId={cartId}/>
        </div>
    );
}
