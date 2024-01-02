import { Breadcrumb } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import * as React from 'react';
import slugify from 'slugify';
import FilterSort from './filter-sort';



export default async function Collections({ params }: { params: { category_slugname: string, category_id: string } }) {
    
    const res = await fetch(`http://localhost:3000/category/${params.category_id}`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json();
;
    return (
        <div className='container'>
            <Breadcrumb
                items={[
                    {
                        title: 'Trang chủ',
                    },
                    {
                        title: `${data.name}`,
                    },
                ]}
                className='!py-2'
            />
            <h1 className='py-2 text-2xl font-bold'>{data.name}</h1>
            <FilterSort/>
        </div>
    );
}
