'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const industryData = {
    nhua: {
        emoji: '🧴',
        nameVi: 'Nhựa & Màng Bao Bì',
        nameEn: 'Plastics & Packaging Films',
        heroImage: '/images/catalog/sensor-top.jpg',
        color: 'blue',
        descVi: 'Giải pháp đo khổ màng nhựa tự động với độ chính xác ±0.5mm, liên tục 24/7, giúp nhà máy nhựa tối ưu nguyên liệu và giảm phế phẩm hiệu quả.',
        descEn: 'Automated plastic film width measurement with ±0.5mm accuracy, continuous 24/7 operation, helping plastic factories optimize materials and reduce waste effectively.',
        challengesVi: [
            'Màng nhựa dễ bị co giãn khi đo thủ công gây sai số lớn',
            'Độ co ngót sau cán không ổn định, khó kiểm soát khổ cuối',
            'Tốc độ chuyền cao, không thể dừng máy để đo',
            'Dữ liệu không được lưu trữ, không thể truy xuất QC',
        ],
        challengesEn: [
            'Plastic film stretches easily during manual measurement causing large errors',
            'Post-rolling shrinkage is unstable, difficult to control final width',
            'High line speed makes it impossible to stop for measurement',
            'No data storage, unable to retrieve for QC purposes',
        ],
        benefitsVi: [
            'Đo không tiếp xúc – không ảnh hưởng chất lượng màng',
            'Theo dõi liên tục 2 biên màng theo thời gian thực',
            'Cảnh báo ngay khi khổ vượt ngưỡng dung sai',
            'Tự động lưu dữ liệu theo từng cuộn sản xuất',
            'Tích hợp dễ dàng với PLC/SCADA hiện có',
        ],
        benefitsEn: [
            'Non-contact measurement – no impact on film quality',
            'Continuous monitoring of both film edges in real-time',
            'Immediate alerts when width exceeds tolerance threshold',
            'Automatic data logging per production roll',
            'Easy integration with existing PLC/SCADA systems',
        ],
        specs: [
            { labelVi: 'Độ chính xác', labelEn: 'Accuracy', value: '±0.5 mm' },
            { labelVi: 'Tốc độ phản hồi', labelEn: 'Response time', value: '< 100 ms' },
            { labelVi: 'Dải đo', labelEn: 'Measurement range', value: '200 – 2500 mm' },
            { labelVi: 'Kết nối', labelEn: 'Connectivity', value: 'RS485 / Ethernet / PLC' },
        ],
    },
    giay: {
        emoji: '📄',
        nameVi: 'Giấy & Cuộn Carton',
        nameEn: 'Paper & Carton Rolls',
        heroImage: '/images/catalog/industry-paper.png',
        color: 'amber',
        descVi: 'Hệ thống đo khổ cuộn giấy và carton tự động, chính xác cho các nhà máy giấy – từ giấy in, giấy bao gói đến carton sóng công nghiệp.',
        descEn: 'Automatic paper and carton roll width measurement system for paper mills – from printing paper, packaging paper to industrial corrugated board.',
        challengesVi: [
            'Cuộn giấy có khổ rộng đến 2-3m, đo tay rất khó chính xác',
            'Độ ẩm thay đổi làm giấy co giãn, ảnh hưởng khổ thành phẩm',
            'Lỗi khổ gây hỏng cả cuộn, tổn thất nguyên liệu lớn',
            'Không có hệ thống cảnh báo sớm khi lệch khổ',
        ],
        challengesEn: [
            'Paper rolls up to 2-3m wide are very difficult to measure accurately by hand',
            'Humidity changes cause paper expansion/contraction affecting final width',
            'Width errors ruin entire rolls, causing significant material loss',
            'No early warning system when width deviates',
        ],
        benefitsVi: [
            'Đo khổ cuộn giấy đến 3000mm không cần tiếp xúc',
            'Theo dõi liên tục và cảnh báo lệch khổ tức thời',
            'Phù hợp môi trường ẩm ướt của nhà máy giấy',
            'Báo cáo dữ liệu theo lô, theo ca sản xuất',
            'Giảm tỷ lệ hàng NG và chi phí tái chế',
        ],
        benefitsEn: [
            'Measure paper rolls up to 3000mm without contact',
            'Continuous monitoring and instant width deviation alerts',
            'Suitable for humid environments of paper mills',
            'Data reports by batch and by production shift',
            'Reduce NG rate and recycling costs',
        ],
        specs: [
            { labelVi: 'Độ chính xác', labelEn: 'Accuracy', value: '±0.5 mm' },
            { labelVi: 'Dải đo', labelEn: 'Range', value: '500 – 3000 mm' },
            { labelVi: 'Chống ẩm', labelEn: 'Humidity resistance', value: 'IP65' },
            { labelVi: 'Kết nối', labelEn: 'Connectivity', value: 'RS485 / Modbus / PLC' },
        ],
    },
    vai: {
        emoji: '🧵',
        nameVi: 'Vải & Vải Không Dệt',
        nameEn: 'Textiles & Non-woven Fabrics',
        heroImage: '/images/catalog/industry-textile.png',
        color: 'purple',
        descVi: 'Giải pháp đo khổ vải, vải không dệt và các vật liệu mềm tự động – phù hợp cho ngành may mặc, y tế, bao bì kỹ thuật và sản phẩm công nghiệp.',
        descEn: 'Automated width measurement for fabric, non-woven materials and soft materials – suitable for garment, medical, technical packaging and industrial product industries.',
        challengesVi: [
            'Vải mềm dễ bị nhăn, uốn cong, gây sai số khi đo tay',
            'Vải không dệt (non-woven) rất mỏng, khó xác định biên rõ ràng',
            'Tốc độ lỗi cao do co giãn của vải trong quá trình cuộn',
            'Yêu cầu khổ chính xác cho các sản phẩm may mặc xuất khẩu',
        ],
        challengesEn: [
            'Soft fabric wrinkles easily, causing errors in manual measurement',
            'Non-woven fabric is very thin, difficult to clearly identify edges',
            'High error rate due to fabric stretch during rolling',
            'Precise width required for export garment products',
        ],
        benefitsVi: [
            'Cảm biến quang học xác định biên vải cực kỳ chính xác',
            'Không tiếp xúc, không gây hỏng vải hay vải không dệt',
            'Theo dõi đồng thời cả 2 biên vải theo thời gian thực',
            'Phù hợp vải mỏng, vải thun co giãn, non-woven',
            'Xuất báo cáo QC theo cuộn, lô hàng',
        ],
        benefitsEn: [
            'Optical sensors identify fabric edges with extreme precision',
            'Non-contact, no damage to fabric or non-woven materials',
            'Simultaneously monitor both fabric edges in real-time',
            'Suitable for thin fabric, elastic stretch fabric, non-woven',
            'Export QC reports by roll and batch',
        ],
        specs: [
            { labelVi: 'Độ chính xác', labelEn: 'Accuracy', value: '±0.5 mm' },
            { labelVi: 'Dải đo', labelEn: 'Range', value: '200 – 2000 mm' },
            { labelVi: 'Loại cảm biến', labelEn: 'Sensor type', value: 'Optical / Laser' },
            { labelVi: 'Kết nối', labelEn: 'Connectivity', value: 'RS485 / Ethernet / SCADA' },
        ],
    },
    'kim-loai': {
        emoji: '🔩',
        nameVi: 'Kim Loại, Thép & Nhôm',
        nameEn: 'Metals, Steel & Aluminum',
        heroImage: '/images/catalog/industry-metal.png',
        color: 'gray',
        descVi: 'Hệ thống đo khổ cuộn thép, nhôm và các loại kim loại tấm chính xác cao – đáp ứng tiêu chuẩn khắt khe của ngành gia công kim loại và chế tạo máy.',
        descEn: 'High-precision width measurement system for steel coils, aluminum and metal sheets – meeting stringent standards of metal processing and machinery manufacturing industries.',
        challengesVi: [
            'Kim loại nặng, nguy hiểm nếu đo tay trực tiếp trên chuyền',
            'Nhiệt độ cao ảnh hưởng đến độ giãn nở, sai số khổ',
            'Yêu cầu dung sai rất chặt (±0.5mm) theo tiêu chuẩn kỹ thuật',
            'Bề mặt kim loại phản quang gây khó khăn cho cảm biến thông thường',
        ],
        challengesEn: [
            'Metal is heavy and dangerous to measure manually on the line',
            'High temperature affects thermal expansion, causing width errors',
            'Very tight tolerance required (±0.5mm) per technical standards',
            'Reflective metal surface causes difficulty for standard sensors',
        ],
        benefitsVi: [
            'Cảm biến laser chịu nhiệt, phù hợp môi trường luyện kim',
            'Đo không tiếp xúc, an toàn tuyệt đối cho người vận hành',
            'Độ chính xác ±0.5mm đáp ứng tiêu chuẩn gia công chính xác',
            'Chống nhiễu tốt trong môi trường bụi kim loại, rung động',
            'Tích hợp được vào dây chuyền cán thép, cán nhôm hiện có',
        ],
        benefitsEn: [
            'Heat-resistant laser sensors suitable for metallurgical environments',
            'Non-contact measurement, completely safe for operators',
            '±0.5mm accuracy meets precision machining standards',
            'High interference resistance in metal dust, vibration environments',
            'Easily integrated into existing steel/aluminum rolling lines',
        ],
        specs: [
            { labelVi: 'Độ chính xác', labelEn: 'Accuracy', value: '±0.5 mm' },
            { labelVi: 'Dải đo', labelEn: 'Range', value: '300 – 2500 mm' },
            { labelVi: 'Nhiệt độ hoạt động', labelEn: 'Operating temp', value: '-10°C to +80°C' },
            { labelVi: 'Cảm biến', labelEn: 'Sensor', value: 'Laser / IP67' },
        ],
    },
}

