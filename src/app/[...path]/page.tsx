import { Metadata } from "next"
import {notFound} from "next/navigation"

export const metadata: Metadata = {
  title: 'Không tìm thấy trang - Haravan Store Clone',
  description: 'Không tìm thấy trang - Haravan Store Clone',
}

export default function NotFoundCatchAll() {
  notFound()
}