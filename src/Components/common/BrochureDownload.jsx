'use client';
import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

const BrochureDownload = ({ label = 'Download Service Brochure' }) => {
    const [loading, setLoading] = useState(false);

    const generatePDF = async () => {
        setLoading(true);

        try {
            const { jsPDF } = await import('jspdf');
            const doc = new jsPDF();
                const pageWidth = doc.internal.pageSize.getWidth();

                // ===== Header =====
                doc.setFillColor(126, 200, 52);
                doc.rect(0, 0, pageWidth, 30, 'F');
                doc.setTextColor(255, 255, 255);
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(20);
                doc.text('Enostation', pageWidth / 2, 15, { align: 'center' });
                doc.setFontSize(12);
                doc.setFont('helvetica', 'normal');
                doc.text('Web Development Agency', pageWidth / 2, 24, { align: 'center' });

                let y = 45;

                const addSection = (title, lines) => {
                    doc.setTextColor(126, 200, 52);
                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(14);
                    doc.text(title, 15, y);
                    y += 7;

                    doc.setTextColor(30, 30, 30);
                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(11);

                    for (const line of lines) {
                        if (y > 280) {
                            doc.addPage();
                            y = 25;
                        }
                        doc.text(line, 18, y);
                        y += 6;
                    }
                    y += 4;
                };

                // ===== Contact =====
                addSection('Contact & Profiles', [
                    'Email: hello.enostation@gmail.com',
                    'WhatsApp: +8809638616438',
                    'Facebook: facebook.com/sahedstar',
                    'LinkedIn: linkedin.com/in/sahedstar',
                    'GitHub: github.com/sahedalways',
                    'Portfolio: enostation.netlify.app',
                ]);

                // ===== Services =====
                addSection('Services We Provide', [
                    'Frontend Development - React, Next.js, React Native',
                    'Backend Development - PHP, Laravel, Node.js',
                    'Database Design & Management - MySQL, MongoDB, Supabase',
                    'WordPress Plugin Development & Customization',
                    'API Design & Third-party Integration',
                    'SaaS, ERP, CRM & E-commerce Platforms',
                    'AI Integration & Chatbot Development',
                    'WhatsApp Automation & Business Systems',
                ]);

                // ===== Technologies =====
                addSection('Technologies', [
                    'JavaScript, TypeScript, React, Next.js, React Native',
                    'PHP, Laravel, MySQL, MongoDB, Express.js',
                    'Tailwind CSS, Bootstrap, WordPress',
                    'Supabase, Firebase, Git & GitHub',
                ]);

                // ===== Process =====
                addSection('How We Work', [
                    '1. Discovery & Requirement Analysis',
                    '2. UI/UX Design & Planning',
                    '3. Development (Milestone based)',
                    '4. Testing & QA',
                    '5. Delivery, Support & Maintenance',
                ]);

                // ===== Payment Terms =====
                addSection('Payment Terms', [
                    '35% advance before project begins',
                    '35% milestone payment at 50% completion',
                    '30% final payment after delivery',
                ]);

                doc.save('Enostation-Service-Brochure.pdf');
            } catch (err) {
                console.error('Brochure generation error:', err);
            } finally {
                setLoading(false);
            }
    };

    return (
        <button
            onClick={generatePDF}
            className="btn btn-primary"
            disabled={loading}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
            <FiDownload />
            {loading ? 'Generating...' : label}
        </button>
    );
};

export default BrochureDownload;
