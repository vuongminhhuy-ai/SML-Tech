'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Testimonials() {
    const { t } = useLanguage()

    const stats = [
        { value: '100%', label: t('Uptime trong pilot test', 'Uptime in pilot test') },
        { value: '4.7%', label: t('Giảm lãng phí trung bình', 'Average waste reduction') },
        { value: t('6-8 tháng', '6-8 months'), label: t('Thời gian hoàn vốn', 'Payback period') },
        { value: '20+', label: t('Nhà máy đã demo', 'Factories demoed') },
    ]

    return (
        <section className="section-padding bg-primary text-white">
            <div className="container-custom">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                            <div className="text-gray-300 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonial Placeholder */}
                <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="text-center mb-6">
                        <div className="text-6xl mb-4">💬</div>
                        <div className="text-xl text-gray-300 italic max-w-2xl mx-auto">
                            "{t(
                                'Trước đây chúng tôi đo bằng thước, rất mất thời gian và không chính xác. Giờ có SML TECH, chúng tôi biết chính xác từng giây, còn có dữ liệu để tối ưu quy trình nữa. Đầu tư 70 triệu, thu hồi được trong 7 tháng.',
                                'Before, we measured with a ruler, it was time-consuming and inaccurate. Now with SML TECH, we know exactly every second, and we have data to optimize the process. Invested 70 million VND, recovered in 7 months.'
                            )}"
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                            👤
                        </div>
                        <div>
                            <div className="font-semibold">{t('Ông Nguyễn Văn A', 'Mr. Nguyen Van A')}</div>
                            <div className="text-sm text-gray-300">{t('Giám Đốc Kỹ Thuật, Công ty ABC', 'Technical Director, ABC Company')}</div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-accent">6.8% → 2.1%</div>
                            <div className="text-sm text-gray-300">{t('Lãng phí giảm', 'Waste reduced')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-accent">{t('85 triệu/tháng', 'VND 85m/month')}</div>
                            <div className="text-sm text-gray-300">{t('Tiết kiệm', 'Saved')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-accent">{t('7.2 tháng', '7.2 months')}</div>
                            <div className="text-sm text-gray-300">{t('ROI thực tế', 'Actual ROI')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
