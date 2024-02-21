'use client'
import * as React from 'react';
import Image from 'next/image';
import productImg from '../../../public/img/empty.jpg'
import cartBtn from '../../../public/img/cart-product-icon_prev_ui.png'
import style from './style.module.scss'
import Link from 'next/link';

import { convertSlug, formatVnd, percentDiscount } from '@/utils';
import axiosClient from '@/api/axios-client';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export interface IProductItemProps {
    product: IProduct;
    cartId: RequestCookie | undefined
}

export default function ProductItem(props: IProductItemProps) {

    const { product, cartId } = props;
    const avatar = props.product.galery.find(item => item.avatar === true);
    const avatarUrl = avatar?.url;

    const handleCartBtn = async () => {
        if (!cartId) {
            await axiosClient.post('/api/cart', {
                fullName: null,
                email: null,
                phoneNumber: null
            });
        } else {
            await axiosClient.post('/api/cart-detail', {
                cartId: cartId.value,
                productId: product.id,
            }).then(() => {
                toast.success('Thêm thành công sản phẩm vào giỏ hàng!');
            }).catch((error) => {
                toast.error('Thêm thất bại: ', error.response.data.message);
            });
        }
        mutate(`/api/cart/${cartId?.value}`)
    }

    return (
        <div className='relative'>
            <Link href={`/products/${convertSlug(props.product.title)}-${props.product.id}.html`}>
                <div className='w-full relative aspect-square'>
                    {
                        avatarUrl ?
                            <Image
                                src={avatarUrl}
                                alt='Product Img'
                                fill
                                style={{
                                    width: '100%',
                                }}
                                sizes="100%"
                            />
                            :
                            <Image
                                src={productImg}
                                alt='Product Img'
                                className='w-full'
                                fill
                                style={{
                                    width: '100%',
                                }}
                                sizes="100%"
                            />
                    }
                </div>
            </Link>
            <div className={style['product-sale']}>
                <span>{percentDiscount(props.product.discount, props.product.price)}</span>
            </div>
            <div className={style['product-detail']}>
                <div className={style['product--lbsale']}>
                    <span>Tặng ngay 5 cuộn giấy</span>
                </div>
                <p className={style['product--vendor']}>
                    <Link href={`/products/${convertSlug(props.product.title)}-${props.product.id}.html`} >Haravan</Link>
                </p>
                <h3>
                    <Link href={`/products/${convertSlug(props.product.title)}-${props.product.id}.html`} className={style['product-title']}>{props.product.title}</Link>
                </h3>
                <div className={style["product--dfex"]}>
                    <div className={style["product--qtysold"]}>
                        <span>200+ lượt mua</span>
                    </div>
                </div>
                <div className={style["product--price"]}>
                    <span className={style["price"]}>
                        {formatVnd(props.product.discount)}
                    </span>
                    <span className={style["price-del"]}>
                        {formatVnd(props.product.price)}
                    </span>
                </div>
                <button className={style['product--cartBtn']} onClick={() => handleCartBtn()}>
                    <Image
                        src={cartBtn}
                        alt='cart button'
                        className={style['product--cartBtn-icon']}
                    />
                    <span>Mua hàng</span>
                </button>
            </div>
        </div>
    );
}
