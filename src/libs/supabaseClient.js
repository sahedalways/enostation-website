import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.REACT_APP_SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL;
const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.REACT_APP_SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const isConfigured = Boolean(supabaseUrl && supabaseKey);

const notConfiguredError = () => new Error('Supabase is not configured.');

// A query chain that always resolves to { data: null, error } so callers
// can safely destructure and handle the error without crashing the app.
const buildChain = () => {
    const promise = Promise.resolve({ data: null, error: notConfiguredError() });

    const CHAIN_METHODS = [
        'select',
        'insert',
        'update',
        'delete',
        'order',
        'limit',
        'eq',
        'neq',
        'in',
        'ilike',
        'range',
        'maybeSingle',
        'single',
    ];

    for (const method of CHAIN_METHODS) {
        promise[method] = () => buildChain();
    }

    return promise;
};

export const supabase = isConfigured
    ? createClient(supabaseUrl, supabaseKey)
    : { from: () => buildChain() };
