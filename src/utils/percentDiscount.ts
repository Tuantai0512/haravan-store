export function percentDiscount(discount: number, price: number) {
    if (price === 0) {
      return 0; // Avoid division by zero
    }
  
    const percentage = (discount / price) * 100;
    const discountPercent = Math.round(100 - percentage);
    return `${discountPercent}%`;
}