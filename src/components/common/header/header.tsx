'use client'
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';
import { useWindowSize } from '@/hooks';

export interface IHeaderProps {
  token: string | undefined
}

export default function Header() {

  const size = useWindowSize();

  return (
    <>
      {size.width > 992 ? <HeaderDesktop /> : <HeaderMobile />}
    </>
  );
}