import { ILoginForm } from "@/models/auth";
import axiosClient from "./axios-client";

export const authAPI = {
    login(payload: ILoginForm){
        return axiosClient.post('/users/login', payload)
    },
    auth(){
        return axiosClient.get('/users/auth')
    },
    logout(){
        return axiosClient.get('/users/logout')
    },
}