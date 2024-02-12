'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import ProductItem from '@/components/product-item';

interface IListProductProps {
  category: ICategory,
  productId: string
}

export default function ListProduct(props: IListProductProps) {
  const { category, productId } = props;
  const relatedProduct: IProduct[] = category.products.filter(item => item.id !== productId);
  return (
    <div className="product-item !py-10 my-10">
      <h2 className='text-center mb-5 text-3xl font-bold'>Sản phẩm liên quan</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        navigation
        modules={[Navigation, A11y, Autoplay, EffectFade]}
      >
        {
          relatedProduct.map((item: IProduct) => {
            return (
              <SwiperSlide key={item.id}>
                <ProductItem product={item}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}