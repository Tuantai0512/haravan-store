import type { Metadata } from 'next'
import Link from "next/link";
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import banner from '../../../../public/img/page_banner_image.webp'

export const metadata: Metadata = {
  title: 'Điều khoản dịch vụ - Haravan Store Clone',
  description: 'Điều khoản dịch vụ của Haravan Store',
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
              title: 'Điều khoản dịch vụ',
            },
          ]}
          className='py-2'
        />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 bg-white p-4">
            <h1 className='text-3xl font-bold mb-6'>Điều khoản dịch vụ</h1>
            <p className='mb-2.5'><strong>1. Giới thiệu</strong></p>
            <p className='mb-2.5'>Chào mừng quý khách hàng đến với Haravan Store</p>
            <p className='mb-2.5'>
              Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này.
              Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua bán hàng hóa này,
              vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước.
              Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản này được đăng tải,
              có nghĩa là quý khách chấp nhận với những thay đổi đó.
            </p>
            <p className='mb-2.5'>Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi.</p>
            <p className='mb-2.5'><strong>2. Hướng dẫn sử dụng website</strong></p>
            <p className='mb-2.5'>
              Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi,
              hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp.
              Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.
            </p>
            <p className='mb-2.5'>
              Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ website.
              Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
            </p>
            <p className='mb-2.5'><strong>3. Thanh toán an toàn và tiện lợi</strong></p>
            <p className='mb-2.5'>
              Haravan Store là cửa hàng online, cung cấp sản phẩm đến người dùng qua website Thương mại điện tử,
              chúng tôi không có cửa hàng bán lẻ offline nên người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:
            </p>
            <p>
              <strong><u>Cách 1:</u></strong>
              <span className='ml-2'>Thanh toán sau (COD – giao hàng và thu tiền tận nơi)</span>
            </p>
            <p className='mb-10'>
              <strong><u>Cách 2:</u></strong>
              <span className='ml-2'>Thanh toán online qua thẻ tín dụng, chuyển khoản.</span>
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
                style={{transition: 'all 0.5s linear;'}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
