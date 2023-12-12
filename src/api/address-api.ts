import axiosClient from "./axios-client";

export const addressAPI = {
    get(userId: string){
        return axiosClient.get(`/addresses/${userId}`)
    },
    post(payload: IAddress){
        return axiosClient.post(`/addresses`, payload)
    },
    delete(id: string){
        return axiosClient.delete(`/addresses/${id}`)
    }
}