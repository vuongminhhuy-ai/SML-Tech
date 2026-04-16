import type { Metadata } from 'next'
import { Open_Sans, Montserrat } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import Chatbot from '@/components/Chatbot'

const openSans = Open_Sans({
    subsets: ['latin', 'vietnamese'],
    variable: '--font-open-sans',
    display: 'swap',
})

const montserrat = Montserrat({
    subsets: ['latin', 'vietnamese'],
    variable: '--font-montserrat',
    display: 'swap',
    weight: ['600', '700'],
})

export const metadata: Metadata = {
    metadataBase: new URL('https://www.smtech.com.vn'),
    title: 'SML TECH - Hệ Thống Đo Khổ Màng Thông Minh | Smart Width Measurement System',
    description: 'Giải pháp đo khổ màng tự động với IoT/ERP, giúp nhà máy nhựa Việt Nam giảm lãng phí 5-8%, tiết kiệm 500 triệu - 2 tỷ/năm. ROI 6-12 tháng.',
    keywords: ['máy đo khổ màng', 'web width measurement', 'đo khổ tự động', 'SML TECH', 'IoT', 'nhựa', 'bao bì'],
    authors: [{ name: 'SML TECH' }],
    openGraph: {
        title: 'SML TECH - Hệ Thống Đo Khổ Màng Thông Minh',
        description: 'Giảm lãng phí 5-8%, tiết kiệm đến 2 tỷ/năm với hệ thống đo khổ IoT/ERP',
        type: 'website',
        locale: 'vi_VN',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="vi" className={`${openSans.variable} ${montserrat.variable}`}>
            <body className="font-sans">
                <LanguageProvider>
                    {children}
                    <Chatbot />
                </LanguageProvider>
            </body>
        </html>
    )
}
