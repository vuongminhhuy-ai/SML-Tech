import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function SolutionsPage() {
    const solutions = [
        {
            id: 'plastic',
            icon: '🏭',
            title: 'Nhựa & Bao Bì',
            titleEn: 'Plastic & Packaging',
            description: 'Giải pháp cho máy thổi màng PE, PP, PVC và sản xuất bao bì nhựa',
            descriptionEn: 'Solutions for PE, PP, PVC blown film machines and plastic packaging production',
            applications: [
                'Thổi màng (Blown Film)',
                'Chia cuộn (Slitting)',
                'Cán màng (Calendering)',
                'In flexo (Flexographic Printing)',
            ],
            benefits: [
                'Giảm lãng phí 5-8%',
                'Kiểm soát chất lượng real-time',
                'Tự động hóa quy trình đo',
                'Tích hợp dễ dàng với máy hiện tại',
            ],
        },
        {
            id: 'textile',
            icon: '👕',
            title: 'Dệt May',
            titleEn: 'Textile',
            description: 'Đo khổ vải tự động cho ngành dệt may, sợi, vải kỹ thuật',
            descriptionEn: 'Automated fabric width measurement for textile, yarn, technical fabrics',
            applications: [
                'Dệt vải (Weaving)',
                'Nhuộm vải (Dyeing)',
                'Hoàn tất vải (Finishing)',
                'Kiểm tra chất lượng (QC)',
            ],
            benefits: [
                'Đảm bảo khổ vải đồng đều',
                'Giảm phế phẩm khi cắt',
                'SPC tracking tự động',
                'Phù hợp môi trường ẩm, nhiệt',
            ],
            status: 'Coming Q3 2026',
        },
        {
            id: 'paper',
            icon: '📄',
            title: 'Giấy & Carton',
            titleEn: 'Paper & Carton',
            description: 'Hệ thống đo khổ cho giấy, carton, bìa cứng',
            descriptionEn: 'Width measurement system for paper, carton, cardboard',
            applications: [
                'Sản xuất giấy (Paper production)',
                'In offset/digital (Printing)',
                'Sản xuất carton (Carton making)',
                'Bao bì giấy (Paper packaging)',
            ],
            benefits: [
                'Độ chính xác cao trên giấy mỏng',
                'Không tiếp xúc (Non-contact)',
                'Tốc độ đo nhanh',
                'Chống bụi giấy',
            ],
            status: 'Coming Q4 2026',
        },
    ]

    return (
        <main>
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-white section-padding">
                <div className="container-custom">
                    <h1 className="heading-2 mb-4">Giải Pháp / Solutions</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        Hệ thống đo khổ thông minh cho mọi ngành sản xuất
                    </p>
                </div>
            </div>

            {/* Solutions Grid */}
            <div className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="space-y-12">
                        {solutions.map((solution, index) => (
                            <div key={solution.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-8 p-8">
                                    {/* Left: Info */}
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <span className="text-5xl mr-4">{solution.icon}</span>
                                            <div>
                                                <h2 className="text-3xl font-bold">{solution.title}</h2>
                                                <p className="text-gray-500">{solution.titleEn}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 mb-6">{solution.description}</p>
                                        <p className="text-gray-600 text-sm mb-6">{solution.descriptionEn}</p>

                                        {solution.status && (
                                            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                                                {solution.status}
                                            </div>
                                        )}

                                        <div className="flex gap-4">
                                            {index === 0 ? (
                                                <Link href="/lien-he" className="btn-primary">
                                                    Nhận Tư Vấn
                                                </Link>
                                            ) : (
                                                <button className="btn-secondary opacity-60 cursor-not-allowed">
                                                    Sắp Ra Mắt
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right: Details */}
                                    <div>
                                        <div className="mb-6">
                                            <h3 className="font-semibold text-lg mb-3">Ứng Dụng / Applications:</h3>
                                            <ul className="space-y-2">
                                                {solution.applications.map((app, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-accent mr-2">▸</span>
                                                        <span>{app}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-lg mb-3">Lợi Ích / Benefits:</h3>
                                            <ul className="space-y-2">
                                                {solution.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-success mr-2">✓</span>
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="section-padding bg-accent text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Tìm Giải Pháp Phù Hợp Cho Bạn?
                    </h2>
                    <p className="text-xl mb-8">
                        Liên hệ để được tư vấn miễn phí từ chuyên gia
                    </p>
                    <Link href="/lien-he" className="btn-primary bg-white text-accent hover:bg-gray-100">
                        Liên Hệ Ngay
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    )
}
