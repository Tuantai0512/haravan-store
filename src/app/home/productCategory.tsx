import Link from 'next/link';
import style from './style.module.scss'
import Image from 'next/image';
import productImg from '../../../public/img/product-1.webp'
import cartBtn from '../../../public/img/cart-product-icon_prev_ui.png'

export interface IProductCategoryProps {
    category: string;
}

export function ProductCategory(props: IProductCategoryProps) {
    return (
        <div className='pt-8 lg:py-8'>
            <div className='my-1 lg:my-8 flex justify-center'>
                <h2 className={style['product-title']}>
                    <Link href={'#'}>{props.category}</Link>
                </h2>
            </div>
            <div>
                <ul className='grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-4'>
                    <li className='relative'>
                        <Image
                            src={productImg}
                            alt='Product Img'
                            className='w-full'
                        />
                        <div className={style['product-sale']}>
                            <span>-29%</span>
                        </div>
                        <div className={style['product-detail']}>
                            <div className={style['product--lbsale']}>
                                <span>Tặng ngay 5 cuộn giấy</span>
                            </div>
                            <p className={style['product--vendor']}>
                                <Link href={'#'}>Haravan</Link>
                            </p>
                            <h3>
                                <Link href={'#'}>Combo Shop Offline</Link>
                            </h3>
                            <div className={style["product--dfex"]}>
                                <div className={style["product--qtysold"]}>
                                    <span>200+ lượt mua</span>
                                </div>
                            </div>
                            <div className={style["product--price"]}>
                                <span className={style["price"]}>
                                    3,000,000₫
                                </span>
                                <span className={style["price-del"]}>
                                    4,200,000₫
                                </span>
                            </div>
                            <button className={style['product--cartBtn']}>
                                <Image 
                                    src={cartBtn} 
                                    alt='cart button'
                                    className={style['product--cartBtn-icon']}
                                />
                                <span>Mua hàng</span> 
                            </button>
                        </div>
                    </li>
                    <li className='relative'>
                        <Image
                            src={productImg}
                            alt='Product Img'
                            className='w-full'
                        />
                        <div className={style['product-sale']}>
                            <span>-29%</span>
                        </div>
                        <div className={style['product-detail']}>
                            <div className={style['product--lbsale']}>
                                <span>Tặng ngay 5 cuộn giấy</span>
                            </div>
                            <p className={style['product--vendor']}>
                                <Link href={'#'}>Haravan</Link>
                            </p>
                            <h3>
                                <Link href={'#'}>Combo Shop Offline</Link>
                            </h3>
                            <div className={style["product--dfex"]}>
                                <div className={style["product--qtysold"]}>
                                    <span>200+ lượt mua</span>
                                </div>
                            </div>
                            <div className={style["product--price"]}>
                                <span className={style["price"]}>
                                    3,000,000₫
                                </span>
                                <span className={style["price-del"]}>
                                    4,200,000₫
                                </span>
                            </div>
                            <button className={style['product--cartBtn']}>
                                <Image 
                                    src={cartBtn} 
                                    alt='cart button'
                                    className={style['product--cartBtn-icon']}
                                />
                                <span>Mua hàng</span> 
                            </button>
                        </div>
                    </li>
                    <li className='relative'>
                        <Image
                            src={productImg}
                            alt='Product Img'
                            className='w-full'
                        />
                        <div className={style['product-sale']}>
                            <span>-29%</span>
                        </div>
                        <div className={style['product-detail']}>
                            <div className={style['product--lbsale']}>
                                <span>Tặng ngay 5 cuộn giấy</span>
                            </div>
                            <p className={style['product--vendor']}>
                                <Link href={'#'}>Haravan</Link>
                            </p>
                            <h3>
                                <Link href={'#'}>Combo Shop Offline</Link>
                            </h3>
                            <div className={style["product--dfex"]}>
                                <div className={style["product--qtysold"]}>
                                    <span>200+ lượt mua</span>
                                </div>
                            </div>
                            <div className={style["product--price"]}>
                                <span className={style["price"]}>
                                    3,000,000₫
                                </span>
                                <span className={style["price-del"]}>
                                    4,200,000₫
                                </span>
                            </div>
                            <button className={style['product--cartBtn']}>
                                <Image 
                                    src={cartBtn} 
                                    alt='cart button'
                                    className={style['product--cartBtn-icon']}
                                />
                                <span>Mua hàng</span> 
                            </button>
                        </div>
                    </li>
                    <li className='relative'>
                        <Image
                            src={productImg}
                            alt='Product Img'
                            className='w-full'
                        />
                        <div className={style['product-sale']}>
                            <span>-29%</span>
                        </div>
                        <div className={style['product-detail']}>
                            <div className={style['product--lbsale']}>
                                <span>Tặng ngay 5 cuộn giấy</span>
                            </div>
                            <p className={style['product--vendor']}>
                                <Link href={'#'}>Haravan</Link>
                            </p>
                            <h3>
                                <Link href={'#'}>Combo Shop Offline</Link>
                            </h3>
                            <div className={style["product--dfex"]}>
                                <div className={style["product--qtysold"]}>
                                    <span>200+ lượt mua</span>
                                </div>
                            </div>
                            <div className={style["product--price"]}>
                                <span className={style["price"]}>
                                    3,000,000₫
                                </span>
                                <span className={style["price-del"]}>
                                    4,200,000₫
                                </span>
                            </div>
                            <button className={style['product--cartBtn']}>
                                <Image 
                                    src={cartBtn} 
                                    alt='cart button'
                                    className={style['product--cartBtn-icon']}
                                />
                                <span>Mua hàng</span> 
                            </button>
                        </div>
                    </li>
                    <li className='relative'>
                        <Image
                            src={productImg}
                            alt='Product Img'
                            className='w-full'
                        />
                        <div className={style['product-sale']}>
                            <span>-29%</span>
                        </div>
                        <div className={style['product-detail']}>
                            <div className={style['product--lbsale']}>
                                <span>Tặng ngay 5 cuộn giấy</span>
                            </div>
                            <p className={style['product--vendor']}>
                                <Link href={'#'}>Haravan</Link>
                            </p>
                            <h3>
                                <Link href={'#'}>Combo Shop Offline</Link>
                            </h3>
                            <div className={style["product--dfex"]}>
                                <div className={style["product--qtysold"]}>
                                    <span>200+ lượt mua</span>
                                </div>
                            </div>
                            <div className={style["product--price"]}>
                                <span className={style["price"]}>
                                    3,000,000₫
                                </span>
                                <span className={style["price-del"]}>
                                    4,200,000₫
                                </span>
                            </div>
                            <button className={style['product--cartBtn']}>
                                <Image 
                                    src={cartBtn} 
                                    alt='cart button'
                                    className={style['product--cartBtn-icon']}
                                />
                                <span>Mua hàng</span> 
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
