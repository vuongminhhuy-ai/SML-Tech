'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function HowItWorks() {
    const { t } = useLanguage()

    const steps = [
        {
            number: '01',
            title: t('Đo', 'Measure'),
            description: t('Cảm biến hiện đại tiến hành đo khổ màng', 'Modern sensors measure film width'),
            icon: '📡',
        },
        {
            number: '02',
            title: t('Xử Lý', 'Process'),
            description: t('Truyền về bộ xử lý để tính toán', 'Transmit to processor for calculation'),
            icon: '🔧',
        },
        {
            number: '03',
            title: t('Hiển Thị', 'Display'),
            description: t('HMI 7" hiển thị real-time, cảnh báo sai lệch', '7" HMI displays real-time, alerts deviation'),
            icon: '📱',
        },
        {
            number: '04',
            title: t('Phân Tích', 'Analyze'),
            description: t('Cloud dashboard phân tích Cp/Cpk, SPC charts', 'Cloud dashboard analyzes Cp/Cpk, SPC charts'),
            icon: '☁️',
        },
    ]

    return (
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="heading-2 mb-4">{t('Cách Hoạt Động', 'How It Works')}</h2>
                    <p className="text-lg text-gray-600">{t('Quy trình hoạt động đơn giản, hiệu quả', 'Simple and efficient workflow')}</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                            )}

                            <div className="card text-center relative z-10">
                                {/* Number Badge */}
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent to-accent-hover text-white font-bold rounded-full mb-4">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="text-5xl mb-4">{step.icon}</div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-1">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
