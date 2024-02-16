import { convertSlug, getData, getIdFromSlug } from '@/utils';
import { Breadcrumb } from 'antd';
import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';
import ContainerOrder from '../containerOrder';
import ProductDescription from '../description';
import Gallery from '../gallery';
import ListProduct from '../listProduct';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = getIdFromSlug(params.slug)

  // fetch data
  const product: IProduct = await fetch(`http://localhost:3000/api/product/${id}`).then((res) => res.json());

  return {
    title: `${product.title} - Haravan Store Clone`,
    description: product.description
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {

  const product: IProduct = await getData(`http://localhost:3000/api/product/${getIdFromSlug(params.slug)}`);
  const productCategory: ICategory = await getData(`http://localhost:3000/api/category/${product.category.id}`)

  return (
    <div className='container'>
      <Breadcrumb
        items={[
          {
            title: 'Trang chủ',
          },
          {
            title: <Link
              href={`/collections/${convertSlug(product.category.name)}/${product.category.id}`}
            >
              {product.category.name}
            </Link>,
          },
          {
            title: <p className='limit-1-line'>{product.title}</p>,
          },
        ]}
        className='!px-2 !py-2'
      />
      <div className='lg:flex gap-x-4'>
        <div className='w-full lg:w-1/2'>
          <Gallery galery={product.galery}/>
        </div>
        <div className='w-full lg:w-1/2'>
          <ContainerOrder product={product}/>
          <ProductDescription product={product}/>
        </div>
      </div>
      <ListProduct category={productCategory} productId={product.id}/>
    </div>
  );
}
