interface ICart {
    id: string;
    fullName?: string;
    email?: string;
    phoneNumber: null,
    address: null,
    country: string,
    province: string,
    payment: null,
    total: null,
    status: "pending" | "approved",
    items: {
        id: string,
        quantity: number,
        product: IProduct
    }[],
}