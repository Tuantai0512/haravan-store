'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/hooks";
import useSWR from 'swr'
import { fetcher } from "@/utils/swr/fetcher";
import { addressAPI } from "@/api";
import { useState } from "react";
import AddressForm from "./address-form";
import { Skeleton } from "antd";

export default function Address() {

    const [isUpdate, setIsUpdate] = useState<{ [key: string]: boolean }>({});
    const { profile } = useAuth();
    const { data, error, isLoading, mutate } = useSWR<IAddressData>(`/addresses`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false
    })
    if (isLoading) return <div><Skeleton /></div>

    const removeAddress = async (id: string) => {
        await addressAPI.delete(id);
        mutate();
    }

    return (
        <>
            {data && data.addresses &&
                //set default value to first
                data.addresses.sort((addressA, addressB) => {
                    if (addressA.default === addressB.default) {
                        return 0;
                    }
                    return addressA.default ? -1 : 1;
                })
                &&
                data.addresses.map((item: IAddress) => {
                    const showUpdate = () => {
                        setIsUpdate((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                    return (
                        <div className="mb-4" key={item.id}>
                            <h3 style={{ backgroundColor: '#d9edf7' }} className="flex py-3.5 px-2.5 justify-between">
                                <div>
                                    <strong>{`${item.lastName} ${item.firstName}`} </strong>
                                    {item.default ? <span>(Địa chỉ mặc định)</span> : ''}
                                </div>
                                <div>
                                    <button
                                        className="mx-2"
                                        onClick={() => showUpdate()}
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button
                                        className="mx-2"
                                        onClick={() => removeAddress(item.id)}
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                            </h3>
                            {isUpdate[item.id] ?
                                <AddressForm feature="update" address={item} setIsUpdate={showUpdate}/>
                                :
                                <div style={{ backgroundColor: '#fbfbfb' }} className="p-4">
                                    <h3><strong>{`${item.lastName} ${item.firstName}`}</strong></h3>
                                    <br />
                                    <h3><strong className="mr-2">Công ty: </strong>{item.company}</h3>
                                    <h3 className="flex"><strong>Địa chỉ: </strong>
                                        <div className="ml-4">
                                            {item.address1}
                                            <br />
                                            {item.address2}
                                            <br />
                                            {`${item.province}, ${item.country}`}
                                        </div>
                                    </h3>
                                    <br />
                                    <h3><strong>Số điện thoại: </strong>{item.phoneNumber}</h3>
                                </div>
                            }
                        </div>
                    )
                })}
        </>
    );
}
