import * as React from 'react';
import CheckOut from './checkout';
import { Metadata } from 'next';

export interface IAppProps {
}

export const metadata: Metadata = {
    title: 'Thanh toán đơn hàng - Haravan Store Clone',
    description: 'Thanh toán đơn hàng tài khoản Haravan Store',
}

export default async function CheckOutPage(props: IAppProps) {

    return (
        <div className='container'>
            <CheckOut />
        </div>
    );
}
