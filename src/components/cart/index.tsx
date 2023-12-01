import { Dropdown, Space } from 'antd';
import style from './style.module.scss'

export function Cart() {
    return (
        <Dropdown
            className='ml-2 lg:ml-4 pl-2 lg:pl-4 border-l border-slate-200/[.1]'
            trigger={['click']}
            placement="bottomRight" arrow
            dropdownRender={() => (
                <div style={{ width: 420 }} className='bg-white p-5'>
                    <h2 className='uppercase text-lg tracking-wide mb-2.5 text-center'>Giỏ hàng</h2>
                    <div className='pt-2.5 pb-5 border-y mb-1'>
                        <div className='flex flex-col items-center'>
                            <svg style={{ stroke: '#0c5edb' }} width="50" height="50" viewBox="0 0 81 70"><g transform="translate(0 2)" stroke-width="4"
                                fill="none" fill-rule="evenodd"><circle stroke-linecap="square" cx="34" cy="60" r="6"></circle><circle stroke-linecap="square" cx="67" cy="60" r="6"></circle><path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"></path></g></svg>
                            <p className='text-gray-500 mt-1'>Hiện chưa có sản phẩm</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='uppercase py-2.5'>
                                Tổng tiền:
                            </div>
                            <div style={{ color: 'red' }} className='font-bold text-base'>0₫</div>
                        </div>
                        <button
                            id='cartBtn'
                            className='text-white uppercase w-full py-2 rounded-sm'>Xem giỏ hàng</button>
                    </div>
                </div>
            )}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space direction='vertical' align='center' size={0} className='relative'>
                    <span className={style['box-icon']}>
                        <svg className="svg-ico-cart w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 -13 456.75885 456" width="456pt">
                            <path d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
                            <path d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0"></path>
                            <path d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"></path>
                        </svg>
                    </span>
                    <div className={style['cart-counter']}>
                        <span>0</span>
                    </div>
                    <p className='hidden lg:block'>Giỏ hàng</p>
                </Space>
            </a>
        </Dropdown>
    );
}
