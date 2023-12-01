'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { addressAPI } from "@/api";

export interface IAppProps {
}

export default function Address(props: IAppProps) {

    const [address, setAddress] = useState<any>([])
    useEffect(() => {
        (async () => {
            const res = await addressAPI.get('161d6c6c-a7ee-4dd6-bb18-c17963f491a8');
            setAddress(res);
        })()
    }, [])

    console.log(address)

    return (
        <>
            {address && address.addresses && address.addresses.map((item: any) => {
                return (
                    <div className="mb-4">
                        <h3 style={{ backgroundColor: '#d9edf7' }} className="flex py-3.5 px-2.5 justify-between">
                            <div>
                                <strong>{`${item.lastName} ${item.firstName}`} </strong>
                                {item.default ? <span>(Địa chỉ mặc định)</span> : ''}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPenToSquare} className="px-2" />
                                <FontAwesomeIcon icon={faXmark} className="px-2" />
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
