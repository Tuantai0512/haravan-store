'use client'
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic'

export interface IHeaderProps {
  token: string | undefined
}

function Header() {

  const [windowWidth, setwindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleWindowResize() {
      setwindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>
      {windowWidth > 992 ? <HeaderDesktop /> : <HeaderMobile />}
    </>
  );
}

function getWindowWidth() {
    return window.innerWidth;
}

export default dynamic(() => Promise.resolve(Header), {
  ssr: false
})