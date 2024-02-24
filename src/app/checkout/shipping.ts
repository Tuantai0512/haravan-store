export const shippingMethod = (method: string) => {
    switch (method) {
        case 'Giao hàng tận nơi': {
            return 40000;
        }
        case 'Giao hàng cấp tốc': {
            return 80000;
        }
        default: {
            return 0
        }
    }
}