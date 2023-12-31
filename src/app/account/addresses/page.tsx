import Address from "./address";
import AccountSidebar from "../account-sidebar";
import AddressForm from "./address-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Địa chỉ - Haravan Store Clone',
    description: 'This is shop clone from Haravan Store',
}

export default function Addresses() {
    return (
        <div className='container flex flex-col items-center'>
            <div className="w-full mt-5 flex flex-col items-center pt-6 pb-7 px-7">
                <h1 className="w-full block text-center relative text-2xl font-bold">Thông tin địa chỉ</h1>
                <div className="bg-black block my-5 w-16 h-1"></div>
                <div className='lg:flex gap-x-7 w-full'>
                    <div className='lg:w-1/4 bg-white px-4 py-5 h-max mb-4'>
                        <AccountSidebar />
                    </div>
                    <div className="lg:w-3/4">
                        <div className="lg:flex gap-x-8">
                            <div className="lg:w-1/2">
                                <Address />
                            </div>
                            <div className="lg:w-1/2">
                                <AddressForm feature="create"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
