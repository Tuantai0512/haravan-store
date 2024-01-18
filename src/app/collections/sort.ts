const priceAscending = (product: IProduct[]) => {
    return product.slice().sort(function (a: IProduct, b: IProduct) {
        return a.discount - b.discount;
    });
}


const priceDescending = (product: IProduct[]) => {
    return product.slice().sort(function (a: IProduct, b: IProduct) {
        return b.discount - a.discount;
    });
}

const titleAscending = (product: IProduct[]) => {
    return product.slice().sort(function (a: IProduct, b: IProduct) {
        var nameA = a.title.toLowerCase();
        var nameB = b.title.toLowerCase();
        return nameA.localeCompare(nameB);
    });
}

const titleDescending = (product: IProduct[]) => {
    return product.slice().sort(function (a: IProduct, b: IProduct) {
        var nameA = a.title.toLowerCase();
        var nameB = b.title.toLowerCase();
        return nameB.localeCompare(nameA);
    });
}

const createdAscending = (product: IProduct[]) => {
    return product.slice().sort(function (a: IProduct, b: IProduct) {
        var createdTimeA = a.createdAt.toLowerCase();
        var createdTimeB = b.createdAt.toLowerCase();
        return createdTimeA.localeCompare(createdTimeB);
    });
}

const createdDescending = (product: IProduct[]) => {
    return product.slice().sort(function (a: IProduct, b: IProduct) {
        var createdTimeA = a.createdAt.toLowerCase();
        var createdTimeB = b.createdAt.toLowerCase();
        return createdTimeB.localeCompare(createdTimeA);
    });
}

export function sort(type: string, data: IProduct[]) {
    switch (type) {
      case 'manual': {
        return data;
      }
      case 'price-ascending': {
        return priceAscending(data);
      }
      case 'price-descending': {
        return priceDescending(data);
      }
      case 'title-ascending': {
        return titleAscending(data);
      }
      case 'title-descending': {
        return titleDescending(data);
      }
      case 'created-ascending': {
        return createdAscending(data);
      }
      case 'created-descending': {
        return createdDescending(data);
      }
      default: {
        return data;
      }
    }
}