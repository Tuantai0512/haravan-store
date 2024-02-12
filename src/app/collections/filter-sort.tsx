'use client'
import ProductItem from "@/components/product-item";
import { FilterOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal, Radio, RadioChangeEvent, Space } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";
import { getSort } from "./sort";
import { getFilter } from "./filter";

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
  const [sort, setSort] = useState('manual');
  const [filter, setFilter] = useState<CheckboxValueType[]>([]);
  const [modal1Open, setModal1Open] = useState(false);
  const [productCategory, setProductCategory] = useState(category?.products);
  const allDevice = allCategory?.filter(item => item.name !== 'Combo haravan');
  const productArray = allDevice?.map((item) => item.products);
  const mergeProductArray = productArray?.flat();
  const [productAllCategory, setProductAllCategory] = useState(mergeProductArray);



  const onChange = async (e: RadioChangeEvent) => {
    setSort(e.target.value);
    if (e.target.value == 'manual' && !filter) {
      if (category) {
        setProductCategory(category.products);
      }
      if (mergeProductArray) {
        setProductAllCategory(mergeProductArray)
      }
    } else {
      if (productCategory) {
        setProductCategory(getSort(e.target.value, productCategory))
      }
      if (productAllCategory) {
        setProductAllCategory(getSort(e.target.value, productAllCategory))
      }
    }
  };

  const checkBoxChange = (checkedValues: CheckboxValueType[]) => {
    setFilter(checkedValues);
    if (sort == 'manual' && !checkedValues) {
      if (category) {
        setProductCategory(category.products);
      }
      if (mergeProductArray) {
        setProductAllCategory(mergeProductArray)
      }
    } else {
      if (category) {
        if (checkedValues.length == 0) {
          setProductCategory(getSort(sort, category.products));
        } else {
          const productFilter = checkedValues.map(item => getFilter(item.toString(), category.products));
          const mergeProductFilter = productFilter?.flat();
          setProductCategory(getSort(sort, mergeProductFilter));
        }
      }
      if (mergeProductArray) {
        if (checkedValues.length == 0) {
          setProductAllCategory(getSort(sort, mergeProductArray));
        } else {
          const productFilter = checkedValues.map(item => getFilter(item.toString(), mergeProductArray));
          const mergeProductFilter = productFilter?.flat();
          setProductAllCategory(getSort(sort, mergeProductFilter));
        }
      }
    }
  };

  return (
    <div className="lg:py-2">
      <div className="flex justify-between items-center px-2 lg:hidden">
        <p>{productCategory?.length}{productAllCategory?.length} sản phẩm</p>
        <Button type="primary" onClick={() => setModal1Open(true)} className="!flex !items-center border-b pt-2.5 px-4 pb-2">
          <FilterOutlined />
          <span className="uppercase font-semibold">Bộ lọc</span>
        </Button>
        <Modal
          title={
            <div className="w-full border-b pb-2">
              <FilterOutlined />
              <span className="uppercase font-semibold px-3">Bộ lọc</span>
            </div>
          }
          style={{ top: 20, maxWidth: '100%', position: 'absolute' }}
          open={modal1Open}
          onOk={() => setModal1Open(false)}
          onCancel={() => setModal1Open(false)}
          footer={[
            <Button onClick={() => setModal1Open(false)}>
              Hủy
            </Button>,
            <Button type="primary" onClick={() => setModal1Open(false)}>
              Áp dụng
            </Button>
          ]}
        >
          <h3 className="font-bold py-2">Sắp xếp</h3>
          <Radio.Group onChange={onChange} value={sort} className="w-full">
            <Space direction="vertical">
              <Radio value={'manual'}>Sản phẩm nổi bật</Radio>
              <Radio value={'price-ascending'}>Giá: Tăng dần</Radio>
              <Radio value={'price-descending'}>Giá: Giảm dần</Radio>
              <Radio value={'title-ascending'}>Tên: A-Z</Radio>
              <Radio value={'title-descending'}>Tên: Z-A</Radio>
              <Radio value={'created-ascending'}>Cũ nhất</Radio>
              <Radio value={'created-descending'}>Mới nhất</Radio>
            </Space>
          </Radio.Group>
          <br />
          <div className="bg-white rounded-md">
            <div className="py-4">
              <h3 className="font-bold py-2">Lọc giá</h3>
              <Checkbox.Group options={plainOptions} value={filter} onChange={checkBoxChange} className="gap-2.5 filter-modal" />
            </div>
          </div>
        </Modal>
      </div>
      <Radio.Group onChange={onChange} value={sort} className="!hidden lg:!flex justify-between w-full">
        <Radio value={'manual'}>Sản phẩm nổi bật</Radio>
        <Radio value={'price-ascending'}>Giá: Tăng dần</Radio>
        <Radio value={'price-descending'}>Giá: Giảm dần</Radio>
        <Radio value={'title-ascending'}>Tên: A-Z</Radio>
        <Radio value={'title-descending'}>Tên: Z-A</Radio>
        <Radio value={'created-ascending'}>Cũ nhất</Radio>
        <Radio value={'created-descending'}>Mới nhất</Radio>
      </Radio.Group>
      <br />
      <div className="hidden lg:block bg-white rounded-md">
        <div className="w-full border-b pt-2.5 px-4 pb-2">
          <FilterOutlined />
          <span className="uppercase font-semibold px-3">Bộ lọc</span>
        </div>
        <div className="pt-2.5 px-4 pb-2 flex">
          <div className="w-1/12"><span className="font-semibold pr-3 w-1/5">Lọc giá</span></div>
          <Checkbox.Group options={plainOptions} value={filter} onChange={checkBoxChange} className="gap-2.5 w-11/12 flex justify-center" />
        </div>
      </div>
      <div className="mb-4 lg:mt-4">
        <ul className='grid grid-cols-2 gap-1 px-1 lg:grid-cols-3 lg:gap-4'>
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

