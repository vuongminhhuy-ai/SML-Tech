'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/LanguageContext'
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Cpu, ChevronDown } from 'lucide-react'

// Animated counter hook
function useCounter(target: number, duration: number = 2000, suffix: string = '') {
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [started])

    useEffect(() => {
        if (!started) return
        let start = 0
        const step = target / (duration / 16)
        const timer = setInterval(() => {
            start += step
            if (start >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(start))
        }, 16)
        return () => clearInterval(timer)
    }, [started, target, duration])

    return { count, ref }
}

function StatCard({ target, suffix, label, labelEn }: { target: number; suffix: string; label: string; labelEn: string }) {
    const { count, ref } = useCounter(target)
    const { t } = useLanguage()
    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-accent tabular-nums">
                {count}{suffix}
            </div>
            <div className="text-gray-400 text-sm mt-1 font-medium">{t(label, labelEn)}</div>
        </div>
    )
}

export default function HomePage() {
    const { t, language } = useLanguage()
    const [activeIndustry, setActiveIndustry] = useState(0)

    const industries = [
        {
            emoji: '🧴',
            nameVi: 'Nhựa & Màng Bao Bì',
            nameEn: 'Plastics & Packaging',
            descVi: 'Đo khổ màng nhựa PE, PP, PET liên tục 24/7 với độ chính xác ±0.5mm. Cảnh báo tức thì khi khổ lệch chuẩn.',
            descEn: 'Measure PE, PP, PET plastic film width continuously 24/7 with ±0.5mm accuracy. Instant alert when width deviates.',
            href: '/giai-phap/nhua',
            image: '/images/catalog/sensor-top.jpg',
            color: 'from-blue-500 to-cyan-400',
        },
        {
            emoji: '📄',
            nameVi: 'Giấy & Cuộn Carton',
            nameEn: 'Paper & Carton Rolls',
            descVi: 'Đo khổ cuộn giấy đến 3000mm trong môi trường ẩm. Phù hợp giấy in, giấy bao gói, carton sóng công nghiệp.',
            descEn: 'Measure paper roll width up to 3000mm in humid environments. Suitable for printing, packaging paper, corrugated board.',
            href: '/giai-phap/giay',
            image: '/images/catalog/industry-paper.png',
            color: 'from-amber-500 to-yellow-400',
        },
        {
            emoji: '🧵',
            nameVi: 'Vải & Không Dệt',
            nameEn: 'Textiles & Non-woven',
            descVi: 'Cảm biến quang học định vị biên vải siêu chính xác, không tiếp xúc. Phù hợp vải thun, vải lưới, non-woven.',
            descEn: 'Optical sensors locate fabric edges with extreme precision, non-contact. Suitable for elastic, mesh, non-woven fabrics.',
            href: '/giai-phap/vai',
            image: '/images/catalog/industry-textile.png',
            color: 'from-purple-500 to-pink-400',
        },
        {
            emoji: '🔩',
            nameVi: 'Kim Loại & Thép',
            nameEn: 'Metals & Steel',
            descVi: 'Laser chịu nhiệt đo thép cuộn, nhôm cuộn chính xác đến ±0.5mm. An toàn tuyệt đối, không tiếp xúc vật liệu nặng.',
            descEn: 'Heat-resistant laser measures steel and aluminum coils to ±0.5mm. Completely safe, no contact with heavy material.',
            href: '/giai-phap/kim-loai',
            image: '/images/catalog/industry-metal.png',
            color: 'from-gray-500 to-slate-400',
        },
    ]

    const features = [
        {
            icon: <Zap className="w-7 h-7" />,
            titleVi: 'Phản Hồi Tức Thời',
            titleEn: 'Instant Response',
            descVi: 'Dữ liệu cập nhật < 100ms, cảnh báo ngay khi khổ vượt dung sai cài đặt.',
            descEn: 'Data updates < 100ms, immediate alerts when width exceeds set tolerance.',
            color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        },
        {
            icon: <Shield className="w-7 h-7" />,
            titleVi: 'Không Tiếp Xúc',
            titleEn: 'Non-Contact',
            descVi: 'Cảm biến laser/quang học không chạm vật liệu, không gây hỏng hóc hay làm bẩn sản phẩm.',
            descEn: 'Laser/optical sensors do not touch material, no damage or contamination.',
            color: 'bg-green-500/10 text-green-400 border-green-500/20',
        },
        {
            icon: <BarChart3 className="w-7 h-7" />,
            titleVi: 'Dữ Liệu Thời Gian Thực',
            titleEn: 'Real-Time Data',
            descVi: 'Dashboard trực quan hiển thị khổ 2 biên, trend, cảnh báo và xuất báo cáo PDF/Excel.',
            descEn: 'Visual dashboard shows both edge widths, trends, alerts and exports PDF/Excel reports.',
            color: 'bg-accent/10 text-accent border-accent/20',
        },
        {
            icon: <Cpu className="w-7 h-7" />,
            titleVi: 'Tích Hợp Dễ Dàng',
            titleEn: 'Easy Integration',
            descVi: 'Kết nối PLC, SCADA, ERP qua RS485, Modbus, Ethernet — lắp đặt không dừng chuyền.',
            descEn: 'Connect to PLC, SCADA, ERP via RS485, Modbus, Ethernet — install without stopping the line.',
            color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        },
    ]

    const results = [
        { vi: 'Giảm lãng phí nguyên liệu 5–8%', en: 'Reduce material waste 5–8%' },
        { vi: 'Tiết kiệm 85–200 triệu đồng/tháng', en: 'Save 85–200 million VND/month' },
        { vi: 'ROI dương trong 6–12 tháng', en: 'Positive ROI within 6–12 months' },
        { vi: 'Giảm sản phẩm NG xuống dưới 0.5%', en: 'Reduce NG products below 0.5%' },
        { vi: 'Lưu dữ liệu đủ điều kiện ISO/QC', en: 'Data storage meets ISO/QC requirements' },
    ]

    return (
        <main className="min-h-screen bg-[#0a0f1e] text-white overflow-x-hidden">
            <Header />

            {/* ─── HERO ─── */}
            <section className="relative min-h-screen flex items-center">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-main.png"
                        alt="SML TECH Width Measurement"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
                </div>

                {/* Animated grid overlay */}
                <div className="absolute inset-0 z-0 opacity-5"
                    style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                />

                <div className="container-custom relative z-10 py-32">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 text-sm font-medium text-accent mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            {t('Công nghệ đo khổ hàng đầu Việt Nam', 'Leading width measurement technology in Vietnam')}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                            <span className="text-white">{t('Đo Khổ', 'Width')}</span>
                            <br />
                            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
                                {t('Chính Xác', 'Precision')}
                            </span>
                            <br />
                            <span className="text-white">{t('Tự Động 24/7', 'Automated 24/7')}</span>
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                            {t(
                                'Hệ thống đo khổ vật liệu cuộn thông minh cho nhựa, giấy, vải và kim loại. Độ chính xác ±0.5mm, không tiếp xúc, kết nối PLC/SCADA.',
                                'Smart roll material width measurement system for plastics, paper, textiles and metals. ±0.5mm accuracy, non-contact, PLC/SCADA connectivity.'
                            )}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-16">
                            <Link href="/lien-he"
                                className="group flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:translate-y-[-2px]">
                                {t('Nhận Tư Vấn Miễn Phí', 'Get Free Consultation')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/san-pham"
                                className="flex items-center gap-2 border-2 border-white/20 hover:border-white/50 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/5 backdrop-blur-sm">
                                {t('Xem Sản Phẩm', 'View Product')}
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                            <StatCard target={5} suffix="+" label="Năm kinh nghiệm" labelEn="Years experience" />
                            <StatCard target={50} suffix="+" label="Nhà máy triển khai" labelEn="Factories deployed" />
                            <StatCard target={85} suffix="M" label="Tiết kiệm/tháng" labelEn="VND saved/month" />
                            <StatCard target={99} suffix="%" label="Độ hài lòng KH" labelEn="Customer satisfaction" />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce z-10">
                    <ChevronDown className="w-6 h-6" />
                </div>
            </section>

            {/* ─── INDUSTRIES ─── */}
            <section className="py-24 bg-[#0d1426]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="text-accent text-sm font-bold uppercase tracking-widest mb-3">
                            {t('ỨNG DỤNG', 'APPLICATIONS')}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            {t('Phù Hợp Mọi Ngành Sản Xuất', 'Suitable for All Industries')}
                        </h2>
                    </div>

                    {/* Tab buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {industries.map((ind, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndustry(i)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeIndustry === i
                                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                    }`}
                            >
                                <span className="text-lg">{ind.emoji}</span>
                                {language === 'vi' ? ind.nameVi : ind.nameEn}
                            </button>
                        ))}
                    </div>

                    {/* Active industry card */}
                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                        <div className="aspect-video md:aspect-auto md:h-full min-h-[280px] relative overflow-hidden">
                            <img
                                src={industries[activeIndustry].image}
                                alt={language === 'vi' ? industries[activeIndustry].nameVi : industries[activeIndustry].nameEn}
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${industries[activeIndustry].color} opacity-30`} />
                            <div className="absolute top-4 left-4">
                                <span className="text-4xl">{industries[activeIndustry].emoji}</span>
                            </div>
                        </div>
                        <div className="p-8 md:p-10">
                            <div className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${industries[activeIndustry].color} text-white mb-4`}>
                                {t('Giải pháp', 'Solution')}
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4">
                                {language === 'vi' ? industries[activeIndustry].nameVi : industries[activeIndustry].nameEn}
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                {language === 'vi' ? industries[activeIndustry].descVi : industries[activeIndustry].descEn}
                            </p>
                            <Link
                                href={industries[activeIndustry].href}
                                className="group inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all text-lg"
                            >
                                {t('Tìm hiểu thêm', 'Learn more')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── PRODUCT SHOWCASE ─── */}
            <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                <div className="container-custom relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-accent text-sm font-bold uppercase tracking-widest mb-4">
                                {t('SẢN PHẨM', 'PRODUCT')}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                {t('Máy Đo Khổ Màng', 'Film Width Measurement')}
                                <br />
                                <span className="text-accent">{t('Đa Vật Liệu', 'Multi-Material')}</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                {t(
                                    'Giải pháp đo khổ tự động chính xác cao cho các dây chuyền cuộn vật liệu. Đo lường không tiếp xúc, theo dõi liên tục định dạng, và ghi chép dữ liệu thời gian thực.',
                                    'High-precision automated width measurement solution for material rolling lines. Non-contact measurement, continuous format monitoring, and real-time data logging.'
                                )}
                            </p>

                            {/* Result list */}
                            <ul className="space-y-4 mb-10">
                                {results.map((r, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-200">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="font-medium">{language === 'vi' ? r.vi : r.en}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-4">
                                <Link href="/san-pham" className="btn-primary">
                                    {t('Xem Chi Tiết Sản Phẩm', 'View Product Details')}
                                </Link>
                                <a href="tel:0792526184" className="flex items-center gap-2 text-accent font-bold hover:text-white transition-colors py-3">
                                    📞 079-252-6184
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-2 shadow-2xl backdrop-blur-sm">
                                <img
                                    src="/images/catalog/sensor-top.jpg"
                                    alt="SML TECH Width Measurement Machine"
                                    className="w-full rounded-2xl object-cover aspect-[4/3]"
                                />
                            </div>

                            {/* Floating spec badges */}
                            <div className="absolute -left-6 top-1/3 bg-[#0d1426] border border-accent/30 rounded-2xl px-4 py-3 shadow-xl">
                                <div className="text-accent font-black text-2xl">±0.5mm</div>
                                <div className="text-gray-400 text-xs">{t('Độ chính xác', 'Accuracy')}</div>
                            </div>
                            <div className="absolute -right-6 bottom-1/3 bg-[#0d1426] border border-green-500/30 rounded-2xl px-4 py-3 shadow-xl">
                                <div className="text-green-400 font-black text-2xl">24/7</div>
                                <div className="text-gray-400 text-xs">{t('Hoạt động liên tục', 'Continuous operation')}</div>
                            </div>
                            <div className="absolute top-4 right-4 bg-accent rounded-full px-3 py-1 text-white text-xs font-bold shadow-lg">
                                {t('Made in VN 🇻🇳', 'Made in VN 🇻🇳')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FEATURES ─── */}
            <section className="py-24 bg-[#0d1426]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="text-accent text-sm font-bold uppercase tracking-widest mb-3">
                            {t('ĐẶC ĐIỂM NỔI BẬT', 'KEY FEATURES')}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            {t('Tại Sao Chọn SML TECH?', 'Why Choose SML TECH?')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className={`group border ${f.color} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${f.color}`}>
                                    {f.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">
                                    {language === 'vi' ? f.titleVi : f.titleEn}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {language === 'vi' ? f.descVi : f.descEn}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SPECS STRIP ─── */}
            <section className="py-16 bg-accent/5 border-y border-accent/10">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: '±0.5mm', labelVi: 'Độ chính xác', labelEn: 'Accuracy' },
                            { value: '200–3000mm', labelVi: 'Dải đo', labelEn: 'Measurement Range' },
                            { value: '< 100ms', labelVi: 'Tốc độ phản hồi', labelEn: 'Response Time' },
                            { value: 'IP65', labelVi: 'Chống bụi & ẩm', labelEn: 'Dust & Moisture Resistant' },
                        ].map((s, i) => (
                            <div key={i}>
                                <div className="text-3xl font-black text-accent mb-1">{s.value}</div>
                                <div className="text-gray-400 text-sm font-medium">
                                    {language === 'vi' ? s.labelVi : s.labelEn}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                <div className="container-custom max-w-3xl text-center relative z-10">
                    <div className="text-6xl mb-6">🚀</div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        {t('Sẵn Sàng Tối Ưu Nhà Máy?', 'Ready to Optimize Your Factory?')}
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                        {t(
                            'Đặt lịch tư vấn miễn phí ngay hôm nay. Chuyên gia SML TECH sẽ phân tích nhu cầu và đề xuất giải pháp phù hợp nhất cho dây chuyền của bạn.',
                            'Schedule a free consultation today. SML TECH experts will analyze your needs and propose the most suitable solution for your production line.'
                        )}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/lien-he"
                            className="group flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:translate-y-[-2px]">
                            {t('Liên Hệ Tư Vấn Ngay', 'Contact for Consultation')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="tel:0792526184"
                            className="flex items-center gap-2 border-2 border-white/20 hover:border-white/50 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all hover:bg-white/5">
                            📞 079-252-6184
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t('Tư vấn miễn phí', 'Free consultation')}</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t('Demo thực tế tại nhà máy', 'On-site demo at factory')}</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t('Bảo hành 12 tháng', '12-month warranty')}</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> {t('Hỗ trợ kỹ thuật 24/7', '24/7 technical support')}</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
