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
            // Welcome message
            setTimeout(() => {
                addBotMessage(
                    language === 'vi'
                        ? 'Xin chào! 👋 Tôi là chatbot hỗ trợ của SML TECH. Tôi có thể giúp gì cho bạn?'
                        : 'Hello! 👋 I am SML TECH support chatbot. How can I help you?'
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

    const getBotResponse = (userMessage: string): string => {
        const msg = userMessage.toLowerCase()

        // Vietnamese responses
        if (language === 'vi') {
            if (msg.includes('giá') || msg.includes('bao nhiêu') || msg.includes('chi phí')) {
                return '💰 Giá SML-100: 60-90 triệu VNĐ tùy cấu hình. Liên hệ 098-765-4321 để nhận báo giá chi tiết và ưu đãi!'
            }
            if (msg.includes('sản phẩm') || msg.includes('sml-100')) {
                return '📦 SML-100 là hệ thống đo khổ màng tự động với độ chính xác ±0.5mm, tích hợp IoT/Cloud. Tiết kiệm 5-8% nguyên liệu!'
            }
            if (msg.includes('demo') || msg.includes('thử')) {
                return '🎯 Chúng tôi cung cấp demo miễn phí tại nhà máy! Vui lòng để lại thông tin tại trang Liên Hệ hoặc gọi 098-765-4321.'
            }
            if (msg.includes('support') || msg.includes('hỗ trợ')) {
                return '🛠️ SML TECH hỗ trợ 24/7 tại Việt Nam, thời gian phản hồi < 4 giờ. Hotline: 098-765-4321'
            }
            if (msg.includes('roi') || msg.includes('hoàn vốn')) {
                return '📈 Thời gian hoàn vốn trung bình: 6-12 tháng. Nhà máy ABC đã hoàn vốn trong 22.5 ngày!'
            }
            return '🤔 Tôi chưa hiểu câu hỏi. Bạn có thể hỏi về: Giá, Sản phẩm, Demo, Hỗ trợ, ROI. Hoặc gọi 098-765-4321 để được tư vấn trực tiếp!'
        }

        // English responses
        if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
            return '💰 SML-100 Price: VND 60-90 million depending on configuration. Call 098-765-4321 for detailed quote!'
        }
        if (msg.includes('product') || msg.includes('sml-100')) {
            return '📦 SML-100 is an automated film width measurement system with ±0.5mm accuracy, IoT/Cloud integrated. Save 5-8% material!'
        }
        if (msg.includes('demo') || msg.includes('trial')) {
            return '🎯 We provide free on-site demo! Please leave your info at Contact page or call 098-765-4321.'
        }
        if (msg.includes('support') || msg.includes('help')) {
            return '🛠️ SML TECH offers 24/7 support in Vietnam, response time < 4 hours. Hotline: 098-765-4321'
        }
        if (msg.includes('roi') || msg.includes('payback')) {
            return '📈 Average payback period: 6-12 months. ABC Factory achieved payback in just 22.5 days!'
        }
        return "🤔 I didn't understand. You can ask about: Price, Product, Demo, Support, ROI. Or call 098-765-4321 for direct consultation!"
    }

    const handleSend = () => {
        if (!inputValue.trim()) return

        addUserMessage(inputValue)
        setInputValue('')
        setIsTyping(true)

        // Simulate typing delay
        setTimeout(() => {
            const response = getBotResponse(inputValue)
            addBotMessage(response)
        }, 1000)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

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
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center animate-ping">
                        !
                    </span>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-10rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-accent/20 animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-accent text-white p-4 flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                            <Bot className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-lg">SML TECH Assistant</h3>
                            <p className="text-xs text-white/80">
                                {language === 'vi' ? 'Online • Sẵn sàng hỗ trợ' : 'Online • Ready to help'}
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
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.sender === 'user'
                                            ? 'bg-gradient-to-br from-accent to-accent-hover text-white rounded-br-none'
                                            : 'bg-white text-gray-800 shadow-md rounded-bl-none border border-gray-200'
                                        }`}
                                >
                                    <div className="flex items-start space-x-2">
                                        {message.sender === 'bot' && (
                                            <Bot className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                                        )}
                                        <p className="text-sm leading-relaxed">{message.text}</p>
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
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions */}
                    <div className="px-4 py-2 bg-white border-t border-gray-200">
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            <button
                                onClick={() => {
                                    addUserMessage(language === 'vi' ? 'Giá sản phẩm?' : 'Product price?')
                                    setIsTyping(true)
                                    setTimeout(() => {
                                        addBotMessage(getBotResponse(language === 'vi' ? 'giá' : 'price'))
                                    }, 1000)
                                }}
                                className="px-3 py-1 text-xs bg-gray-100 hover:bg-accent/10 hover:text-accent rounded-full whitespace-nowrap transition-colors"
                            >
                                💰 {language === 'vi' ? 'Giá' : 'Price'}
                            </button>
                            <button
                                onClick={() => {
                                    addUserMessage(language === 'vi' ? 'Đặt demo' : 'Request demo')
                                    setIsTyping(true)
                                    setTimeout(() => {
                                        addBotMessage(getBotResponse('demo'))
                                    }, 1000)
                                }}
                                className="px-3 py-1 text-xs bg-gray-100 hover:bg-accent/10 hover:text-accent rounded-full whitespace-nowrap transition-colors"
                            >
                                🎯 Demo
                            </button>
                            <button
                                onClick={() => {
                                    addUserMessage('ROI?')
                                    setIsTyping(true)
                                    setTimeout(() => {
                                        addBotMessage(getBotResponse('roi'))
                                    }, 1000)
                                }}
                                className="px-3 py-1 text-xs bg-gray-100 hover:bg-accent/10 hover:text-accent rounded-full whitespace-nowrap transition-colors"
                            >
                                📈 ROI
                            </button>
                        </div>
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-gray-200">
                        <div className="flex items-end space-x-2">
                            <textarea
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder={language === 'vi' ? 'Nhập tin nhắn...' : 'Type a message...'}
                                className="flex-1 resize-none border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent max-h-20"
                                rows={1}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className="bg-gradient-to-br from-accent to-accent-hover text-white rounded-xl px-4 py-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
