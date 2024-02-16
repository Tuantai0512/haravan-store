'use client'
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, CollapseProps, ConfigProvider } from "antd";
import { CSSProperties } from "react";
import Image from "next/image"
import deliverly1 from '../../../public/img/product_deliverly_1_ico.webp'
import deliverly2 from '../../../public/img/product_deliverly_2_ico.webp'


export interface IProductDescriptionProps {
    product: IProduct;
}

export default function ProductDescription(props: IProductDescriptionProps) {

    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
        {
            key: '1',
            label: <h2 className="uppercase font-medium">Thông tin sản phẩm</h2>,
            children: <p>{props.product.description}</p>,
            style: panelStyle,
        },
        {
            key: '2',
            label: <h2 className="uppercase font-medium">Dịch vụ giao hàng</h2>,
            children: <ul>
                <li className="flex items-center">
                    <div className="flex items-center h-8 w-10">
                        <Image
                            src={deliverly1}
                            alt="deliverly box"
                            width={30}
                            height={20}
                        >
                        </Image>
                    </div>
                    <p>Cam kết 100% chính hãng</p>
                </li>
                <li className="flex items-center mt-4">
                    <div className="flex items-center h-8 w-10">
                        <Image
                            src={deliverly2}
                            alt="deliverly container"
                            width={30}
                            height={20}
                        >
                        </Image>
                    </div>
                    <div>
                        <p>Giao hàng dự kiến</p>
                        <strong>Thứ 2 - Thứ 6 từ 9:00 - 17:00</strong>
                    </div>
                </li>
                <li className="flex items-center mt-4">
                    <div className="flex items-center h-8 w-10">
                        <Image
                            src={deliverly2}
                            alt="deliverly container"
                            width={30}
                            height={20}
                        >
                        </Image>
                    </div>
                    <div>
                        <p>Hỗ trợ 24/7</p>
                        <p>Với các kênh chat, email & phone</p>
                    </div>
                </li>
            </ul>,
            style: panelStyle,
        }
    ];

    const panelStyle: React.CSSProperties = {
        background: '#FFF',
        borderRadius: 0,
        border: 'none',
        borderBottom: 'var(--shop-color-bg) solid 2px',
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Collapse: {
                        /* here is your component tokens */
                        headerPadding: '20px 0',
                        contentPadding: '0 0 20px'
                    },
                },
            }}
        >
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => {
                    if (isActive) {
                        return <FontAwesomeIcon icon={faMinus} />
                    } else {
                        return <FontAwesomeIcon icon={faPlus} />
                    }
                }}
                expandIconPosition='end'
                style={{ background: '#fff', padding: '0 16px', borderRadius: 0 }}
                items={getItems(panelStyle)}
            />
        </ConfigProvider>
    );
}
