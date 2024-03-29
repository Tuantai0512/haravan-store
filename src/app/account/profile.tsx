'use client'
import { useAuth } from "@/hooks";
import { fetcher } from "@/utils/swr/fetcher";
import { Skeleton } from "antd";
import Link from "next/link";
import useSWR from "swr";

export default function Profile() {
  const { profile, isLoading } = useAuth();
  const { data, error, isLoading: profileLoading } = useSWR<IAddressData>(`/addresses`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false
  });
  const defaultAddress = data?.addresses?.find((address: IAddress) => address.default);
  const fullName = `${defaultAddress?.lastName} ${defaultAddress?.firstName}`;

  return (
    <div className="bg-white px-4 py-2">
      <h3 className="uppercase pb-2 mb-1 text-base font-bold">Thông tin tài khoản</h3>
      <h2 className="border-t pt-3 mb-1.5 text-base font-medium">
        { fullName !== 'undefined undefined' ? fullName : profile.email  }</h2>
      {isLoading ? <Skeleton /> : <p>{profile.email}</p>}
      <br/>
      
      {defaultAddress && 
        <div>
          {defaultAddress.address1}
          <br/>
          {defaultAddress.address2}
          <br/>
          {defaultAddress.country}
          <br/>
          {defaultAddress.phoneNumber}
        </div>
      }
      <Link style={{ color: 'var(--shop-color-main)' }} href={'/account/addresses'} className="block mb-4 mt-1 underline">Xem địa chỉ</Link>
    </div>
  );
}
