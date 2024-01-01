import Profile from './profile';
import AccountSidebar from './account-sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tài khoản - Haravan Store Clone',
    description: 'This is shop clone from Haravan Store',
  }

export default function AccountPage() {

    return (
        <div className='container flex flex-col items-center'>
            <div className="w-full mt-5 flex flex-col items-center pt-6 pb-7 px-7">
                <h1 className="w-full block text-center relative text-2xl font-bold">Tài khoản của bạn</h1>
                <div className="bg-black block my-5 w-16 h-1"></div>
                <div className='lg:flex gap-x-7 w-full'>
                    <div className='lg:w-1/4 bg-white px-4 py-5 h-max mb-4'>
                        <AccountSidebar />
                    </div>
                    <div className="lg:w-3/4">
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    );
}
