import Image from 'next/image'
import { Banner, ProductCategory, LatestBlog } from './home'

export default function Home() {
  return (
    <>
      <Banner/>
      <div className='container'>
        <ProductCategory category='Combo Haravan'/>
        <ProductCategory category='Máy in hóa đơn và vận đơn'/>
        <ProductCategory category='Máy quét mã vạch'/>
        <ProductCategory category='Giấy in & Tem in'/>
        <LatestBlog />
      </div>
    </>
  )
}
