import type { Metadata } from 'next'
import Link from "next/link";
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import banner from '../../../../public/img/page_banner_image.webp'

export const metadata: Metadata = {
  title: 'Chính sách đổi trả - Haravan Store Clone',
  description: 'Chính sách đổi trả của Haravan Store',
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
              title: 'Chính sách bảo hành, đổi trả',
            },
          ]}
          className='py-2'
        />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 bg-white p-4">
            <h1 className='text-3xl font-bold mb-6'>Chính sách bảo hành, đổi trả</h1>
            <h2 className='mb-2.5 text-lg'><strong>I/ CHÍNH SÁCH BẢO HÀNH</strong></h2>
            <p className='mb-2.5'>
              Dịch vụ chuyên nghiệp của Haravan Store hỗ trợ chủ động và nhanh chóng tới khách hàng thuộc mọi quy mô kinh doanh,
              đảm bảo quý khách có trải nghiệm mua hàng tốt nhất!
            </p>
            <p className='mb-6'>
              Haravan Store hỗ trợ bảo hành từ 12 - 24 tháng cho các sản phẩm thiết bị bán hàng cho khách hàng,
              mọi vấn đề về sản phẩm cần bảo hành các bạn có thể liên hệ nhân viên từ Haravan để xử lý.
              Với các trường hợp cần đến kiểm tra và bảo hành tận nơi khách hàng, chúng tôi có báo chi phí đi lại dịch vụ cho nhân viên.
            </p>
            <h2 className='mb-2.5 text-lg'><strong>II/ CHÍNH SÁCH ĐỔI TRẢ</strong></h2>
            <h2 className='mb-2.5 text-lg'><strong>1. Điều kiện đổi trả</strong></h2>
            <p className='mb-2.5'>
              Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:
            </p>
            <ul className='list-disc px-4'>
              <li className='mb-1'>Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.</li>
              <li className='mb-1'>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
              <li className='mb-1'>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…</li>
            </ul>
            <p className='mb-2.5'> Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa. </p>
            <h2 className='mb-2.5 text-lg'><strong>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</strong></h2>
            <ul className='list-disc px-4'>
              <li className='mb-1'><strong>Thời gian thông báo đổi trả</strong>: trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.</li>
              <li className='mb-1'><strong>Thời gian gửi chuyển trả sản phẩm</strong>: trong vòng 7 ngày kể từ khi nhận sản phẩm.</li>
              <li className='mb-1'><strong>Địa điểm đổi trả sản phẩm</strong>: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.</li>
            </ul>
            <p className='mb-2.5'>Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.</p>

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
