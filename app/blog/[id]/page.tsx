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

                    {articleId === '1' ? <Article1 /> : articleId === '2' ? <Article2 /> : <Article1 />}

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

function Article1() {
    const { language } = useLanguage()

    return (
        <>
            <header className="mb-12">
                <div className="text-accent text-sm font-semibold mb-3 uppercase tracking-wide">
                    {language === 'vi' ? 'Hướng Dẫn Kỹ Thuật' : 'Technical Guide'}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {language === 'vi'
                        ? 'Cách Tính Lãng Phí Nguyên Liệu Trong Sản Xuất Màng Nhựa'
                        : 'How to Calculate Material Waste in Plastic Film Production'
                    }
                </h1>
                <div className="flex items-center text-gray-600 text-sm space-x-4 pb-6 border-b">
                    <span className="flex items-center">
                        <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-2">👤</span>
                        {language === 'vi' ? 'Nguyễn Văn A - CTO SML TECH' : 'Nguyen Van A - CTO SML TECH'}
                    </span>
                    <span>•</span>
                    <span>📅 15/01/2026</span>
                    <span>•</span>
                    <span>⏱️ {language === 'vi' ? '5 phút đọc' : '5 min read'}</span>
                </div>
            </header>

            <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                    {language === 'vi' ? 'Giới Thiệu' : 'Introduction'}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    {language === 'vi'
                        ? 'Lãng phí nguyên liệu là một trong những vấn đề lớn nhất trong sản xuất màng nhựa. Theo thống kê, nhà máy trung bình có thể lãng phí từ 5-8% nguyên liệu do kiểm soát khổ màng không chính xác.'
                        : 'Material waste is one of the biggest issues in plastic film production. According to statistics, the average factory can waste 5-8% of materials due to inaccurate film width control.'
                    }
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <p className="text-blue-900 font-semibold mb-2">
                        💡 {language === 'vi' ? 'Điều Bạn Cần Biết' : 'What You Need to Know'}
                    </p>
                    <p className="text-blue-800">
                        {language === 'vi'
                            ? 'Với sản lượng 100 tấn/tháng và lãng phí 6%, bạn đang mất 150 triệu VNĐ/tháng = 1.8 tỷ VNĐ/năm!'
                            : 'With 100 tons/month production and 6% waste, you are losing VND 150 million/month = VND 1.8 billion/year!'
                        }
                    </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                    {language === 'vi' ? 'Công Thức Tính Lãng Phí' : 'Waste Calculation Formula'}
                </h2>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    1. {language === 'vi' ? 'Lãng Phí Do Sai Lệch Khổ Màng' : 'Waste Due to Width Deviation'}
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <p className="font-mono text-lg mb-4">
                        {language === 'vi'
                            ? 'Lãng phí (%) = ((Khổ thực tế - Khổ yêu cầu) / Khổ yêu cầu) × 100'
                            : 'Waste (%) = ((Actual width - Required width) / Required width) × 100'
                        }
                    </p>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    2. {language === 'vi' ? 'Ví Dụ Thực Tế' : 'Real Example'}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                        <p className="text-sm font-semibold text-gray-500 mb-2">
                            {language === 'vi' ? 'Sản lượng' : 'Production'}
                        </p>
                        <p className="text-3xl font-bold text-primary">
                            {language === 'vi' ? '100 tấn/tháng' : '100 tons/month'}
                        </p>
                    </div>
                    <div className="bg-white border-2 border-red-200 rounded-lg p-6">
                        <p className="text-sm font-semibold text-gray-500 mb-2">
                            {language === 'vi' ? 'Lãng phí (6%)' : 'Waste (6%)'}
                        </p>
                        <p className="text-3xl font-bold text-red-600">
                            {language === 'vi' ? '6,000 kg/tháng' : '6,000 kg/month'}
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                    {language === 'vi' ? 'Giải Pháp: Hệ Thống Đo Tự Động SML TECH' : 'Solution: SML TECH Automated System'}
                </h2>

                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 my-8 border-2 border-accent">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        {language === 'vi' ? 'Lợi Ích Vượt Trội' : 'Outstanding Benefits'}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-4xl mb-4">🎯</div>
                            <h4 className="font-bold mb-2">
                                {language === 'vi' ? 'Đo Liên Tục 24/7' : '24/7 Continuous Measurement'}
                            </h4>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>✓ {language === 'vi' ? 'Phát hiện sai lệch ngay' : 'Immediate deviation detection'}</li>
                                <li>✓ {language === 'vi' ? 'Cảnh báo tự động' : 'Automatic alerts'}</li>
                                <li>✓ {language === 'vi' ? 'Không cần thủ công' : 'No manual intervention'}</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-4xl mb-4">📏</div>
                            <h4 className="font-bold mb-2">
                                {language === 'vi' ? 'Chính Xác ±0.5mm' : 'Accuracy ±0.5mm'}
                            </h4>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>✓ {language === 'vi' ? 'Giảm sai số' : 'Reduce errors'}</li>
                                <li>✓ {language === 'vi' ? 'Nhất quán chất lượng' : 'Consistent quality'}</li>
                                <li>✓ {language === 'vi' ? 'Dữ liệu tin cậy' : 'Reliable data'}</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-4xl mb-4">☁️</div>
                            <h4 className="font-bold mb-2">IoT/ERP</h4>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>✓ {language === 'vi' ? 'Dashboard real-time' : 'Real-time dashboard'}</li>
                                <li>✓ {language === 'vi' ? 'Báo cáo tự động' : 'Automated reports'}</li>
                                <li>✓ {language === 'vi' ? 'Phân tích xu hướng' : 'Trend analysis'}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    📈 {language === 'vi' ? 'Case Study Thực Tế' : 'Real Case Study'}
                </h3>
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 my-6">
                    <p className="font-bold text-xl mb-4">
                        {language === 'vi' ? 'Nhà máy ABC Plastics' : 'ABC Plastics Factory'}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-gray-700 mb-2">
                                {language === 'vi' ? 'Sản lượng: 120 tấn/tháng' : 'Production: 120 tons/month'}
                            </p>
                            <p className="text-red-600 mb-2 line-through">
                                {language === 'vi' ? 'Lãng phí trước: 6.8%' : 'Before waste: 6.8%'}
                            </p>
                            <p className="text-green-600 font-bold mb-2">
                                {language === 'vi' ? 'Lãng phí sau: 2.1%' : 'After waste: 2.1%'}
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <p className="text-sm text-gray-600">
                                {language === 'vi' ? 'Tiết kiệm hàng tháng' : 'Monthly savings'}
                            </p>
                            <p className="text-3xl font-bold text-green-600">
                                {language === 'vi' ? '85 triệu VNĐ' : 'VND 85 million'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Article2() {
    const { language } = useLanguage()

    return (
        <>
            <header className="mb-12">
                <div className="text-accent text-sm font-semibold mb-3 uppercase tracking-wide">
                    Case Study
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {language === 'vi'
                        ? 'Nhà Máy ABC Tiết Kiệm 85 Triệu/Tháng Với SML TECH'
                        : 'ABC Factory Saves VND 85 Million/Month With SML TECH'
                    }
                </h1>
                <div className="flex items-center text-gray-600 text-sm space-x-4 pb-6 border-b">
                    <span className="flex items-center">
                        <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-2">👤</span>
                        SML TECH Team
                    </span>
                    <span>•</span>
                    <span>📅 10/01/2026</span>
                    <span>•</span>
                    <span>⏱️ {language === 'vi' ? '8 phút đọc' : '8 min read'}</span>
                </div>
            </header>

            <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mt-12 mb-6">
                    {language === 'vi' ? 'Tổng Quan Dự Án' : 'Project Overview'}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">
                                {language === 'vi' ? 'Khách hàng' : 'Customer'}
                            </p>
                            <p className="font-semibold text-lg">
                                {language === 'vi' ? 'Nhà máy ABC Plastics' : 'ABC Plastics Factory'}
                            </p>
                            <p className="text-gray-600">
                                {language === 'vi' ? 'Bình Dương, Việt Nam' : 'Binh Duong, Vietnam'}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">
                                {language === 'vi' ? 'Ngành nghề' : 'Industry'}
                            </p>
                            <p className="font-semibold text-lg">
                                {language === 'vi' ? 'Sản xuất màng PE' : 'PE film production'}
                            </p>
                            <p className="text-gray-600">
                                {language === 'vi' ? 'Bao bì công nghiệp' : 'Industrial packaging'}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">
                                {language === 'vi' ? 'Sản lượng' : 'Production'}
                            </p>
                            <p className="font-semibold text-lg text-accent">
                                {language === 'vi' ? '120 tấn/tháng' : '120 tons/month'}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">
                                {language === 'vi' ? 'Triển khai' : 'Deployment'}
                            </p>
                            <p className="font-semibold text-lg">
                                {language === 'vi' ? 'Tháng 9/2025' : 'September 2025'}
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                    {language === 'vi' ? 'Kết Quả Sau 3 Tháng' : 'Results After 3 Months'}
                </h2>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-500 mb-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        {language === 'vi' ? 'So Sánh Trước & Sau' : 'Before & After Comparison'}
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-300">
                                    <th className="text-left p-3">
                                        {language === 'vi' ? 'Chỉ số' : 'Metric'}
                                    </th>
                                    <th className="text-center p-3 text-red-600">
                                        {language === 'vi' ? 'Trước' : 'Before'}
                                    </th>
                                    <th className="text-center p-3 text-green-600">
                                        {language === 'vi' ? 'Sau' : 'After'}
                                    </th>
                                    <th className="text-center p-3 text-blue-600">
                                        {language === 'vi' ? 'Cải thiện' : 'Improvement'}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3 font-medium">
                                        {language === 'vi' ? 'Lãng phí trung bình' : 'Average waste'}
                                    </td>
                                    <td className="text-center p-3 text-red-600 font-bold">6.8%</td>
                                    <td className="text-center p-3 text-green-600 font-bold">2.1%</td>
                                    <td className="text-center p-3 text-blue-600 font-bold">-69%</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="p-3 font-bold">
                                        {language === 'vi' ? 'Chi phí lãng phí' : 'Waste cost'}
                                    </td>
                                    <td className="text-center p-3 text-red-600 font-bold">
                                        {language === 'vi' ? '130 tr' : 'VND 130M'}
                                    </td>
                                    <td className="text-center p-3 text-green-600 font-bold">
                                        {language === 'vi' ? '40 tr' : 'VND 40M'}
                                    </td>
                                    <td className="text-center p-3 text-blue-600 font-bold text-xl">
                                        {language === 'vi' ? '-90 tr' : '-VND 90M'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    📊 {language === 'vi' ? 'ROI Thực Tế' : 'Actual ROI'}
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-red-500">
                        <p className="text-sm text-gray-500 mb-1">
                            {language === 'vi' ? 'Chi phí đầu tư' : 'Investment'}
                        </p>
                        <p className="text-3xl font-bold text-red-600">
                            {language === 'vi' ? '75 triệu' : 'VND 75M'}
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                            {language === 'vi' ? 'Hệ thống + Lắp đặt' : 'System + Installation'}
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
                        <p className="text-sm text-gray-500 mb-1">
                            {language === 'vi' ? 'Tiết kiệm/tháng' : 'Savings/month'}
                        </p>
                        <p className="text-3xl font-bold text-green-600">
                            {language === 'vi' ? '100 triệu' : 'VND 100M'}
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                            {language === 'vi' ? 'Giảm lãng phí + phế phẩm' : 'Reduced waste + defects'}
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
                        <p className="text-sm text-gray-500 mb-1">
                            {language === 'vi' ? 'Hoàn vốn' : 'Payback'}
                        </p>
                        <p className="text-3xl font-bold text-blue-600">
                            {language === 'vi' ? '22.5 ngày' : '22.5 days'}
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                            {language === 'vi' ? '< 1 tháng!' : '< 1 month!'}
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <p className="text-blue-900 font-bold text-xl mb-3">
                        💰 {language === 'vi' ? 'Tiết kiệm năm đầu tiên' : 'First year savings'}
                    </p>
                    <p className="text-4xl font-bold text-blue-600">
                        {language === 'vi' ? '1.125 tỷ VNĐ' : 'VND 1.125 billion'}
                    </p>
                    <p className="text-sm text-blue-800 mt-2">
                        (100 {language === 'vi' ? 'triệu × 12 tháng - 75 triệu đầu tư' : 'M × 12 months - 75M investment'})
                    </p>
                </div>
            </div>
        </>
    )
}
