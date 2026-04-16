'use client'

import { Check, X, AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function ComparisonTable() {
    const { t } = useLanguage()

    const features = [
        {
            feature: t('Giá', 'Price'),
            premium: { value: t('200-300tr', 'VND 200-300m'), status: 'bad' },
            sml: { value: t('60-90tr', 'VND 60-90m'), status: 'good' },
            chinese: { value: t('15-30tr', 'VND 15-30m'), status: 'warning' },
        },
        {
            feature: t('Độ chính xác', 'Accuracy'),
            premium: { value: '±0.1mm', status: 'good' },
            sml: { value: '±0.5mm', status: 'good' },
            chinese: { value: '±2-5mm', status: 'bad' },
        },
        {
            feature: 'IoT/Cloud',
            premium: { value: t('Phí thêm', 'Extra fee'), status: 'warning' },
            sml: { value: t('Miễn phí', 'Free'), status: 'good' },
            chinese: { value: t('Không có', 'None'), status: 'bad' },
        },
        {
            feature: 'SPC Analytics (Cp/Cpk)',
            premium: { value: t('Hạn chế', 'Limited'), status: 'warning' },
            sml: { value: t('Full', 'Full'), status: 'good' },
            chinese: { value: t('Không có', 'None'), status: 'bad' },
        },
        {
            feature: t('Hỗ trợ kỹ thuật', 'Technical Support'),
            premium: { value: t('2-3 ngày', '2-3 days'), status: 'warning' },
            sml: { value: '<4h', status: 'good' },
            chinese: { value: t('Email chậm', 'Slow email'), status: 'bad' },
        },
        {
            feature: t('Tùy chỉnh', 'Customization'),
            premium: { value: t('Rất khó', 'Very hard'), status: 'bad' },
            sml: { value: t('Linh hoạt', 'Flexible'), status: 'good' },
            chinese: { value: t('Không', 'No'), status: 'bad' },
        },
        {
            feature: t('Bảo hành', 'Warranty'),
            premium: { value: t('24 tháng', '24 months'), status: 'good' },
            sml: { value: t('12-24 tháng', '12-24 months'), status: 'good' },
            chinese: { value: t('6 tháng', '6 months'), status: 'warning' },
        },
    ]

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'good':
                return <Check className="w-5 h-5 text-success" />
            case 'bad':
                return <X className="w-5 h-5 text-danger" />
            case 'warning':
                return <AlertTriangle className="w-5 h-5 text-warning" />
            default:
                return null
        }
    }

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="heading-2 mb-4">
                        {t('So Sánh SML TECH Với', 'Compare SML TECH With')} <span className="text-accent">{t('Đối Thủ', 'Competitors')}</span>
                    </h2>
                    <p className="text-lg text-gray-600">{t('Lựa chọn tối ưu cho doanh nghiệp Việt Nam', 'Optimal choice for enterprise')}</p>
                </div>

                {/* Comparison Infographic */}
                <div className="max-w-5xl mx-auto mb-12">
                    <img
                        src="/images/comparison.png"
                        alt="Comparison: SML TECH vs Competitors"
                        className="w-full h-auto rounded-xl shadow-lg"
                    />
                </div>

                {/* Comparison Table */}
                <div className="max-w-5xl mx-auto overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-200">
                                <th className="p-4 text-left text-gray-600 font-semibold">{t('Tiêu chí', 'Criteria')}</th>
                                <th className="p-4 text-center">
                                    <div className="text-sm text-gray-500 mb-1">🇩🇪 🇺🇸</div>
                                    <div className="font-semibold">{t('Hàng Cao Cấp', 'Premium Brands')}</div>
                                    <div className="text-xs text-gray-500">{t('(Đức/Mỹ)', '(Germany/US)')}</div>
                                </th>
                                <th className="p-4 text-center bg-accent/5">
                                    <div className="text-sm mb-1">✅</div>
                                    <div className="font-bold text-accent text-lg">SML TECH</div>
                                    <div className="text-xs text-gray-600">{t('Made in Vietnam', 'Made in Vietnam')}</div>
                                </th>
                                <th className="p-4 text-center">
                                    <div className="text-sm text-gray-500 mb-1">🇨🇳</div>
                                    <div className="font-semibold">{t('Hàng Trung Quốc', 'Chinese Brands')}</div>
                                    <div className="text-xs text-gray-500">(Generic)</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-700">{row.feature}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center space-x-2">
                                            {getStatusIcon(row.premium.status)}
                                            <span className="text-sm">{row.premium.value}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center bg-accent/5">
                                        <div className="flex items-center justify-center space-x-2">
                                            {getStatusIcon(row.sml.status)}
                                            <span className="text-sm font-semibold text-primary">{row.sml.value}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center space-x-2">
                                            {getStatusIcon(row.chinese.status)}
                                            <span className="text-sm">{row.chinese.value}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Callout */}
                <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 text-center border-2 border-accent/20">
                    <div className="text-2xl font-bold text-primary mb-2">
                        {t('Sweet Spot: Chất Lượng Cao Cấp, Giá Cả Hợp Lý', 'Sweet Spot: Premium Quality, Reasonable Price')}
                    </div>
                    <p className="text-gray-700">
                        👉 {t('SML TECH là lựa chọn tối ưu cho doanh nghiệp vừa và nhỏ tại Việt Nam', 'SML TECH is the optimal choice for small and medium enterprises')}
                    </p>
                </div>
            </div>
        </section>
    )
}
