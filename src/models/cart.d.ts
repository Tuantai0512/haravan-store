interface ICart {
    id: string;
    fullName?: string;
    email?: string;
    phoneNumber?: string,
    address?: string,
    country?: string,
    province?: string,
    shipping?: string,
    payment?: string,
    total?: string,
    status: "pending" | "approved",
    items: {
        id: string,
        quantity: number,
        product: IProduct
    }[],
}

interface ICartForm {
    fullName: string;
    email: string;
    phoneNumber: string;

}