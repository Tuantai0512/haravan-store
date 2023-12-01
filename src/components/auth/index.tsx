'use client'
import { Dropdown, Space } from 'antd';
import style from './style.module.scss'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authAPI } from '@/api';
import { ILoginForm } from '@/models';

export function Auth() {

    const form = useForm<ILoginForm>();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const FormSubmit = async(data: ILoginForm) => {
        try{
            await authAPI.login(data);
        }catch(e){
            console.log('Failed to login: ',e);
        }
    }

    return (
        <Dropdown
            className='ml-2 lg:ml-4 pl-2 lg:pl-4 border-l border-slate-200/[.1]'
            dropdownRender={() => (
                <div className='bg-white w-80 text-center p-5'>
                    <div className='pb-2.5 border-b'>
                        <p className='uppercase text-lg font-medium'>Đăng nhập tài khoản</p>
                        <p className='text-sm text-gray-500'>Nhập email và mật khẩu của bạn:</p>
                    </div>
                    <form className="pt-5" onSubmit={handleSubmit(FormSubmit)}>
                        <div className='relative mb-3'>
                            <input
                                type='text'
                                className='form-input w-full border pt-3.5 px-2.5 pb-1'
                                placeholder='email'
                                {...register("email", {
                                    required: 'Bạn chưa nhập email!',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Bạn nhập sai cú pháp email"
                                    }
                                })}
                            />
                            <label
                                className='form-label absolute top-0 leading-10 left-2.5 pointer-events-none origin-left'>Email</label>
                        </div>
                        {errors.email && (
                            <label className='text-red-500 mb-2'>{errors.email.message}</label>
                        )}
                        <div className='relative mb-3'>
                            <input
                                type='password'
                                className='form-input w-full border pt-3.5 px-2.5 pb-1'
                                placeholder='mật khẩu'
                                {...register("password", {
                                    required: 'Bạn chưa nhập mật khẩu!',
                                    minLength: {
                                        value: 8,
                                        message: 'Mật khẩu ít nhất phải 8 ký tự!'
                                    },
                                })}
                            />
                            <label
                                className='form-label absolute top-0 leading-10 left-2.5 pointer-events-none origin-left'>Mật khẩu</label>
                        </div>
                        {errors.password && (
                            <label className='text-red-500 mb-2'>{errors.password.message}</label>
                        )}
                        <div className='text-left text-xs mb-3'>
                            This site is protected by reCAPTCHA and the Google
                            <a
                                href='https://policies.google.com/privacy'
                                style={{ color: '#2962ff' }}
                                target='_blank'
                                rel="noopener noreferrer"
                            >  Privacy Policy </a>
                            and
                            <a
                                href='https://policies.google.com/terms'
                                style={{ color: '#2962ff' }}
                                target='_blank'
                                rel="noopener noreferrer"
                            >  Terms of Service </a>
                            apply.
                        </div>
                        <button
                            style={{ backgroundColor: '#0c5edb' }}
                            className='uppercase w-full py-2.5 text-white mb-3'
                        >Đăng nhập</button>
                        <p className='mb-1 text-left text-xs'>Khách hàng mới?
                            <Link
                                href='#'
                                style={{ color: '#2962ff' }}
                                target='_blank'
                                rel="noopener noreferrer"
                            >  Tạo tài khoản </Link>
                        </p>
                        <p className='mb-2 text-left text-xs'>Quên mật khẩu?
                            <Link
                                href='#'
                                style={{ color: '#2962ff' }}
                                target='_blank'
                                rel="noopener noreferrer"
                            >  Khôi phục mật khẩu </Link>
                        </p>
                    </form>
                </div>
            )}
            trigger={['click']}
            placement="bottom" arrow
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space direction='vertical' align='center' size={0} className='flex items-center justify-center'>
                    <span className={style['box-icon']}>
                        <svg className="svg-ico-account" viewBox="0 0 1024 1024">
                            <path className="path1" d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"></path>
                            <path className="path2" d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"></path>
                        </svg>
                    </span>
                    <p className='hidden lg:block'>Tài khoản</p>
                </Space>
            </a>
        </Dropdown>
    );
}
