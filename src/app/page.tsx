import { Banner, ProductCategory, LatestBlog } from './home'

async function getData() {
  const res = await fetch('http://localhost:3000/category')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

  const data = await getData();
  
  return (
    <>
      <Banner productCategory={data}/>
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




