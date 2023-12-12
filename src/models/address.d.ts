interface IAddress {
    id?: string,
    createdAt?: string,
    updatedAt?: string,
    userId?: string,
    firstName: string,
    lastName: string,
    company: null | string,
    address1: null | string,
    address2: null | string,
    country: string,
    province: string,
    phoneNumber: null | string,
    default: boolean
}

interface IAddressData {
    addresses: IAddress[]
}