import { Breadcrumb } from 'antd';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import * as React from 'react';
import CartPageComponent from './cartPageComponent';

export const metadata: Metadata = {
    title: 'Giỏ hàng của bạn - Haravan Store Clone',
    description: 'Giỏ hàng của bạn tại Haravan Store',
}

export interface IAppProps {
}

export default function CartPage(props: IAppProps) {
    const cookieStore = cookies();
    const cartId = cookieStore.get('cart_id');
    
    return (
        <div className='container'>
            <Breadcrumb
                items={[
                    {
                        title: 'Trang chủ',
                    },
                    {
                        title: `Giỏ hàng (0)`,
                    },
                ]}
                className='!px-2 !py-2'
            />
            <CartPageComponent cartId={cartId}/>
        </div>
    );
}
