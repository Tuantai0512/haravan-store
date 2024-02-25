'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { authAPI } from "@/api";
import { toast } from "react-toastify";

export interface IRegisterPageProps {
}

export default function Register(props: IRegisterPageProps) {

    const form = useForm<IRegisterForm>();
    const router = useRouter();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const FormSubmit = async (data: IRegisterForm) => {
        try {
            if(data.password === data.confilmPassword){
                await authAPI.register(data).then(() => {
                    toast.success('Đăng ký thành công!');
                    router.push('/account/login');
                }).catch((error) => {
                    toast.error(`${error.response.data.message}`)
                });
            }else{
                toast.error('Xác thực mật khẩu không trùng khớp!')
            }
        } catch (e) {

        }
    }

    return (
        <div className='container flex justify-center'>
            <div style={{ maxWidth: 620 }} className="bg-white w-full mt-9 flex flex-col items-center pt-6 pb-7 px-7">
                <h1 className="w-full block text-center relative text-2xl font-bold">Tạo tài khoản</h1>
                <div className="bg-black block my-5 w-16 h-1"></div>
                <form className="pt-5 w-full" onSubmit={handleSubmit(FormSubmit)}>
                    <div className='relative mb-3'>
                        <input
                            style={{ backgroundColor: '#ededed' }}
                            type='text'
                            className='w-full border px-5 py-4'
                            placeholder='Email'
                            {...register("email", {
                                required: 'Bạn chưa nhập email!',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Bạn nhập sai cú pháp email"
                                }
                            })}
                        />
                    </div>
                    {errors.email && (
                        <label className='text-red-500 mb-2'>{errors.email.message}</label>
                    )}
                    <div className='relative mb-3'>
                        <input
                            style={{ backgroundColor: '#ededed' }}
                            type='password'
                            className='w-full border px-5 py-4'
                            placeholder='Mật khẩu'
                            {...register("password", {
                                required: 'Bạn chưa nhập mật khẩu!',
                                minLength: {
                                    value: 8,
                                    message: 'Mật khẩu ít nhất phải 8 ký tự!'
                                },
                            })}
                        />
                    </div>
                    {errors.password && (
                        <label className='text-red-500 mb-2'>{errors.password.message}</label>
                    )}
                    <div className='relative mb-3'>
                        <input
                            style={{ backgroundColor: '#ededed' }}
                            type='password'
                            className='w-full border px-5 py-4'
                            placeholder='Xác thực mật khẩu'
                            {...register("confilmPassword", {
                                required: 'Bạn chưa xác thực mật khẩu!',
                            })}
                        />
                    </div>
                    {errors.confilmPassword && (
                        <label className='text-red-500 mb-2'>{errors.confilmPassword.message}</label>
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
                    <div className="flex flex-col justify-center items-center mb-3">
                        <button
                            style={{ backgroundColor: 'var(--shop-color-main)' }}
                            className='uppercase px-7 py-2.5 text-white mx-3'
                        >Đăng ký</button>
                        <Link className='text-center mt-4 text-xl' href={'/'}>Quay lại trang chủ</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
