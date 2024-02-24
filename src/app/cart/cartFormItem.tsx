import * as React from 'react';
import Image from "next/image"
import EmptyImg from "../../../public/img/empty.jpg"
import Link from 'next/link';
import { convertSlug, formatVnd } from '@/utils';
import { useState } from 'react';
import axiosClient from '@/api/axios-client';
import { mutate } from 'swr';
import { toast } from 'react-toastify';

export interface ICartFormItemProps {
    cartItem: {
        id: string,
        quantity: number,
        product: IProduct
    },
    cartId: string;
}

export default function CartFormItem(props: ICartFormItemProps) {
    const { cartItem, cartId } = props;
    const avatar = cartItem.product.galery.find(item => item.avatar === true);
    const avatarUrl = avatar?.url;
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const updateCart = async (id: string, quantity: number) => {
        await axiosClient.put(`/api/cart-detail/${id}`, {
            quantity: quantity
        }).then(() => {
            mutate(`/api/cart/${cartId}`);
        }).catch((error) => {
            toast.error('Cập nhật giỏ hàng thất bại: ', error.response.data.message);
        });
    }
    const deleteItem = async (id: string) => {
        await axiosClient.delete(`/api/cart-detail/${id}`)
            .then(() => {
                mutate(`/api/cart/${cartId}`);
            }).catch((error) => {
                toast.error('Cập nhật giỏ hàng thất bại: ', error.response.data.message);
            });
    }
    return (
        <div className='flex justify-between'>
            <div className='flex'>
                <div className='relative'>
                    <Image
                        src={avatarUrl || EmptyImg}
                        alt={cartItem.product.title}
                        width={85}
                        height={85}
                    >
                    </Image>
                    <button
                        style={{ fontSize: 8, lineHeight: '20px', top: '-7px', left: '-7px' }}
                        className='w-5 h-5 absolute bg-slate-400 text-center rounded-full text-white'
                        onClick={() => deleteItem(cartItem.id)}
                    >
                        Xóa
                    </button>
                </div>
                <div className='px-4 width-title-cart-item'>
                    <Link href={`/products/${convertSlug(cartItem.product.title)}-${cartItem.product.id}.html`} className='limit-1-line !text-black text-sm lg:text-base'>{cartItem.product.title}</Link>
                    <p>
                        <span className='mr-3 font-semibold text-slate-400 text-sm lg:text-base'>{formatVnd(cartItem.product.discount)}</span>
                        <del className='text-sm text-slate-400 text-xs lg:text-base'>{formatVnd(cartItem.product.price)}</del>
                    </p>
                </div>
            </div>
            <div>
                <p className='text-right mb-3 font-bold'>{formatVnd(cartItem.product.discount)}</p>
                <div className='flex items-center'>
                    <button
                        style={{ lineHeight: '24px' }}
                        className='inline-block w-6 h-6 border text-base text-center'
                        onClick={() => {
                            if (quantity > 1) {
                                setQuantity(quantity - 1);
                                updateCart(cartItem.id, quantity - 1);
                            }
                        }}
                    >
                        -
                    </button>
                    <input
                        type='number'
                        value={quantity}
                        min={0}
                        max={100}
                        onChange={(e) => setQuantity(parseInt(e.target.value) | 1)}
                        className='!w-8 !h-6 text-center text-xs w-max border mx-2' />
                    <button
                        style={{ lineHeight: '15px' }}
                        className='inline-block w-6 h-6 border text-base text-center'
                        onClick={() => {
                            if (quantity >= 1) {
                                setQuantity(quantity + 1);
                                updateCart(cartItem.id, quantity + 1);
                            }
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
