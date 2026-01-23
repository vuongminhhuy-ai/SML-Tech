'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react'

export default function Hero() {
    const [showVideo, setShowVideo] = useState(false)

    return (
        <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary min-h-[70vh] flex items-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }} />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        <h1 className="heading-1">
                            Giảm Lãng Phí 5-8% Với
                            <span className="block text-accent">Hệ Thống Đo Khổ Thông Minh</span>
                        </h1>

                        <p className="text-xl text-gray-200">
                            Tiết kiệm 500 triệu - 2 tỷ đồng/năm cho nhà máy nhựa của bạn
                        </p>

                        <p className="text-gray-300">
                            SML TECH cung cấp hệ thống đo khổ màng tự động với công nghệ IoT/ERP,
                            giúp nhà máy nhựa Việt Nam giảm lãng phí nguyên liệu và nâng cao chất lượng sản phẩm.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Link href="#demo" className="btn-primary bg-accent hover:bg-accent-hover">
                                Đăng Ký Demo Miễn Phí
                            </Link>

                            <button
                                onClick={() => setShowVideo(true)}
                                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                            >
                                <Play className="w-5 h-5 inline mr-2" />
                                Xem Video 2 Phút
                            </button>
                        </div>

                        {/* Stats Bar */}
                        <div className="flex flex-wrap gap-6 pt-6 border-t border-white/20">
                            <div>
                                <div className="text-accent font-bold text-lg">±0.5mm</div>
                                <div className="text-sm text-gray-300">Chính Xác</div>
                            </div>
                            <div>
                                <div className="text-accent font-bold text-lg">6-12 tháng</div>
                                <div className="text-sm text-gray-300">ROI</div>
                            </div>
                            <div>
                                <div className="text-accent font-bold text-lg">24/7</div>
                                <div className="text-sm text-gray-300">Hỗ Trợ</div>
                            </div>
                            <div>
                                <div className="text-accent font-bold text-lg">Made in VN</div>
                                <div className="text-sm text-gray-300">Sản xuất tại VN</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image/Product */}
                    <div className="relative hidden lg:block">
                        <div className="relative z-10">
                            {/* Placeholder for product image */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-6xl mb-4">📊</div>
                                        <div className="text-xl font-semibold">SML-100</div>
                                        <div className="text-sm text-gray-300">Smart Width Measurement</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Dashboard Preview */}
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl p-4 w-64">
                            <div className="text-sm font-semibold text-gray-800 mb-2">Real-time Dashboard</div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-600">Current Width:</span>
                                    <span className="font-bold text-accent">850.5 mm</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-600">Target:</span>
                                    <span>850.0 mm</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-gray-600">Cp/Cpk:</span>
                                    <span className="text-success font-semibold">1.67 / 1.45</span>
                                </div>
                                <div className="h-16 bg-gray-100 rounded flex items-end space-x-1 p-2">
                                    {[...Array(20)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-accent/70 rounded-t"
                                            style={{ height: `${Math.random() * 60 + 40}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {showVideo && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setShowVideo(false)}
                >
                    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute -top-12 right-0 text-white hover:text-accent"
                        >
                            Close ✕
                        </button>
                        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                            <p className="text-white">Video demo placeholder - thêm YouTube embed ở đây</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
