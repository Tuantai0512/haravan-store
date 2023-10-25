import type { Metadata } from 'next'
import Link from "next/link";
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import banner from '../../../../public/img/page_banner_image.webp'
import PrivacyMenu from '../privacy-menu-mobile';

export const metadata: Metadata = {
  title: 'Chính sách giao hàng - Haravan Store Clone',
  description: 'Chính sách giao hàng của Haravan Store',
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
              title: 'Chính sách giao hàng',
            },
          ]}
          className='px-2 lg:px-0 py-2'
        />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 lg:col-span-3 bg-white p-4">
            <h1 className='text-3xl font-bold mb-6'>Chính sách giao hàng</h1>
            <p className='mb-2.5'><strong>QUY TRÌNH MUA HÀNG - XÁC THỰC ĐƠN HÀNG</strong></p>
            <ul className='list-disc pl-4 mb-2.5'>
              <li>Bước 1: Đăng nhập tài khoản trên website chúng tôi.</li>
              <li>Bước 2: Lựa chọn sản phẩm và xem giá chi tiết sản phẩm đó, rồi sau đó ấn vào để mua hàng,
                Quý khách có thể mua nhiều sản phẩm khác nhau trong một đơn hàng.
              </li>
              <li>Bước 3: Quý khách điền đầy đủ thông tin địa chỉ nhận hàng.
                Chọn mục phí trả trước cho đơn hàng và phương thức thanh toán, sau đó đặt mua.</li>
              <li>
                Bước 4: Sau khi nhận đơn hàng của người mua, chúng sẽ xác nhận lại đơn hàng bằng cách liên hệ với người mua theo thông tin địa chỉ,
                số điện thoại đã gửi.
              </li>
              <li>
                Bước 5: Haravan gửi hàng cho người mua
              </li>
            </ul>
            <p className='mb-2.5'>
              Sau khi quý khách hoàn thành các bước mua hàng trên cửa hàng của Haravan,
              chúng tôi sẽ xác thực lại đơn hàng trong thời gian nhanh nhất.
              Thời gian giao hàng sẽ được bắt đầu tính từ lúc đơn hàng của bạn được ‘Xác Nhận Thành Công’.
            </p>
            <p className='mb-2.5 mt-10'><strong>THỜI GIAN VẬN CHUYỂN</strong></p>
            <p className='mb-2.5'>
              Thời gian vận chuyển đối với các tỉnh thành khác của Việt Nam (ngoại trừ Thành phố Hồ Chí Minh) cụ thể như sau:
            </p>
            <table className='border w-4/5'>
              <tbody>
                <tr className='border'>
                  <td className='border'></td>
                  <td className='uppercase'><strong>Thời gian làm việc</strong></td>
                </tr>
                <tr className='border'>
                  <td className='border'>Miền Nam</td>
                  <td className='px-2'><strong>3 – 5 ngày làm việc</strong></td>
                </tr>
                <tr className='border'>
                  <td className='border'>Miền Trung</td>
                  <td className='px-2'><strong>5 – 7 ngày làm việc</strong></td>
                </tr>
                <tr className='border'>
                  <td className='border'>Miền Bắc</td>
                  <td className='px-2'><strong>6 – 10 ngày làm việc</strong></td>
                </tr>
              </tbody>
            </table>
            <br/>
            <ul>
              <li className='my-2'>
                <strong>Miền Nam</strong>
                : Bình Dương, Đồng Nai, Bà Rịa – Vũng Tàu, An Giang, Bạc Liêu, Bến Tre, Bình Thuận, Bình Phước, Cà Mau, Cần Thơ, 
                Đồng Tháp, Hậu Giang, Kiên Giang, Lâm Đồng, Long An, Ninh Thuận, Tây Ninh, Tiền Giang, Trà Vinh, Sóc Trăng, Vĩnh Long.
              </li>
              <li className='my-2'>
                <strong>Miền Trung</strong>
                : Đà Nẵng, Bình Định, Đắk Lắk, Đắk Nông, Gia Lai, Thừa Thiên Huế, Kon Tum, Khánh Hòa, Phú Yên, 
                Quảng Nam, Quảng Ngãi, Quảng Trị, Quảng Bình.
              </li>
              <li className='my-2'>
                <strong>Miền Bắc</strong>
                : Hà Nội, Bắc Ninh, Hà Nam, Hà Tĩnh, Hải Dương, Hải Phòng, Nam Định, Ninh Bình, Nghệ An, Quảng Ninh, Thanh Hóa, 
                Vĩnh Phúc, Bắc Cạn, Bắc Giang, Cao Bằng, Điện Biên, Hà Giang, Hưng Yên, Hòa Bình, Lào Cai, Lai Châu, Lạng Sơn, Phú Thọ, 
                Sơn La, Thái Bình, Thái Nguyên, Tuyên Quang, Yên Bái.
              </li>
            </ul>
          </div>
          <div className='col-span-1 hidden lg:flex flex-col gap-4'>
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
            <div className='overflow-hidden mb-10'>
              <Image
                src={banner}
                alt='shop banner image'
                className='hover:scale-110'
                style={{ transition: 'all 0.5s linear;' }}
              />
            </div>
          </div>
          <PrivacyMenu/>
        </div>
      </div>
    </div>
  );
}
