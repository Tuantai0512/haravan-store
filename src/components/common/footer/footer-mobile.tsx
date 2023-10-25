'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from 'react-collapse';
import { useState } from 'react'
import type { CollapseProps } from 'antd';
import { Collapse as CollapseAntd } from 'antd';
import Image from 'next/image';
import moitLogo from '../../../../public/img/footer_logobct_img.webp'
import phoneIcon from '../../../../public/img/phone-icon.png'
import Link from "next/link";
import style from './style.module.scss'

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: <h5 style={{ color: '#0c5edb' }} className="text-base">About Us</h5>,
        children: <div>
            <p className="mb-2.5">Haravan Store chuyên cung cấp các thiết bị chính hãng,
                vật dụng đóng gói hỗ trợ nhà bán lẻ kinh doanh tiện lợi và hiệu quả hơn,
                mang lại trải nghiệm tuyệt vời nhất cho người tiêu dùng.</p>
            <p className="mb-2.5">
                <strong>Địa chỉ: </strong>
                Tầng 6, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.
            </p>
            <p className="mb-2.5">
                <strong>Điện thoại: </strong>
                0981.475.261
            </p>
            <p className="mb-2.5">
                <strong>Email: </strong>
                store@haravan.com
            </p>
            <Image
                src={moitLogo}
                alt='logo bộ công thương'
                className='mt-4'
            />
        </div>,
        extra: <FontAwesomeIcon icon={faChevronDown} style={{ width: 12, color: '#0c5edb' }} />
    },
    {
        key: '2',
        label: <h5 style={{ color: '#0c5edb' }} className="text-base">Hỗ trợ khách hàng</h5>,
        children: <ul className={`${style['footer-policy-list']} ml-4`}>
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
        </ul>,
        extra: <FontAwesomeIcon icon={faChevronDown} style={{ width: 12, color: '#0c5edb' }} />
    },
    {
        key: '3',
        label: <h5 style={{ color: '#0c5edb' }} className="text-base">Chăm sóc khách hàng</h5>,
        children: <div className='flex items-center'>
            <div className={style['box-icon']}>
                <Image src={phoneIcon} alt="phone icon" />
            </div>
            <div className='flex flex-col pl-2'>
                <span className={style['phone-number']}>0981.475.261</span>
                <span className={style['email']}>store@haravan.com</span>
            </div>
        </div>,
        extra: <FontAwesomeIcon icon={faChevronDown} style={{ width: 12, color: '#0c5edb' }} />
    },
];

export default function FooterMobile() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div style={{ height: 50, backgroundColor: '#0c5edb' }} className="lg:hidden px-3 py-1 flex items-center justify-between">
                <div>
                    <p style={{ fontSize: 10 }} className="text-white">Bán hàng 7:00 - 21:30</p>
                    <div style={{ fontSize: 10 }} className="flex items-center text-white font-bold">
                        <div className="bg-white w-3 h-3 flex items-center justify-center rounded-sm mr-2">
                            <FontAwesomeIcon icon={faPhone} style={{ width: 8, color: '#0c5edb' }} />
                        </div>
                        0981.475.261
                    </div>
                </div>
                <div>
                    <p style={{ fontSize: 10 }} className="text-white">Khiếu nại 8:00 - 21:30</p>
                    <div style={{ fontSize: 10 }} className="flex items-center text-white font-bold">
                        <div className="bg-white w-3 h-3 flex items-center justify-center rounded-sm mr-2">
                            <FontAwesomeIcon icon={faPhone} style={{ width: 8, color: '#0c5edb' }} />
                        </div>
                        0981.475.261
                    </div>
                </div>
                <div>
                    <div
                        style={{ fontSize: 10 }}
                        className="text-white flex items-center"
                        onClick={() => { setOpen(!open) }}
                    >
                        <div className="mr-2">
                            <p>Xem thêm</p>
                            <p>thông tin</p>
                        </div>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ width: 12, transition: 'transform .4s' }}
                            className={`origin-center ${open ? 'rotate-180' : ''} `}
                        />
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
                <Collapse isOpened={open}>
                    <CollapseAntd ghost items={items}/>
                    <div className={style['copyright']}>
                        <p>Copyright © 2023 Haravan Store. Powered by Haravan</p>
                    </div>
                </Collapse>
            </div>
        </>

    );
}
