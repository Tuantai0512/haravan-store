import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/common/header/header'
import Footer from '@/components/common/footer/footer'
import { Layout, Space } from 'antd';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haravan Store Clone',
  description: 'This is shop clone from Haravan Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
          <Layout style={{ minHeight: '100vh' }}>
            <Header/>
            <main className="flex min-h-screen flex-col">
              {children}
            </main>
            <Footer />
          </Layout>
        </Space>
      </body>
    </html>
  )
}
