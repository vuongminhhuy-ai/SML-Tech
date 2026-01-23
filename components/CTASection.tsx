'use client'

import { useState } from 'react'
import { Phone, Send } from 'lucide-react'

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Connect to Supabase or API
        console.log('Form submitted:', formData)
        alert('Cảm ơn! Chúng tôi sẽ liên hệ với bạn sớm nhất.')
    }

    return (
        <section className="section-padding bg-gradient-to-br from-accent to-accent-hover" id="demo">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="heading-2 mb-4">Sẵn Sàng Tối Ưu Sản Xuất?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Đăng ký ngay để nhận tư vấn miễn phí từ chuyên gia
                    </p>

                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left: Phone CTA */}
                            <div className="text-left">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                                    <Phone className="w-8 h-8 text-accent" />
                                </div>
                                <div className="text-gray-700 mb-2">Gọi ngay để được hỗ trợ</div>
                                <a
                                    href="tel:0987654321"
                                    className="text-3xl font-bold text-primary hover:text-accent transition-colors"
                                >
                                    098-765-4321
                                </a>
                                <div className="text-sm text-gray-500 mt-2">Hotline 24/7</div>
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px h-32 bg-gray-200 mx-auto" />
                            <div className="md:hidden h-px w-full bg-gray-200" />

                            {/* Right: Form */}
                            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                <div className="text-gray-700 mb-4 font-semibold">Hoặc để lại thông tin:</div>

                                <input
                                    type="text"
                                    placeholder="Họ tên *"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                                />

                                <input
                                    type="tel"
                                    placeholder="Số điện thoại *"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                                />

                                <input
                                    type="text"
                                    placeholder="Công ty"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                                />

                                <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                                    <Send className="w-5 h-5" />
                                    <span>Đăng Ký Tư Vấn</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
