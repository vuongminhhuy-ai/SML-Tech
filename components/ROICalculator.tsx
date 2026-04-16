'use client'

import { useState } from 'react'
import { Calculator, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function ROICalculator() {
    const { t, language } = useLanguage()

    const [production, setProduction] = useState(100) // tấn/tháng
    const [materialCost, setMaterialCost] = useState(25000) // VNĐ/kg
    const [currentWaste, setCurrentWaste] = useState(6) // %
    const [afterSMLWaste, setAfterSMLWaste] = useState(2) // %
    const [returnRate, setReturnRate] = useState(3) // % đơn hàng bị trả
    const [complaintCost, setComplaintCost] = useState(50000000) // VNĐ/tháng chi phí khiếu nại

    // Calculations
    const productionKg = production * 1000 // kg/tháng

    // 1. Material waste cost
    const currentWasteKg = (productionKg * currentWaste) / 100
    const afterSMLWasteKg = (productionKg * afterSMLWaste) / 100
    const wasteReduction = currentWasteKg - afterSMLWasteKg
    const materialSavings = wasteReduction * materialCost

    // 2. Customer return/complaint cost
    const returnReduction = returnRate * 0.7 // Assume 70% reduction in returns
    const complaintSavings = complaintCost * (returnReduction / returnRate)

    // 3. Total monthly savings
    const totalMonthlySavings = materialSavings + complaintSavings
    const totalYearlySavings = totalMonthlySavings * 12

    // 4. ROI calculation
    const smlCost = 75000000 // VNĐ average cost
    const paybackMonths = smlCost / totalMonthlySavings
    const paybackDays = paybackMonths * 30

    const formatCurrency = (value: number) => {
        if (language === 'vi') {
            if (value >= 1000000000) return `${(value / 1000000000).toFixed(2)} tỷ VNĐ`
            if (value >= 1000000) return `${(value / 1000000).toFixed(0)} triệu VNĐ`
            return `${value.toLocaleString('vi-VN')} VNĐ`
        } else {
            return `VND ${(value / 1000000).toFixed(1)}M`
        }
    }

    return (
        <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50" id="roi-calculator">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                        <Calculator className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="heading-2 mb-4">
                        {t('Tính Toán Tiết Kiệm Cho Nhà Máy Của Bạn', 'Calculate Savings For Your Factory')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t(
                            'Nhập thông tin nhà máy để xem SML TECH giúp bạn tiết kiệm bao nhiêu - bao gồm cả chi phí lãng phí nguyên liệu VÀ thiệt hại do khách hàng trả hàng',
                            'Enter your factory information to see how much SML TECH saves you - including material waste AND customer return costs'
                        )}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left: Input Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                {t('Thông Tin Nhà Máy', 'Factory Information')}
                            </h3>

                            <div className="space-y-6">
                                {/* Production */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        {t('Sản lượng màng (tấn/tháng)', 'Film production (tons/month)')}
                                    </label>
                                    <input
                                        type="number"
                                        value={production}
                                        onChange={(e) => setProduction(Number(e.target.value))}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none text-lg font-semibold"
                                    />
                                </div>

                                {/* Material Cost */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        {t('Giá nguyên liệu (VNĐ/kg)', 'Material cost (VND/kg)')}
                                    </label>
                                    <input
                                        type="number"
                                        value={materialCost}
                                        onChange={(e) => setMaterialCost(Number(e.target.value))}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none text-lg font-semibold"
                                    />
                                </div>

                                {/* Current Waste */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        {t('Lãng phí hiện tại', 'Current waste')}: <span className="text-accent text-xl">{currentWaste}%</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="2"
                                        max="15"
                                        step="0.5"
                                        value={currentWaste}
                                        onChange={(e) => setCurrentWaste(Number(e.target.value))}
                                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>2%</span>
                                        <span>15%</span>
                                    </div>
                                </div>

                                {/* After SML Waste */}
                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        {t('Lãng phí sau khi dùng SML', 'Waste after using SML')}: <span className="text-success text-xl">{afterSMLWaste}%</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0.5"
                                        max="5"
                                        step="0.5"
                                        value={afterSMLWaste}
                                        onChange={(e) => setAfterSMLWaste(Number(e.target.value))}
                                        className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-success"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>0.5%</span>
                                        <span>5%</span>
                                    </div>
                                </div>

                                {/* Return Rate */}
                                <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                                    <label className="block text-sm font-semibold mb-2 text-orange-900 flex items-center">
                                        <AlertTriangle className="w-4 h-4 mr-2" />
                                        {t('Tỷ lệ khách hàng trả hàng/khiếu nại', 'Customer return/complaint rate')}: <span className="text-orange-600 text-xl ml-2">{returnRate}%</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10"
                                        step="0.5"
                                        value={returnRate}
                                        onChange={(e) => setReturnRate(Number(e.target.value))}
                                        className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                    />
                                    <div className="flex justify-between text-xs text-orange-700 mt-1">
                                        <span>0%</span>
                                        <span>10%</span>
                                    </div>
                                </div>

                                {/* Complaint Cost */}
                                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                                    <label className="block text-sm font-semibold mb-2 text-red-900">
                                        {t('Chi phí xử lý khiếu nại/tháng (VNĐ)', 'Monthly complaint handling cost (VND)')}
                                    </label>
                                    <input
                                        type="number"
                                        value={complaintCost}
                                        onChange={(e) => setComplaintCost(Number(e.target.value))}
                                        className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:border-red-500 focus:outline-none text-lg font-semibold bg-white"
                                        placeholder="50000000"
                                    />
                                    <p className="text-xs text-red-700 mt-2">
                                        {t(
                                            'Bao gồm: Logistics, tái sản xuất, giảm giá, mất uy tín, thời gian nhân viên',
                                            'Includes: Logistics, reproduction, discounts, reputation loss, staff time'
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className="space-y-6">
                            {/* Total Savings */}
                            <div className="bg-gradient-to-br from-success to-green-600 text-white rounded-2xl shadow-xl p-8">
                                <div className="flex items-center mb-4">
                                    <TrendingDown className="w-8 h-8 mr-3" />
                                    <h3 className="text-xl font-bold">
                                        {t('Tổng Tiết Kiệm Mỗi Tháng', 'Total Monthly Savings')}
                                    </h3>
                                </div>
                                <p className="text-5xl font-bold mb-2">{formatCurrency(totalMonthlySavings)}</p>
                                <p className="text-white/80 text-sm">
                                    = {formatCurrency(totalYearlySavings)} / {language === 'vi' ? 'năm' : 'year'}
                                </p>
                            </div>

                            {/* Breakdown */}
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h3 className="text-xl font-bold mb-6">
                                    {t('Chi Tiết Tiết Kiệm', 'Savings Breakdown')}
                                </h3>

                                <div className="space-y-4">
                                    {/* Material Waste Savings */}
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-semibold text-blue-900">
                                                💰 {t('Tiết kiệm nguyên liệu', 'Material savings')}
                                            </span>
                                            <span className="text-lg font-bold text-blue-600">
                                                {formatCurrency(materialSavings)}
                                            </span>
                                        </div>
                                        <p className="text-xs text-blue-700">
                                            {t('Giảm', 'Reduce')} {wasteReduction.toLocaleString(language === 'vi' ? 'vi-VN' : 'en-US')} kg {t('lãng phí', 'waste')} ({currentWaste}% → {afterSMLWaste}%)
                                        </p>
                                    </div>

                                    {/* Complaint Cost Savings */}
                                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-semibold text-orange-900">
                                                ⚠️ {t('Tiết kiệm chi phí khiếu nại', 'Complaint cost savings')}
                                            </span>
                                            <span className="text-lg font-bold text-orange-600">
                                                {formatCurrency(complaintSavings)}
                                            </span>
                                        </div>
                                        <p className="text-xs text-orange-700">
                                            {t('Giảm', 'Reduce')} ~70% {t('tỷ lệ trả hàng do sai khổ', 'returns due to incorrect width')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ROI */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-accent">
                                <div className="flex items-center mb-6">
                                    <DollarSign className="w-8 h-8 text-accent mr-3" />
                                    <h3 className="text-xl font-bold">
                                        {t('Thời Gian Hoàn Vốn', 'Payback Period')}
                                    </h3>
                                </div>

                                <div className="text-center">
                                    <p className="text-6xl font-bold text-accent mb-2">
                                        {paybackDays < 30 ? Math.round(paybackDays) : Math.round(paybackMonths * 10) / 10}
                                    </p>
                                    <p className="text-2xl font-semibold text-gray-700 mb-4">
                                        {paybackDays < 30
                                            ? (language === 'vi' ? 'ngày' : 'days')
                                            : (language === 'vi' ? 'tháng' : 'months')
                                        }
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {language === 'vi'
                                            ? `Chi phí SML-100: ${formatCurrency(smlCost)}`
                                            : `SML-100 cost: ${formatCurrency(smlCost)}`
                                        }
                                    </p>
                                    {paybackDays < 60 && (
                                        <div className="mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block">
                                            🔥 {t('Hoàn vốn cực nhanh!', 'Ultra-fast payback!')}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-accent to-accent-hover text-white rounded-2xl shadow-xl p-6 text-center">
                                <p className="text-lg font-semibold mb-4">
                                    {t('Sẵn sàng tiết kiệm', 'Ready to save')} {formatCurrency(totalMonthlySavings)}/{language === 'vi' ? 'tháng' : 'month'}?
                                </p>
                                <a href="/lien-he" className="btn-primary bg-white text-accent hover:bg-gray-100 inline-block">
                                    {t('Nhận Báo Giá Chi Tiết →', 'Get Detailed Quote →')}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Warning */}
                    <div className="mt-8 bg-red-50 border-2 border-red-300 rounded-xl p-6">
                        <div className="flex items-start space-x-4">
                            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold text-red-900 mb-2">
                                    {t('Cảnh Báo: Chi Phí Ẩn Của Sai Khổ Màng', 'Warning: Hidden Costs of Incorrect Film Width')}
                                </h4>
                                <ul className="text-sm text-red-800 space-y-1">
                                    <li>❌ {t('Khách hàng trả hàng → Mất chi phí logistics 2 chiều', 'Customer returns → Lost 2-way logistics costs')}</li>
                                    <li>❌ {t('Phải tái sản xuất → Mất thời gian + nguyên liệu', 'Must reproduce → Lost time + materials')}</li>
                                    <li>❌ {t('Mất uy tín → Khách hàng chuyển sang đối thủ', 'Lost reputation → Customers switch to competitors')}</li>
                                    <li>❌ {t('Giảm giá đền bù → Giảm lợi nhuận', 'Compensation discounts → Reduced profits')}</li>
                                    <li>❌ {t('Nhân viên mất thời gian xử lý → Giảm năng suất', 'Staff time handling issues → Reduced productivity')}</li>
                                </ul>
                                <p className="mt-3 text-sm font-bold text-red-900">
                                    → {t('SML TECH giúp giảm 70% vấn đề này!', 'SML TECH reduces these issues by 70%!')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
