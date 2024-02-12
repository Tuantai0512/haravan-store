'use client'
import { formatVnd, percentDiscount } from '@/utils';
import { useState } from 'react';

export interface IContainerOrderProps {
    product: IProduct
}

export default function ContainerOrder(props: IContainerOrderProps) {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className='bg-white p-4 mb-4'>
            <h1 className='text-2xl mb-2 font-bold'>{props.product.title}</h1>
            <p>
                Thương hiệu:
                <span style={{ color: 'var(--shop-color-main)' }} className='border-r-2 mr-2 pr-2 pl-1'>Haravan</span>
                Tình trạng:
                <span style={{ color: 'var(--shop-color-main)' }} className='pl-1'>Còn hàng</span></p>
            <div style={{ backgroundColor: '#FFDD00' }} className='my-2 px-4 rounded-full w-max'>
                <span>Tặng ngay 5 cuộn giấy</span>
            </div>
            <div className='flex items-center mb-4'>
                <span className='text-2xl text-red-500 font-semibold mr-2.5'>{formatVnd(props.product.discount)}</span>
                <del className='text-slate-400 text-lg mr-2.5'>{formatVnd(props.product.price)}</del>
                <span className='inline-block px-3 text-red-500 bg-slate-200 w-max mr-2.5 font-semibold'>-{percentDiscount(props.product.discount, props.product.price)}</span>
                <span className='inline-block px-2.5 bg-sky-100 w-max mr-2.5 rounded border border-sky-200'>Giá đã có VAT</span>
            </div>
            <div className='flex items-center'>
                <button
                    className='inline-block w-10 h-10 bg-slate-200 text-2xl text-center'
                    onClick={() => { if (quantity > 1) { setQuantity(quantity - 1) } }}
                >-</button>
                <input
                    type='number'
                    value={quantity}
                    min={0}
                    max={100}
                    onChange={(e) => setQuantity(parseInt(e.target.value) | 1)}
                    className='!w-14 !h-10 text-center w-max' />
                <button
                    className='inline-block w-10 h-10 bg-slate-200 text-2xl text-center'
                    onClick={() => setQuantity(quantity + 1)}
                >+</button>
            </div>
            <div className='flex gap-x-2.5 mt-2.5'>
                <button className='button w-1/2 border border-red-600 text-red-600 hover:text-white hover:bg-red-600 h-10 uppercase font-semibold'>Thêm vào giỏ</button>
                <button className='button w-1/2 border border-red-500 hover:text-red-500 text-white bg-red-500 hover:bg-white h-10 uppercase font-semibold'>Mua ngay</button>
            </div>
        </div>
    );
}