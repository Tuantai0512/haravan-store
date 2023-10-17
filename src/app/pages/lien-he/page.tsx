import type { Metadata } from 'next'
import Link from "next/link";
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import banner from '../../../../public/img/contact_banner.webp'

export const metadata: Metadata = {
  title: 'Liên hệ - Haravan Store Clone',
  description: 'Liên hệ với Haravan Store',
}

export default function App() {
  return (
    <div>
      <div className="container">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Trang chủ</Link>,
            },
            {
              title: 'Liên hệ',
            },
          ]}
          className='py-2'
        />
        <Image src={banner} alt='contact banner'/>
      </div>
    </div>
  );
}
