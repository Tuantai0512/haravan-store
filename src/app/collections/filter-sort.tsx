'use client'
import ProductItem from "@/components/product-item";
import { FilterOutlined } from "@ant-design/icons";
import { Checkbox, Radio, RadioChangeEvent } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useReducer, useState } from "react";

interface IFilterSort {
  category?: ICategory;
  allCategory?: ICategory[];
}

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

export default function FilterSort(props: IFilterSort) {
  const { category, allCategory } = props;
  const [value, setValue] = useState('manual');
  const [productCategory, setProductCategory] = useState(category?.products);
  const allDevice = allCategory?.filter(item => item.name !== 'Combo haravan');
  const productArray = allDevice?.map((item) => item.products);
  const mergeProductArray = productArray?.flat();
  const [productAllCategory, setProductAllCategory] = useState(mergeProductArray);

  function filter(type: string, data: IProduct[]) {
    switch (type) {
      case 'manual': {
        return data;
      }
      case 'price-ascending': {
        return priceAscending(data);
      }
      case 'price-descending': {
        return priceDescending(data);
      }
      case 'title-ascending': {
        return titleAscending(data);
      }
      case 'title-descending': {
        return titleDescending(data);
      }
      case 'created-ascending': {
        return createdAscending(data);
      }
      case 'created-descending': {
        return createdDescending(data);
      }
      default: {
        return data;
      }
    }
  }

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    if (category) {
      setProductCategory(filter(e.target.value, category.products))
    }
    if (mergeProductArray) {
      setProductAllCategory(filter(e.target.value, mergeProductArray))
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

const priceAscending = (product: IProduct[]) => {
  return product.slice().sort(function (a: IProduct, b: IProduct) {
    return a.discount - b.discount;
  });
}


const priceDescending = (product: IProduct[]) => {
  return product.slice().sort(function (a: IProduct, b: IProduct) {
    return b.discount - a.discount;
  });
}

const titleAscending = (product: IProduct[]) => {
  return product.slice().sort(function (a: IProduct, b: IProduct) {
    var nameA = a.title.toLowerCase();
    var nameB = b.title.toLowerCase();
    return nameA.localeCompare(nameB);
  });
}

const titleDescending = (product: IProduct[]) => {
  return product.slice().sort(function (a: IProduct, b: IProduct) {
    var nameA = a.title.toLowerCase();
    var nameB = b.title.toLowerCase();
    return nameB.localeCompare(nameA);
  });
}

const createdAscending = (product: IProduct[]) => {
  return product.slice().sort(function (a: IProduct, b: IProduct) {
    var createdTimeA = a.createdAt.toLowerCase();
    var createdTimeB = b.createdAt.toLowerCase();
    return createdTimeA.localeCompare(createdTimeB);
  });
}

const createdDescending = (product: IProduct[]) => {
  return product.slice().sort(function (a: IProduct, b: IProduct) {
    var createdTimeA = a.createdAt.toLowerCase();
    var createdTimeB = b.createdAt.toLowerCase();
    return createdTimeB.localeCompare(createdTimeA);
  });
}

