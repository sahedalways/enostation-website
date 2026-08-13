'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiX } from 'react-icons/fi';
import { isLeadMessage } from './../../utils/isLeadMessage';
import './AIChat.css';

export default function AIChat({ onClose, email }) {
    const [isTyping, setIsTyping] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: 'bot',
            text: 'Hello! I\'m here to help you with Enostation\'s services. Ask anything.',
        },
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const quickQuestions = [
        {
            question: 'How to get started?',
            answer: 'To start, an advance payment is required. Then payments follow project milestones.',
        },

        {
            question: 'What technologies do you use?',
            answer: 'We primarily work with Next.js, Laravel (PHP), React Native for mobile, and React for frontend development.',
        },

        {
            question: 'How do you ensure project quality?',
            answer: 'We follow best coding practices, test thoroughly, and maintain clear documentation.',
        },

        {
            question: 'About Payment Terms',
            answer: 'Payment Terms:\n- 35% advance before starting.\n- 35% after 50% completion.\n- Remaining 30% after final delivery.',
        },
    ];

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;

        setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);

        setInput('');
        setIsTyping(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await res.json();

            const reply =
                typeof data?.reply === 'string' && data.reply.trim()
                    ? data.reply
                    : 'Sorry, I could not generate a response.';

            setMessages((prev) => [...prev, { role: 'bot', text: reply }]);

            if (isLeadMessage(userMessage)) {
                fetch('/api/lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: userMessage,
                        timestamp: new Date().toISOString(),
                        email: email,
                    }),
                });
            }
        } catch (err) {
            console.error('Chat error:', err);

            setMessages((prev) => [
                ...prev,
                { role: 'bot', text: 'Server error. Please try again.' },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleQuickQuestionClick = (answer) => {
        console.log('Quick question clicked:', answer);
        setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
    };

    return (
        <div className="ai-chat-container">
            <div className="ai-chat-header">
                <h2>AI Assistant</h2>
                <button onClick={onClose}>
                    <FiX size={20} />
                </button>
            </div>

            <div className="quick-questions">
                {quickQuestions.map(({ question, answer }, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleQuickQuestionClick(answer)}
                        className="quick-question-btn"
                        type="button"
                    >
                        {question}
                    </button>
                ))}
            </div>

            <div className="ai-chat-messages" style={{ overflowY: 'auto', flex: 1 }}>
                {messages.map((msg, i) => (
                    <div key={i} className={msg.role === 'user' ? 'message-user' : 'message-bot'}>
                        {msg.text.split('\n').map((line, idx) => (
                            <p key={idx} style={{ margin: 0 }}>
                                {line}
                            </p>
                        ))}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {isTyping && (
                <div className="typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                </div>
            )}

            <div className="ai-chat-input-area">
                <input
                    type="text"
                    placeholder="Type your question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="ai-chat-input"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSend();
                    }}
                    style={{ color: 'black' }}
                />
                <button onClick={handleSend} className="ai-chat-send-btn" aria-label="Send message">
                    <FiSend size={18} />
                </button>
            </div>
        </div>
    );
}
