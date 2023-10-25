'use client'
import Link from "next/link";
import { useState } from "react";
import { Collapse } from 'react-collapse';
import Image from 'next/image';
import banner from '../../../public/img/page_banner_image.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function PrivacyMenu() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='col-span-4 flex lg:hidden flex-col'>
            <div className='bg-white px-4 pt-3'>
                <h3 className='text-lg font-bold mb-3 flex justify-between items-center' onClick={() => { setOpen(!open) }}>
                    Thông tin cửa hàng
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ width: 12, transition: 'transform .4s' }}
                        className={`origin-center ${open ? 'rotate-180' : ''} `}
                    />
                </h3>
                <Collapse isOpened={open}>
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
                </Collapse>
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
    );
}
