import Link from "next/link";

export interface IProfileProps {
    profile: null | {
        id: string,
        email: string
    }
}

export default function Profile (props: IProfileProps) {
  return (
    <div className="bg-white px-4 py-2">
      <h3 className="uppercase pb-2 mb-1 text-base font-bold">Thông tin tài khoản</h3>
      <h2 className="border-t pt-3 mb-1.5 text-base font-medium">Unknown</h2>
      <p>{props.profile?.email}</p>
      <Link style={{color: '#0c5edb'}} href={'#'} className="block mb-4 mt-1 underline">Xem địa chỉ</Link>
    </div>
  );
}
