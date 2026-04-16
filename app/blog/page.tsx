'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function BlogPage() {
    const { t, language } = useLanguage()

    const articles = [
        {
            id: '1',
            category: 'Technical Guide',
            categoryVi: 'Hướng Dẫn Kỹ Thuật',
            industry: 'Nhựa',
            industryEn: 'Plastics',
            emoji: '🧴',
            title: 'Cách Tính Lãng Phí Nguyên Liệu Trong Sản Xuất Màng Nhựa',
            titleEn: 'How to Calculate Material Waste in Plastic Film Production',
            excerpt: 'Hiểu rõ cách tính lãng phí để tối ưu hóa sản xuất và tiết kiệm chi phí nguyên liệu hiệu quả.',
            excerptEn: 'Understand how to calculate waste to optimize production and save material costs effectively.',
            date: '2026-01-15',
            readTime: '5 phút đọc',
            readTimeEn: '5 min read',
            image: '/images/catalog/sensor-top.jpg',
            gradient: 'from-blue-500/20 to-cyan-500/10',
        },
        {
            id: '2',
            category: 'Case Study',
            categoryVi: 'Tình Huống Thực Tế',
            industry: 'Nhựa',
            industryEn: 'Plastics',
            emoji: '🏭',
            title: 'Nhà Máy ABC Tiết Kiệm 85 Triệu/Tháng Với SML TECH',
            titleEn: 'Factory ABC Saves 85 Million/Month With SML TECH',
            excerpt: 'Câu chuyện thành công của nhà máy nhựa ABC khi triển khai hệ thống đo khổ tự động SML TECH.',
            excerptEn: 'Success story of ABC plastic factory implementing automated width measurement system.',
            date: '2026-01-10',
            readTime: '8 phút đọc',
            readTimeEn: '8 min read',
            image: '/images/catalog/sensor-side.jpg',
            gradient: 'from-green-500/20 to-emerald-500/10',
        },
        {
            id: '3',
            category: 'Cost Optimization',
            categoryVi: 'Tối Ưu Chi Phí',
            industry: 'Giấy',
            industryEn: 'Paper',
            emoji: '📄',
            title: 'Tiết Kiệm Biên Màng: Chạy Đúng Khổ = Lợi Nhuận Tăng',
            titleEn: 'Edge Trim Savings: Accurate Width = Higher Profit',
            excerpt: 'Phân tích chi tiết cách chạy đúng khổ cuộn giấy giúp giảm lãng phí biên, tăng lợi nhuận 3-7%.',
            excerptEn: 'Detailed analysis of how accurate width control reduces edge trim waste, increasing profit by 3-7%.',
            date: '2026-01-20',
            readTime: '6 phút đọc',
            readTimeEn: '6 min read',
            image: '/images/catalog/industry-paper.png',
            gradient: 'from-amber-500/20 to-yellow-500/10',
        },
        {
            id: '4',
            category: 'SPC Tutorial',
            categoryVi: 'Hướng Dẫn SPC',
            industry: 'Vải',
            industryEn: 'Textile',
            emoji: '🧵',
            title: 'Kiểm Soát Khổ Vải Tự Động: Từ Đo Tay Đến IoT',
            titleEn: 'Automated Fabric Width Control: From Manual to IoT',
            excerpt: 'Hành trình chuyển đổi số trong kiểm soát khổ vải: so sánh đo tay truyền thống và hệ thống tự động SML TECH.',
            excerptEn: 'Digital transformation in textile width control: comparing traditional manual and SML TECH automated systems.',
            date: '2026-01-18',
            readTime: '7 phút đọc',
            readTimeEn: '7 min read',
            image: '/images/catalog/industry-textile.png',
            gradient: 'from-purple-500/20 to-pink-500/10',
        },
        {
            id: '5',
            category: 'Quality Management',
            categoryVi: 'Quản Lý Chất Lượng',
            industry: 'Kim loại',
            industryEn: 'Metal',
            emoji: '🔩',
            title: 'Đo Khổ Cuộn Thép/Nhôm: Yêu Cầu Độ Chính Xác Cao',
            titleEn: 'Steel & Aluminum Coil Width: High Precision Requirements',
            excerpt: 'Tại sao độ chính xác ±0.5mm là bắt buộc trong ngành kim loại và cách SML TECH đáp ứng tiêu chuẩn này.',
            excerptEn: 'Why ±0.5mm accuracy is mandatory in the metal industry and how SML TECH meets this standard.',
            date: '2026-01-16',
            readTime: '6 phút đọc',
            readTimeEn: '6 min read',
            image: '/images/catalog/industry-metal.png',
            gradient: 'from-gray-500/20 to-slate-500/10',
        },
        {
            id: '6',
            category: 'Industry Insights',
            categoryVi: 'Xu Hướng Ngành',
            industry: 'Tất cả',
            industryEn: 'All',
            emoji: '🌐',
            title: 'IoT & Industry 4.0 Trong Sản Xuất Cuộn Vật Liệu Việt Nam',
            titleEn: 'IoT & Industry 4.0 in Vietnamese Material Roll Manufacturing',
            excerpt: 'Tổng quan về xu hướng chuyển đổi số và ứng dụng IoT trong các ngành sản xuất cuộn vật liệu tại Việt Nam.',
            excerptEn: 'Overview of digital transformation trends and IoT applications in Vietnamese material roll manufacturing industries.',
            date: '2026-01-05',
            readTime: '6 phút đọc',
            readTimeEn: '6 min read',
            image: '/images/comparison.png',
            gradient: 'from-teal-500/20 to-cyan-500/10',
        },
    ]

    const industries = [
        { vi: 'Tất cả', en: 'All', emoji: '🌐' },
        { vi: 'Nhựa', en: 'Plastics', emoji: '🧴' },
        { vi: 'Giấy', en: 'Paper', emoji: '📄' },
        { vi: 'Vải', en: 'Textile', emoji: '🧵' },
        { vi: 'Kim loại', en: 'Metal', emoji: '🔩' },
    ]

    return (
        <main>
            <Header />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="/images/catalog/sensor-top.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="container-custom section-padding relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
                            📚 {t('Trung Tâm Kiến Thức SML TECH', 'SML TECH Knowledge Center')}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            {t('Kiến Thức', 'Knowledge')} <span className="text-accent">&</span> {t('Chuyên Môn', 'Expertise')}
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            {t(
                                'Hướng dẫn kỹ thuật, case study thực tế và xu hướng ngành cho nhựa, giấy, vải, kim loại.',
                                'Technical guides, real-world case studies and industry trends for plastics, paper, textiles, and metals.'
                            )}
                        </p>
                    </div>
                </div>

                {/* Industry quick-filters shown in hero bottom */}
                <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="container-custom py-4 flex gap-3 flex-wrap">
                        {industries.map((ind, i) => (
                            <span key={i} className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-full px-4 py-1.5 text-sm cursor-pointer">
                                {ind.emoji} {language === 'vi' ? ind.vi : ind.en}
                            </span>
                        ))}
                    </div>
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
                                <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                                    {/* Image */}
                                    <div className={`aspect-video bg-gradient-to-br ${article.gradient} overflow-hidden relative`}>
                                        <img
                                            src={article.image}
                                            alt={language === 'vi' ? article.title : article.titleEn}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Industry badge overlay */}
                                        <div className="absolute top-3 left-3">
                                            <span className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                                                {article.emoji} {language === 'vi' ? article.industry : article.industryEn}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        {/* Category & time */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                                                {language === 'vi' ? article.categoryVi : article.category}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {language === 'vi' ? article.readTime : article.readTimeEn}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-accent transition-colors leading-snug flex-1">
                                            {language === 'vi' ? article.title : article.titleEn}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                            {language === 'vi' ? article.excerpt : article.excerptEn}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                                            <span className="text-gray-400 text-xs">
                                                {new Date(article.date).toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US')}
                                            </span>
                                            <span className="text-accent font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
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

            {/* CTA Subscribe */}
            <div className="section-padding bg-white border-t border-gray-100">
                <div className="container-custom max-w-2xl text-center">
                    <div className="text-4xl mb-4">📬</div>
                    <h2 className="text-3xl font-bold mb-4">
                        {t('Đăng Ký Nhận Bản Tin', 'Subscribe to Newsletter')}
                    </h2>
                    <p className="text-gray-600 mb-8">
                        {t(
                            'Nhận kiến thức mới, case study thực tế và cập nhật từ SML TECH mỗi tuần.',
                            'Get new knowledge, real-world case studies and weekly updates from SML TECH.'
                        )}
                    </p>

                    <form className="flex gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder={t('Email của bạn', 'Your email address')}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none text-sm"
                        />
                        <button type="submit" className="btn-primary whitespace-nowrap">
                            {t('Đăng Ký', 'Subscribe')}
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    )
}
