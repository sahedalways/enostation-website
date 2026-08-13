// src/utils/isLeadMessage.js

export const isLeadMessage = (text = '') => {
    const lowerText = text.toLowerCase();

    const keywords = [
        'price',
        'pricing',
        'cost',
        'budget',
        'quote',
        'quotation',
        'website',
        'web app',
        'mobile app',
        'app development',
        'project',
        'hire',
        'freelancer',
        'developer',
        'build',
        'develop',
        'create',
        'saas',
        'erp',
        'crm',
        'ecommerce',
        'shop',
        'store',
        'system',
        'software',
        'api',
        'integration',
        'automation',
        'ai',
        'chatbot',
        'landing page',
    ];

    const contactKeywords = [
        'email',
        'gmail',
        'phone',
        'whatsapp',
        'contact',
        'number',
        'call',
        'message me',
        'reach me',
        'dm',
        'inbox',
        'telegram',
        'skype',
    ];

    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

    const phonePattern = /(\+?\d{10,15})/;

    const hasKeyword = keywords.some((k) => lowerText.includes(k));

    const hasContactKeyword = contactKeywords.some((k) => lowerText.includes(k));

    const hasEmail = emailPattern.test(text);
    const hasPhone = phonePattern.test(text);

    return hasKeyword || hasContactKeyword || hasEmail || hasPhone;
};
