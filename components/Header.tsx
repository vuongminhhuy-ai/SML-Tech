'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

type NavItem = {
    name: string
    href?: string
    type?: 'dropdown'
    items?: { name: string; href: string; emoji: string }[]
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [solutionOpen, setSolutionOpen] = useState(false)
    const { language, setLanguage, t } = useLanguage()

    const navigation: NavItem[] = [
        { name: t('Sản Phẩm', 'Products'), href: '/san-pham' },
        {
            name: t('Giải Pháp', 'Solutions'),
            type: 'dropdown',
            items: [
                { emoji: '🧴', name: t('Nhựa, màng bao bì', 'Plastics & Packaging Films'), href: '/giai-phap/nhua' },
                { emoji: '📄', name: t('Giấy, cuộn carton', 'Paper & Carton Rolls'), href: '/giai-phap/giay' },
                { emoji: '🧵', name: t('Vải, vải không dệt', 'Textiles & Non-woven Fabrics'), href: '/giai-phap/vai' },
                { emoji: '🔩', name: t('Kim loại, thép, nhôm', 'Metals, Steel & Aluminum'), href: '/giai-phap/kim-loai' },
            ],
        },
        { name: t('Kiến Thức', 'Knowledge'), href: '/blog' },
        { name: t('Về Chúng Tôi', 'About'), href: '/ve-chung-toi' },
        { name: t('Liên Hệ', 'Contact'), href: '/lien-he' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src="/images/logo.png"
                            alt="SML TECH"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navigation.map((item, idx) =>
                            item.type === 'dropdown' ? (
                                <div
                                    key={idx}
                                    className="relative"
                                    onMouseEnter={() => setSolutionOpen(true)}
                                    onMouseLeave={() => setSolutionOpen(false)}
                                >
                                    <button className="flex items-center gap-1 text-gray-700 hover:text-accent font-medium transition-colors py-6">
                                        {item.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Dropdown */}
                                    <div className={`absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden transition-all duration-200 ${solutionOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                        <div className="py-2">
                                            {item.items?.map((sub, sIdx) => (
                                                <Link
                                                    key={sIdx}
                                                    href={sub.href}
                                                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-accent transition-colors"
                                                    onClick={() => setSolutionOpen(false)}
                                                >
                                                    <span className="text-lg">{sub.emoji}</span>
                                                    <span>{sub.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
                                            <Link href="/giai-phap" className="text-xs text-accent font-semibold hover:underline">
                                                {t('Xem tất cả giải pháp →', 'View all solutions →')}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={idx}
                                    href={item.href!}
                                    className="text-gray-700 hover:text-accent font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language Toggle */}
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setLanguage('vi')}
                                className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'vi' ? 'bg-accent text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                            >
                                VN
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1.5 text-sm font-medium transition-colors ${language === 'en' ? 'bg-accent text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                            >
                                EN
                            </button>
                        </div>

                        {/* Phone */}
                        <a href="tel:0792526184" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
                            <span>📞</span>
                            <span className="font-semibold">079-252-6184</span>
                        </a>

                        {/* CTA Button */}
                        <Link href="/lien-he" className="btn-primary">
                            {t('Liên Hệ Ngay', 'Contact Us')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50 pb-6">
                        <div className="px-4 pt-4 space-y-1">
                            {navigation.map((item, idx) =>
                                item.type === 'dropdown' ? (
                                    <div key={idx}>
                                        <div className="font-medium text-gray-900 py-3 border-b border-gray-100 flex items-center gap-2">
                                            {item.name}
                                        </div>
                                        <div className="pl-4 border-l-2 border-accent/30 my-2 space-y-1">
                                            {item.items?.map((sub, sIdx) => (
                                                <Link
                                                    key={sIdx}
                                                    href={sub.href}
                                                    className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-accent"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <span>{sub.emoji}</span>
                                                    <span>{sub.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={idx}
                                        href={item.href!}
                                        className="block py-3 text-gray-700 hover:text-accent font-medium border-b border-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}

                            <div className="pt-4 space-y-3">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => { setLanguage('vi'); setMobileMenuOpen(false) }}
                                        className={`flex-1 py-2 rounded-md text-sm font-medium ${language === 'vi' ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'}`}
                                    >
                                        🇻🇳 Tiếng Việt
                                    </button>
                                    <button
                                        onClick={() => { setLanguage('en'); setMobileMenuOpen(false) }}
                                        className={`flex-1 py-2 rounded-md text-sm font-medium ${language === 'en' ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700'}`}
                                    >
                                        🇺🇸 English
                                    </button>
                                </div>
                                <a href="tel:0792526184" className="flex items-center justify-center gap-2 text-primary border border-primary rounded-md py-3 font-semibold">
                                    📞 079-252-6184
                                </a>
                                <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full text-center block">
                                    {t('Liên Hệ Ngay', 'Contact Us')}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
