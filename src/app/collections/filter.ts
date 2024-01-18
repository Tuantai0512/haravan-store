export function filter(type: string, data: IProduct[]) {
    switch (type) {
      case 'manual': {
        return data;
      }
      case 'price_variant:product < 1000000': {
        return data.filter(item => item.discount <= 1000000);
      }
      case 'price_variant:product range 1000000_3000000': {
        return data.filter(item => item.discount >= 1000000 && item.discount <= 3000000);
      }
      case 'price_variant:product range 3000000_6000000': {
        return data.filter(item => item.discount >= 3000000 && item.discount <= 6000000);
      }
      case 'price_variant:product range 6000000_10000000': {
        return data.filter(item => item.discount >= 6000000 && item.discount <= 10000000);
      }
      case 'price_variant:product > 10000000': {
        return data.filter(item => item.discount >= 10000000);
      }
      default: {
        return data;
      }
    }
}