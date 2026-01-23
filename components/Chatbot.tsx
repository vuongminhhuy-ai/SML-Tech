'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

interface Message {
    id: number
    text: string
    sender: 'user' | 'bot'
    timestamp: Date
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const { t, language } = useLanguage()

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => {
                addBotMessage(
                    language === 'vi'
                        ? 'Xin chào! 👋 Tôi là AI Assistant của SML TECH. Tôi có thể tư vấn về hệ thống đo khổ màng và giúp bạn tính toán tiết kiệm. Bạn đang quan tâm vấn đề gì?'
                        : 'Hello! 👋 I am SML TECH AI Assistant. I can consult about width measurement systems and help calculate your savings. What are you interested in?'
                )
            }, 500)
        }
    }, [isOpen])

    const addBotMessage = (text: string) => {
        const newMessage: Message = {
            id: Date.now(),
            text,
            sender: 'bot',
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, newMessage])
        setIsTyping(false)
    }

    const addUserMessage = (text: string) => {
        const newMessage: Message = {
            id: Date.now(),
            text,
            sender: 'user',
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, newMessage])
    }

    const getSmartResponse = (userMessage: string): string => {
        const msg = userMessage.toLowerCase()

        // VIETNAMESE RESPONSES
        if (language === 'vi') {
            // Pricing questions
            if (msg.includes('giá') || msg.includes('bao nhiêu') || msg.includes('chi phí') || msg.includes('tiền')) {
                return '💰 SML-100 có giá từ 60-90 triệu VNĐ tùy cấu hình. Nghe có vẻ nhiều nhưng thực tế bạn sẽ hoàn vốn trong 6-12 tháng thôi! Có nhà máy đã hoàn vốn trong 22 ngày đấy!\n\nBạn muốn tôi tính xem nhà máy bạn tiết kiệm được bao nhiêu không? Cần thông tin: sản lượng/tháng và tỷ lệ lãng phí hiện tại nhé!'
            }

            // Product/Technical questions
            if (msg.includes('sản phẩm') || msg.includes('sml-100') || msg.includes('hệ thống') || msg.includes('máy')) {
                return '📦 SML-100 là "siêu nhân" đo khổ màng của chúng tôi!\n\n✨ Điểm mạnh:\n• Độ chính xác ±0.5mm (chính xác gấp 10 lần đo tay!)\n• Đo liên tục 24/7, không mệt mỏi\n• Tích hợp IoT/Cloud - xem dashboard bất cứ đâu\n• Cảnh báo tức thì khi sai khổ\n• Hỗ trợ 24/7 tại VN\n\nBạn đang gặp vấn đề gì với việc đo khổ màng hiện tại vậy?'
            }

            // Demo/Trial requests
            if (msg.includes('demo') || msg.includes('thử') || msg.includes('xem') || msg.includes('test')) {
                return '🎯 Tuyệt vời! Demo miễn phí ngay tại nhà máy của bạn!\n\nQuy trình:\n1. Tư vấn qua điện thoại (15 phút)\n2. Kỹ sư đến khảo sát (1-2 ngày)\n3. Lắp thiết bị demo (3 ngày)\n4. Bạn test thực tế, xem kết quả\n\nNhiều khách đã "ngã ngửa" khi thấy họ lãng phí bao nhiêu tiền! 😱\n\nĐể lại SĐT hoặc gọi 098-765-4321, tôi arrange ngay!'
            }

            // Support/Service questions
            if (msg.includes('support') || msg.includes('hỗ trợ') || msg.includes('bảo hành') || msg.includes('sửa')) {
                return '🛠️ Đội support của chúng tôi rất "xịn":\n\n• Hotline 24/7: 098-765-4321\n• Thời gian phản hồi: < 4 giờ\n• Kỹ sư tại Việt Nam, không phải chờ người nước ngoài\n• Bảo hành 2 năm, bảo trì trọn đời\n• Remote support qua Team Viewer nếu cần gấp\n\nKhách của chúng tôi nói: "Mua về yên tâm, có vấn đề gọi là có người!"'
            }

            // ROI/Savings calculation
            if (msg.includes('roi') || msg.includes('hoàn vốn') || msg.includes('tiết kiệm') || msg.includes('lợi nhuận')) {
                return '📈 ROI của SML-100 cực "ngon"!\n\nVí dụ thực tế:\n• Sản lượng: 100 tấn/tháng\n• Lãng phí giảm từ 6% → 2%\n• Tiết kiệm: 150 triệu/tháng\n• Hoàn vốn: 6 tháng!\n\nChưa kể:\n✅ Giảm 70% khiếu nại khách hàng\n✅ Giảm stress cho QC team\n✅ Tăng uy tín với khách hàng\n\nBạn cho tôi biết sản lượng nhà máy, tôi tính cụ thể cho nhé!'
            }

            // Waste/Quality issues
            if (msg.includes('lãng phí') || msg.includes('phế phẩm') || msg.includes('chất lượng') || msg.includes('sai khổ')) {
                return '😱 Lãng phí nguyên liệu là "cơn ác mộng" của mọi nhà máy!\n\nSự thật đau lòng:\n• Trung bình nhà máy lãng phí 5-8%\n• = Mất 150-200 triệu VNĐ/tháng\n• = 1.8-2.4 TỶ/năm bay màu!\n\nNguyên nhân:\n❌ Đo tay không chính xác\n❌ Phát hiện chậm\n❌ Không có dữ liệu theo dõi\n\nSML-100 giải quyết TẤT CẢ vấn đề này!\n\nBạn đang lãng phí bao nhiêu % hiện tại?'
            }

            // Comparison with competitors
            if (msg.includes('so sánh') || msg.includes('khác biệt') || msg.includes('đối thủ') || msg.includes('hãng khác')) {
                return '🏆 So với các hãng khác:\n\n✅ SML TECH:\n• Giá: 60-90tr (rẻ hơn 30-50%!)\n• Support tại VN, phản hồi < 4h\n• Customize theo nhu cầu\n• Training bằng tiếng Việt\n• Spare parts sẵn có tại VN\n\n❌ Hãng nước ngoài:\n• Giá: 150-300tr\n• Support chậm, qua email\n• Cố định, không flexible\n• Training tiếng Anh\n• Chờ spare parts 2-4 tuần\n\nCùng chất lượng, giá rẻ hơn, support tốt hơn. Bạn chọn cái nào? 😉'
            }

            // Company/About questions
            if (msg.includes('công ty') || msg.includes('sml tech') || msg.includes('đội ngũ') || msg.includes('uy tín')) {
                return '🏢 SML TECH - Made in Vietnam với tình yêu!\n\n👥 Về chúng tôi:\n• Startup công nghệ IoT tại TP.HCM\n• Đội ngũ 10+ kỹ sư có kinh nghiệm\n• Đã phục vụ 20+ nhà máy lớn\n• Tập trung 100% vào ngành nhựa VN\n\n🎯 Mission: Giúp nhà máy VN cạnh tranh toàn cầu bằng công nghệ!\n\nKhách hàng nói: "Ủng hộ sản phẩm VN chất lượng!"'
            }

            // Technical specifications
            if (msg.includes('thông số') || msg.includes('kỹ thuật') || msg.includes('spec') || msg.includes('cấu hình')) {
                return '⚙️ Thông số kỹ thuật SML-100:\n\n📏 Đo lường:\n• Độ chính xác: ±0.5mm\n• Tốc độ quét: 1000 lần/phút\n• Range: 100-3000mm\n• Sensor: Laser non-contact\n\n💻 Hệ thống:\n• HMI: Màn hình cảm ứng 10"\n• Cloud: Real-time dashboard\n• Alert: SMS/Email/App\n• Data: Lưu trữ 5 năm\n\n🔌 Lắp đặt:\n• Điện: 220V\n• Môi trường: -10°C đến 60°C\n• Lắp đặt: 1 ngày\n\nCó thắc mắc gì cụ thể không bạn?'
            }

            // Installation/Implementation
            if (msg.includes('lắp đặt') || msg.includes('cài đặt') || msg.includes('triển khai') || msg.includes('setup')) {
                return '🔧 Quy trình lắp đặt siêu đơn giản:\n\n📅 Timeline:\n• Ngày 1: Kỹ sư đến khảo sát\n• Ngày 2-3: Lắp đặt thiết bị\n• Ngày 4: Training nhân viên\n• Ngày 5: Bàn giao, chạy thử\n\n✅ Cam kết:\n• Không ảnh hưởng sản xuất\n• Training đầy đủ\n• Tài liệu tiếng Việt\n• Hỗ trợ 1 tháng miễn phí\n\nKhách nói: "Lắp xong, chạy ngon luôn!"\n\nNhà máy bạn ở đâu? Tôi check kỹ sư gần nhất!'
            }

            // Complaints/Returns concern
            if (msg.includes('khiếu nại') || msg.includes('trả hàng') || msg.includes('khách hàng phàn nàn')) {
                return '😤 Khiếu nại khách hàng về sai khổ màng là vấn đề NGHIÊM TRỌNG!\n\nThiệt hại:\n💰 Chi phí logistics 2 chiều\n💰 Tái sản xuất\n💰 Giảm giá đền bù\n💰 Mất uy tín\n💰 Khách chuyển sang đối thủ\n\n= Mất hàng TRĂM TRIỆU mỗi tháng!\n\nSML-100 giúp:\n✅ Giảm 70% tỷ lệ trả hàng\n✅ Data chứng minh cho khách\n✅ Tăng độ tin cậy\n\nBạn đang bị bao nhiêu % trả hàng?'
            }

            // Generic greeting
            if (msg.includes('xin chào') || msg.includes('hello') || msg.includes('hi') || msg.includes('chào')) {
                return '👋 Chào bạn! Rất vui được hỗ trợ!\n\nTôi là AI Sales của SML TECH, chuyên tư vấn hệ thống đo khổ màng tự động.\n\nBạn đang gặp vấn đề gì? Ví dụ:\n• Lãng phí nguyên liệu cao?\n• Khách hàng phàn nàn sai khổ?\n• Muốn tự động hóa kiểm tra?\n• Tò mò về giá và ROI?\n\nCứ hỏi tôi thoải mái nhé! 😊'
            }

            // Fallback - Natural response with sales focus
            return `Hmm, câu hỏi hay đấy! 🤔\n\nTôi là AI sales nên chuyên về hệ thống đo khổ màng. Câu hỏi "${userMessage}" có liên quan đến:\n\n💰 Giá cả?\n📦 Sản phẩm SML-100?\n🎯 Demo miễn phí?\n📈 Tính toán tiết kiệm?\n🛠️ Hỗ trợ kỹ thuật?\n\nHoặc bạn có thể gọi trực tiếp 098-765-4321 để được tư vấn chi tiết hơn nhé!\n\nBạn quan tâm vấn đề nào nhất?`
        }

        // ENGLISH RESPONSES
        if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('money')) {
            return "💰 SML-100 price: VND 60-90M depending on config. Sounds expensive? Actually payback in 6-12 months!\n\nSome factories got ROI in just 22 days! 🚀\n\nWant me to calculate your potential savings? I need: monthly production volume and current waste rate!"
        }

        if (msg.includes('product') || msg.includes('sml-100') || msg.includes('system') || msg.includes('machine')) {
            return "📦 SML-100 is our \"superhero\" width measurement system!\n\n✨ Highlights:\n• Accuracy ±0.5mm (10x better than manual!)\n• 24/7 continuous monitoring\n• IoT/Cloud integrated\n• Instant alerts\n• 24/7 VN support\n\nWhat challenges are you facing with width measurement?"
        }

        if (msg.includes('demo') || msg.includes('trial') || msg.includes('test')) {
            return "🎯 Great! FREE on-site demo at your factory!\n\nProcess:\n1. Phone consultation (15 min)\n2. Engineer site survey (1-2 days)\n3. Demo installation (3 days)\n4. You test & see results\n\nMany clients were shocked seeing how much they waste! 😱\n\nLeave your number or call 098-765-4321!"
        }

        if (msg.includes('support') || msg.includes('service') || msg.includes('warranty')) {
            return "🛠️ Our support is top-notch:\n\n• 24/7 Hotline: 098-765-4321\n• Response time: < 4 hours\n• Engineers in Vietnam\n• 2-year warranty\n• Lifetime maintenance\n• Remote support available\n\nClients say: \"Buy with confidence!\""
        }

        if (msg.includes('roi') || msg.includes('payback') || msg.includes('savings') || msg.includes('profit')) {
            return "📈 SML-100 ROI is amazing!\n\nReal example:\n• Production: 100 tons/month\n• Waste reduction: 6% → 2%\n• Savings: VND 150M/month\n• Payback: 6 months!\n\nPlus:\n✅ 70% less customer complaints\n✅ Less QC stress\n✅ Better reputation\n\nShare your production volume, I'll calculate!"
        }

        if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return "👋 Hello! Nice to assist you!\n\nI'm SML TECH AI Sales, specializing in automated width measurement systems.\n\nWhat's your concern?\n• High material waste?\n• Customer complaints?\n• Want automation?\n• Curious about price & ROI?\n\nFeel free to ask! 😊"
        }

        // English Fallback
        return `Interesting question! 🤔\n\nI'm a sales AI focused on width measurement systems. Is "${userMessage}" related to:\n\n💰 Pricing?\n📦 SML-100 product?\n🎯 Free demo?\n📈 Calculate savings?\n🛠️ Technical support?\n\nOr call 098-765-4321 for detailed consultation!\n\nWhat interests you most?`
    }

    const handleSend = () => {
        if (!inputValue.trim()) return

        addUserMessage(inputValue)
        setInputValue('')
        setIsTyping(true)

        setTimeout(() => {
            const response = getSmartResponse(inputValue)
            addBotMessage(response)
        }, 1000 + Math.random() * 500) // Variable typing delay for natural feel
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    const quickActions = language === 'vi'
        ? [
            { label: '💰 Giá', text: 'Giá sản phẩm?' },
            { label: '🎯 Demo', text: 'Đặt demo miễn phí' },
            { label: '📈 ROI', text: 'Tính ROI' },
            { label: '🛠️ Support', text: 'Hỗ trợ kỹ thuật' },
        ]
        : [
            { label: '💰 Price', text: 'Product price?' },
            { label: '🎯 Demo', text: 'Request free demo' },
            { label: '📈 ROI', text: 'Calculate ROI' },
            { label: '🛠️ Support', text: 'Technical support' },
        ]

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-hover text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group ${isOpen ? 'rotate-0' : 'animate-pulse'
                    }`}
                aria-label="Open chat"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                )}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold animate-pulse">
                        AI
                    </span>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-10rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-accent/20 animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-accent text-white p-4 flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                            <Bot className="w-6 h-6 animate-pulse" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-lg">SML TECH AI Sales</h3>
                            <p className="text-xs text-white/80 flex items-center">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                {language === 'vi' ? 'Online • Sẵn sàng tư vấn' : 'Online • Ready to consult'}
                            </p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${message.sender === 'user'
                                            ? 'bg-gradient-to-br from-accent to-accent-hover text-white rounded-br-none'
                                            : 'bg-white text-gray-800 shadow-md rounded-bl-none border border-gray-200'
                                        }`}
                                >
                                    <div className="flex items-start space-x-2">
                                        {message.sender === 'bot' && (
                                            <Bot className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                                        )}
                                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                                    </div>
                                    <p className="text-xs opacity-70 mt-1">
                                        {message.timestamp.toLocaleTimeString('vi-VN', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-200">
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions */}
                    <div className="px-4 py-2 bg-white border-t border-gray-200">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {quickActions.map((action, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        addUserMessage(action.text)
                                        setIsTyping(true)
                                        setTimeout(() => {
                                            addBotMessage(getSmartResponse(action.text))
                                        }, 1000)
                                    }}
                                    className="px-3 py-1.5 text-xs bg-gradient-to-r from-accent/10 to-primary/10 hover:from-accent/20 hover:to-primary/20 text-gray-800 font-medium rounded-full whitespace-nowrap transition-all hover:scale-105 border border-accent/20"
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-gray-200">
                        <div className="flex items-end space-x-2">
                            <textarea
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder={language === 'vi' ? 'Hỏi bất cứ điều gì...' : 'Ask anything...'}
                                className="flex-1 resize-none border-2 border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent max-h-20"
                                rows={1}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className="bg-gradient-to-br from-accent to-accent-hover text-white rounded-xl px-4 py-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            {language === 'vi' ? '💡 Hỏi tự nhiên như chat với sales thật!' : '💡 Ask naturally like chatting with real sales!'}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
