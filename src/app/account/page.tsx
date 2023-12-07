'use client'
import Profile from './profile';
import AccountSidebar from './account-sidebar';


export default function AccountPage() {



    return (
        <div className='container flex flex-col items-center'>
            <div className="w-full mt-5 flex flex-col items-center pt-6 pb-7 px-7">
                <h1 className="w-full block text-center relative text-2xl font-bold">Tài khoản của bạn</h1>
                <div className="bg-black block my-5 w-16 h-1"></div>
                <div className='flex gap-x-7 w-full'>
                    <div className='w-1/4 bg-white px-4 py-5 h-max'>
                        <AccountSidebar />
                    </div>
                    <div className="w-3/4">
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    );
}
