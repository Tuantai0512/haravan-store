import { Breadcrumb } from 'antd';
import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';

export const metadata: Metadata = {
    title: 'Giỏ hàng của bạn - Haravan Store Clone',
    description: 'Giỏ hàng của bạn tại Haravan Store',
}

export interface IAppProps {
}

export default function App(props: IAppProps) {
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
            <div className='lg:flex gap-x-7'>
                <div className='bg-white w-full lg:w-2/3 h-max mb-4'>
                    <h1 className='text-xl px-4 py-2.5 font-bold border-b'>Giỏ hàng của bạn</h1>
                    <p className='px-4 py-5 text-base'>Giỏ hàng của bạn đang trống</p>
                </div>
                <div className='bg-white w-full lg:w-1/3 p-4 h-max'>
                    <h2 className='text-xl font-bold pt-2.5 pb-4 border-b'>Thông tin đơn hàng</h2>
                    <div className='text-base py-2.5 font-bold mb-2.5 border-b'>
                        <p className='flex items-center justify-between'>
                            Tổng tiền:
                            <span className='text-red-500 text-2xl'>0đ</span>
                        </p>
                    </div>
                    <div>
                        <p>Phí vận chuyển sẽ được tính ở phần thanh toán</p>
                        <div className='px-4 py-2.5 bg-red-50 border border-red-100 text-red-500 my-2.5 rounded'>Giỏ hàng của bạn hiện chưa đạt mức tối thiểu để thanh toán.</div>
                        <Link href={'#'} className='block text-center !bg-slate-500 uppercase w-full !text-white py-2.5 font-bold rounded'>Thanh toán</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
