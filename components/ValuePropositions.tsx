'use client'

import { Target, Cloud, Wrench } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function ValuePropositions() {
    const { t } = useLanguage()
    
    const values = [
        {
            icon: Target,
            title: t('Đo Chính Xác ±0.5mm', 'Accurate Measurement ±0.5mm'),
            points: [
                t('Sensor siêu âm công nghiệp từ Banner/Pepperl+Fuchs', 'Industrial ultrasonic sensors from Banner/Pepperl+Fuchs'),
                t('Thuật toán lọc nhiễu thông minh, ổn định 98%+', 'Smart noise-filtering algorithm, 98%+ stability'),
                t('Phù hợp với màng trong suốt (PE, PP, PVC)', 'Suitable for transparent films (PE, PP, PVC)'),
            ],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Cloud,
            title: t('IoT/ERP Tích Hợp', 'IoT/ERP Integration'),
            points: [
                t('Dashboard real-time trên web/mobile', 'Real-time dashboard on web/mobile'),
                t('API mở (MQTT, Modbus) kết nối dễ dàng', 'Open API (MQTT, Modbus) for easy connection'),
                t('Tự động xuất báo cáo Cp/Cpk cho ISO 9001', 'Auto-export Cp/Cpk reports for ISO 9001'),
            ],
            color: 'from-accent to-green-500',
        },
        {
            icon: Wrench,
            title: t('Hỗ Trợ Tại VN < 4h', 'Vietnam Support < 4 Hours'),
            points: [
                t('Kỹ thuật viên tại TP.HCM, Bình Dương, Đồng Nai', 'Technicians in HCMC, Binh Duong, Dong Nai'),
                t('Hotline 24/7: 098-765-4321', '24/7 Hotline: 098-765-4321'),
                t('Bảo hành 12-24 tháng, phụ tùng sẵn có', '12-24 months warranty, spare parts available'),
            ],
            color: 'from-orange-500 to-red-500',
        },
    ]

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="heading-2 mb-4">
                        {t('Tại Sao Chọn', 'Why Choose')} <span className="text-accent">SML TECH?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('Kết hợp hoàn hảo giữa công nghệ hiện đại, giá cả hợp lý, và dịch vụ địa phương', 'Perfect combination of modern technology, reasonable price, and local support')}
                    </p>
                </div>

                {/* Value Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="card group">
                            {/* Icon with Gradient */}
                            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                                <value.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold mb-6">{value.title}</h3>

                            {/* Points */}
                            <ul className="space-y-3">
                                {value.points.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-accent mr-2 flex-shrink-0">✓</span>
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
