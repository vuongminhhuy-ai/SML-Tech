'use client'

import { Check, X, AlertTriangle } from 'lucide-react'

export default function ComparisonTable() {
    const features = [
        {
            feature: 'Giá / Price',
            premium: { value: '200-300tr', status: 'bad' },
            sml: { value: '60-90tr', status: 'good' },
            chinese: { value: '15-30tr', status: 'warning' },
        },
        {
            feature: 'Độ chính xác / Accuracy',
            premium: { value: '±0.1mm', status: 'good' },
            sml: { value: '±0.5mm', status: 'good' },
            chinese: { value: '±2-5mm', status: 'bad' },
        },
        {
            feature: 'IoT/Cloud',
            premium: { value: 'Phí thêm', status: 'warning' },
            sml: { value: 'Miễn phí', status: 'good' },
            chinese: { value: 'Không có', status: 'bad' },
        },
        {
            feature: 'SPC Analytics (Cp/Cpk)',
            premium: { value: 'Hạn chế', status: 'warning' },
            sml: { value: 'Full', status: 'good' },
            chinese: { value: 'Không có', status: 'bad' },
        },
        {
            feature: 'Hỗ trợ kỹ thuật / Support',
            premium: { value: '2-3 ngày', status: 'warning' },
            sml: { value: '<4h', status: 'good' },
            chinese: { value: 'Email chậm', status: 'bad' },
        },
        {
            feature: 'Tùy chỉnh / Customization',
            premium: { value: 'Rất khó', status: 'bad' },
            sml: { value: 'Linh hoạt', status: 'good' },
            chinese: { value: 'Không', status: 'bad' },
        },
        {
            feature: 'Bảo hành / Warranty',
            premium: { value: '24 tháng', status: 'good' },
            sml: { value: '12-24 tháng', status: 'good' },
            chinese: { value: '6 tháng', status: 'warning' },
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
                        So Sánh SML TECH Với <span className="text-accent">Đối Thủ</span>
                    </h2>
                    <p className="text-lg text-gray-600">Lựa chọn tối ưu cho doanh nghiệp Việt Nam</p>
                </div>

                {/* Comparison Table */}
                <div className="max-w-5xl mx-auto overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-200">
                                <th className="p-4 text-left text-gray-600 font-semibold">Tiêu chí</th>
                                <th className="p-4 text-center">
                                    <div className="text-sm text-gray-500 mb-1">🇩🇪 🇺🇸</div>
                                    <div className="font-semibold">Hàng Cao Cấp</div>
                                    <div className="text-xs text-gray-500">(Đức/Mỹ)</div>
                                </th>
                                <th className="p-4 text-center bg-accent/5">
                                    <div className="text-sm mb-1">✅</div>
                                    <div className="font-bold text-accent text-lg">SML TECH</div>
                                    <div className="text-xs text-gray-600">Made in Vietnam</div>
                                </th>
                                <th className="p-4 text-center">
                                    <div className="text-sm text-gray-500 mb-1">🇨🇳</div>
                                    <div className="font-semibold">Hàng Trung Quốc</div>
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
                        Sweet Spot: Chất Lượng Cao Cấp, Giá Cả Hợp Lý
                    </div>
                    <p className="text-gray-700">
                        👉 SML TECH là lựa chọn tối ưu cho doanh nghiệp vừa và nhỏ tại Việt Nam
                    </p>
                </div>
            </div>
        </section>
    )
}
