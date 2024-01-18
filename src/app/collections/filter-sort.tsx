'use client'
import ProductItem from "@/components/product-item";
import { FilterOutlined } from "@ant-design/icons";
import { Checkbox, Radio, RadioChangeEvent } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";
import { sort } from "./sort";
import { filter } from "./filter";

interface IFilterSort {
  category?: ICategory;
  allCategory?: ICategory[];
}

const plainOptions = [
  { label: 'Dưới 1.000.000₫', value: 'price_variant:product < 1000000' },
  { label: '1.000.000₫ - 3.000.000₫', value: 'price_variant:product range 1000000_3000000' },
  { label: '3.000.000₫ - 6.000.000₫', value: 'price_variant:product range 3000000_6000000' },
  { label: '6.000.000₫ - 10.000.000₫', value: 'price_variant:product range 6000000_10000000' },
  { label: 'Trên 10.000.000₫', value: 'price_variant:product > 10000000' },
];

export default function FilterSort(props: IFilterSort) {
  const { category, allCategory } = props;
  const [value, setValue] = useState('manual');
  const [productCategory, setProductCategory] = useState(category?.products);
  const allDevice = allCategory?.filter(item => item.name !== 'Combo haravan');
  const productArray = allDevice?.map((item) => item.products);
  const mergeProductArray = productArray?.flat();
  const [productAllCategory, setProductAllCategory] = useState(mergeProductArray);

  

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    if (category) {
      setProductCategory(sort(e.target.value, category.products))
    }
    if (mergeProductArray) {
      setProductAllCategory(sort(e.target.value, mergeProductArray))
    }
  };

  const checkBoxChange = (checkedValues: CheckboxValueType[]) => {
    if (category) {
      if(checkedValues.length == 0){
        setProductCategory(category.products); 
      }else{
        const productFilter = checkedValues.map(item => filter(item.toString(), category.products));
        const mergeProductFilter = productFilter?.flat();
        setProductCategory(mergeProductFilter);
      }
    }
    if (mergeProductArray) {
      if(checkedValues.length == 0){
        setProductAllCategory(mergeProductArray); 
      }else{
        const productFilter = checkedValues.map(item => filter(item.toString(), mergeProductArray));
        const mergeProductFilter = productFilter?.flat();
        setProductAllCategory(mergeProductFilter);
      }
    }
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
      </Radio.Group>
      <br />
      <div className="bg-white rounded-md">
        <div className="w-full border-b pt-2.5 px-4 pb-2">
          <FilterOutlined />
          <span className="uppercase font-semibold px-3">Bộ lọc</span>
        </div>
        <div className="pt-2.5 px-4 pb-2 flex">
          <div className="w-1/12"><span className="font-semibold pr-3 w-1/5">Lọc giá</span></div>
          <Checkbox.Group options={plainOptions} onChange={checkBoxChange} className="gap-2.5 w-11/12 flex justify-center" />
        </div>
      </div>
      <div className="mt-4">
        <ul className='grid grid-cols-2 gap-1 lg:grid-cols-3 lg:gap-4'>
          {
            productCategory?.map((item) => {
              return (
                <li key={item.id}><ProductItem product={item} /></li>
              )
            })
          }
          {
            productAllCategory?.map((item) => {
              return (
                <li key={item.id}><ProductItem product={item} /></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

