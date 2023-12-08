'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'
import { VNProvince, USProvince, TLProvince } from "./province";

export default function AddressForm() {

  const [country, setCountry] = useState('');

  return (
    <>
      <h3 style={{ backgroundColor: '#323232' }} className="flex py-3.5 px-2.5 text-white uppercase justify-center font-semibold">
        Nhập địa chỉ mới
      </h3>
      <div style={{ backgroundColor: '#fbfbfb' }} className="pt-1 pb-4 px-4">
        <form>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Họ" className="h-9 w-full px-4 py-1" />
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Tên" className="h-9 w-full px-4 py-1" />
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Công ty" className="h-9 w-full px-4 py-1" />
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Địa chỉ 1" className="h-9 w-full px-4 py-1" />
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Địa chỉ 2" className="h-9 w-full px-4 py-1" />
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <select
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="h-9 w-full px-3">
              <option value="">- Please Select --</option>
              <option value="Vietnam">Vietnam</option>
              <option value="United States">United States</option>
              <option value="Thailand">Thailand</option>
            </select>
          </div>
          { country !== '' &&
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <select
                className="h-9 w-full px-3">
                {country === 'Vietnam' &&
                  VNProvince.map((province: string, index: number) => {
                    return (
                      <option key={index} value={province}>{province}</option>
                    )
                  })
                }
                {country === 'United States' &&
                  USProvince.map((province: string, index: number) => {
                    return (
                      <option key={index} value={province}>{province}</option>
                    )
                  })
                }
                {country === 'Thailand' &&
                  TLProvince.map((province: string, index: number) => {
                    return (
                      <option key={index} value={province}>{province}</option>
                    )
                  })
                }
              </select>
            </div>
          }
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Số điện thoại" className="h-9 w-full px-4 py-1" />
          </div>
        </form>
      </div>
    </>
  );
}
