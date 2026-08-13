import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import './ChatLauncher.css';

export default function ChatLauncher({ onClick }) {
    return (
        <button onClick={onClick} className="chat-launcher-btn" aria-label="Open AI Chat">
            <FiMessageCircle size={24} />
        </button>
    );
}
