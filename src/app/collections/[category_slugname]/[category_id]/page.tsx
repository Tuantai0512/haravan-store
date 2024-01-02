import { Breadcrumb } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import * as React from 'react';
import slugify from 'slugify';
import FilterSort from './filter-sort';

export interface IAppProps {
}

export default function Collections({ params }: { params: { category_slugname: string, category_id: string } }) {
    /* console.log(slugify('Máy POS bán hàng', {
        lower: true,      // convert to lower case, defaults to `false`
        locale: 'vi',      // language code of the locale to use    
    }));
    console.log(params.category_id); */
    
    return (
        <div className='container'>
            <Breadcrumb
                items={[
                    {
                        title: 'Trang chủ',
                    },
                    {
                        title: `${params.category_slugname}`,
                    },
                ]}
                className='!py-2'
            />
            <h1 className='py-2 text-2xl font-bold'>{params.category_slugname}</h1>
            <FilterSort/>
        </div>
    );
}
