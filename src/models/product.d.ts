interface IProduct {
    id: string;
    createdAt: string;
    title: string;
    price: number;
    discount: number;
    description: string;
    galery: IGalery[];
}