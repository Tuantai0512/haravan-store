import * as React from 'react';
import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import style from './style.module.scss'

export interface ISearchProps {
}

const { Search } = Input;

export function SearchComponent (props: ISearchProps) {
  return (
    <Space direction="vertical" className='px-4'>
        <Input 
            size="large" 
            placeholder="Nhập từ khóa cần tìm..." 
            suffix={<SearchOutlined />}
            className={style['search-input']}
        />
    </Space>
  );
}
