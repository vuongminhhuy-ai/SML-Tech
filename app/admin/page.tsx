'use client'

import { useState, useEffect } from 'react'
import { Save, Upload, Loader2, CheckCircle, X, Edit, Image as ImageIcon } from 'lucide-react'

type ContentData = {
    hero: {
        title_vi: string
        title_en: string
        subtitle_vi: string
        subtitle_en: string
        description_vi: string
        description_en: string
        cta_primary_vi: string
        cta_primary_en: string
        cta_secondary_vi: string
        cta_secondary_en: string
    }
    values: Array<{
        id: string
        title_vi: string
        title_en: string
        points_vi: string[]
        points_en: string[]
    }>
    cta: {
        title_vi: string
        title_en: string
        subtitle_vi: string
        subtitle_en: string
    }
    testimonial: {
        name: string
        title: string
        company: string
        quote_vi: string
        quote_en: string
        results: {
            waste_reduction: string
            monthly_saving: string
            roi_months: string
        }
    }
    stats: Array<{
        value: string
        label_vi: string
        label_en: string
    }>
}

export default function AdminDashboard() {
    const [content, setContent] = useState<ContentData | null>(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const [editSection, setEditSection] = useState<string | null>(null)

    useEffect(() => {
        loadContent()
    }, [])

    async function loadContent() {
        try {
            const res = await fetch('/api/content')
            const data = await res.json()
            setContent(data)
        } catch (error) {
            console.error('Error loading content:', error)
            showMessage('error', 'Không thể tải nội dung')
        } finally {
            setLoading(false)
        }
    }

    async function handleSave() {
        setSaving(true)
        try {
            const res = await fetch('/api/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(content)
            })

            if (res.ok) {
                showMessage('success', 'Đã lưu thành công!')
                setEditSection(null)
            } else {
                showMessage('error', 'Lỗi khi lưu')
            }
        } catch (error) {
            console.error('Error saving:', error)
            showMessage('error', 'Lỗi khi lưu')
        } finally {
            setSaving(false)
        }
    }

    async function handleImageUpload(file: File) {
        setUploading(true)
        try {
            const formData = new FormData()
            formData.append('file', file)

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })

            const data = await res.json()

            if (res.ok) {
                showMessage('success', `Đã upload: ${data.filename}`)
                return data.url
            } else {
                showMessage('error', 'Lỗi khi upload')
                return null
            }
        } catch (error) {
            console.error('Error uploading:', error)
            showMessage('error', 'Lỗi khi upload')
            return null
        } finally {
            setUploading(false)
        }
    }

    function showMessage(type: 'success' | 'error', text: string) {
        setMessage({ type, text })
        setTimeout(() => setMessage(null), 3000)
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
            </div>
        )
    }

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-red-600">Không thể tải nội dung</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-primary mb-2">
                                SML TECH - Admin Panel
                            </h1>
                            <p className="text-gray-600">Quản lý nội dung website (JSON-based, miễn phí 100%)</p>
                        </div>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover disabled:opacity-50 shadow-md"
                        >
                            {saving ? (
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            ) : (
                                <Save className="w-5 h-5 mr-2" />
                            )}
                            Lưu Tất Cả
                        </button>
                    </div>
                </div>

                {/* Success/Error Message */}
                {message && (
                    <div className={`mb-6 p-4 rounded-lg flex items-center ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                        }`}>
                        {message.type === 'success' ? (
                            <CheckCircle className="w-5 h-5 mr-2" />
                        ) : (
                            <X className="w-5 h-5 mr-2" />
                        )}
                        {message.text}
                    </div>
                )}

                {/* Hero Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Hero Section</h2>
                        <button
                            onClick={() => setEditSection(editSection === 'hero' ? null : 'hero')}
                            className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light"
                        >
                            <Edit className="w-4 h-4 mr-2" />
                            {editSection === 'hero' ? 'Đóng' : 'Chỉnh sửa'}
                        </button>
                    </div>

                    {editSection === 'hero' ? (
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">🇻🇳 Tiêu đề</label>
                                    <input
                                        value={content.hero.title_vi}
                                        onChange={(e) => setContent({
                                            ...content,
                                            hero: { ...content.hero, title_vi: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">🇬🇧 Title</label>
                                    <input
                                        value={content.hero.title_en}
                                        onChange={(e) => setContent({
                                            ...content,
                                            hero: { ...content.hero, title_en: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">🇻🇳 Phụ đề</label>
                                    <input
                                        value={content.hero.subtitle_vi}
                                        onChange={(e) => setContent({
                                            ...content,
                                            hero: { ...content.hero, subtitle_vi: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">🇬🇧 Subtitle</label>
                                    <input
                                        value={content.hero.subtitle_en}
                                        onChange={(e) => setContent({
                                            ...content,
                                            hero: { ...content.hero, subtitle_en: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">🇻🇳 Mô tả</label>
                                    <textarea
                                        value={content.hero.description_vi}
                                        onChange={(e) => setContent({
                                            ...content,
                                            hero: { ...content.hero, description_vi: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                        rows={3}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">🇬🇧 Description</label>
                                    <textarea
                                        value={content.hero.description_en}
                                        onChange={(e) => setContent({
                                            ...content,
                                            hero: { ...content.hero, description_en: e.target.value }
                                        })}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
                                        rows={3}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <div className="font-medium text-gray-500 mb-1">🇻🇳 Tiêu đề</div>
                                <p className="text-gray-800">{content.hero.title_vi}</p>
                            </div>
                            <div>
                                <div className="font-medium text-gray-500 mb-1">🇬🇧 Title</div>
                                <p className="text-gray-800">{content.hero.title_en}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Image Upload */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Upload Hình Ảnh
                    </h2>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light cursor-pointer">
                            {uploading ? (
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            ) : (
                                <Upload className="w-5 h-5 mr-2" />
                            )}
                            Chọn hình để upload
                            <input
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                        const url = await handleImageUpload(file)
                                        if (url) {
                                            console.log('Image uploaded:', url)
                                        }
                                    }
                                }}
                                className="hidden"
                                disabled={uploading}
                            />
                        </label>
                        <p className="text-sm text-gray-500">
                            Hình sẽ lưu vào /public/images/uploads/
                        </p>
                    </div>
                </div>

                {/* Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">💡 Hướng dẫn sử dụng</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Click "Chỉnh sửa" để edit từng section</li>
                        <li>• Sửa nội dung song ngữ Việt-Anh</li>
                        <li>• Click "Lưu Tất Cả" để lưu thay đổi</li>
                        <li>• Upload hình ảnh (tự động lưu vào project)</li>
                        <li>• <strong>100% miễn phí</strong> - không cần database!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
