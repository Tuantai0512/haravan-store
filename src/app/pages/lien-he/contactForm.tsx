'use client'
import { useForm } from "react-hook-form";

export interface IContactForm {
    username: string,
    email: string,
    phoneNumber: string,
    content: string
}

export default function ContactForm() {

    const form = useForm<IContactForm>();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const FormSubmit = (data: IContactForm) => {
        console.log('Data submit: ', data)
    }

    return (
        <form onSubmit={handleSubmit(FormSubmit)}>
            <div className="mb-3">
                <input
                    type="text"
                    className='w-full py-2 px-5 mb-2'
                    placeholder='Tên của bạn'
                    id='username'
                    {...register("username", {
                        required: 'Bạn chưa nhập tên!'
                    })}
                />
                <label className="text-red-500">{errors.username?.message}</label>
            </div>
            <div className='flex mb-3 gap-4'>
                <div className="w-1/2">
                    <input
                        type="text"
                        className='w-full py-2 px-5 mb-2'
                        placeholder='Email của bạn'
                        id='email'
                        {...register("email", {
                            required: 'Bạn chưa nhập email!',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Bạn nhập sai cú pháp email"
                            }
                        })}
                    />
                    <label className="text-red-500">{errors.email?.message}</label>
                </div>
                <div className="w-1/2">
                    <input
                        type="text"
                        className='w-full py-2 px-5 mb-2'
                        placeholder='Số điện thoại của bạn'
                        id="phone-number"
                        {...register("phoneNumber", {
                            required: 'Bạn chưa nhập số điện thoại!',
                            pattern: {
                                value: /^\d{10}$/i, 
                                message: 'Bạn nhập sai cú pháp số điện thoại',
                            },
                        })}
                    />
                    <label className="text-red-500">{errors.phoneNumber?.message}</label>
                </div>
            </div>
            <div className="mb-2">
                <textarea
                    id=""
                    cols={30}
                    rows={5}
                    placeholder='Nội dung'
                    className='w-full py-2 px-5 resize-none mb-2'
                    {...register("content", {
                        required: 'Bạn hãy nhập nội dung trước khi gửi!'
                    })}
                />
                <label className="text-red-500 mb-4">{errors.content?.message}</label>
            </div>
            <div>
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
                className='px-7 py-3 text-white uppercase my-4'
                style={{ backgroundColor: '#0c5edb' }}
            >
                Gửi cho chúng tôi
            </button>
        </form>
    );
}
