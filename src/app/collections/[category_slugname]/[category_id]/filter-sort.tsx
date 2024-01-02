'use client'
import ProductItem from "@/components/product-item";
import { FilterOutlined } from "@ant-design/icons";
import { Checkbox, Radio, RadioChangeEvent } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";

const checkBoxChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues);
};

const plainOptions = [
  { label: 'Dưới 1.000.000₫', value: 'price_variant:product < 1000000' },
  { label: '1.000.000₫ - 3.000.000₫', value: 'price_variant:product range 1000000_3000000' },
  { label: '3.000.000₫ - 6.000.000₫', value: 'price_variant:product range 3000000_6000000' },
  { label: '6.000.000₫ - 10.000.000₫', value: 'price_variant:product range 6000000_10000000' },
  { label: 'Trên 10.000.000₫', value: 'price_variant:product > 10000000' },
];

export default function FilterSort() {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="py-2">
      <Radio.Group onChange={onChange} value={value} className="!flex justify-between w-full">
        <Radio value={'manual'}>Sản phẩm nổi bật</Radio>
        <Radio value={'price-ascending'}>Giá: Tăng dần</Radio>
        <Radio value={'price-descending'}>Giá: Giảm dần</Radio>
        <Radio value={'title-ascending'}>Tên: A-Z</Radio>
        <Radio value={'title-descending'}>Tên: Z-A</Radio>
        <Radio value={'created-ascending'}>Cũ nhất</Radio>
        <Radio value={'created-descending'}>Mới nhất</Radio>
        <Radio value={'best-selling'}>Bán chạy nhất</Radio>
        <Radio value={'quantity-descending'}>Tồn kho giảm dần</Radio>
      </Radio.Group>
      <br />
      <div className="bg-white rounded-md">
        <div className="w-full border-b pt-2.5 px-4 pb-2">
          <FilterOutlined />
          <span className="uppercase font-semibold px-3">Bộ lọc</span>
        </div>
        <div className="pt-2.5 px-4 pb-2 flex">
          <div className="w-1/12"><span className="font-semibold pr-3 w-1/5">Lọc giá</span></div>
          <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={checkBoxChange} className="gap-2.5 w-11/12 flex justify-center" />
        </div>
      </div>
      <div className="mt-4">
        <ul className='grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-4'>
          <li><ProductItem /></li>
          <li><ProductItem /></li>
          <li><ProductItem /></li>
          <li><ProductItem /></li>
          <li><ProductItem /></li>
        </ul>
      </div>
    </div>
  );
}
