import { Metadata } from "next";
import Login from "./login";

export interface ILoginPageProps {
}

export const metadata: Metadata = {
    title: 'Đăng nhập - Haravan Store Clone',
    description: 'Đăng nhập tài khoản Haravan Store',
}

export default function LoginPage(props: ILoginPageProps) {
    return(
        <Login />
    )
}
