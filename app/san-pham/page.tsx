'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function ProductsPage() {
    const { t } = useLanguage()

    return (
        <main>
            <Header />

            <div className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h1 className="heading-2 mb-8">{t('Sản Phẩm', 'Products')}</h1>

                    {/* SML-100 Card */}
                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <img
                                    src="/images/hero-product.png"
                                    alt="SML-100"
                                    className="w-full rounded-lg"
                                />
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold mb-4">SML-100</h2>
                                <p className="text-lg text-gray-600 mb-4">
                                    {t('Hệ Thống Đo Khổ Màng Nhựa', 'Plastic Film Width Measurement System')}
                                </p>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center">
                                        <span className="text-accent mr-2">✓</span>
                                        <span>{t('Độ chính xác ±0.5mm', 'Accuracy ±0.5mm')}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-accent mr-2">✓</span>
                                        <span>{t('IoT/Cloud tích hợp', 'IoT/Cloud integrated')}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-accent mr-2">✓</span>
                                        <span>{t('Hỗ trợ 24/7 tại VN', '24/7 Support in VN')}</span>
                                    </div>
                                </div>

                                <div className="text-2xl font-bold text-accent mb-4">
                                    {t('Từ 60-90 triệu VNĐ', 'From VND 60-90 million')}
                                </div>

                                <div className="flex gap-4">
                                    <Link href="#demo" className="btn-primary">
                                        {t('Nhận Báo Giá', 'Get Quote')}
                                    </Link>
                                    <Link href="/" className="btn-secondary">
                                        {t('Về Trang Chủ', 'Back to Home')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coming Soon */}
                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 opacity-60">
                            <h3 className="text-xl font-semibold mb-2">
                                SML-200 ({t('Vải', 'Textile')})
                            </h3>
                            <p className="text-gray-600">{t('Sắp ra mắt Q3 2026', 'Coming Q3 2026')}</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 opacity-60">
                            <h3 className="text-xl font-semibold mb-2">
                                SML-300 ({t('Giấy', 'Paper')})
                            </h3>
                            <p className="text-gray-600">{t('Sắp ra mắt Q4 2026', 'Coming Q4 2026')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