type IndustryKey = keyof typeof industryData

const colorMap: Record<string, string> = {
    blue: 'from-blue-600 to-cyan-500',
    amber: 'from-amber-500 to-yellow-400',
    purple: 'from-purple-600 to-pink-500',
    gray: 'from-gray-700 to-slate-500',
}
const bgMap: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-100',
    amber: 'bg-amber-50 border-amber-100',
    purple: 'bg-purple-50 border-purple-100',
    gray: 'bg-gray-100 border-gray-200',
}
const textMap: Record<string, string> = {
    blue: 'text-blue-700',
    amber: 'text-amber-700',
    purple: 'text-purple-700',
    gray: 'text-gray-700',
}

export default function IndustrySolutionPage({ industry }: { industry: IndustryKey }) {
    const { t, language } = useLanguage()
    const data = industryData[industry]
    const gradient = colorMap[data.color]
    const bg = bgMap[data.color]
    const textColor = textMap[data.color]

    const otherIndustries = (Object.keys(industryData) as IndustryKey[]).filter(k => k !== industry)

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <section className="relative min-h-[420px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={data.heroImage}
                        alt={language === 'vi' ? data.nameVi : data.nameEn}
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-80`}></div>
                </div>
                <div className="container-custom relative z-10 py-20">
                    <div className="max-w-2xl text-white">
                        <div className="text-5xl mb-4">{data.emoji}</div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                            {language === 'vi' ? data.nameVi : data.nameEn}
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            {language === 'vi' ? data.descVi : data.descEn}
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Link href="/lien-he" className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2">
                                {t('Tư Vấn Miễn Phí', 'Free Consultation')} <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/san-pham" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                                {t('Xem Sản Phẩm', 'View Products')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges & Benefits */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Challenges */}
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
                                ⚠️ {t('Thách Thức Hiện Tại', 'Current Challenges')}
                            </h2>
                            <ul className="space-y-4">
                                {(language === 'vi' ? data.challengesVi : data.challengesEn).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-red-900">
                                        <span className="text-red-400 mt-0.5 font-bold">✗</span>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
                                ✅ {t('Giải Pháp SML TECH', 'SML TECH Solution')}
                            </h2>
                            <ul className="space-y-4">
                                {(language === 'vi' ? data.benefitsVi : data.benefitsEn).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-green-900">
                                        <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="section-padding bg-white border-t border-gray-100">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        {t('Thông Số Kỹ Thuật', 'Technical Specifications')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {data.specs.map((spec, i) => (
                            <div key={i} className={`${bg} border rounded-xl p-5 text-center`}>
                                <div className={`text-2xl font-extrabold mb-1 ${textColor}`}>{spec.value}</div>
                                <div className="text-sm text-gray-600 font-medium">
                                    {language === 'vi' ? spec.labelVi : spec.labelEn}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Industries */}
            <section className="section-padding bg-gray-50 border-t border-gray-100">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        {t('Ngành Khác', 'Other Industries')}
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {otherIndustries.map(key => {
                            const d = industryData[key]
                            return (
                                <Link key={key} href={`/giai-phap/${key}`} className="group flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-xl hover:border-accent hover:shadow-md transition-all">
                                    <span className="text-3xl">{d.emoji}</span>
                                    <div>
                                        <div className="font-semibold text-gray-800 group-hover:text-accent text-sm transition-colors">
                                            {language === 'vi' ? d.nameVi : d.nameEn}
                                        </div>
                                        <div className="text-xs text-accent font-medium mt-0.5">
                                            {t('Xem chi tiết →', 'View details →')}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-primary text-white text-center">
                <div className="container-custom max-w-2xl">
                    <div className="text-4xl mb-4">{data.emoji}</div>
                    <h2 className="text-3xl font-bold mb-4">
                        {t('Muốn Áp Dụng Cho Nhà Máy Của Bạn?', 'Want to Apply This to Your Factory?')}
                    </h2>
                    <p className="text-gray-300 mb-8">
                        {t('Liên hệ ngay để được tư vấn miễn phí và nhận báo giá phù hợp với ngành của bạn.', 'Contact us now for a free consultation and get a quote tailored to your industry.')}
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/lien-he" className="bg-accent hover:bg-accent-hover text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-lg">
                            {t('Liên Hệ Tư Vấn', 'Contact for Consultation')}
                        </Link>
                        <a href="tel:0792526184" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                            📞 079-252-6184
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
