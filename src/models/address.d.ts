interface IAddress {
    id: string,
    createdAt?: string,
    updatedAt?: string,
    firstName: string,
    lastName: string,
    company?: string,
    address1?: string,
    address2?: string,
    country: string,
    province: string,
    phoneNumber?: string,
    default: boolean
}

interface IAddressData {
    email: string;
    addresses: IAddress[]
}