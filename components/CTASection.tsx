'use client'

import { useState } from 'react'
import { Phone, Send } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function CTASection() {
    const { language, t } = useLanguage()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        
        const message = language === 'vi' 
            ? `Cảm ơn ${formData.name}! Chúng tôi sẽ liên hệ qua email ${formData.email} hoặc phone ${formData.phone} sớm nhất.` 
            : `Thank you ${formData.name}! We will contact you via email ${formData.email} or phone ${formData.phone} soon.`
            
        alert(message)
        // Reset form
        setFormData({ name: '', email: '', phone: '', company: '' })
    }

    return (
        <section className="section-padding bg-gradient-to-br from-accent to-accent-hover" id="demo">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="heading-2 mb-4">{t('Sẵn Sàng Tối Ưu Sản Xuất?', 'Ready to Optimize Production?')}</h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('Đăng ký ngay để nhận tư vấn miễn phí từ chuyên gia', 'Register now for free consultation from our experts')}
                    </p>

                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left: Phone CTA */}
                            <div className="text-left">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                                    <Phone className="w-8 h-8 text-accent" />
                                </div>
                                <div className="text-gray-700 mb-2">{t('Gọi ngay để được hỗ trợ', 'Call now for support')}</div>
                                <a
                                    href="tel:0987654321"
                                    className="text-3xl font-bold text-primary hover:text-accent transition-colors"
                                >
                                    098-765-4321
                                </a>
                                <div className="text-sm text-gray-500 mt-2">{t('Hotline 24/7', '24/7 Hotline')}</div>
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px h-32 bg-gray-200 mx-auto" />
                            <div className="md:hidden h-px w-full bg-gray-200" />

                            {/* Right: Form */}
                            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                                <div className="text-gray-700 mb-4 font-semibold">{t('Hoặc để lại thông tin:', 'Or leave your details:')}</div>

                                <input
                                    type="text"
                                    placeholder={t('Họ tên *', 'Full Name *')}
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                                />

                                <input
                                    type="email"
                                    placeholder={t('Email *', 'Email *')}
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                                />

                                <input
                                    type="tel"
                                    placeholder={t('Số điện thoại *', 'Phone Number *')}
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                                />

                                <input
                                    type="text"
                                    placeholder={t('Công ty', 'Company')}
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                                />

                                <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                                    <Send className="w-5 h-5" />
                                    <span>{t('Đăng Ký Tư Vấn', 'Request Consultation')}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
