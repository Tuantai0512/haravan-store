import { useState } from 'react'
import type { MenuProps } from 'antd';
import { Dropdown, Space, Menu } from 'antd';
import Link from 'next/link';
import style from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhoneVolume, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { convertSlug, fetcher, getData } from '@/utils';
import useSWR from 'swr';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactElement,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export function DropdownMenu() {

  const [open, setOpen] = useState(false);

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  const { data } = useSWR<ICategory[]>(`/api/category`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false
  })

  const allDevice = data?.filter(item => item.name !== 'Combo haravan');
  const menuItem: MenuProps['items'] = allDevice?.map(item => {
    return(
      getItem(<Link href={`/collections/${convertSlug(item.name)}/${item.id}`} className='text-xs mx-3' onClick={() => setOpen(false)}>{item.name}</Link>, `${item.id}`)
    )
  })
  menuItem?.unshift(getItem(<Link href={'/collections/thiet-bi-ban-hang'} className='text-xs mx-3' onClick={() => setOpen(false)}>Xem tất cả "<b>Thiết bị</b>"</Link>, '9'),)

  const subItems: MenuProps['items'] = [
    getItem(<Link href={'google.com'} className='uppercase font-bold py-2.5 text-xs '>Thiết bị</Link>, 'sub4', null, menuItem)
  ];
  
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link
          href="/"
          className=''
          onClick={() => setOpen(false)}
        >
          <FontAwesomeIcon icon={faHouse} className='text-2xl' />
        </Link>
      ),
      className: '!px-3 !py-2 border-b !mb-2',
    },
    {
      key: '2',
      label: (
        <Link href="/pages/about-us" className='uppercase font-bold py-2.5 text-xs' onClick={() => setOpen(false)}>
          Giới thiệu
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link href="/collections/combo-haravan/fb0c4d9b-4043-4652-91da-2b7a2f38c9e2" className='uppercase font-bold py-2.5 text-xs' onClick={() => setOpen(false)}>
          Combo haravan
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Menu
  
          mode="inline"
          items={subItems}
        />
      ),
    },
    {
      key: '5',
      label: (
        <Link href="/collections/giay-in-and-tem-in/1cc5fce9-cb98-4677-acb8-82070c9e4583" className='uppercase font-bold py-2.5 text-xs' onClick={() => setOpen(false)}>
          Giấy in & tem in
        </Link>
      ),
    },
    {
      key: '6',
      label: (
        <p className='uppercase pt-5 pb-2 text-xs'>
          Tư vấn miễn phí
        </p>
      ),
    },
    {
      key: '7',
      label: (
        <Link href="tel:0916964202" className='uppercase py-2 text-xs' onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faPhoneVolume} className='text-base mr-3' />
          0916.964.202
        </Link>
      ),
    },
    {
      key: '8',
      label: (
        <Link href="mailto:store@haravan.com" className='py-2 text-xs' onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faEnvelopeOpenText} className='text-base mr-3' />
          store@haravan.com
        </Link>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      className='px-2 lg:px-4'
      trigger={['click']}
      onOpenChange={handleOpenChange}
      open={open}
      placement="bottomLeft" arrow
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space direction='vertical' align='center' size={0}>
          <span className={style['box-icon']}>
            {
              open ?
                <svg viewBox="0 0 19 19" width="17" height="17" role="presentation"><path d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z" fillRule="evenodd"></path></svg>
                :
                <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                  <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path></g></g>
                </svg>
            }
          </span>
          <p className='text-white'>Menu</p>
        </Space>
      </a>
    </Dropdown>
  );
}
