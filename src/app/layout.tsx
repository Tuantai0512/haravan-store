import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/common/header/header'
import Footer from '@/components/common/footer/footer'
import { Layout, Space } from 'antd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AntdRegistry from '@/lib/antd.registry';
import { cookies } from 'next/headers'
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haravan Store Clone',
  description: 'This is shop clone from Haravan Store',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const cookieStore = cookies();
  const cartId = cookieStore.get('cart_id');

  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <AntdRegistry >
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
              <Layout style={{ minHeight: '100vh' }}>
                <Header cartId={cartId} />
                <main className="flex min-h-screen flex-col">
                  {children}
                </main>
                <Footer />
              </Layout>
            </Space>
            <ToastContainer />
          </AntdRegistry>
        </body>
      </html>
    </StoreProvider>
  )
}
