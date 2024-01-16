import { Banner, ProductCategory, LatestBlog } from './home'
import { getData } from '@/utils'

const getCategory = async(categoryId: string) => {
  const data = await getData(`http://localhost:3000/category/${categoryId}`)
  return data;
} 

export default async function Home() {

  const allCategory = await getData('http://localhost:3000/category');
  const CbHaravan = await getCategory('fb0c4d9b-4043-4652-91da-2b7a2f38c9e2');
  const MayInHoaDon = await getCategory('9f9eec6f-a5aa-463d-92b9-999d7c58dc12');
  const MayQuetMaVach = await getCategory('afc7c973-a1f1-4a03-9d79-66732ba20471');
  const GiayIn = await getCategory('1cc5fce9-cb98-4677-acb8-82070c9e4583');
  
  return (
    <>
      <Banner productCategory={allCategory}/>
      <div className='container'>
        <ProductCategory category={CbHaravan}/>
        <ProductCategory category={MayInHoaDon}/>
        <ProductCategory category={MayQuetMaVach}/>
        <ProductCategory category={GiayIn}/>
        <LatestBlog />
      </div>
    </>
  )
}




