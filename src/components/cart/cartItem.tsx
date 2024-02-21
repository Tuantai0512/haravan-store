import Image from "next/image"
import EmptyImg from "../../../public/img/empty.jpg"
import * as React from 'react';
import Link from "next/link";
import { convertSlug, formatVnd } from "@/utils";
import { useState, useEffect } from "react";
import axiosClient from "@/api/axios-client";
import { mutate } from "swr";
import { toast } from "react-toastify";

export interface IAppProps {
    cartItem: {
        id: string,
        quantity: number,
        product: IProduct
    },
    cartId: string
}

export default function CartItem(props: IAppProps) {
    const{ cartItem, cartId } = props;
    const [quantity, setQuantity] = useState(cartItem.quantity);
    useEffect(() => {
        setQuantity(cartItem.quantity)
    },[cartItem.quantity])
    const avatar = cartItem.product.galery.find(item => item.avatar === true);
    const avatarUrl = avatar?.url;
    const updateCart = async(id: string, quantity: number) => {
        await axiosClient.put(`/api/cart-detail/${id}`, {
            quantity: quantity
        }).then(() => {
            mutate(`/api/cart/${cartId}`);
        }).catch((error) => {
            toast.error('Cập nhật giỏ hàng thất bại: ', error.response.data.message);
        });
    }
    const deleteItem = async(id: string) => {
        await axiosClient.delete(`/api/cart-detail/${id}`)
        .then(() => {
            mutate(`/api/cart/${cartId}`);
        }).catch((error) => {
            toast.error('Cập nhật giỏ hàng thất bại: ', error.response.data.message);
        });
    }
    return (
        <div className="flex">
            <Image
                src={avatarUrl || EmptyImg}
                alt={cartItem.product.title}
                width={85}
                height={85}
            >
            </Image>
            <div className="pl-4 w-full">
                <div className="flex justify-between">
                    <Link
                        href={`/products/${convertSlug(cartItem.product.title)}-${cartItem.product.id}.html`}
                        className="!text-black font-semibold text-xs uppercase"
                    >{cartItem.product.title}</Link>
                    <button className="bg-slate-300 h-max p-1" onClick={() => deleteItem(cartItem.id)}>
                        <svg viewBox="0 0 19 19" width="12" height="12" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="flex item-center justify-between mt-4">
                    <div className='flex items-center'>
                        <button
                            className='inline-block w-6 h-6 bg-slate-200 text-base text-center'
                            onClick={() => { 
                                if (quantity > 1) { 
                                    setQuantity(quantity - 1) ;
                                    updateCart(cartItem.id,quantity - 1);
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
                            onChange={(e) => {
                                setQuantity(parseInt(e.target.value) | 1);
                                updateCart(cartItem.id,parseInt(e.target.value) | 1);
                            }}
                            className='!w-14 !h-6 text-center w-max' />
                        <button
                            className='inline-block w-6 h-6 bg-slate-200 text-base text-center'
                            onClick={() => { 
                                if (quantity >= 1) { 
                                    setQuantity(quantity + 1) ;
                                    updateCart(cartItem.id,cartItem.quantity + 1);
                                } 
                            }}
                        >
                            +
                        </button>
                    </div>
                    <span className="font-semibold">{formatVnd(cartItem.product.discount)}</span>
                </div>
            </div>
        </div>
    );
}
