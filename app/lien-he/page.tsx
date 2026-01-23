'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function ContactPage() {
    const { t } = useLanguage()

    return (
        <main>
            <Header />

            <div className="section-padding bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <h1 className="heading-2 mb-8 text-center">{t('Liên Hệ', 'Contact')}</h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Contact Info */}
                        <div className="bg-white rounded-xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                {t('Thông Tin Liên Hệ', 'Contact Information')}
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="font-medium mb-1">📞 Hotline</div>
                                    <a href="tel:0987654321" className="text-accent hover:underline">
                                        098-765-4321
                                    </a>
                                </div>

                                <div>
                                    <div className="font-medium mb-1">✉️ Email</div>
                                    <a href="mailto:info@smltech.vn" className="text-accent hover:underline">
                                        info@smltech.vn
                                    </a>
                                </div>

                                <div>
                                    <div className="font-medium mb-1">📍 {t('Địa chỉ', 'Address')}</div>
                                    <p className="text-gray-600">
                                        {t('TP. Hồ Chí Minh, Việt Nam', 'Ho Chi Minh City, Vietnam')}
                                    </p>
                                </div>

                                <div>
                                    <div className="font-medium mb-1">⏰ {t('Giờ làm việc', 'Working Hours')}</div>
                                    <p className="text-gray-600">
                                        {t('Thứ 2 - Thứ 6: 8:00 - 17:00', 'Mon - Fri: 8:00 - 17:00')}<br />
                                        {t('Thứ 7: 8:00 - 12:00', 'Sat: 8:00 - 12:00')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div id="demo" className="bg-white rounded-xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                {t('Gửi Tin Nhắn', 'Send Message')}
                            </h3>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {t('Họ tên', 'Full name')} *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {t('Email', 'Email')} *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {t('Số điện thoại', 'Phone number')} *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {t('Tin nhắn', 'Message')}
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    {t('Gửi Tin Nhắn', 'Send Message')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
