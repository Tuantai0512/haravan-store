import { Breadcrumb } from 'antd';
import * as React from 'react';
import slugify from 'slugify';

export interface IAppProps {
}

export default function Collections({ params }: { params: { category_slugname: string, category_id: string } }) {
    console.log(slugify('Máy POS bán hàng', {
        lower: true,      // convert to lower case, defaults to `false`
        locale: 'vi',      // language code of the locale to use    
    }))
    console.log(params.category_id)
    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: 'Trang chủ',
                    },
                    {
                        title: `${params.category_slugname}`,
                    },
                ]}
            />
        </div>
    );
}
