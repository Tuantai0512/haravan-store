import { Row, Col } from 'antd';
import style from './style.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import moitLogo from '../../../../public/img/footer_logobct_img.webp'
import phoneIcon from '../../../../public/img/phone-icon.png'

export default function FooterDesktop() {
    return (
        <div className='pt-8 bg-white mt-8'>
            <div className='container pb-8'>
                <Row justify="center" className='hidden lg:flex'>
                    <Col span={12}>
                        <h4 className={style['title-footer']}>About Us</h4>
                        <Row>
                            <Col span={12} className='pr-4'>
                                Haravan Store chuyên cung cấp các thiết bị chính hãng,
                                vật dụng đóng gói hỗ trợ nhà bán lẻ kinh doanh tiện lợi và hiệu quả hơn,
                                mang lại trải nghiệm tuyệt vời nhất cho người tiêu dùng.
                                <Image
                                    src={moitLogo}
                                    alt='logo bộ công thương'
                                    className='mt-4'
                                />
                            </Col>
                            <Col span={12} className='px-4'>
                                <strong>Địa chỉ</strong>: Tầng 6, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.<br />
                                <strong>Điện thoại</strong>:0981.475.261<br />
                                <strong>Email</strong>: store@haravan.com
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6} className='px-4'>
                        <h4 className={style['title-footer']}>Hỗ trợ khách hàng</h4>
                        <ul className={style['footer-policy-list']}>
                            <li>
                                <Link href={'/pages/dieu-khoan-dich-vu'}>Điều khoản dịch vụ</Link>
                            </li>
                            <li>
                                <Link href={'/pages/chinh-sach-giao-hang'}>Chính sách giao hàng</Link>
                            </li>
                            <li>
                                <Link href={'/pages/chinh-sach-doi-tra'}>Chính sách đổi trả</Link>
                            </li>
                            <li>
                                <Link href={'/pages/chinh-sach-bao-mat'}>Chính sách bảo mật thông tin</Link>
                            </li>
                            <li>
                                <Link href={'/pages/lien-he'}>Liên hệ</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col span={6}>
                        <h4 className={style['title-footer']}>Chăm sóc khách hàng</h4>
                        <div className='flex items-center'>
                            <div className={style['box-icon']}>
                                <Image src={phoneIcon} alt="phone icon" />
                            </div>
                            <div className='flex flex-col pl-2'>
                                <span className={style['phone-number']}>0981.475.261</span>
                                <span className={style['email']}>store@haravan.com</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={style['copyright']}>
                <p>Copyright © 2023 Haravan Store. Powered by Haravan</p>
            </div>
        </div>
    );
}
