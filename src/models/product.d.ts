interface IProduct {
    id: string;
    createdAt: string;
    title: string;
    price: number;
    discount: number;
    description: string;
    category: ICategory;
    galery: IGalery[];
}