export function formatVnd(number: number) {
    // Chuyển số thành chuỗi và đảm bảo là số nguyên
    const numString = number.toString();
    
    // Tách chuỗi thành từng đoạn 3 chữ số từ phải sang trái
    const parts = [];
    for (let i = numString.length; i > 0; i -= 3) {
        parts.unshift(numString.slice(Math.max(0, i - 3), i));
    }
    
    // Kết hợp các đoạn với dấu phẩy và thêm ký hiệu đồng
    const formattedNumber = parts.join(',') + '₫';
    
    return formattedNumber;
}