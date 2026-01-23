'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Youtube, Mail } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

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
                            Hệ thống đo lường thông minh cho ngành sản xuất Việt Nam
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
                        <h4 className="font-semibold mb-4">Sản Phẩm</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/san-pham/sml-100" className="text-gray-300 hover:text-accent transition-colors">SML-100 (Màng Nhựa)</Link></li>
                            <li><Link href="/san-pham/sml-200" className="text-gray-300 hover:text-accent transition-colors">SML-200 (Vải) - Coming Soon</Link></li>
                            <li><Link href="/san-pham/so-sanh" className="text-gray-300 hover:text-accent transition-colors">So Sánh Models</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <div>
                        <h4 className="font-semibold mb-4">Giải Pháp</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/giai-phap/nhua" className="text-gray-300 hover:text-accent transition-colors">Nhựa & Bao Bì</Link></li>
                            <li><Link href="/giai-phap/det-may" className="text-gray-300 hover:text-accent transition-colors">Dệt May</Link></li>
                            <li><Link href="/giai-phap/giay" className="text-gray-300 hover:text-accent transition-colors">Giấy & Carton</Link></li>
                            <li><Link href="/tai-lieu" className="text-gray-300 hover:text-accent transition-colors">Tài Liệu Kỹ Thuật</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Liên Hệ</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="text-gray-300">
                                📍 Địa chỉ:<br />
                                TP. Hồ Chí Minh, Việt Nam
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
                            <h4 className="font-semibold mb-2 text-sm">Nhận Tin Tức</h4>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Email của bạn"
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
                            Chính Sách Bảo Mật
                        </Link>
                        <Link href="/dieu-khoan" className="hover:text-accent transition-colors">
                            Điều Khoản Sử Dụng
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
