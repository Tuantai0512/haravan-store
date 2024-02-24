'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'
import { VNProvince, USProvince, TLProvince } from "./province";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { addressAPI } from "@/api";
import { mutate } from "swr"

export interface IAddressFormProps {
  feature: 'create' | 'update',
  address?: IAddress,
  setIsUpdate?: () => void,
}

export default function AddressForm(props: IAddressFormProps) {

  const { feature, address, setIsUpdate } = props;
  const [showForm, setShowForm] = useState<boolean>(false)
  const [country, setCountry] = useState(address?.country || '');
  const form = useForm<IAddress>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const FormSubmit = async (data: IAddress) => {
    if (props.feature == 'create') {
      await addressAPI.post(data);
      setShowForm(false)
    }
    if (feature == 'update') {
      if (address) {
        await addressAPI.put(address?.id, data)
      }
      if (setIsUpdate) {
        setIsUpdate();
      }
    }
    mutate(`/addresses`)
  }

  return (
    <>
      {feature == 'create' &&
        <h3
          style={{ backgroundColor: '#323232' }}
          className="flex py-3.5 px-2.5 text-white uppercase justify-center font-semibold cursor-pointer"
          onClick={() => setShowForm(!showForm)}
        >
          Nhập địa chỉ mới
        </h3>
      }
      {showForm &&
        <div style={{ backgroundColor: '#fbfbfb' }} className="pt-1 pb-4 px-4">
          <form onSubmit={handleSubmit(FormSubmit)}>
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Họ"
                className="h-9 w-full px-4 py-1"
                {...register("lastName", {
                  required: 'Bạn chưa nhập Họ',
                })}
              />
            </div>
            {errors.lastName && (
              <label className='text-red-500 mb-2'>{errors.lastName.message}</label>
            )}
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Tên"
                className="h-9 w-full px-4 py-1"
                {...register("firstName", {
                  required: 'Bạn chưa nhập Tên',
                })}
              />
            </div>
            {errors.firstName && (
              <label className='text-red-500 mb-2'>{errors.firstName.message}</label>
            )}
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Công ty"
                className="h-9 w-full px-4 py-1"
                {...register("company")}
              />
            </div>
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Địa chỉ 1"
                className="h-9 w-full px-4 py-1"
                {...register("address1")}
              />
            </div>
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Địa chỉ 2"
                className="h-9 w-full px-4 py-1"
                {...register("address2")}
              />
            </div>
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <select
                value={country}
                {...register("country", {
                  validate: (value: string) => value === 'Vietnam' || value === 'United States' || value === 'Thailand'
                })}
                className="h-9 w-full px-3"
                onChange={e => setCountry(e.target.value)}
              >
                <option value="">- Please Select --</option>
                <option value="Vietnam">Vietnam</option>
                <option value="United States">United States</option>
                <option value="Thailand">Thailand</option>
              </select>
            </div>
            {errors.country && (
              <label className='text-red-500 mb-2'>{errors.country.message}</label>
            )}
            {country !== '' &&
              <div className="my-4 relative flex">
                <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
                </div>
                <select
                  className="h-9 w-full px-3"
                  {...register("province")}
                >
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
              <input
                type="text"
                placeholder="Số điện thoại"
                className="h-9 w-full px-4 py-1"
                {...register("phoneNumber")}
              />
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                id="default"
                {...register("default", {})}
              />
              <label htmlFor="default"> Đặt làm địa chỉ mặc định.</label>
            </div>
            <div className="flex items-center">
              <input
                type="submit"
                style={{ backgroundColor: '#323232' }}
                className='uppercase px-6 py-2.5 text-white mr-3'
                value={'Thêm mới'}
              />
              hoặc
              <Link href='#' className="ml-1 text-sky-500" onClick={() => setShowForm(!showForm)}> Hủy</Link>
            </div>
          </form>
        </div>
      }
      {feature == 'update' &&
        <div style={{ backgroundColor: '#fbfbfb' }} className="pt-1 pb-4 px-4">
          <form onSubmit={handleSubmit(FormSubmit)}>
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Họ"
                className="h-9 w-full px-4 py-1"
                defaultValue={address?.lastName}
                {...register("lastName", {
                  required: 'Bạn chưa nhập Họ',
                })}
              />
            </div>
            {errors.lastName && (
              <label className='text-red-500 mb-2'>{errors.lastName.message}</label>
            )}
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Tên"
                className="h-9 w-full px-4 py-1"
                defaultValue={address?.firstName}
                {...register("firstName", {
                  required: 'Bạn chưa nhập Tên',
                })}
              />
            </div>
            {errors.firstName && (
              <label className='text-red-500 mb-2'>{errors.firstName.message}</label>
            )}
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Công ty"
                className="h-9 w-full px-4 py-1"
                defaultValue={address?.company || ''}
                {...register("company")}
              />
            </div>
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Địa chỉ 1"
                className="h-9 w-full px-4 py-1"
                defaultValue={address?.address1 || ''}
                {...register("address1")}
              />
            </div>
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <input
                type="text"
                placeholder="Địa chỉ 2"
                className="h-9 w-full px-4 py-1"
                defaultValue={address?.address2 || ''}
                {...register("address2")}
              />
            </div>
            <div className="my-4 relative flex">
              <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
              </div>
              <select
                value={country}
                {...register("country", {
                  validate: (value: string) => value === 'Vietnam' || value === 'United States' || value === 'Thailand'
                })}
                className="h-9 w-full px-3"
                onChange={e => setCountry(e.target.value)}
              >
                <option value="">- Please Select --</option>
                <option value="Vietnam">Vietnam</option>
                <option value="United States">United States</option>
                <option value="Thailand">Thailand</option>
              </select>
            </div>
            {errors.country && (
              <label className='text-red-500 mb-2'>{errors.country.message}</label>
            )}
            {country !== '' &&
              <div className="my-4 relative flex">
                <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
                </div>
                <select
                  className="h-9 w-full px-3"
                  defaultValue={address?.province}
                  {...register("province")}
                >
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
              <input
                type="text"
                placeholder="Số điện thoại"
                className="h-9 w-full px-4 py-1"
                defaultValue={address?.phoneNumber || ''}
                {...register("phoneNumber")}
              />
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                id="default"
                {...register("default", {})}
              />
              <label htmlFor="default"> Đặt làm địa chỉ mặc định.</label>
            </div>
            <div className="flex items-center">
              <input
                type="submit"
                style={{ backgroundColor: '#323232' }}
                className='uppercase px-6 py-2.5 text-white mr-3'
                value={'Cập nhật'}
              />
              hoặc
              <Link href='#' className="ml-1 text-sky-500" onClick={() => {
                if (setIsUpdate) {
                  setIsUpdate();
                }
              }}> Hủy</Link>
            </div>
          </form>
        </div>
      }
    </>
  );
}
