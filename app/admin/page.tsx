'use client'

import { useState, useEffect } from 'react'
import { supabase, getContent, updateContent, uploadImage, ContentItem } from '@/lib/supabase'
import { Save, Upload, Loader2, CheckCircle, X } from 'lucide-react'

export default function AdminDashboard() {
    const [content, setContent] = useState<ContentItem[]>([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editData, setEditData] = useState<Partial<ContentItem>>({})

    useEffect(() => {
        loadContent()
    }, [])

    async function loadContent() {
        try {
            const data = await getContent()
            setContent(data)
        } catch (error) {
            console.error('Error loading content:', error)
            setMessage({ type: 'error', text: 'Không thể tải nội dung' })
        } finally {
            setLoading(false)
        }
    }

    async function handleSave(id: string) {
        setSaving(true)
        try {
            await updateContent(id, editData)
            await loadContent()
            setEditingId(null)
            setEditData({})
            setMessage({ type: 'success', text: 'Đã lưu thành công!' })
            setTimeout(() => setMessage(null), 3000)
        } catch (error) {
            console.error('Error saving:', error)
            setMessage({ type: 'error', text: 'Lỗi khi lưu' })
        } finally {
            setSaving(false)
        }
    }

    async function handleImageUpload(id: string, file: File) {
        setSaving(true)
        try {
            const imageUrl = await uploadImage(file)
            await updateContent(id, { image_url: imageUrl })
            await loadContent()
            setMessage({ type: 'success', text: 'Đã upload hình ảnh!' })
            setTimeout(() => setMessage(null), 3000)
        } catch (error) {
            console.error('Error uploading:', error)
            setMessage({ type: 'error', text: 'Lỗi khi upload' })
        } finally {
            setSaving(false)
        }
    }

    const startEdit = (item: ContentItem) => {
        setEditingId(item.id)
        setEditData({
            value_vi: item.value_vi,
            value_en: item.value_en,
        })
    }

    const cancelEdit = () => {
        setEditingId(null)
        setEditData({})
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h1 className="text-3xl font-bold text-primary mb-2">
                        SML TECH - Admin Dashboard
                    </h1>
                    <p className="text-gray-600">Quản lý nội dung website</p>
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

                {/* Content Items */}
                <div className="space-y-4">
                    {content.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                            {/* Section Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.section} / {item.key}
                                    </h3>
                                    <p className="text-sm text-gray-500">ID: {item.id.slice(0, 8)}...</p>
                                </div>

                                {editingId === item.id ? (
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleSave(item.id)}
                                            disabled={saving}
                                            className="flex items-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover disabled:opacity-50"
                                        >
                                            {saving ? (
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            ) : (
                                                <Save className="w-4 h-4 mr-2" />
                                            )}
                                            Lưu
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                                        >
                                            Hủy
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => startEdit(item)}
                                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light"
                                    >
                                        Chỉnh sửa
                                    </button>
                                )}
                            </div>

                            {/* Content Fields */}
                            {editingId === item.id ? (
                                <div className="space-y-4">
                                    {/* Vietnamese */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            🇻🇳 Tiếng Việt
                                        </label>
                                        <textarea
                                            value={editData.value_vi || ''}
                                            onChange={(e) => setEditData({ ...editData, value_vi: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                            rows={3}
                                        />
                                    </div>

                                    {/* English */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            🇬🇧 English
                                        </label>
                                        <textarea
                                            value={editData.value_en || ''}
                                            onChange={(e) => setEditData({ ...editData, value_en: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm font-medium text-gray-500 mb-1">🇻🇳 Tiếng Việt</div>
                                        <p className="text-gray-800">{item.value_vi || '(Chưa có)'}</p>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-500 mb-1">🇬🇧 English</div>
                                        <p className="text-gray-800">{item.value_en || '(Empty)'}</p>
                                    </div>
                                </div>
                            )}

                            {/* Image Upload */}
                            <div className="mt-4 pt-4 border-t">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Hình ảnh
                                </label>
                                {item.image_url && (
                                    <img
                                        src={item.image_url}
                                        alt={item.key}
                                        className="w-32 h-32 object-cover rounded-lg mb-2"
                                    />
                                )}
                                <div className="flex items-center space-x-2">
                                    <label className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer">
                                        <Upload className="w-4 h-4 mr-2" />
                                        Upload hình mới
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0]
                                                if (file) handleImageUpload(item.id, file)
                                            }}
                                            className="hidden"
                                        />
                                    </label>
                                    {item.image_url && (
                                        <span className="text-sm text-gray-500">
                                            {item.image_url.split('/').pop()?.slice(0, 20)}...
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
