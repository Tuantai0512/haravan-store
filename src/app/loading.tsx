import { Skeleton } from 'antd';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className='w-full h-screen flex flex-col items-center mt-28'>
            <div className="loadingio-spinner-spinner-8589zr1el8o"><div className="ldio-rflpzq97wni">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>
            <p className='text-base text-center mb-5'>Đang tải, xin vui lòng chờ trong giây lát...</p>
        </div>
    )
}