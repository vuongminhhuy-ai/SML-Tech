'use client'

import { Target, Cloud, Wrench } from 'lucide-react'

export default function ValuePropositions() {
    const values = [
        {
            icon: Target,
            title: 'Đo Chính Xác ±0.5mm',
            titleEn: 'Accurate Measurement ±0.5mm',
            points: [
                'Sensor siêu âm công nghiệp từ Banner/Pepperl+Fuchs',
                'Thuật toán lọc nhiễu thông minh, ổn định 98%+',
                'Phù hợp với màng trong suốt (PE, PP, PVC)',
            ],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Cloud,
            title: 'IoT/ERP Tích Hợp',
            titleEn: 'IoT/ERP Integration',
            points: [
                'Dashboard real-time trên web/mobile',
                'API mở (MQTT, Modbus) kết nối dễ dàng',
                'Tự động xuất báo cáo Cp/Cpk cho ISO 9001',
            ],
            color: 'from-accent to-green-500',
        },
        {
            icon: Wrench,
            title: 'Hỗ Trợ Tại VN < 4h',
            titleEn: 'Vietnam Support < 4 Hours',
            points: [
                'Kỹ thuật viên tại TP.HCM, Bình Dương, Đồng Nai',
                'Hotline 24/7: 098-765-4321',
                'Bảo hành 12-24 tháng, phụ tùng sẵn có',
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
                        Tại Sao Chọn <span className="text-accent">SML TECH?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Kết hợp hoàn hảo giữa công nghệ hiện đại, giá cả hợp lý, và dịch vụ địa phương
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
                            <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{value.titleEn}</p>

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
