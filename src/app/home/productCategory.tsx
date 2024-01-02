import Link from 'next/link';
import style from './style.module.scss'
import ProductItem from '@/components/product-item';

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
                    <li><ProductItem /></li>
                    <li><ProductItem /></li>
                    <li><ProductItem /></li>
                    <li><ProductItem /></li>
                    <li><ProductItem /></li>
                </ul>
            </div>
        </div>
    );
}
