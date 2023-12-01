import axiosClient from "./axios-client";

export const addressAPI = {
    get(userId: string){
        return axiosClient.get(`/addresses/${userId}`)
    },
}