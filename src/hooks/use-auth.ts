import { authAPI } from '@/api';
import { fetcher } from '@/utils/swr/fetcher';
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal';

export function useAuth(options?: Partial<PublicConfiguration>) {
    const { data: profile, error, isLoading, mutate } = useSWR('/users/auth', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
        dedupingInterval: 24 * 60 * 60 * 1000 //1 day
    })

    async function login(data: ILoginForm) {
        await authAPI.login(data);

        await mutate()
    }

    async function logout() {
        await authAPI.logout()

        mutate({}, false)
    }

    return{
        profile, error, login, logout, isLoading
    }
}