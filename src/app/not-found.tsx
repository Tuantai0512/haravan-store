import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <div className="content-pageNot">
        <h1>404</h1>
      </div>
      <h2 className='text-4xl font-bold mb-5'>Không tìm thấy trang</h2>
      <p className='text-base text-center mb-5'>Trang bạn đang tìm kiếm có thể đã bị xóa, chuyển đi, thay đổi link hoặc chưa bao giờ tồn tại.</p>
      <Link href="/" className='block py-3 px-10 uppercase !bg-blue-500 !text-white font-semibold'>Trở về trang chủ</Link>
    </div>
  )
}