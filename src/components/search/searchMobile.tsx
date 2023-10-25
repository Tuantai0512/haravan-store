import { Dropdown, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export interface IAppProps {
}

export function SearchMobile(props: IAppProps) {
    return (
        <Dropdown
            className='ml-2 lg:ml-4 pl-2 lg:pl-4 border-l border-slate-200/[.1] lg:hidden'
            /* trigger={['click']} */
            placement="bottomRight" arrow
            dropdownRender={() => (
                <div>
                    
                </div>
            )}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space direction='vertical' align='center' size={0} className='relative'>
                    <SearchOutlined style={{ fontSize: '27px' }}/>
                </Space>
            </a>
        </Dropdown>
    );
}
