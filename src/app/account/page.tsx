'use client'
import { authAPI } from '@/api';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';

export interface IAccountPageProps {

}

export default function AccountPage(props: IAccountPageProps) {

    const router = useRouter();

    useEffect(() => {
        (async () => {
            try {
                const result = await authAPI.auth();
                console.log(result);
            } catch (e) {
                console.log(e);
                router.push('/account/login');
            }
        })()
    }, [])

    return (
        <div>
            Account page
        </div>
    );
}
