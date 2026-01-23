'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function BlogPage() {
    const { t } = useLanguage()

    const articles = [
        {
            id: '1',
            category: 'Technical Guide',
            categoryVi: 'Hướng Dẫn Kỹ Thuật',
            title: 'Cách Tính Lãng Phí Nguyên Liệu Trong Sản Xuất Màng Nhựa',
            titleEn: 'How to Calculate Material Waste in Plastic Film Production',
            excerpt: 'Hiểu rõ cách tính lãng phí để tối ưu hóa sản xuất và tiết kiệm chi phí nguyên liệu hiệu quả.',
            excerptEn: 'Understand how to calculate waste to optimize production and save material costs effectively.',
            date: '2026-01-15',
            readTime: '5 phút đọc',
            readTimeEn: '5 min read',
            image: '/images/dashboard.png',
        },
        {
            id: '2',
            category: 'Case Study',
            categoryVi: 'Tình Huống Thực Tế',
            title: 'Nhà Máy ABC Tiết Kiệm 85 Triệu/Tháng Với SML TECH',
            titleEn: 'Factory ABC Saves 85 Million/Month With SML TECH',
            excerpt: 'Câu chuyện thành công của nhà máy nhựa ABC khi triển khai hệ thống đo khổ tự động.',
            excerptEn: 'Success story of ABC plastic factory implementing automated width measurement system.',
            date: '2026-01-10',
            readTime: '8 phút đọc',
            readTimeEn: '8 min read',
            image: '/images/hero-product.png',
        },
        {
            id: '3',
            category: 'Cost Optimization',
            categoryVi: 'Tối Ưu Chi Phí',
            title: 'Tiết Kiệm Biên Màng: Chạy Đúng Khổ = Lợi Nhuận Tăng',
            titleEn: 'Edge Trim Savings: Accurate Width = Higher Profit',
            excerpt: 'Phân tích chi tiết cách chạy đúng khổ màng giúp giảm lãng phí biên, tăng lợi nhuận 3-7%.',
            excerptEn: 'Detailed analysis of how accurate width control reduces edge trim waste, increasing profit by 3-7%.',
            date: '2026-01-20',
            readTime: '6 phút đọc',
            readTimeEn: '6 min read',
            image: '/images/comparison.png',
        },
        {
            id: '4',
            category: 'SPC Tutorial',
            categoryVi: 'Hướng Dẫn SPC',
            title: 'Hiểu Rõ Cpk: Chỉ Số Vàng Trong Kiểm Soát Chất Lượng',
            titleEn: 'Understanding Cpk: The Golden Index in Quality Control',
            excerpt: 'Hướng dẫn chi tiết về Cp, Cpk và cách sử dụng để kiểm soát chất lượng màng hiệu quả.',
            excerptEn: 'Comprehensive guide on Cp, Cpk and how to use them for effective film quality control.',
            date: '2026-01-18',
            readTime: '7 phút đọc',
            readTimeEn: '7 min read',
            image: '/images/dashboard.png',
        },
        {
            id: '5',
            category: 'Quality Management',
            categoryVi: 'Quản Lý Chất Lượng',
            title: 'Kiểm Soát Khổ Màng: Trụ Cột Của Quản Lý Chất Lượng',
            titleEn: 'Width Control: The Pillar of Quality Management',
            excerpt: 'Tại sao khổ màng là thông số quan trọng nhất và cách xây dựng hệ thống kiểm soát hiệu quả.',
            excerptEn: 'Why film width is the most critical parameter and how to build an effective control system.',
            date: '2026-01-16',
            readTime: '6 phút đọc',
            readTimeEn: '6 min read',
            image: '/images/icon-accuracy.png',
        },
        {
            id: '6',
            category: 'Industry Insights',
            categoryVi: 'Xu Hướng Ngành',
            title: 'IoT & Industry 4.0 Trong Ngành Nhựa Việt Nam',
            titleEn: 'IoT & Industry 4.0 in Vietnamese Plastic Industry',
            excerpt: 'Tổng quan về xu hướng chuyển đổi số và ứng dụng IoT trong sản xuất nhựa.',
            excerptEn: 'Overview of digital transformation trends and IoT applications in plastic manufacturing.',
            date: '2026-01-05',
            readTime: '6 phút đọc',
            readTimeEn: '6 min read',
            image: '/images/comparison.png',
        },
    ]

    const { language } = useLanguage()

    return (
        <main>
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-white section-padding">
                <div className="container-custom">
                    <h1 className="heading-2 mb-4">{t('Kiến Thức', 'Knowledge')}</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        {t(
                            'Kiến thức chuyên môn, hướng dẫn kỹ thuật, và xu hướng ngành',
                            'Professional knowledge, technical guides, and industry trends'
                        )}
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/blog/${article.id}`}
                                className="block group"
                            >
                                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                                    {/* Image */}
                                    <div className="aspect-video bg-gray-200 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={language === 'vi' ? article.title : article.titleEn}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Category */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                                                {language === 'vi' ? article.categoryVi : article.category}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {language === 'vi' ? article.readTime : article.readTimeEn}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                                            {language === 'vi' ? article.title : article.titleEn}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {language === 'vi' ? article.excerpt : article.excerptEn}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">
                                                {new Date(article.date).toLocaleDateString('vi-VN')}
                                            </span>
                                            <span className="text-accent group-hover:text-accent-hover font-medium">
                                                {t('Đọc thêm', 'Read more')} →
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Subscribe */}
            <div className="section-padding bg-white">
                <div className="container-custom max-w-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {t('Đăng Ký Nhận Bản Tin', 'Subscribe to Newsletter')}
                    </h2>
                    <p className="text-gray-600 mb-8">
                        {t(
                            'Nhận kiến thức mới, case study, và updates từ SML TECH',
                            'Get new knowledge, case studies, and updates from SML TECH'
                        )}
                    </p>

                    <form className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder={t('Email của bạn', 'Your email')}
                            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent"
                        />
                        <button type="submit" className="btn-primary">
                            {t('Đăng Ký', 'Subscribe')}
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    )
}
