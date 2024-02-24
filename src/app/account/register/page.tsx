import { Metadata } from "next";
import Register from "./register";

export interface ILoginPageProps {
}

export const metadata: Metadata = {
    title: 'Đăng ký - Haravan Store Clone',
    description: 'Đăng ký tài khoản Haravan Store',
}

export default function RegisterPage(props: ILoginPageProps) {
    return(
        <Register />
    )
}
