import { NextResponse } from 'next/server';

export async function POST(request) {
    const { message, timestamp, email } = await request.json();

    try {
        await fetch('https://formspree.io/f/xnngnynw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                message: message,
                email: email,
                time: timestamp,
            }),
        });
    } catch (err) {
        console.log('Formspree error:', err);
    }

    return NextResponse.json({ ok: true });
}
