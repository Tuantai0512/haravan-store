import Image from 'next/image'
import { Banner, ProductCategory } from './home'

export default function Home() {
  return (
    <>
      <Banner/>
      <div className='container'>
        <ProductCategory/>
      </div>
    </>
  )
}
