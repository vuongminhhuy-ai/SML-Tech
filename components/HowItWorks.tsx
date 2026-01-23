'use client'

export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Đo / Measure',
            description: 'Cảm biến hiện đại tiến hành đo khổ màng',
            descriptionEn: 'Modern sensors measure film width',
            icon: '📡',
        },
        {
            number: '02',
            title: 'Xử Lý / Process',
            description: 'Truyền về bộ xử lý để tính toán',
            descriptionEn: 'Transmit to processor for calculation',
            icon: '🔧',
        },
        {
            number: '03',
            title: 'Hiển Thị / Display',
            description: 'HMI 7" hiển thị real-time, cảnh báo sai lệch',
            descriptionEn: '7" HMI displays real-time, alerts deviation',
            icon: '📱',
        },
        {
            number: '04',
            title: 'Phân Tích / Analyze',
            description: 'Cloud dashboard phân tích Cp/Cpk, SPC charts',
            descriptionEn: 'Cloud dashboard analyzes Cp/Cpk, SPC charts',
            icon: '☁️',
        },
    ]

    return (
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="heading-2 mb-4">Cách Hoạt Động</h2>
                    <p className="text-lg text-gray-600">Quy trình hoạt động đơn giản, hiệu quả</p>
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
                                <p className="text-gray-400 text-xs">{step.descriptionEn}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
