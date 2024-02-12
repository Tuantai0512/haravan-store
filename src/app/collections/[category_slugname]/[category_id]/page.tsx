import { Breadcrumb } from 'antd';
import FilterSort from '../../filter-sort';
import { Metadata } from 'next';

type Props = {
    params: { category_slugname: string, category_id: string }
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    // read route params
    const id = params.category_id

    // fetch data
    const category = await fetch(`http://localhost:3000/category/${id}`).then((res) => res.json());

    return {
        title: `${category.name} - Haravan Store Clone`,
        description: `Đây là các sản phẩm ${category.name} của Haravan Store`
    }
}

export default async function Collections({ params }: { params: { category_slugname: string, category_id: string } }) {

    const res = await fetch(`http://localhost:3000/category/${params.category_id}`, { cache: 'no-store' });
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
                        title: `${data.name}`,
                    },
                ]}
                className='!px-2 !py-2'
            />
            <h1 className='py-2 text-xl lg:text-2xl font-bold px-2'>{data.name}</h1>
            <FilterSort category={data}/>
        </div>
    );
}
