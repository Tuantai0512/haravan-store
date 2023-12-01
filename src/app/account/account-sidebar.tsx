'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/api';

export default function AccountSidebar() {

    const router = useRouter();
    const logOut = async() => {
        await authAPI.logout();
        router.push('/account/login');
    }

    return (
        <>
            <h3 className='uppercase mb-2.5 text-base font-bold'>Tài khoản</h3>
            <ul className='list-disc pl-4'>
                <li className='py-1'>
                    <Link href={'/account'}>Thông tin tài khoản</Link>
                </li>
                <li className='py-1'>
                    <Link href={'/account/addresses'}>Danh sách địa chỉ</Link>
                </li>
                <li className='py-1'>
                    <Link href={'#'} onClick={() => logOut()}>Đăng xuất</Link>
                </li>
            </ul>
        </>
    );
}
