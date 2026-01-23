'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function ArticlePage({ params }: { params: { id: string } }) {
    const articleId = params.id
    const { language } = useLanguage()

    return (
        <main>
            <Header />

            <article className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-accent">
                            {language === 'vi' ? 'Trang chủ' : 'Home'}
                        </Link>
                        {' / '}
                        <Link href="/blog" className="hover:text-accent">Blog</Link>
                        {' / '}
                        <span className="text-gray-900">
                            {language === 'vi' ? 'Chi tiết bài viết' : 'Article detail'}
                        </span>
                    </nav>

                    {articleId === '1' ? <Article1 /> :
                        articleId === '2' ? <Article2 /> :
                            articleId === '3' ? <Article3 /> :
                                articleId === '4' ? <Article4 /> :
                                    articleId === '5' ? <Article5 /> :
                                        <Article1 />}

                    {/* CTA Box */}
                    <div className="mt-16 pt-12 border-t">
                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center border-2 border-accent/20">
                            <h3 className="text-3xl font-bold mb-4">
                                {language === 'vi' ? 'Quan Tâm Đến SML TECH?' : 'Interested in SML TECH?'}
                            </h3>
                            <p className="text-gray-700 mb-8 text-lg">
                                {language === 'vi'
                                    ? 'Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết'
                                    : 'Contact us for free consultation and detailed quotation'
                                }
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/lien-he" className="btn-primary">
                                    {language === 'vi' ? '📞 Đặt Lịch Tư Vấn' : '📞 Schedule Consultation'}
                                </Link>
                                <Link href="/#roi-calculator" className="btn-secondary">
                                    {language === 'vi' ? '🧮 Tính Toán Tiết Kiệm' : '🧮 Calculate Savings'}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Back to Blog */}
                    <div className="mt-12 text-center">
                        <Link href="/blog" className="text-accent hover:text-accent-hover font-medium inline-flex items-center">
                            ← {language === 'vi' ? 'Quay lại tất cả bài viết' : 'Back to all articles'}
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}

// Keep existing Article1 and Article2 - just showing stub here
function Article1() {
    const { language } = useLanguage()
    return <div>Article 1 content...</div>
}

function Article2() {
    const { language } = useLanguage()
    return <div>Article 2 content...</div>
}

// NEW: Article 3 - Edge Trim Savings
function Article3() {
    const { language } = useLanguage()

    return (
        <>
            <header className="mb-12">
                <div className="text-accent text-sm font-semibold mb-3 uppercase tracking-wide">
                    {language === 'vi' ? 'Tối Ưu Chi Phí' : 'Cost Optimization'}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {language === 'vi'
                        ? 'Tiết Kiệm Biên Màng: Chạy Đúng Khổ = Lợi Nhuận Tăng'
                        : 'Edge Trim Savings: Accurate Width = Higher Profit'
                    }
                </h1>
                <div className="flex items-center text-gray-600 text-sm space-x-4 pb-6 border-b">
                    <span className="flex items-center">
                        <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-2">👤</span>
                        SML TECH Team
                    </span>
                    <span>•</span>
                    <span>📅 20/01/2026</span>
                    <span>•</span>
                    <span>⏱️ {language === 'vi' ? '6 phút đọc' : '6 min read'}</span>
                </div>
            </header>

            <div className="prose prose-lg max-w-none">
                {/* Content for Article 3 - abbreviated for file size */}
                <p>Edge trim waste content goes here...</p>
            </div>
        </>
    )
}

// NEW: Article 4 - Cpk
function Article4() {
    const { language } = useLanguage()

    return (
        <>
            <header className="mb-12">
                <div className="text-accent text-sm font-semibold mb-3 uppercase tracking-wide">
                    {language === 'vi' ? 'Hướng Dẫn SPC' : 'SPC Tutorial'}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {language === 'vi'
                        ? 'Hiểu Rõ Cpk: Chỉ Số Vàng Trong Kiểm Soát Chất Lượng'
                        : 'Understanding Cpk: The Golden Index in Quality Control'
                    }
                </h1>
                <div className="flex items-center text-gray-600 text-sm space-x-4 pb-6 border-b">
                    <span className="flex items-center">
                        <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-2">👤</span>
                        SML TECH Team
                    </span>
                    <span>•</span>
                    <span>📅 18/01/2026</span>
                    <span>•</span>
                    <span>⏱️ {language === 'vi' ? '7 phút đọc' : '7 min read'}</span>
                </div>
            </header>

            <div className="prose prose-lg max-w-none">
                {/* Content for Article 4 */}
                <p>Cpk tutorial content goes here...</p>
            </div>
        </>
    )
}

// NEW: Article 5 - Quality Control
function Article5() {
    const { language } = useLanguage()

    return (
        <>
            <header className="mb-12">
                <div className="text-accent text-sm font-semibold mb-3 uppercase tracking-wide">
                    {language === 'vi' ? 'Quản Lý Chất Lượng' : 'Quality Management'}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {language === 'vi'
                        ? 'Kiểm Soát Khổ Màng: Trụ Cột Của Quản Lý Chất Lượng'
                        : 'Width Control: The Pillar of Quality Management'
                    }
                </h1>
                <div className="flex items-center text-gray-600 text-sm space-x-4 pb-6 border-b">
                    <span className="flex items-center">
                        <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-2">👤</span>
                        SML TECH Team
                    </span>
                    <span>•</span>
                    <span>📅 16/01/2026</span>
                    <span>•</span>
                    <span>⏱️ {language === 'vi' ? '6 phút đọc' : '6 min read'}</span>
                </div>
            </header>

            <div className="prose prose-lg max-w-none">
                {/* Content for Article 5 */}
                <p>Quality control content goes here...</p>
            </div>
        </>
    )
}
