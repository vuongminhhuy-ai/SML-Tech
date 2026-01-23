'use client'

import { useState, useEffect } from 'react'
import { Calculator, TrendingUp, Clock } from 'lucide-react'

export default function ROICalculator() {
    const [output, setOutput] = useState(100) // tons/month
    const [price, setPrice] = useState(25000) // VND/kg
    const [wasteBefore, setWasteBefore] = useState(6) // %
    const [wasteAfter, setWasteAfter] = useState(2) // %

    const [results, setResults] = useState({
        monthlySaving: 0,
        annualSaving: 0,
        paybackMonths: 0,
        paybackDays: 0,
    })

    useEffect(() => {
        // Calculate
        const wasteDiff = (wasteBefore - wasteAfter) / 100
        const savingKg = output * 1000 * wasteDiff
        const monthlySaving = savingKg * price
        const annualSaving = monthlySaving * 12

        const machineCost = 70000000 // 70M VND
        const paybackMonths = machineCost / monthlySaving
        const paybackDays = Math.round(paybackMonths * 30)

        setResults({
            monthlySaving,
            annualSaving,
            paybackMonths,
            paybackDays,
        })
    }, [output, price, wasteBefore, wasteAfter])

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('vi-VN').format(Math.round(value))
    }

    return (
        <section className="section-padding bg-white" id="roi-calculator">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                        <Calculator className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="heading-2 mb-4">
                        Tính Toán <span className="text-accent">Tiết Kiệm</span> Cho Nhà Máy Của Bạn
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nhập thông tin nhà máy để xem tiết kiệm cụ thể
                    </p>
                </div>

                {/* Calculator Card */}
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8 p-8">
                        {/* Left: Inputs */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold mb-4">Thông Tin Nhà Máy</h3>

                            {/* Output */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sản lượng màng (tấn/tháng)
                                </label>
                                <input
                                    type="number"
                                    value={output}
                                    onChange={(e) => setOutput(Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                    min="10"
                                    max="1000"
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Giá nguyên liệu (VNĐ/kg)
                                </label>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                                    min="15000"
                                    max="50000"
                                    step="1000"
                                />
                            </div>

                            {/* Waste Before */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Lãng phí hiện tại: <span className="text-accent font-semibold">{wasteBefore}%</span>
                                </label>
                                <input
                                    type="range"
                                    value={wasteBefore}
                                    onChange={(e) => setWasteBefore(Number(e.target.value))}
                                    className="w-full"
                                    min="2"
                                    max="15"
                                    step="0.5"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>2%</span>
                                    <span>15%</span>
                                </div>
                            </div>

                            {/* Waste After */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Lãng phí sau khi dùng SML: <span className="text-success font-semibold">{wasteAfter}%</span>
                                </label>
                                <input
                                    type="range"
                                    value={wasteAfter}
                                    onChange={(e) => setWasteAfter(Number(e.target.value))}
                                    className="w-full"
                                    min="1"
                                    max="5"
                                    step="0.5"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>1%</span>
                                    <span>5%</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl p-8 text-white">
                            <h3 className="text-xl font-semibold mb-6">Kết Quả Tiết Kiệm</h3>

                            <div className="space-y-6">
                                {/* Monthly Saving */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <TrendingUp className="w-5 h-5 text-accent mr-2" />
                                        <div className="text-sm text-gray-200">Tiết kiệm mỗi tháng</div>
                                    </div>
                                    <div className="text-3xl font-bold text-accent">
                                        {formatCurrency(results.monthlySaving)} VNĐ
                                    </div>
                                </div>

                                {/* Annual Saving */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <div className="text-sm text-gray-200 mb-2">Tiết kiệm mỗi năm</div>
                                    <div className="text-2xl font-semibold">
                                        {formatCurrency(results.annualSaving)} VNĐ
                                    </div>
                                </div>

                                {/* Payback */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <Clock className="w-5 h-5 text-accent mr-2" />
                                        <div className="text-sm text-gray-200">Thời gian hoàn vốn</div>
                                    </div>
                                    <div className="text-2xl font-semibold">
                                        {results.paybackMonths.toFixed(1)} tháng
                                    </div>
                                    <div className="text-accent font-bold text-lg">
                                        = Chỉ {results.paybackDays} ngày!
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Nhận Báo Giá Chi Tiết →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Text */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    * Số liệu chỉ mang tính chất tham khảo. ROI thực tế phụ thuộc vào điều kiện cụ thể của từng nhà máy.
                </p>
            </div>
        </section>
    )
}
