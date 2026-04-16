'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle2, Activity, Database, Monitor, Link as LinkIcon, ShieldAlert, Cpu, Maximize, Clock, FileText } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import Image from 'next/image'

export default function ProductsPage() {
    const { t, language } = useLanguage()

    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* PAGE 1: COVER & MAIN FEATURES (HERO) */}
            <section className="relative pt-20 pb-24 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/catalog/sensor-top.jpg" 
                        alt="SML TECH Sensor" 
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-6">
                                <img src="/images/logo.png" alt="SML TECH Logo" className="h-16 w-auto drop-shadow-sm" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                                <span className="text-primary block">{t('MÁY ĐO KHỔ MÀNG', 'MULTI-MATERIAL FILM')}</span>
                                <span className="text-accent">{t('ĐA VẬT LIỆU', 'WIDTH MEASUREMENT MACHINE')}</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 border-l-4 border-accent pl-4 font-medium italic">
                                {t(
                                    'Giải pháp đo khổ tự động chính xác cao cho các dây chuyền cuộn vật liệu',
                                    'Accurate width measurement solution for material rolling lines'
                                )}
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {t(
                                    'Đo lường không tiếp xúc, theo dõi liên tục định dạng, và ghi chép dữ liệu thời gian thực giúp tối ưu hóa sản xuất và giảm phế phẩm.',
                                    'Non-contact measurement, continuous tracking, and real-time data logging, helping to optimize production and reduce scrap.'
                                )}
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: <Maximize className="text-accent w-5 h-5"/>, vi: 'Độ chính xác cao ±0.5 mm', en: 'High accuracy up to ±0.5 mm' },
                                    { icon: <Activity className="text-accent w-5 h-5"/>, vi: 'Theo dõi liên tục 2 biên', en: 'Tracking both material edges' },
                                    { icon: <Monitor className="text-accent w-5 h-5"/>, vi: 'Dữ liệu thời gian thực', en: 'Real-time data display' },
                                    { icon: <LinkIcon className="text-accent w-5 h-5"/>, vi: 'Tích hợp dễ dàng (PLC/SCADA)', en: 'Easy Integration (PLC/SCADA)' },
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                        {feature.icon}
                                        <span className="font-semibold text-sm text-gray-800">{t(feature.vi, feature.en)}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="#contact-bottom" className="btn-primary shadow-lg hover:-translate-y-1 transition-all duration-300">
                                {t('Nhận Báo Giá Ngay', 'Get A Quote Now')}
                            </Link>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-30 blur-xl group-hover:opacity-50 transition duration-500 rounded-2xl"></div>
                            <img 
                                src="/images/catalog/sensor-side.jpg" 
                                alt="Sensor Details" 
                                className="relative rounded-2xl shadow-2xl object-cover w-full ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 3: SYSTEM INTERFACE */}
            <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="heading-2 text-white mb-4">{t('GIAO DIỆN HỆ THỐNG', 'SYSTEM INTERFACE')}</h2>
                        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10 group">
                            <img 
                                src="/images/catalog/system-interface.jpg" 
                                alt="System Interface Laptop" 
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="bg-gradient-to-t from-gray-900 to-transparent p-6 absolute bottom-0 left-0 right-0">
                                <div className="text-3xl font-bold text-accent tracking-wider font-mono">1245.0 mm</div>
                                <div className="text-sm text-gray-300 uppercase tracking-widest">{t('Khổ thực tế hiện tại', 'CURRENT WIDTH')}</div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold flex items-center">
                                    <Monitor className="mr-3 text-accent" />
                                    {t('Hiển Thị Trực Quan', 'MEASUREMENT SYSTEM')}
                                </h3>
                                <p className="text-gray-400">
                                    {t('Trục/Đơn vị (Axis/Units):', 'Axis/Units:')} <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">mm | 1500 | 1400 | 1200 | 1100</span>
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-accent">{t('Chỉ Báo Trạng Thái Chính', 'Key Status Indicators:')}</h4>
                                <ul className="space-y-3">
                                    {[
                                        { icon: <Clock className="text-success w-5 h-5"/>, vi: 'DỮ LIỆU THỜI GIAN THỰC', en: 'REAL-TIME DATA' },
                                        { icon: <CheckCircle2 className="text-success w-5 h-5"/>, vi: 'ỔN ĐỊNH', en: 'STABLE' },
                                        { icon: <Database className="text-success w-5 h-5"/>, vi: 'GIÁM SÁT LƯU TRỮ DỮ LIỆU', en: 'DATA LOGGING MONITORING' },
                                        { icon: <LinkIcon className="text-success w-5 h-5"/>, vi: 'TÍCH HỢP HỆ THỐNG', en: 'SYSTEM INTEGRATION' },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-white/10">
                                            {item.icon}
                                            <span className="font-medium tracking-wide">{t(item.vi, item.en)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-primary/20 p-6 rounded-xl border border-primary/30">
                                <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-2">{t('Sơ đồ Kết nối', 'Connection Diagram')}</h4>
                                <div className="flex flex-wrap items-center gap-2 font-mono text-sm sm:text-base font-bold">
                                    <span className="text-white">SAAC</span>
                                    <span className="text-accent">➔</span>
                                    <span className="text-white">PLC</span>
                                    <span className="text-accent">➔</span>
                                    <span className="text-white">SIMTECH</span>
                                    <span className="text-accent">➔</span>
                                    <span className="text-white">SCADA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 4: CHALLENGES & SOLUTIONS */}
            <section className="section-padding bg-white relative">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="heading-2 mb-6 uppercase">
                            {t('Thách thức & Giải pháp', 'CHALLENGES & SOLUTIONS')}
                        </h2>
                        <p className="text-lg text-gray-600">
                            {t(
                                'Đo thủ công gây sai số, tốn nhân công sản xuất và không có dữ liệu kiểm soát. SML TECH cung cấp giải pháp đo tự động - chính xác - an toàn.',
                                'Manual measurement causes errors, consumes labor, and lacks data control. SML TECH provides an automatic - accurate - safe measurement solution.'
                            )}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* BEFORE */}
                        <div className="bg-red-50 rounded-2xl overflow-hidden border border-red-100 shadow-md">
                            <div className="h-64 overflow-hidden relative">
                                <img src="/images/catalog/manual-measurement.jpg" alt="Manual Measurement" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent flex items-end p-6">
                                    <h3 className="text-2xl font-bold text-white flex items-center">
                                        <ShieldAlert className="mr-2 text-red-400" />
                                        {t('TRƯỚC KHI DÙNG', 'BEFORE USE')} <span className="text-sm font-normal ml-2 opacity-80">(Manual)</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {[
                                        { vi: 'Đo lường gián đoạn, làm chậm quá trình sản xuất', en: 'Interrupted measurement, slows down production' },
                                        { vi: 'Sai số cao, phụ thuộc vào thao tác người vận hành', en: 'High error rate, depends on operator handling' },
                                        { vi: 'Thiếu lưu trữ và truy xuất dữ liệu', en: 'Lack of data storage and retrieval' },
                                        { vi: 'Tốn nhân công vận hành', en: 'Labor-intensive' },
                                        { vi: 'Rủi ro tai nạn khi đo trực tiếp trên chuyền', en: 'Risk of accidents when measuring directly on the line' },
                                        { vi: 'Không kết nối đồng bộ vào hệ thống sản xuất', en: 'Cannot be integrated into production systems' },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-red-900">
                                            <span className="text-red-500 mr-3 mt-1">✗</span>
                                            <span className="font-medium text-sm sm:text-base">{t(item.vi, item.en)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* AFTER */}
                        <div className="bg-green-50 rounded-2xl overflow-hidden border border-green-100 shadow-md transform md:-translate-y-4">
                            <div className="h-64 overflow-hidden relative bg-primary">
                                <img src="/images/catalog/sensor-top.jpg" alt="Automatic Measurement" className="w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent flex items-end p-6">
                                    <h3 className="text-2xl font-bold text-white flex items-center">
                                        <CheckCircle2 className="mr-2 text-green-400" />
                                        {t('GIẢI PHÁP SML TECH', 'SML TECH SOLUTION')}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    {[
                                        { vi: 'Đo tự động liên tục 24/7', en: 'Continuous automatic measurement 24/7' },
                                        { vi: 'Độ chính xác và tính ổn định cao', en: 'High accuracy and stability' },
                                        { vi: 'Dữ liệu dễ dàng lưu trữ và truy xuất', en: 'Data is easily stored and retrieved' },
                                        { vi: 'Giảm nhân công vận hành', en: 'Reduces operating labor' },
                                        { vi: 'Đảm bảo an toàn cho người sử dụng', en: 'Ensures user safety' },
                                        { vi: 'Sẵn sàng tích hợp PLC, SCADA, hệ thống sản xuất', en: 'Ready for integration with PLC, SCADA, and production systems' },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-green-900">
                                            <span className="text-green-600 mr-3 mt-1">✓</span>
                                            <span className="font-medium text-sm sm:text-base">{t(item.vi, item.en)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-primary text-white font-bold tracking-widest px-8 py-4 rounded-full shadow-lg shadow-primary/20 text-sm md:text-base border border-primary-light uppercase">
                            {t('Tự động hóa đo lường - Giảm rủi ro - Nâng cao hiệu quả', 'AUTOMATE MEASUREMENT - REDUCE RISKS - ENHANCE EFFICIENCY')}
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 5: DATA MONITORING & RETRIEVAL */}
            <section className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
                            {t('Giám sát & Truy xuất dữ liệu', 'REAL-TIME DATA MONITORING & RETRIEVAL')}
                        </h2>
                        <p className="text-lg text-accent font-semibold uppercase tracking-wide">
                            {t('Ứng dụng trong ngành NHỰA - GIẤY - DỆT MAY - KIM LOẠI', 'Applications in PLASTICS - PAPER - TEXTILES - METALS industries')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { 
                                icon: <Monitor />, 
                                titleVi: 'HIỂN THỊ THỰC TẾ', titleEn: 'REAL-TIME DISPLAY',
                                pointsVi: ['Theo dõi kích thước liên tục trên màn hình', 'Cập nhật thời gian thực', 'Cảnh báo khi vượt ngưỡng'],
                                pointsEn: ['Continuous width monitoring on screen', 'Real-time updates', 'Alerts when exceeding thresholds']
                            },
                            { 
                                icon: <Database />, 
                                titleVi: 'LƯU TRỮ DỮ LIỆU', titleEn: 'DATA STORAGE',
                                pointsVi: ['Ghi nhận dữ liệu theo từng cuộn phôi', 'Lưu theo timestamp sản xuất', 'Dùng cho mục đích QC'],
                                pointsEn: ['Record data per roll', 'Save by production timestamp', 'For quality control purposes']
                            },
                            { 
                                icon: <FileText />, 
                                titleVi: 'TRUY XUẤT NHANH CHÓNG', titleEn: 'QUICK RETRIEVAL',
                                pointsVi: ['Xem lại lịch sử sản xuất', 'So sánh dữ liệu giữa các cuộn', 'Support phân tích lỗi'],
                                pointsEn: ['Review production history', 'Compare data between rolls', 'Support error analysis']
                            },
                            { 
                                icon: <Cpu />, 
                                titleVi: 'TÍCH HỢP HỆ THỐNG', titleEn: 'SYSTEM INTEGRATION',
                                pointsVi: ['Kết nối PLC, SCADA, MES', 'Đồng bộ hóa với hệ thống quản lý', 'Sẵn sàng chuyển đổi số'],
                                pointsEn: ['Connect to PLC, SCADA, MES', 'Synchronize with management systems', 'Ready for digital transformation']
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{t(feature.titleVi, feature.titleEn)}</h3>
                                <ul className="space-y-3">
                                    {(language === 'vi' ? feature.pointsVi : feature.pointsEn).map((point, j) => (
                                        <li key={j} className="flex items-start text-gray-600 text-sm">
                                            <span className="text-accent mr-2 mt-0.5">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-block bg-accent text-white font-bold tracking-widest px-8 py-3 rounded text-sm md:text-base border border-accent uppercase shadow-lg shadow-accent/20">
                            {t('CẢM BIẾN - PHẦN MỀM - LƯU TRỮ - TỐI ƯU SẢN XUẤT', 'SENSORS - SOFTWARE - STORAGE - PRODUCTION OPTIMIZATION')}
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 6: PRECISION & MATERIALS + CONTACT */}
            <section className="section-padding bg-primary text-white" id="contact-bottom">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold mb-2 text-white">
                                {t('MỖI CUỘN VẬT LIỆU', 'EVERY MATERIAL ROLL')}
                            </h2>
                            <h2 className="text-4xl font-extrabold mb-6 text-accent">
                                {t('MỘT CHUẨN MỰC CHÍNH XÁC', 'ONE STANDARD OF PRECISION')}
                            </h2>
                            <p className="text-xl text-gray-300 font-medium italic mb-10">
                                {t(
                                    'Giải pháp đo khổ tự động cho nhựa, giấy, dệt may, kim loại',
                                    'Automatic width measurement solution for plastics, paper, textiles, and metals'
                                )}
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-white/90 border-b border-white/20 pb-2">{t('Vật Liệu Áp Dụng:', 'Applicable Materials:')}</h3>
                                    <ul className="grid sm:grid-cols-2 gap-3 text-gray-300">
                                        <li>🔸 {t('Nhựa, màng bao bì', 'Plastics, packaging films')}</li>
                                        <li>🔸 {t('Giấy, cuộn carton', 'Paper, carton rolls')}</li>
                                        <li>🔸 {t('Vải, vải không dệt', 'Textiles, non-woven fabrics')}</li>
                                        <li>🔸 {t('Kim loại, thép, nhôm', 'Metals, steel, aluminum')}</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-white/90 border-b border-white/20 pb-2">{t('Ưu Thế Sản Phẩm:', 'Product Advantages:')}</h3>
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3"/> {t('Sản phẩm thiết kế và sản xuất tại Việt Nam', 'Product designed and manufactured in Vietnam')}</li>
                                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3"/> {t('Linh kiện chuẩn Châu Âu - Vận hành độ bền cao', 'European standard components - high durability')}</li>
                                        <li className="flex items-center"><CheckCircle2 className="w-5 h-5 text-accent mr-3"/> {t('Sẵn sàng tích hợp PLC, SCADA', 'Ready for integration with PLC, SCADA')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-900 border-4 border-accent/20">
                            <h3 className="text-2xl font-bold mb-6 text-center text-primary uppercase">
                                {t('Lợi ích cốt lõi', 'Key Benefits')}
                            </h3>
                            <ul className="space-y-4 mb-8">
                                {[
                                    { vi: 'Đảm bảo khổ ổn định theo tiêu chuẩn sản phẩm', en: 'Ensures stable width according to product standards' },
                                    { vi: 'Loại bỏ sai số khi đo bằng tay của công nhân', en: 'Eliminates manual measurement errors by operators' },
                                    { vi: 'Kiểm soát liên tục, phát hiện ngay sự cố', en: 'Continuous monitoring for instant detection' },
                                    { vi: 'Chuẩn hóa số liệu, dễ dàng truy xuất và kiểm soát', en: 'Standardized data, easy to retrieve and control' },
                                    { vi: 'Nâng cao uy tín giao hàng, giảm thiểu hàng trả về', en: 'Enhances delivery reliability, reduces scrap' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                            <span className="text-primary text-xs font-bold">{idx + 1}</span>
                                        </div>
                                        <span className="font-medium text-gray-700">{t(item.vi, item.en)}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                                <h4 className="text-lg font-bold text-gray-900 mb-4">{t('LIÊN HỆ TƯ VẤN NGAY', 'CONTACT US FOR A CONSULTATION NOW')}</h4>
                                <div className="space-y-2 font-mono font-medium text-gray-800">
                                    <p>📞 Phone: <a href="tel:0792526184" className="text-primary hover:text-accent">0792 526 184</a></p>
                                    <p>🌐 Web: <a href="http://www.smtech.com.vn" className="text-primary hover:text-accent">www.smtech.com.vn</a></p>
                                    <p>✉️ Email: <a href="mailto:sml.tech.company@gmail.com" className="text-primary hover:text-accent">sml.tech.company@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
