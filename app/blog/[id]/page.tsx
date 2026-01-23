import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ArticlePage({ params }: { params: { id: string } }) {
    const articleId = params.id

    // Simple conditional rendering based on ID
    return (
        <main>
            <Header />

            <article className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-accent">Trang chủ</Link>
                        {' / '}
                        <Link href="/blog" className="hover:text-accent">Blog</Link>
                        {' / '}
                        <span className="text-gray-900">Chi tiết bài viết</span>
                    </nav>

                    {articleId === '1' ? <Article1 /> : articleId === '2' ? <Article2 /> : <Article1 />}

                    {/* Back to Blog */}
                    <div className="mt-12 text-center">
                        <Link href="/blog" className="text-accent hover:text-accent-hover font-medium inline-flex items-center">
                            ← Quay lại tất cả bài viết
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}

function Article1() {
    return (
        <>
            <header className="mb-12">
                <div className="text-accent text-sm font-semibold mb-3 uppercase tracking-wide">
                    Hướng Dẫn Kỹ Thuật
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Cách Tính Lãng Phí Nguyên Liệu Trong Sản Xuất Màng Nhựa
                </h1>
                <div className="flex items-center text-gray-600 text-sm space-x-4 pb-6 border-b">
                    <span className="flex items-center">
                        <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-2">👤</span>
                        Nguyễn Văn A - CTO SML TECH
                    </span>
                    <span>•</span>
                    <span>📅 15/01/2026</span>
                    <span>•</span>
                    <span>⏱️ 5 phút đọc</span>
                </div>
            </header>

            <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mt-12 mb-6">Giới Thiệu</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Lãng phí nguyên liệu là một trong những vấn đề lớn nhất trong sản xuất màng nhựa. Theo thống kê, nhà máy trung bình có thể lãng phí từ <strong>5-8% nguyên liệu</strong> do kiểm soát khổ màng không chính xác.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <p className="text-blue-900 font-semibold mb-2">💡 Điều Bạn Cần Biết</p>
                    <p className="text-blue-800">
                        Với sản lượng 100 tấn/tháng và lãng phí 6%, bạn đang mất <strong className="text-blue-900">150 triệu VNĐ/tháng</strong> = <strong className="text-blue-900">1.8 tỷ VNĐ/năm</strong>!
                    </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-center">
                    ✅ Bài viết đã hiển thị thành công
                </h2>

                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 my-8 text-center">
                    <p className="text-xl font-bold mb-4">Nội dung chi tiết sẽ được bổ sung sau khi deploy thành công</p>
                    <Link href="/lien-he" className="btn-primary inline-block">
                        Liên Hệ Tư Vấn
                    </Link>
                </div>
            </div>
        </>
    )
}

function Article2() {
    return (
        <>
            <header className="mb-12">
                <div className="text-accent text-sm font-semibold mb-3 uppercase tracking-wide">
                    Case Study
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Nhà Máy ABC Tiết Kiệm 85 Triệu/Tháng Với SML TECH
                </h1>
                <div className="flex items-center text-gray-600 text-sm space-x-4 pb-6 border-b">
                    <span className="flex items-center">
                        <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-2">👤</span>
                        SML TECH Team
                    </span>
                    <span>•</span>
                    <span>📅 10/01/2026</span>
                    <span>•</span>
                    <span>⏱️ 8 phút đọc</span>
                </div>
            </header>

            <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mt-12 mb-6">Tổng Quan Dự Án</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">Khách hàng</p>
                            <p className="font-semibold text-lg">Nhà máy ABC Plastics</p>
                            <p className="text-gray-600">Bình Dương, Việt Nam</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Ngành nghề</p>
                            <p className="font-semibold text-lg">Sản xuất màng PE</p>
                            <p className="text-gray-600">Bao bì công nghiệp</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-center">
                    ✅ Case Study đã hiển thị thành công
                </h2>

                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 my-8 text-center">
                    <p className="text-xl font-bold mb-4">Nội dung chi tiết sẽ được bổ sung sau khi deploy thành công</p>
                    <Link href="/lien-he" className="btn-primary inline-block">
                        Liên Hệ Tư Vấn
                    </Link>
                </div>
            </div>
        </>
    )
}
