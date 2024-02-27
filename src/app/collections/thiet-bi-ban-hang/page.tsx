import { Breadcrumb } from 'antd';
import FilterSort from '../filter-sort';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thiết bị bán hàng - Haravan Store Clone',
    description: 'Đây là trang bán tất cả thiết bị bán hàng của Haravan Store',
}  

export default async function Collections() {
    
    const res = await fetch(`${process.env.URL_PROXY}/api/category`,{ cache: 'no-store' });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json();

    return (
        <div className='container'>
            <Breadcrumb
                items={[
                    {
                        title: 'Trang chủ',
                    },
                    {
                        title: `Thiết bị bán hàng`,
                    },
                ]}
                className='!py-2'
            />
            <h1 className='py-2 text-xl lg:text-2xl font-bold px-2'>Thiết bị bán hàng</h1>
            <FilterSort allCategory={data}/>
        </div>
    );
}