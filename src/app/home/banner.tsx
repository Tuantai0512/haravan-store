'use client'
import * as React from 'react';
import style from './style.module.scss'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import sliderImg1 from '../../../public/img/slider-banner-img.webp'
import sliderImg2 from '../../../public/img/slider-banner-img-2.webp'
import sliderImg3 from '../../../public/img/slider-banner-img-3.webp'


export interface IBannerProps {

}

export interface IProductCategory {
    title: string,
    link: string
}

export function Banner(props: IBannerProps) {

    const ProductCategory: IProductCategory[] = [
        { title: 'Combo Haravan', link: '#' },
        { title: 'Máy POS bán hàng', link: '#' },
        { title: 'Máy in hoá đơn & vận đơn', link: '#' },
        { title: 'Ngăn kéo đựng tiền', link: '#' },
        { title: 'Giấy in & Tem in', link: '#' }
    ]

    return (
        <section className={style['banner']}>
            <div className='container w-full flex'>
                <div className={style['banner-menu']}>
                    <ul>
                        {ProductCategory.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        href={item.link}
                                        className={style['banner-menu-item']}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="w-3/4 px-4">
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                        navigation
                        pagination={{ clickable: true }}
                        effect={'fade'}
                        autoplay
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        <SwiperSlide>
                            <Image src={sliderImg3} alt="Slider Image 3" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={sliderImg1} alt="Slider Image 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={sliderImg2} alt="Slider Image 2" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
