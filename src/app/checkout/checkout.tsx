'use client'
import { fetcher, formatVnd } from '@/utils';
import Cash from '../../../public/img/cod.svg'
import Bank from '../../../public/img/cash.svg';
import VnPay from '../../../public/img/vnpay_new.svg'
import Empty from '../../../public/img/empty.jpg';
import InternetBanking from '../../../public/img/atm_visa_master_jcb.svg'
import Image from 'next/image';
import { Breadcrumb, Radio, RadioChangeEvent, Space } from 'antd';
import Link from 'next/link';
import { VNProvince, USProvince, TLProvince } from "../account/addresses/province";
import * as React from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import axiosClient from '@/api/axios-client';
import { shippingMethod } from './shipping';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { changeCartToken } from '@/lib/features/cart/cartSlice';

export interface ICheckOutProps {
  cartId: ResponseCookie | undefined
}

export default function CheckOut(props: ICheckOutProps) {

  const { cartId } = props;
  const cartRedux = useAppSelector((state: RootState) => state.cart.cartToken);
  console.log(cartRedux);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [cart, setCart] = useState<ICart | null>(null);
  useEffect(() => {
    fetch(`/api/cart/${cartRedux}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data)
      })
  }, []);
  const cartItem = cart?.items;
  let total = 0;

  if (cartItem)
    for (let i = 0; i < cartItem.length; i++) {
      const item = cartItem[i];
      const quantity = item.quantity;
      const price = item.product.discount;

      total += quantity * price;
    }
  const { data, error, mutate } = useSWR<IAddressData>(`/addresses`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false
  });
  const [country, setCountry] = useState('Vietnam');
  const [shipping, setShipping] = useState('Giao hàng tận nơi');
  const [payment, setPayment] = useState('Thanh toán khi giao hàng')
  const defaultAddress = data?.addresses?.find((address: IAddress) => address.default);
  useEffect(() => {
    setCountry(defaultAddress?.country || 'Vietnam');
  }, [defaultAddress?.country])
  const form = useForm<ICart>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const FormSubmit = async (data: ICart) => {
    if (cartRedux) {
      await axiosClient.put(`/api/cart/${cartRedux}`, {
        ...data, ...{
          shipping,
          payment,
          total: total + shippingMethod(shipping),
          status: 'approved'
        }
      }).then(() => {
        toast.success('Thanh toán thành công!');
        dispatch(changeCartToken(''));
      }).then(() => {
        router.push('/')
      }).catch((error) => {
        toast.error(`Thanh toán thất bại: ${error.response.data.message}`);
      });
    }
  }
  const shippingChange = (e: RadioChangeEvent) => {
    setShipping(e.target.value);
  };
  const paymentChange = (e: RadioChangeEvent) => {
    setPayment(e.target.value);
  };
  return (
    <>
      <div className='flex'>
        <div className='w-3/5 pt-10 pr-16 border-r-2'>
          <div>
            <h1 className='text-3xl'>Haravan Store</h1>
            <Breadcrumb
              items={[
                {
                  title: <Link
                    href={`/cart`}
                    className='text-xs'
                  >
                    Giỏ hàng
                  </Link>,
                },
                {
                  title: <p className='text-xs mt-1'>Thông tin giao hàng</p>,
                },
              ]}
              className='!py-2'
            />
            <h2 className='text-xl font-semibold my-4'>Thông tin giao hàng</h2>
            <form action="" onSubmit={handleSubmit(FormSubmit)}>
              <div className='relative mb-3'>
                <input
                  type='text'
                  className='form-input w-full border pt-3.5 px-2.5 pb-1 rounded-md'
                  placeholder='Họ và tên'
                  {...register("fullName", {
                    required: 'Bạn chưa nhập Họ và tên!',
                  })}
                />
                <label
                  className='form-label absolute top-0 leading-10 left-2.5 pointer-events-none origin-left'>Họ và tên</label>
              </div>
              {errors.fullName && (
                <label className='text-red-500 mb-2'>{errors.fullName.message}</label>
              )}
              <div className='flex gap-x-4'>
                <div className='relative mb-3 w-2/3'>
                  <input
                    type='text'
                    className='form-input w-full border pt-3.5 px-2.5 pb-1 rounded-md'
                    placeholder='Email'
                    {...register("email", {
                      required: 'Bạn chưa nhập Email!',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Bạn nhập sai cú pháp email"
                      }
                    })}
                  />
                  <label
                    className='form-label absolute top-0 leading-10 left-2.5 pointer-events-none origin-left'>Email</label>
                </div>
                <div className='relative mb-3 w-1/3'>
                  <input
                    type='text'
                    className='form-input w-full border pt-3.5 px-2.5 pb-1 rounded-md'
                    placeholder='Số điện thoại'
                    {...register("phoneNumber", {
                      required: 'Bạn chưa nhập số điện thoại!',
                    })}
                  />
                  <label
                    className='form-label absolute top-0 leading-10 left-2.5 pointer-events-none origin-left'>Số điện thoại</label>
                </div>

              </div>
              {errors.email && (
                <label className='text-red-500 mb-2'>{errors.email.message}</label>
              )}
              {errors.phoneNumber && (
                <label className='text-red-500 mb-2'>{errors.phoneNumber.message}</label>
              )}
              <div className='relative mb-3'>
                <input
                  type='text'
                  className='form-input w-full border pt-3.5 px-2.5 pb-1 rounded-md'
                  placeholder='Địa chỉ'
                  {...register("address", {
                    required: 'Bạn chưa nhập Địa chỉ!',
                  })}
                />
                <label
                  className='form-label absolute top-0 leading-10 left-2.5 pointer-events-none origin-left'>Địa chỉ</label>
              </div>
              {errors.address && (
                <label className='text-red-500 mb-2'>{errors.address.message}</label>
              )}
              <div className='flex gap-x-4'>
                <div className="relative flex w-1/2">
                  <select
                    value={country}
                    {...register("country")}
                    className="h-11 w-full px-1.5 pt-2"
                    onChange={e => setCountry(e.target.value)}
                  >
                    <option value="Vietnam">Vietnam</option>
                    <option value="United States">United States</option>
                    <option value="Thailand">Thailand</option>
                  </select>
                  <label
                    className='cart form-label absolute leading-10 pointer-events-none origin-left'>Quốc gia</label>
                </div>
                <div className="relative flex w-1/2">
                  <select
                    className="h-11 w-full px-1.5 pt-2"
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
                  <label
                    className='cart form-label absolute leading-10 pointer-events-none origin-left'>Tỉnh / thành</label>
                </div>
              </div>
              <h2 className='text-xl font-semibold my-4'>Phương thức vận chuyển</h2>
              <Radio.Group onChange={shippingChange} value={shipping} className='w-full'>
                <Space direction="vertical" className='w-full !gap-y-0'>
                  <Radio
                    value={'Giao hàng tận nơi'}
                    className='border border-2 w-full h-14 !px-4 !items-center rounded-t-md relative'
                  ><span>Giao hàng tận nơi</span> <span className='absolute right-4'>{formatVnd(40000)}</span></Radio>
                  <Radio
                    value={'Giao hàng cấp tốc'}
                    className='border border-2 w-full h-14 !px-4 !items-center rounded-b-md border-t-0 relative'
                  ><span>Giao hàng cấp tốc</span> <span className='absolute right-4'>{formatVnd(80000)}</span></Radio>
                </Space>
              </Radio.Group>
              <h2 className='text-xl font-semibold my-4'>Phương thức thanh toán</h2>
              <Radio.Group onChange={paymentChange} value={payment} className='w-full payment'>
                <Space direction="vertical" className='w-full !gap-y-0'>
                  <Radio
                    value={'Thanh toán khi giao hàng'}
                    className='payment-method border border-2 w-full h-20 !px-4 !items-center !flex rounded-t-md'
                  >
                    <Image
                      src={Cash}
                      alt='payment cash'
                      width={40}
                      height={40}
                    />
                    <span>Thanh toán khi giao hàng (COD)</span>
                  </Radio>
                  {
                    payment == 'Thanh toán khi giao hàng' &&
                    <Radio
                      className='payment-method border border-2 w-full h-max !px-4 !py-8 !items-center !flex border-t-0'
                      disabled={true}
                    >
                      <div className="text-center">
                        <strong>Lưu ý</strong>: Chỉ nhận giao hàng COD khi giá trị đơn hàng &lt;= 2.000.000 Đ.<br />
                        Với các đơn hàng có giá trị &gt;2.000.000 Đ, vui lòng thanh toán trực tiếp qua Cổng thanh toán VNPay hoặc chuyển khoản qua ngân hàng.<br />

                        Cước phí SẢN PHẨM BAO BÌ/HỘP GIẤY trên Website có tính chất tham khảo.
                        Sẽ được báo chính xác khi bên Haravan xác nhận thông tin đơn hàng.<br />
                        Liên hệ tư vấn: <b>0981.xxx.x61</b>
                      </div>
                    </Radio>
                  }
                  <Radio
                    value={'Chuyển khoản qua ngân hàng'}
                    className='payment-method border border-2 w-full h-20 !px-4 !items-center border-t-0'
                  >
                    <Image
                      src={Bank}
                      alt='payment bank'
                      width={40}
                      height={40}
                    />
                    <span>Chuyển khoản qua ngân hàng</span>
                  </Radio>
                  {
                    payment == 'Chuyển khoản qua ngân hàng' &&
                    <Radio
                      className='payment-method border border-2 w-full h-max !px-4 !py-8 !items-center !flex border-t-0'
                      disabled={true}
                    >
                      <div className="text-center">
                        CONG TY CO PHAN CONG NGHE HARAVAN<br />
                        Số tài khoản:  <b>053xxxxxxxx54</b> - Ngân hàng TMCP Ngoại Thương Việt Nam<br />
                        Vietcombank - Chi Nhánh ĐÔNG SÀI GÒN<br />
                        Nội dung chuyển khoản: HRV STORE + Mã đơn hàng (Mã đơn hàng được cung cấp ngay sau khi khách bấm nút Hoàn tất đặt hàng)<br />

                        Cước phí SẢN PHẨM BAO BÌ/HỘP GIẤY trên Website có tính chất tham khảo.<br />
                        Sẽ được báo chính xác khi bên Haravan xác nhận thông tin đơn hàng.<br />
                        Liên hệ tư vấn: <b>0981.xxx.x61</b>
                      </div>
                    </Radio>
                  }
                  <Radio
                    value={'Thanh toán online qua Internet Banking'}
                    className='payment-method border border-2 w-full h-20 !px-4 !items-center rounded-b-md border-t-0'
                  >
                    <Image
                      src={VnPay}
                      alt='payment VnPay'
                      width={40}
                      height={40}
                    />
                    <div>
                      Thanh toán online qua Internet Banking (Visa, Mastercard, ATM,...)
                      <Image
                        src={InternetBanking}
                        alt='payment VnPay'
                      />
                    </div>
                  </Radio>
                </Space>
              </Radio.Group>
              <div className='mt-4 w-full flex items-center justify-between'>
                <Link href={'/cart'} className='!text-black'>Giỏ hàng</Link>
                <input
                  type="submit"
                  style={{ backgroundColor: 'var(--shop-color-button)' }}
                  className='px-6 py-5 text-white'
                  value={'Hoàn tất đơn hàng'}
                />
              </div>
            </form>
          </div>
        </div>
        <div className='w-2/5 pt-10 pl-11'>
          <div className='pb-4 border-b-2'>
            {cart?.items.map((item) => {
              const avatar = item.product.galery.find(item => item.avatar === true);
              const avatarUrl = avatar?.url;
              return (
                <div key={item.id} className='my-4 flex items-center justify-between'>
                  <div className='flex'>
                    <div className='relative'>
                      <Image
                        src={avatarUrl || Empty}
                        alt={item.product.title}
                        width={65}
                        height={65}
                        className='rounded-md'
                      />
                      <div
                        style={{ fontSize: 12, lineHeight: '20px', top: '-7px', left: '53px' }}
                        className='w-5 h-5 absolute bg-slate-400 text-center rounded-full text-white'
                      >
                        {item.quantity}
                      </div>
                    </div>
                    <div className='px-4 w-60'>
                      {item.product.title}
                    </div>
                  </div>
                  <div>
                    {formatVnd(item.product.discount)}
                  </div>
                </div>
              )
            })}
          </div>
          <div className='py-4 border-b-2'>
            <div className='flex items-center justify-between mb-2'>
              <span>Tạm tính</span>
              <span>{formatVnd(total)}</span>
            </div>
            <div className='flex items-center justify-between'>
              <span>Phí vận chuyển</span>
              <span>{formatVnd(shippingMethod(shipping))}</span>
            </div>
          </div>
          <div className='py-4'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-base'>Tổng cộng</span>
              <span className='text-2xl'>{formatVnd(total + shippingMethod(shipping))}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
