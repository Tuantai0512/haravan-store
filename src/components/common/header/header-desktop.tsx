'use client'
import * as React from 'react';
import { DropdownMenu } from '@/components/dropdown-menu';

export default function HeaderDesktop () {
  return (
    <header style={{ height: '73px' }} className='text-white hidden lg:block'>
      <div className='container'>
        <DropdownMenu/>
      </div>
    </header>
  );
}