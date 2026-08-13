'use client';

import { useState } from 'react';

import Navbar from '@/Components/Navbar/Nav';
import Footer from '@/Components/Footer/Footer';
import BackToTop from '@/Components/common/BackToTop';
import ChatLauncher from '@/Components/common/ChatLauncher';
import ChatContainer from '@/Components/common/ChatContainer';
import ScrollProgress from '@/Components/common/ScrollProgress';
import ScrollToTop from '@/Components/common/ScrollToTop';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AppShell = ({ children }) => {
    useScrollAnimation();

    const [showChat, setShowChat] = useState(false);
    const [email, setEmail] = useState('');
    const [isChatAllowed, setIsChatAllowed] = useState(false);

    const handleStartChat = () => {
        if (!email || !email.includes('@')) {
            alert('Valid email required');
            return;
        }

        localStorage.setItem('chat_email', email);
        setIsChatAllowed(true);
    };

    const handleOpenChat = () => {
        const savedEmail = localStorage.getItem('chat_email');

        if (savedEmail) {
            setEmail(savedEmail);
            setIsChatAllowed(true);
        } else {
            setIsChatAllowed(false);
        }

        setShowChat(true);
    };

    return (
        <>
            <ScrollProgress />
            <BackToTop />

            <ChatLauncher onClick={handleOpenChat} />

            <ScrollToTop />

            <div className="app-shell">
                <Navbar />
                {children}
                <Footer />
            </div>

            {showChat && !isChatAllowed && (
                <div className="chat-gate-modal">
                    <div className="chat-gate-header">
                        <span>AI Assistant</span>
                        <button
                            onClick={() => setShowChat(false)}
                            className="chat-gate-close"
                            aria-label="Close Chat"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="chat-gate-body">
                        <h3>Enter your email to start chat</h3>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="chat-gate-input"
                        />
                        <button onClick={handleStartChat} className="chat-gate-submit">
                            Start Chat
                        </button>
                    </div>
                </div>
            )}
            {showChat && isChatAllowed && (
                <div className="chat-container-wrap">
                    <ChatContainer isOpen={showChat} setIsOpen={setShowChat} email={email} />
                </div>
            )}
        </>
    );
};

export default AppShell;
