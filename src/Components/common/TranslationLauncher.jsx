import React from 'react';
import { useTranslation } from 'react-i18next';

const TranslationLauncher = () => {
    const { i18n } = useTranslation();
    const isEnglish = i18n?.language === 'en';

    const toggleLanguage = () => {
        if (!i18n || typeof i18n.changeLanguage !== 'function') {
            console.warn('i18next is not initialized. Check your i18n.js config.');
            return;
        }
        i18n.changeLanguage(isEnglish ? 'bn' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="lang-toggle"
            aria-label="Toggle Language"
            title={isEnglish ? 'Switch to Bengali' : 'Switch to English'}
        >
            {isEnglish ? 'বাংলা' : 'EN'}
        </button>
    );
};

export default TranslationLauncher;
