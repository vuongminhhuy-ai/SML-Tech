'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Youtube, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const { t } = useLanguage()

    return (
        <footer className="bg-primary text-white">
            <div className="container-custom section-padding">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Column 1: Company Info */}
                    <div>
                        <div className="text-2xl font-bold mb-2">
                            <span className="text-white">SML</span>
                            <span className="text-accent"> TECH</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">SIGMA METRIC LAB TECHNOLOGY</p>
                        <p className="text-sm text-gray-300 mb-4">
                            {t(
                                'Hệ thống đo lường thông minh cho ngành sản xuất Việt Nam',
                                'Smart measurement systems for Vietnamese manufacturing'
                            )}
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Products */}
                    <div>
                        <h4 className="font-semibold mb-4">{t('Sản Phẩm', 'Products')}</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/san-pham" className="text-gray-300 hover:text-accent transition-colors">
                                    SML-100 ({t('Màng Nhựa', 'Plastic Film')})
                                </Link>
                            </li>
                            <li>
                                <Link href="/san-pham" className="text-gray-300 hover:text-accent transition-colors">
                                    SML-200 ({t('Vải', 'Textile')}) - Coming Soon
                                </Link>
                            </li>
                            <li>
                                <Link href="/san-pham" className="text-gray-300 hover:text-accent transition-colors">
                                    {t('So Sánh Models', 'Compare Models')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <div>
                        <h4 className="font-semibold mb-4">{t('Giải Pháp', 'Solutions')}</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/giai-phap#plastic" className="text-gray-300 hover:text-accent transition-colors">
                                    {t('Nhựa & Bao Bì', 'Plastic & Packaging')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/giai-phap#textile" className="text-gray-300 hover:text-accent transition-colors">
                                    {t('Dệt May', 'Textile')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/giai-phap#paper" className="text-gray-300 hover:text-accent transition-colors">
                                    {t('Giấy & Carton', 'Paper & Carton')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                                    {t('Tài Liệu Kỹ Thuật', 'Technical Docs')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">{t('Liên Hệ', 'Contact')}</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="text-gray-300">
                                📍 {t('Địa chỉ:', 'Address:')}<br />
                                {t('TP. Hồ Chí Minh, Việt Nam', 'Ho Chi Minh City, Vietnam')}
                            </li>
                            <li>
                                📞 Hotline:{' '}
                                <a href="tel:0987654321" className="text-accent hover:text-accent-hover">
                                    098-765-4321
                                </a>
                            </li>
                            <li>
                                ✉️ Email:{' '}
                                <a href="mailto:info@smltech.vn" className="text-accent hover:text-accent-hover">
                                    info@smltech.vn
                                </a>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-4">
                            <h4 className="font-semibold mb-2 text-sm">{t('Nhận Tin Tức', 'Newsletter')}</h4>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder={t('Email của bạn', 'Your email')}
                                    className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 text-sm focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-accent hover:bg-accent-hover px-4 py-2 rounded-r-lg transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {currentYear} SML TECH. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/chinh-sach-bao-mat" className="hover:text-accent transition-colors">
                            {t('Chính Sách Bảo Mật', 'Privacy Policy')}
                        </Link>
                        <Link href="/dieu-khoan" className="hover:text-accent transition-colors">
                            {t('Điều Khoản Sử Dụng', 'Terms of Use')}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
