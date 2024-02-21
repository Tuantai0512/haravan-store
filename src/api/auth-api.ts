import { toast } from "react-toastify";
import axiosClient from "./axios-client";

export const authAPI = {
    login(payload: ILoginForm){
        return axiosClient.post('/users/login', payload).catch((error) => {
            toast.error(`${error.response.data.message}`)
        });
    },
    auth(){
        return axiosClient.get('/users/auth')
    },
    logout(){
        return axiosClient.get('/users/logout')
    },
}