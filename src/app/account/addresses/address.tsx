'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/hooks";
import useSWR from 'swr'
import { fetcher } from "@/utils/swr/fetcher";
import { addressAPI } from "@/api";

export default function Address() {

    const { profile } = useAuth();
    const { data, error, isLoading, mutate } = useSWR<IAddressData>(`/addresses/${profile?.id}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    if (isLoading) return <div>loading...</div>

    const removeAddress = async (id: string) => {
        await addressAPI.delete(id);
        mutate();
    }

    return (
        <>
            {data && data.addresses &&
                data.addresses.sort((addressA, addressB) => {
                    if (addressA.default === addressB.default) {
                        return 0;
                    }
                    return addressA.default ? -1 : 1;
                })
                &&
                data.addresses.map((item: any) => {
                    return (
                        <div className="mb-4" key={item.id}>
                            <h3 style={{ backgroundColor: '#d9edf7' }} className="flex py-3.5 px-2.5 justify-between">
                                <div>
                                    <strong>{`${item.lastName} ${item.firstName}`} </strong>
                                    {item.default ? <span>(Địa chỉ mặc định)</span> : ''}
                                </div>
                                <div>
                                    <button className="mx-2" ><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button
                                        className="mx-2"
                                        onClick={() => removeAddress(item.id)}
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                            </h3>
                            <div style={{ backgroundColor: '#fbfbfb' }} className="p-4">
                                <h3><strong>{`${item.lastName} ${item.firstName}`}</strong></h3>
                                <br />
                                <h3><strong>Công ty: </strong>{item.company}</h3>
                                <h3><strong>Địa chỉ: </strong></h3>
                                <br />
                                <h3><strong>Số điện thoại: </strong></h3>
                            </div>
                        </div>
                    )
                })}
        </>
    );
}
