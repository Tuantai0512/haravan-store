'use client'
import { DropdownMenu } from "@/components/dropdown-menu";
import { Cart } from "@/components/cart";
import { Auth } from "@/components/auth";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../../public/img/logo.webp'
import { SearchMobile } from "@/components/search";

export default function HeaderMobile () {
  return (
    <header style={{ height: '65px', top: 0, zIndex: 2 }} className='text-white lg:hidden flex items-center justify-between sticky'>
          <div className="flex items-center">
            <DropdownMenu/>
            <Link href={'/'}>
              <Image 
                  src={logo}
                  width={160} 
                  alt='logo'
                  className='px-2 lg:px-4'
              />
            </Link>
          </div>
          <div className="flex items-center mr-3">
            <SearchMobile />
            <Auth />
            <Cart/> 
          </div>
    </header>
  );
}
