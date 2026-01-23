import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BlogPage() {
    const articles = [
        {
            id: 1,
            category: 'Technical Guide',
            categoryVi: 'Hướng Dẫn Kỹ Thuật',
            title: 'Cách Tính Lãng Phí Nguyên Liệu Trong Sản Xuất Màng Nhựa',
            titleEn: 'How to Calculate Material Waste in Plastic Film Production',
            excerpt: 'Hiểu rõ cách tính lãng phí để tối ưu hóa sản xuất và tiết kiệm chi phí nguyên liệu hiệu quả.',
            date: '2026-01-15',
            readTime: '5 phút đọc',
            image: '/images/dashboard.png',
        },
        {
            id: 2,
            category: 'Case Study',
            categoryVi: 'Tình Huống Thực Tế',
            title: 'Nhà Máy ABC Tiết Kiệm 85 Triệu/Tháng Với SML TECH',
            titleEn: 'Factory ABC Saves 85 Million/Month With SML TECH',
            excerpt: 'Câu chuyện thành công của nhà máy nhựa ABC khi triển khai hệ thống đo khổ tự động.',
            date: '2026-01-10',
            readTime: '8 phút đọc',
            image: '/images/hero-product.png',
        },
        {
            id: 3,
            category: 'Industry Insights',
            categoryVi: 'Xu Hướng Ngành',
            title: 'IoT & Industry 4.0 Trong Ngành Nhựa Việt Nam',
            titleEn: 'IoT & Industry 4.0 in Vietnamese Plastic Industry',
            excerpt: 'Tổng quan về xu hướng chuyển đổi số và ứng dụng IoT trong sản xuất nhựa.',
            date: '2026-01-05',
            readTime: '6 phút đọc',
            image: '/images/comparison.png',
        },
        {
            id: 4,
            category: 'FAQ',
            categoryVi: 'Câu Hỏi Thường Gặp',
            title: 'Top 10 Câu Hỏi Về Hệ Thống Đo Khổ Màng',
            titleEn: 'Top 10 Questions About Film Width Measurement Systems',
            excerpt: 'Giải đáp những thắc mắc phổ biến nhất về công nghệ đo khổ tự động.',
            date: '2025-12-28',
            readTime: '4 phút đọc',
            image: '/images/icon-accuracy.png',
        },
        {
            id: 5,
            category: 'Tutorial',
            categoryVi: 'Hướng Dẫn',
            title: 'Cách Đọc Và Phân Tích Cp/Cpk Trong SPC',
            titleEn: 'How to Read and Analyze Cp/Cpk in SPC',
            excerpt: 'Hướng dẫn chi tiết về cách hiểu và sử dụng chỉ số SPC để cải thiện chất lượng.',
            date: '2025-12-20',
            readTime: '7 phút đọc',
            image: '/images/icon-iot.png',
        },
        {
            id: 6,
            category: 'Product Update',
            categoryVi: 'Cập Nhật Sản Phẩm',
            title: 'SML-100 v2.0: Những Tính Năng Mới',
            titleEn: 'SML-100 v2.0: New Features',
            excerpt: 'Khám phá những cải tiến và tính năng mới trong phiên bản 2.0 của SML-100.',
            date: '2025-12-15',
            readTime: '5 phút đọc',
            image: '/images/icon-support.png',
        },
    ]

    return (
        <main>
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-white section-padding">
                <div className="container-custom">
                    <h1 className="heading-2 mb-4">Kiến Thức / Knowledge</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        Kiến thức chuyên môn, hướng dẫn kỹ thuật, và xu hướng ngành
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                {/* Image */}
                                <div className="aspect-video bg-gray-200 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                                            {article.categoryVi}
                                        </span>
                                        <span className="text-xs text-gray-500">{article.readTime}</span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold mb-2 line-clamp-2 hover:text-accent transition-colors">
                                        {article.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">
                                            {new Date(article.date).toLocaleDateString('vi-VN')}
                                        </span>
                                        <button className="text-accent hover:text-accent-hover font-medium">
                                            Đọc thêm →
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="btn-secondary">
                            Xem Thêm Bài Viết
                        </button>
                    </div>
                </div>
            </div>

            {/* Newsletter Subscribe */}
            <div className="section-padding bg-white">
                <div className="container-custom max-w-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Đăng Ký Nhận Bản Tin
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Nhận kiến thức mới, case study, và updates từ SML TECH
                    </p>

                    <form className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Email của bạn"
                            className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent"
                        />
                        <button type="submit" className="btn-primary">
                            Đăng Ký
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    )
}
