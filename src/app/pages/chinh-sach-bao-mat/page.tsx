import type { Metadata } from 'next'
import Link from "next/link";
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import banner from '../../../../public/img/page_banner_image.webp'

export const metadata: Metadata = {
  title: 'Chính sách bảo mật - Haravan Store Clone',
  description: 'Chính sách bảo mật của Haravan Store',
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
              title: 'Chính sách bảo mật',
            },
          ]}
          className='py-2'
        />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 bg-white p-4">
            <h1 className='text-3xl font-bold mb-6'>Chính sách bảo mật</h1>
            <h2 className='mb-2.5 text-lg'><strong>1. Mục đích và phạm vi thu thập thông tin</strong></h2>
            <p className="mb-2.5">
              Chính sách bảo mật thông tin là một trong những chính sách mà Haravan Store đặc biệt chú trọng
              khi khách hàng mua hàng trên cửa hàng của chúng tôi.
              Haravan cam kết không chia sẻ hay trao đổi thông tin cá nhân của khách hàng thu thập trên trang web cho một bên thứ ba nào khác.</p>
            <p className="mb-2.5">
              Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ công ty.
              Khi quý khách liên hệ, thông tin cá nhân mà chúng tôi thu thập bao gồm:
            </p>
            <ul className='list-disc px-4'>
              <li className="mb-1">Họ và tên</li>
              <li className="mb-1">Địa chỉ</li>
              <li className="mb-1">Địa chỉ email</li>
              <li className="mb-1">Số điện thoại</li>
              <li className="mb-1">Chủ đề liên hệ</li>
              <li className="mb-1">Nội dung liên hệ</li>
            </ul>
            <p className="mb-2.5"><strong>Những thông tin trên sẽ được sử dụng cho một hoặc tất cả các mục đích sau đây:</strong></p>
            <ul className='list-disc px-4'>
              <li className="mb-1">Cung cấp & tư vấn thông tin liên quan đến sản phẩm và dịch vụ do chúng tôi cung cấp</li>
              <li className="mb-2.5">Gọi điện hướng dẫn khách hàng nơi mua sản phẩm thuận tiện nhất</li>
            </ul>
            <h2 className='mb-2.5 text-lg'><strong>2. Phạm vi sử dụng thông tin</strong></h2>
            <p className="mb-2">
              Thông tin cá nhân của khách hàng thu thập được chúng tôi sẽ chỉ được sử dụng trong nội bộ công ty.
              Chúng tôi có thể chia sẻ tên và địa chỉ của quý khách cho bộ phận bán hàng hoặc nhà phân phối của chúng tôi để có thể liên hệ tư vấn cho quý khách.</p>
            <p className="mb-2">
              Chúng tôi sẽ lưu trữ các Thông tin cá nhân do khách hàng cung cấp trên các hệ thống nội bộ của chúng tôi trong quá trình cung cấp dịch vụ cho khách hàng
              hoặc cho đến khi khách hàng có yêu cầu hủy các thông tin đã cung cấp.
            </p>
            <h2 className='mb-2.5 text-lg'><strong>3. Cam kết bảo mật thông tin cá nhân khách hàng</strong></h2>
            <p className="mb-2">
              Đối với Haravan, sự bảo mật thông tin của khách hàng là yếu tố quan trọng và được đặt lên hàng đầu trong hành trình kinh doanh của mình.
              Haravan tạo ra chính sách bảo mật này để chứng minh cho cam kết về sự an toàn bảo mật với quý khách hàng.
              Qua Chính sách bảo mật thông tin này, chúng tôi muốn quý khách hiểu được về việc chúng tôi thu thập thông tin khách hàng,
              việc sử dụng và chia sẻ thông tin cũng như việc bảo mật thông tin khách hàng của chúng tôi.
            </p>
            <p className="mb-2">
              Chúng tôi sẽ không chia sẻ thông tin của quý khách với bất kỳ công ty nào khác cũng như không sử dụng vào bất cứ mục đích kinh doanh nào.
              Chúng tôi chỉ sử dụng thông tin này với mục đích cung cấp tư vấn thông tin liên quan tới sức khỏe,
              sản phẩm và các thông tin bổ ích khác cho khách hàng hoặc cung cấp cho bộ phận bán hàng của công ty,
              nhà phân phối sản phẩm tại khu vực của khách hàng để chỉ dẫn trực tiếp cho quý khách mua hàng.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='bg-white px-4 py-5'>
              <h3 className='mb-3 text-lg font-bold'>Thông tin cửa hàng</h3>
              <ul className='border-t'>
                <li className='border-b border-dashed'>
                  <Link href={'/pages/dieu-khoan-dich-vu'} className='block py-3'>Điều khoản dịch vụ</Link>
                </li>
                <li className='border-b border-dashed'>
                  <Link href={'/pages/chinh-sach-giao-hang'} className='block py-3'>Chính sách giao hàng</Link>
                </li>
                <li className='border-b border-dashed'>
                  <Link href={'/pages/chinh-sach-doi-tra'} className='block py-3'>Chính sách đổi trả</Link>
                </li>
                <li className='border-b border-dashed'>
                  <Link href={'/pages/chinh-sach-bao-mat'} className='block py-3'>Chính sách bảo mật thông tin</Link>
                </li>
                <li>
                  <Link href={'/pages/lien-he'} className='block py-3'>Liên hệ</Link>
                </li>
              </ul>
            </div>
            <div className='overflow-hidden'>
              <Image
                src={banner}
                alt='shop banner image'
                className='hover:scale-110'
                style={{ transition: 'all 0.5s linear;' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
