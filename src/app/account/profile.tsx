'use client'
import { useAuth } from "@/hooks";
import { fetcher } from "@/utils/swr/fetcher";
import Link from "next/link";
import useSWR from "swr";

export default function Profile() {
  const { profile, isLoading } = useAuth();
  const { data, error, isLoading: nameLoading } = useSWR<IAddressData>(`/addresses/${profile?.id}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const defaultAddress = data?.addresses?.find((address: IAddress) => address.default);
  const fullName = `${defaultAddress?.lastName} ${defaultAddress?.firstName}`;

  return (
    <div className="bg-white px-4 py-2">
      <h3 className="uppercase pb-2 mb-1 text-base font-bold">Thông tin tài khoản</h3>
      <h2 className="border-t pt-3 mb-1.5 text-base font-medium">{ nameLoading ? 'Loading...' : fullName }</h2>
      {isLoading ? <p>loading...</p> : <p>{profile?.email}</p>}
      <Link style={{ color: '#0c5edb' }} href={'#'} className="block mb-4 mt-1 underline">Xem địa chỉ</Link>
    </div>
  );
}
