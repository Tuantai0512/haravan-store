import type { Metadata } from 'next'
import Link from "next/link";
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import banner from '../../../../public/img/contact_banner.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './contactForm';


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
          className='px-2 lg:px-0 py-2'
        />
        <Image src={banner} alt='contact banner' />
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-2/5 px-4 lg:px-0'>
            <h2 className='font-bold text-2xl my-7'>
              Thông tin liên hệ
            </h2>
            <div className='flex pr-4 mb-5'>
              <div className='w-8 h-8 mr-4 lg:px-0 flex items-center justify-center bg-white rounded-full border'>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className='w-3'
                />
              </div>
              <div className='w-4/5'>
                <strong>Địa chỉ</strong>
                <br />
                <p>Tầng 6, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.</p>
              </div>
            </div>
            <div className='flex pr-4 mb-5'>
              <div className='w-8 h-8 flex items-center justify-center bg-white rounded-full border'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='w-3'
                />
              </div>
              <div className='px-4'>
                <strong>Email</strong>
                <br />
                <p>store@haravan.com</p>
              </div>
            </div>
            <div className='flex pr-4 mb-5'>
              <div className='w-8 h-8 flex items-center justify-center bg-white rounded-full border'>
                <FontAwesomeIcon
                  icon={faPhone}
                  className='w-3'
                />
              </div>
              <div className='px-4'>
                <strong>Điện thoại</strong>
                <br />
                <p>0981.475.261</p>
              </div>
            </div>
            <div className='flex pr-4 mb-5'>
              <div className='w-8 h-8 flex items-center justify-center bg-white rounded-full border'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='w-2'
                />
              </div>
              <div className='px-4'>
                <strong>Thời gian làm việc</strong>
                <br />
                <p>Thứ 2 đến Thứ 6: từ 8h đến 18h</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 px-4 lg:px-0">
            <h2 className='font-bold text-2xl my-7'>
              Gửi thắc mắc cho chúng tôi
            </h2>
            <p className='mb-2'>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
