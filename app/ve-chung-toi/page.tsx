'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function AboutPage() {
    const { t, language } = useLanguage()

    const team = [
        {
            name: 'Nguyễn Văn A',
            role: { vi: 'Founder & CEO', en: 'Founder & CEO' },
            description: {
                vi: '10+ năm kinh nghiệm trong tự động hóa công nghiệp',
                en: '10+ years experience in industrial automation'
            },
        },
        {
            name: 'Trần Thị B',
            role: { vi: 'CTO', en: 'CTO' },
            description: {
                vi: 'Chuyên gia IoT/ERP, cựu kỹ sư tại Siemens',
                en: 'IoT/ERP expert, former engineer at Siemens'
            },
        },
        {
            name: 'Lê Văn C',
            role: { vi: 'Sales Director', en: 'Sales Director' },
            description: {
                vi: '15+ năm trong ngành nhựa và bao bì Việt Nam',
                en: '15+ years in Vietnamese plastic and packaging industry'
            },
        },
    ]

    const milestones = [
        {
            year: '2023',
            event: {
                vi: 'Thành lập SML TECH',
                en: 'SML TECH founded'
            }
        },
        {
            year: '2024',
            event: {
                vi: 'Ra mắt SML-100, pilot với 5 khách hàng',
                en: 'Launched SML-100, pilot with 5 customers'
            }
        },
        {
            year: '2025',
            event: {
                vi: '20+ nhà máy đã demo, 10+ khách hàng triển khai',
                en: '20+ factories demoed, 10+ customers deployed'
            }
        },
        {
            year: '2026',
            event: {
                vi: 'Mở rộng sang dệt may (SML-200) và giấy (SML-300)',
                en: 'Expand to textile (SML-200) and paper (SML-300)'
            }
        },
    ]

    return (
        <main>
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-white section-padding">
                <div className="container-custom">
                    <h1 className="heading-2 mb-4">{t('Về Chúng Tôi', 'About Us')}</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        {t(
                            'Chúng tôi là SML TECH - Đối tác tin cậy của nhà máy Việt Nam trong hành trình chuyển đổi số',
                            'We are SML TECH - Trusted partner of Vietnamese factories in digital transformation journey'
                        )}
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                {t('Sứ Mệnh', 'Mission')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'vi' ?
                                    'Mang công nghệ đo lường thông minh đến với mọi nhà máy Việt Nam, giúp doanh nghiệp tiết kiệm chi phí, nâng cao chất lượng sản phẩm, và cạnh tranh hiệu quả trên thị trường quốc tế.' :
                                    'Bringing smart measurement technology to every Vietnamese factory, helping businesses save costs, improve product quality, and compete effectively in the international market.'
                                }
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                {t('Tầm Nhìn', 'Vision')}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {language === 'vi' ?
                                    'Trở thành nhà cung cấp hệ thống đo lường công nghiệp số 1 Việt Nam, được tin dùng bởi hàng nghìn nhà máy với các sản phẩm chất lượng cao, giá cả hợp lý, và dịch vụ hỗ trợ tuyệt vời.' :
                                    "Becoming Vietnam's #1 industrial measurement system provider, trusted by thousands of factories with high-quality products, reasonable prices, and excellent support services."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t('Giá Trị Cốt Lõi', 'Core Values')}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                                🎯
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('Chất Lượng', 'Quality')}</h3>
                            <p className="text-gray-600">
                                {t(
                                    'Cam kết sản phẩm chất lượng cao, độ chính xác tin cậy',
                                    'Committed to high-quality products, reliable accuracy'
                                )}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                                🤝
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {t('Khách Hàng Trên Hết', 'Customer First')}
                            </h3>
                            <p className="text-gray-600">
                                {t(
                                    'Lắng nghe, thấu hiểu, và giải quyết vấn đề của khách hàng',
                                    'Listen, understand, and solve customer problems'
                                )}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                                💡
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('Đổi Mới', 'Innovation')}</h3>
                            <p className="text-gray-600">
                                {t(
                                    'Luôn cải tiến công nghệ, nâng cao trải nghiệm người dùng',
                                    'Constantly innovating technology, improving user experience'
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t('Lịch Sử Hình Thành', 'Our Journey')}
                    </h2>

                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 w-24">
                                    <div className="text-2xl font-bold text-accent">{milestone.year}</div>
                                </div>
                                <div className="flex-1 border-l-4 border-accent pl-8 pb-8">
                                    <p className="text-gray-700 text-lg">
                                        {language === 'vi' ? milestone.event.vi : milestone.event.en}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team */}
            <div className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t('Đội Ngũ', 'Our Team')}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                                <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-white">
                                    👤
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <div className="text-accent font-medium mb-3">
                                    {language === 'vi' ? member.role.vi : member.role.en}
                                </div>
                                <p className="text-gray-600 text-sm">
                                    {language === 'vi' ? member.description.vi : member.description.en}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="section-padding bg-accent text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {t('Hợp Tác Cùng SML TECH', 'Partner With SML TECH')}
                    </h2>
                    <p className="text-xl mb-8">
                        {t(
                            'Cùng xây dựng tương lai cho ngành sản xuất Việt Nam',
                            'Building the future of Vietnamese manufacturing together'
                        )}
                    </p>
                    <Link href="/lien-he" className="btn-primary bg-white text-accent hover:bg-gray-100">
                        {t('Liên Hệ Với Chúng Tôi', 'Contact Us')}
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    )
}
