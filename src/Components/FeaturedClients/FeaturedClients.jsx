import React from 'react';
import './featuredClients.css';

const clients = [
    { name: 'Botfirm', className: 'client-logo--botfirm' },
    { name: 'POPLAR', className: 'client-logo--poplar' },
    { name: 'Reviewly', className: 'client-logo--reviewly' },
    { name: 'Culturize', className: 'client-logo--culturize' },
    { name: 'tailwind made', className: 'client-logo--tailwind' },
    { name: 'GLOBAL CITIZENS', className: 'client-logo--global' },
    { name: 'BLACKSTONE', className: 'client-logo--blackstone' },
    { name: 'SUPERCHARGED OFFERS', className: 'client-logo--supercharged' },
    { name: 'savvy pioneer', className: 'client-logo--savvy' },
];

const ClientGroup = () => (
    <div className="marquee-group">
        {clients.map((client, i) => (
            <span key={client.name} className={`client-logo ${client.className}`}>
                {client.name}
            </span>
        ))}
    </div>
);

const FeaturedClients = () => (
    <section className="featured-clients" aria-label="Featured clients">
        <p className="featured-clients__eyebrow">Featured Clients</p>
        <div className="marquee-wrapper">
            <div className="marquee-base" />
            <div className="marquee-band">
                <div className="marquee-track">
                    <ClientGroup />
                    <ClientGroup aria-hidden="true" />
                </div>
            </div>
        </div>
    </section>
);

export default FeaturedClients;
