'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
    const [showVideo, setShowVideo] = useState(false)
    const { t } = useLanguage()

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
                            {t(
                                'Giảm Lãng Phí 5-8% Với',
                                'Reduce Waste by 5-8% With'
                            )}
                            <span className="block text-accent">
                                {t('Hệ Thống Đo Khổ Thông Minh', 'Smart Width Measurement System')}
                            </span>
                        </h1>

                        <p className="text-xl text-gray-200">
                            {t(
                                'Tiết kiệm 500 triệu - 2 tỷ đồng/năm cho nhà máy nhựa của bạn',
                                'Save VND 500 million - 2 billion per year for your plastic factory'
                            )}
                        </p>

                        <p className="text-gray-300">
                            {t(
                                'SML TECH cung cấp hệ thống đo khổ màng tự động với công nghệ IoT/ERP, giúp nhà máy nhựa Việt Nam giảm lãng phí nguyên liệu và nâng cao chất lượng sản phẩm.',
                                'SML TECH provides automated film width measurement system with IoT/ERP integration, helping Vietnamese plastic manufacturers reduce material waste and improve product quality.'
                            )}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Link href="#demo" className="btn-primary bg-accent hover:bg-accent-hover">
                                {t('Đăng Ký Demo Miễn Phí', 'Request Free Demo')}
                            </Link>

                            <button
                                onClick={() => setShowVideo(true)}
                                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                            >
                                <Play className="w-5 h-5 inline mr-2" />
                                {t('Xem Video 2 Phút', 'Watch 2-Min Video')}
                            </button>
                        </div>

                        {/* Stats Bar */}
                        <div className="flex flex-wrap gap-6 pt-6 border-t border-white/20">
                            <div>
                                <div className="text-accent font-bold text-lg">±0.5mm</div>
                                <div className="text-sm text-gray-300">{t('Chính Xác', 'Accurate')}</div>
                            </div>
                            <div>
                                <div className="text-accent font-bold text-lg">{t('6-12 tháng', '6-12 months')}</div>
                                <div className="text-sm text-gray-300">ROI</div>
                            </div>
                            <div>
                                <div className="text-accent font-bold text-lg">24/7</div>
                                <div className="text-sm text-gray-300">{t('Hỗ Trợ', 'Support')}</div>
                            </div>
                            <div>
                                <div className="text-accent font-bold text-lg">Made in VN</div>
                                <div className="text-sm text-gray-300">{t('Sản xuất tại VN', 'Made in Vietnam')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image/Product */}
                    <div className="relative hidden lg:block">
                        <div className="relative z-10">
                            {/* Professional Product Image */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/hero-product.png"
                                    alt="SML-100 Smart Width Measurement System"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Floating Dashboard Preview - Using Real Screenshot */}
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 rounded-lg shadow-2xl overflow-hidden w-80">
                            <img
                                src="/images/dashboard.png"
                                alt="Real-time Dashboard Preview"
                                className="w-full h-auto"
                            />
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
                            {t('Đóng', 'Close')} ✕
                        </button>
                        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                            <p className="text-white">{t('Video demo sẽ được thêm ở đây', 'Demo video will be added here')}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
