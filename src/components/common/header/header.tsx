'use client'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';
import { useWindowSize } from '@/hooks';

export interface IHeaderProps {
  cartId: RequestCookie | undefined
}

export default function Header(props: IHeaderProps) {

  const size = useWindowSize();

  return (
    <>
      {size.width > 992 ? <HeaderDesktop cartId={props.cartId}/> : <HeaderMobile cartId={props.cartId}/>}
    </>
  );
}