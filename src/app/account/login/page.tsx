'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authAPI } from "@/api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks";

export interface ILoginPageProps {
}

export default function LoginPage(props: ILoginPageProps) {

    const {login} = useAuth();
    const router = useRouter()
    const form = useForm<ILoginForm>();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const FormSubmit = async (data: ILoginForm) => {
        try{
            await login(data);
            router.push('/account')
        }catch(e){
            console.log('Failed to login: ',e);
        }
    }

    return (
        <div className='container flex justify-center'>
            <div style={{ maxWidth: 620 }} className="bg-white w-full mt-9 flex flex-col items-center pt-6 pb-7 px-7">
                <h1 className="w-full block text-center relative text-2xl font-bold">Đăng nhập</h1>
                <div className="bg-black block my-5 w-16 h-1"></div>
                <form className="pt-5 w-full" onSubmit={handleSubmit(FormSubmit)}>
                    <div className='relative mb-3'>
                        <input
                            style={{backgroundColor: '#ededed'}}
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
                            style={{backgroundColor: '#ededed'}}
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
                    <div className="flex justify-center items-center mb-3">
                        <button
                            style={{ backgroundColor: '#0c5edb' }}
                            className='uppercase px-7 py-2.5 text-white mx-3'
                        >Đăng nhập</button>
                        <p className='text-center text-xs mx-3 text-sm font-medium'>
                            <Link
                                href='#'
                                style={{ color: '#2962ff' }}
                                target='_blank'
                                rel="noopener noreferrer"
                            >  Quên mật khẩu? </Link>
                            <br/>
                            hoặc
                            <Link
                                href='#'
                                style={{ color: '#2962ff' }}
                                target='_blank'
                                rel="noopener noreferrer"
                            >  Đăng ký </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
