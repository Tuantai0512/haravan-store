import type { Metadata } from 'next'
import Link from "next/link";
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import banner from '../../../../public/img/page_banner_image.webp'
import PrivacyMenu from '../privacy-menu-mobile';
import HaravanImage from '../../../../public/img/hrv-store-about-us.webp'

export const metadata: Metadata = {
  title: 'Giới thiệu - Haravan Store Clone',
  description: 'Giới thiệu về Haravan Store',
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
              title: 'Giới thiệu',
            },
          ]}
          className='px-2 lg:px-0 !py-2'
        />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 lg:col-span-3 bg-white p-4">
            <h1 className='text-3xl font-bold mb-6'>Giới thiệu</h1>
            <p className="mb-2.5">
              Với sứ mệnh ‘Make Commerce Better’, tiếp tục đồng hành cùng các doanh nghiệp/ nhà bán lẻ trong vận hành và quản lý bán hàng đa kênh,
              Haravan ra mắt cửa hàng Online cung cấp các Thiết bị bán hàng chính hãng như máy in hoá đơn, máy in mã vạch, máy bán hàng POS…
              cùng các vật dụng bán hàng như thùng giấy, phụ kiện & bao bì đóng gói hàng hóa, hỗ trợ nhà kinh doanh lựa chọn những vật dụng phù hợp, chất lượng để đảm bảo quá trình bán hàng nhanh chóng, tiện lợi hơn, đặc biệt mang lại trải nghiệm tốt cho người tiêu dùng khi mua hàng.
            </p>
            <div className='flex justify-center mb-10'>
              <Image src={HaravanImage} alt='Haravan light logo image' className='lg:scale-125' />
            </div>
            <h2 className='uppercase font-bold text-lg mb-3'>SẢN PHẨM CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU HÀNG ĐẦU</h2>
            <p className="mb-4">Với nhiều năm làm việc cùng hàng nghìn nhà bán lẻ trên thị trường,
              Haravan nắm bắt rõ những thương hiệu sản xuất các thiết bị bán hàng chất lượng và hiện đại vượt trội nhất trên thị trường
              hiện nay. Đến với Haravan Store, chúng tôi cung cấp đa dạng mẫu mã và các sản phẩm đều đến từ các thương hiệu uy tín
              tại Nhật Bản, Hàn Quốc, Trung Quốc như: SUNMI, XPRINTER, SYBLE, iMIN, HPRT, GPRINTER, NEWLAND…Sản phẩm của Haravan cam kết
              chính hãng và đảm bảo chất lượng tuyệt đối cho các nhà kinh doanh. </p>
            <h2 className='uppercase font-bold text-lg mb-3'>DỊCH VỤ KHÁCH HÀNG KHI MUA HÀNG TẠI HARAVAN STORE</h2>
            <h3 className='mb-3'>
              <span style={{ color: '#2980b9' }}>
                <strong>1. Cam kết 100% hàng chính hãng</strong>
              </span>
            </h3>
            <p className="mb-3">
              Haravan hợp tác với các đối tác uy tín hàng đầu, nhiều năm kinh nghiệm trong lĩnh vực phân phối các thiết bị bán hàng, vật liệu đóng gói & phụ kiện bán hàng cho các nhà bán lẻ, đặc biệt đến từ các thương hiệu nổi tiếng của Mỹ, Nhật Bản, Hàn Quốc , Trung Quốc .v..v.
              Haravan Store cam kết cung cấp các sản phẩm chính hãng 100%, chất lượng cao, có giấy tờ chứng nhận nguồn gốc xuất xứ rõ ràng.
            </p>
            <h3 className='mb-3'>
              <span style={{ color: '#2980b9' }}>
                <strong>2. Chính sách bảo hành, đổi trả</strong>
              </span>
            </h3>
            <p className="mb-3">
              Haravan Store cam kết bảo hành 12 - 36 tháng dành cho các thiết bị có tại cửa hàng kể từ ngày gửi hàng cho khách.
              Đồng thời quý khách hàng có thể thực hiện 1 đổi 1 trong vòng 07 ngày nếu máy gặp lỗi từ nhà sản xuất
              (Không bảo hành thiết bị bị hư hỏng, cháy nổ, nước vào do tác động từ phía khách hàng).
              Haravan luôn đảm bảo tốt nhất các quyền lợi mua sắm dành cho quý khách hàng khi sử dụng sản phẩm/ dịch vụ của chúng tôi.
            </p>
            <h3 className='mb-3'>
              <span style={{ color: '#2980b9' }}>
                <strong>3. Hỗ trợ tư vấn - lắp đặt tận nơi</strong>
              </span>
            </h3>
            <p className="mb-4">
              Với đội ngũ chuyên viên nhiều kinh nghiệm của Haravan Store,
              đảm bảo quý khách hàng sẽ nhận được hỗ trợ tư vấn nhiệt tình và tận tâm nhất để có thể lựa chọn sản phẩm phù hợp nhất
              cho nhu cầu sử dụng của mình.
            </p>
            <h3 className='mb-3'>
              <span className='text-sm'>
                <strong>THÔNG TIN LIÊN HỆ</strong>
              </span>
            </h3>
            <ul className='list-disc pl-4'>
              <li><strong>Hotline: </strong>0856081706</li>
              <li><strong>Email: </strong></li>
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
          <PrivacyMenu />
        </div>
      </div>
    </div>
  );
}
