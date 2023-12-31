import axiosClient from "./axios-client";

export const addressAPI = {
    get(){
        return axiosClient.get(`/addresses`)
    },
    post(payload: IAddress){
        return axiosClient.post(`/addresses`, payload)
    },
    put(id: string, payload: IAddress){
        return axiosClient.put(`/addresses/${id}`, payload)
    },
    delete(id: string){
        return axiosClient.delete(`/addresses/${id}`)
    }
}