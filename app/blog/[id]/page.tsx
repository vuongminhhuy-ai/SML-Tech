import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

// Article database - In production, fetch from CMS/database
const articlesDatabase: { [key: string]: any } = {
    '1': {
        title: 'Cách Tính Lãng Phí Nguyên Liệu Trong Sản Xuất Màng Nhựa',
        titleEn: 'How to Calculate Material Waste in Plastic Film Production',
        category: 'Hướng Dẫn Kỹ Thuật',
        date: '2026-01-15',
        author: 'Nguyễn Văn A - CTO SML TECH',
        readTime: '5 phút đọc',
    },
    '2': {
        title: 'Nhà Máy ABC Tiết Kiệm 85 Triệu/Tháng Với SML TECH',
        titleEn: 'Factory ABC Saves 85 Million/Month With SML TECH',
        category: 'Case Study',
        date: '2026-01-10',
        author: 'SML TECH Team',
        readTime: '8 phút đọc',
    },
}

export default function ArticlePage({ params }: { params: { id: string } }) {
    const articleId = params.id
    const article = articlesDatabase[articleId] || articlesDatabase['1']

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
                        <span className="text-gray-900">{article.category}</span>
                    </nav>

                    {/* Article Header */}
                    <header className="mb-12">
                        <div className="text-accent text-sm font-semibold mb-3 uppercase tracking-wide">
                            {article.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
                        <div className="flex items-center text-gray-600 text-sm space-x-4 pb-6 border-b">
                            <span className="flex items-center">
                                <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-2">👤</span>
                                {article.author}
                            </span>
                            <span>•</span>
                            <span>📅 {new Date(article.date).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                            <span>•</span>
                            <span>⏱️ {article.readTime}</span>
                        </div>
                    </header>

                    {/* Article Content */}
                    {articleId === '1' && <Article1Content />}
                    {articleId === '2' && <Article2Content />}
                    {!['1', '2'].includes(articleId) && <Article1Content />}

                    {/* CTA Box */}
                    <div className="mt-16 pt-12 border-t">
                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center border-2 border-accent/20">
                            <h3 className="text-3xl font-bold mb-4">
                                Quan Tâm Đến SML TECH?
                            </h3>
                            <p className="text-gray-700 mb-8 text-lg">
                                Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/lien-he" className="btn-primary">
                                    📞 Đặt Lịch Tư Vấn
                                </Link>
                                <Link href="/#roi-calculator" className="btn-secondary">
                                    🧮 Tính Toán Tiết Kiệm
                                </Link>
                            </div>
                        </div>
                    </div>

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

// Article 1 Full Content
function Article1Content() {
    return (
        <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-12 mb-6">Giới Thiệu</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                Lãng phí nguyên liệu là một trong những vấn đề lớn nhất trong sản xuất màng nhựa.
                Theo thống kê, nhà máy trung bình có thể lãng phí từ <strong>5-8% nguyên liệu</strong> do
                kiểm soát khổ màng không chính xác.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <p className="text-blue-900 font-semibold mb-2">💡 Điều Bạn Cần Biết</p>
                <p className="text-blue-800">
                    Với sản lượng 100 tấn/tháng và lãng phí 6%, bạn đang mất <strong className="text-blue-900">150 triệu VNĐ/tháng</strong>
                    = <strong className="text-blue-900">1.8 tỷ VNĐ/năm</strong>!
                </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Công Thức Tính Lãng Phí</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Lãng Phí Do Sai Lệch Khổ Màng</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="font-mono text-lg mb-4">
                    Lãng phí (%) = ((Khổ thực tế - Khổ yêu cầu) / Khổ yêu cầu) × 100
                </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <p className="font-semibold mb-3">📊 Ví dụ thực tế:</p>
                <ul className="space-y-2 text-gray-700">
                    <li>• Khổ yêu cầu: <strong>850mm</strong></li>
                    <li>• Khổ thực tế: <strong>860mm</strong></li>
                    <li>• Lãng phí = ((860 - 850) / 850) × 100 = <strong className="text-red-600">1.18%</strong></li>
                </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Tính Tổng Lãng Phí Hàng Tháng</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="font-mono text-lg">
                    Lãng phí (kg/tháng) = Sản lượng (kg) × % Lãng phí
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Sản lượng</p>
                    <p className="text-3xl font-bold text-primary">100 tấn/tháng</p>
                </div>
                <div className="bg-white border-2 border-red-200 rounded-lg p-6">
                    <p className="text-sm font-semibold text-gray-500 mb-2">Lãng phí (6%)</p>
                    <p className="text-3xl font-bold text-red-600">6,000 kg/tháng</p>
                </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Tính Chi Phí Lãng Phí</h3>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl my-8 border-2 border-red-200">
                <div className="text-center">
                    <p className="text-gray-600 mb-2">Chi phí lãng phí hàng tháng</p>
                    <p className="text-5xl font-bold text-red-600 mb-4">150 triệu VNĐ</p>
                    <p className="text-gray-600 mb-2">Chi phí lãng phí hàng năm</p>
                    <p className="text-6xl font-bold text-red-700">1.8 tỷ VNĐ</p>
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Các Nguyên Nhân Lãng Phí</h2>

            <div className="space-y-6">
                <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-red-500">
                    <h4 className="font-bold text-xl mb-3">❌ 1. Đo lường không chính xác</h4>
                    <ul className="space-y-2 text-gray-700 ml-6">
                        <li>• Đo bằng thước tay - sai số cao</li>
                        <li>• Tần suất đo thấp - không kịp thời</li>
                        <li>• Sai số con người - không nhất quán</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-500">
                    <h4 className="font-bold text-xl mb-3">⚠️ 2. Thiết lập máy không tối ưu</h4>
                    <ul className="space-y-2 text-gray-700 ml-6">
                        <li>• Nhiệt độ không đồng đều</li>
                        <li>• Tốc độ kéo chưa chuẩn</li>
                        <li>• Áp suất thổi không ổn định</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-yellow-500">
                    <h4 className="font-bold text-xl mb-3">⚡ 3. Thiếu giám sát liên tục</h4>
                    <ul className="space-y-2 text-gray-700 ml-6">
                        <li>• Không phát hiện kịp thời</li>
                        <li>• Sản xuất phế phẩm kéo dài</li>
                        <li>• Mất thời gian điều chỉnh</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Giải Pháp: Hệ Thống Đo Tự Động SML TECH</h2>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 my-8 border-2 border-accent">
                <h3 className="text-2xl font-bold mb-6 text-center">Lợi Ích Vượt Trội</h3>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <div className="text-4xl mb-4">🎯</div>
                        <h4 className="font-bold mb-2">Đo Liên Tục 24/7</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>✓ Phát hiện sai lệch ngay</li>
                            <li>✓ Cảnh báo tự động</li>
                            <li>✓ Không cần thủ công</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <div className="text-4xl mb-4">📏</div>
                        <h4 className="font-bold mb-2">Chính Xác ±0.5mm</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>✓ Giảm sai số</li>
                            <li>✓ Nhất quán chất lượng</li>
                            <li>✓ Dữ liệu tin cậy</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <div className="text-4xl mb-4">☁️</div>
                        <h4 className="font-bold mb-2">IoT/ERP Tích Hợp</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>✓ Dashboard real-time</li>
                            <li>✓ Báo cáo tự động</li>
                            <li>✓ Phân tích xu hướng</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">📈 Case Study Thực Tế</h3>
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 my-6">
                <p className="font-bold text-xl mb-4">Nhà máy ABC Plastics</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-700 mb-2">Sản lượng: 120 tấn/tháng</p>
                        <p className="text-red-600 mb-2 line-through">Lãng phí trước: 6.8%</p>
                        <p className="text-green-600 font-bold mb-2">Lãng phí sau: 2.1%</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600">Tiết kiệm hàng tháng</p>
                        <p className="text-3xl font-bold text-green-600">85 triệu VNĐ</p>
                        <p className="text-xs text-gray-500 mt-1">= 4.7% nguyên liệu</p>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Kết Luận</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                Việc tính toán chính xác lãng phí là bước đầu tiên để cải thiện hiệu suất sản xuất.
                Với hệ thống đo tự động, nhà máy có thể:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
                    <span className="text-green-600 text-2xl">✓</span>
                    <div>
                        <p className="font-semibold">Giảm lãng phí 50-70%</p>
                        <p className="text-sm text-gray-600">Từ 6-8% xuống 2-3%</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
                    <span className="text-green-600 text-2xl">✓</span>
                    <div>
                        <p className="font-semibold">Tiết kiệm hàng trăm triệu</p>
                        <p className="text-sm text-gray-600">ROI trong 6-12 tháng</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
                    <span className="text-green-600 text-2xl">✓</span>
                    <div>
                        <p className="font-semibold">Nâng cao chất lượng</p>
                        <p className="text-sm text-gray-600">Cp/Cpk đạt chuẩn ISO</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
                    <span className="text-green-600 text-2xl">✓</span>
                    <div>
                        <p className="font-semibold">Tăng tính cạnh tranh</p>
                        <p className="text-sm text-gray-600">Giảm giá thành sản phẩm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Article 2 Full Content  
function Article2Content() {
    return (
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
                    <div>
                        <p className="text-sm text-gray-500">Sản lượng</p>
                        <p className="font-semibold text-lg text-accent">120 tấn/tháng</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Triển khai</p>
                        <p className="font-semibold text-lg">Tháng 9/2025</p>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Vấn Đề Ban Đầu</h2>

            <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                    <h4 className="font-bold text-xl mb-3 text-red-900">1. Lãng Phí Nguyên Liệu Cao</h4>
                    <ul className="space-y-2 text-red-800">
                        <li>• Lãng phí trung bình: <strong>6.8%</strong></li>
                        <li>• Chi phí: <strong>130 triệu VNĐ/tháng</strong></li>
                        <li>• Nguyên nhân: Đo thủ công không chính xác</li>
                    </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                    <h4 className="font-bold text-xl mb-3 text-yellow-900">2. Chất Lượng Không Đồng Đều</h4>
                    <ul className="space-y-2 text-yellow-800">
                        <li>• Khổ màng dao động ±5mm</li>
                        <li>• Khách hàng khiếu nại thường xuyên</li>
                        <li>• Tỷ lệ phế phẩm cao</li>
                    </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                    <h4 className="font-bold text-xl mb-3 text-orange-900">3. Thiếu Dữ Liệu Quản Lý</h4>
                    <ul className="space-y-2 text-orange-800">
                        <li>• Không có báo cáo SPC</li>
                        <li>• Khó đáp ứng ISO 9001</li>
                        <li>• Không theo dõi được xu hướng</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Kết Quả Sau 3 Tháng</h2>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-500 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">So Sánh Trước & Sau</h3>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 border-gray-300">
                                <th className="text-left p-3">Chỉ số</th>
                                <th className="text-center p-3 text-red-600">Trước</th>
                                <th className="text-center p-3 text-green-600">Sau</th>
                                <th className="text-center p-3 text-blue-600">Cải thiện</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3 font-medium">Lãng phí trung bình</td>
                                <td className="text-center p-3 text-red-600 font-bold">6.8%</td>
                                <td className="text-center p-3 text-green-600 font-bold">2.1%</td>
                                <td className="text-center p-3 text-blue-600 font-bold">-69%</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-3 font-medium">Lãng phí (kg/tháng)</td>
                                <td className="text-center p-3 text-red-600">8,160 kg</td>
                                <td className="text-center p-3 text-green-600">2,520 kg</td>
                                <td className="text-center p-3 text-blue-600">-5,640 kg</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3 font-bold">Chi phí lãng phí</td>
                                <td className="text-center p-3 text-red-600 font-bold">130 tr</td>
                                <td className="text-center p-3 text-green-600 font-bold">40 tr</td>
                                <td className="text-center p-3 text-blue-600 font-bold text-xl">-90 tr</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">📊 ROI Thực Tế</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-red-500">
                    <p className="text-sm text-gray-500 mb-1">Chi phí đầu tư</p>
                    <p className="text-3xl font-bold text-red-600">75 triệu</p>
                    <p className="text-xs text-gray-600 mt-2">Hệ thống + Lắp đặt</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
                    <p className="text-sm text-gray-500 mb-1">Tiết kiệm/tháng</p>
                    <p className="text-3xl font-bold text-green-600">100 triệu</p>
                    <p className="text-xs text-gray-600 mt-2">Giảm lãng phí + phế phẩm</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
                    <p className="text-sm text-gray-500 mb-1">Hoàn vốn</p>
                    <p className="text-3xl font-bold text-blue-600">22.5 ngày</p>
                    <p className="text-xs text-gray-600 mt-2">< 1 tháng!</p>
                </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <p className="text-blue-900 font-bold text-xl mb-3">💰 Tiết kiệm năm đầu tiên</p>
                <p className="text-4xl font-bold text-blue-600">1.125 tỷ VNĐ</p>
                <p className="text-sm text-blue-800 mt-2">(100 triệu × 12 tháng - 75 triệu đầu tư)</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Phản Hồi Từ Khách Hàng</h2>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border-l-4 border-accent mb-8">
                <div className="flex items-start space-x-4">
                    <div className="text-6xl">💬</div>
                    <div>
                        <p className="text-xl italic text-gray-700 mb-4">
                            "Chúng tôi rất hài lòng với SML TECH. Không chỉ tiết kiệm chi phí mà còn nâng cao chất lượng sản phẩm.
                            Đầu tư này hoàn vốn nhanh hơn cả mong đợi. Đội ngũ support rất nhiệt tình, phản hồi nhanh chóng!"
                        </p>
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-2xl">👤</div>
                            <div>
                                <p className="font-bold">Ông Nguyễn Văn A</p>
                                <p className="text-sm text-gray-600">Giám Đốc Kỹ Thuật, ABC Plastics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Bài Học Kinh Nghiệm</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-accent">
                    <p className="font-bold mb-2">1. Đo lường là then chốt</p>
                    <p className="text-gray-600 text-sm">Không thể quản lý cái không đo được</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-accent">
                    <p className="font-bold mb-2">2. ROI nhanh</p>
                    <p className="text-gray-600 text-sm">Công nghệ tốt hoàn vốn trong vài tháng</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-accent">
                    <p className="font-bold mb-2">3. Dữ liệu là tài sản</p>
                    <p className="text-gray-600 text-sm">Dashboard giúp ra quyết định nhanh chóng</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-accent">
                    <p className="font-bold mb-2">4. Hỗ trợ local quan trọng</p>
                    <p className="text-gray-600 text-sm">SML TECH phản hồi < 4 giờ tại VN</p>
                </div>
            </div>
        </div>
    )
}
