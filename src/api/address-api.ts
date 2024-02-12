import { toast } from "react-toastify";
import axiosClient from "./axios-client";

export const addressAPI = {
    get() {
        return axiosClient.get(`/addresses`)
    },
    post(payload: IAddress) {
        return axiosClient.post(`/addresses`, payload).then(() => {
            toast.success(`Create address success`);
        }).catch((error) => {
            toast.error(`${error.response.data.message}`)
        });
    },
    put(id: string, payload: IAddress) {
        return axiosClient.put(`/addresses/${id}`, payload).then(() => {
            toast.success(`Update address success`);
        }).catch((error) => {
            toast.error(`${error.response.data.message}`)
        });
    },
    delete(id: string) {
        return axiosClient.delete(`/addresses/${id}`).then(() => {
            toast.success(`Delete address success`);
          }).catch((error) => {
            toast.error(`${error.response.data.message}`)
          });
    }
}