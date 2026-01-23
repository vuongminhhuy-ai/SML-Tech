'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [language, setLanguage] = useState<'vi' | 'en'>('vi')

    const navigation = [
        { name: language === 'vi' ? 'Sản Phẩm' : 'Products', href: '/san-pham' },
        { name: language === 'vi' ? 'Giải Pháp' : 'Solutions', href: '/giai-phap' },
        { name: language === 'vi' ? 'Kiến Thức' : 'Knowledge', href: '/kien-thuc' },
        { name: language === 'vi' ? 'Về Chúng Tôi' : 'About', href: '/ve-chung-toi' },
        { name: language === 'vi' ? 'Liên Hệ' : 'Contact', href: '/lien-he' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src="/images/logo.svg"
                            alt="SML TECH"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-accent font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language Toggle */}
                        <button
                            onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                            className="flex items-center space-x-1 text-gray-600 hover:text-accent"
                        >
                            <span className="font-medium">{language.toUpperCase()}</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {/* Phone */}
                        <a
                            href="tel:0987654321"
                            className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                        >
                            <span>📞</span>
                            <span className="font-semibold">098-765-4321</span>
                        </a>

                        {/* CTA Button */}
                        <Link href="#demo" className="btn-primary">
                            {language === 'vi' ? 'Đặt Demo Miễn Phí' : 'Request Free Demo'}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block py-3 text-gray-700 hover:text-accent font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 space-y-3">
                            <a href="tel:0987654321" className="block text-primary font-semibold">
                                📞 098-765-4321
                            </a>
                            <Link href="#demo" className="btn-primary block text-center">
                                {language === 'vi' ? 'Đặt Demo Miễn Phí' : 'Request Free Demo'}
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
