'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function SolutionsPage() {
    const { t } = useLanguage()

    const solutions = [
        {
            id: 'plastic',
            icon: '🏭',
            title: 'Nhựa & Bao Bì',
            titleEn: 'Plastic & Packaging',
            description: 'Giải pháp cho máy thổi màng PE, PP, PVC và sản xuất bao bì nhựa',
            descriptionEn: 'Solutions for PE, PP, PVC blown film machines and plastic packaging production',
            applications: [
                { vi: 'Thổi màng (Blown Film)', en: 'Blown Film' },
                { vi: 'Chia cuộn (Slitting)', en: 'Slitting' },
                { vi: 'Cán màng (Calendering)', en: 'Calendering' },
                { vi: 'In flexo (Flexographic Printing)', en: 'Flexographic Printing' },
            ],
            benefits: [
                { vi: 'Giảm lãng phí 5-8%', en: 'Reduce waste 5-8%' },
                { vi: 'Kiểm soát chất lượng real-time', en: 'Real-time quality control' },
                { vi: 'Tự động hóa quy trình đo', en: 'Automated measurement process' },
                { vi: 'Tích hợp dễ dàng với máy hiện tại', en: 'Easy integration with existing machines' },
            ],
        },
        {
            id: 'textile',
            icon: '👕',
            title: 'Dệt May',
            titleEn: 'Textile',
            description: 'Đo khổ vải tự động cho ngành dệt may, sợi, vải kỹ thuật',
            descriptionEn: 'Automated fabric width measurement for textile, yarn, technical fabrics',
            applications: [
                { vi: 'Dệt vải (Weaving)', en: 'Weaving' },
                { vi: 'Nhuộm vải (Dyeing)', en: 'Dyeing' },
                { vi: 'Hoàn tất vải (Finishing)', en: 'Finishing' },
                { vi: 'Kiểm tra chất lượng (QC)', en: 'Quality Control (QC)' },
            ],
            benefits: [
                { vi: 'Đảm bảo khổ vải đồng đều', en: 'Ensure uniform fabric width' },
                { vi: 'Giảm phế phẩm khi cắt', en: 'Reduce waste during cutting' },
                { vi: 'SPC tracking tự động', en: 'Automated SPC tracking' },
                { vi: 'Phù hợp môi trường ẩm, nhiệt', en: 'Suitable for humid, hot environment' },
            ],
            status: { vi: 'Sắp ra mắt Q3 2026', en: 'Coming Q3 2026' },
        },
        {
            id: 'paper',
            icon: '📄',
            title: 'Giấy & Carton',
            titleEn: 'Paper & Carton',
            description: 'Hệ thống đo khổ cho giấy, carton, bìa cứng',
            descriptionEn: 'Width measurement system for paper, carton, cardboard',
            applications: [
                { vi: 'Sản xuất giấy (Paper production)', en: 'Paper production' },
                { vi: 'In offset/digital (Printing)', en: 'Offset/Digital Printing' },
                { vi: 'Sản xuất carton (Carton making)', en: 'Carton making' },
                { vi: 'Bao bì giấy (Paper packaging)', en: 'Paper packaging' },
            ],
            benefits: [
                { vi: 'Độ chính xác cao trên giấy mỏng', en: 'High accuracy on thin paper' },
                { vi: 'Không tiếp xúc (Non-contact)', en: 'Non-contact measurement' },
                { vi: 'Tốc độ đo nhanh', en: 'Fast measurement speed' },
                { vi: 'Chống bụi giấy', en: 'Dust resistant' },
            ],
            status: { vi: 'Sắp ra mắt Q4 2026', en: 'Coming Q4 2026' },
        },
    ]

    const { language } = useLanguage()

    return (
        <main>
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-white section-padding">
                <div className="container-custom">
                    <h1 className="heading-2 mb-4">{t('Giải Pháp', 'Solutions')}</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        {t(
                            'Hệ thống đo khổ thông minh cho mọi ngành sản xuất',
                            'Smart width measurement systems for all manufacturing industries'
                        )}
                    </p>
                </div>
            </div>

            {/* Solutions Grid */}
            <div className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="space-y-12">
                        {solutions.map((solution, index) => (
                            <div key={solution.id} id={solution.id} className="bg-white rounded-xl shadow-lg overflow-hidden scroll-mt-20">
                                <div className="grid md:grid-cols-2 gap-8 p-8">
                                    {/* Left: Info */}
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <span className="text-5xl mr-4">{solution.icon}</span>
                                            <div>
                                                <h2 className="text-3xl font-bold">
                                                    {language === 'vi' ? solution.title : solution.titleEn}
                                                </h2>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 mb-6">
                                            {language === 'vi' ? solution.description : solution.descriptionEn}
                                        </p>

                                        {solution.status && (
                                            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                                                {language === 'vi' ? solution.status.vi : solution.status.en}
                                            </div>
                                        )}

                                        <div className="flex gap-4">
                                            {index === 0 ? (
                                                <Link href="/lien-he" className="btn-primary">
                                                    {t('Nhận Tư Vấn', 'Get Consultation')}
                                                </Link>
                                            ) : (
                                                <button className="btn-secondary opacity-60 cursor-not-allowed">
                                                    {t('Sắp Ra Mắt', 'Coming Soon')}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right: Details */}
                                    <div>
                                        <div className="mb-6">
                                            <h3 className="font-semibold text-lg mb-3">
                                                {t('Ứng Dụng', 'Applications')}:
                                            </h3>
                                            <ul className="space-y-2">
                                                {solution.applications.map((app, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-accent mr-2">▸</span>
                                                        <span>{language === 'vi' ? app.vi : app.en}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-lg mb-3">
                                                {t('Lợi Ích', 'Benefits')}:
                                            </h3>
                                            <ul className="space-y-2">
                                                {solution.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-success mr-2">✓</span>
                                                        <span>{language === 'vi' ? benefit.vi : benefit.en}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="section-padding bg-accent text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {t('Tìm Giải Pháp Phù Hợp Cho Bạn?', 'Find The Right Solution For You?')}
                    </h2>
                    <p className="text-xl mb-8">
                        {t(
                            'Liên hệ để được tư vấn miễn phí từ chuyên gia',
                            'Contact us for free consultation from experts'
                        )}
                    </p>
                    <Link href="/lien-he" className="btn-primary bg-white text-accent hover:bg-gray-100">
                        {t('Liên Hệ Ngay', 'Contact Now')}
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    )
}
