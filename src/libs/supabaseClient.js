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

// Lightweight PostgREST client. Replaces @supabase/supabase-js so the
// heavy SDK (auth, realtime, storage, websocket) never ships to the client.
// The `from().select().order()` chain below mirrors the old SDK contract
// ({ data, error }) so callers such as usePortfolioProject are unchanged.
const createPostgrestBuilder = (table) => {
    let selectQuery = '*';
    let orderClause = '';

    const request = async () => {
        const params = new URLSearchParams();
        params.set('select', selectQuery);
        if (orderClause) params.set('order', orderClause);

        try {
            const response = await fetch(
                `${supabaseUrl}/rest/v1/${table}?${params.toString()}`,
                {
                    headers: {
                        apikey: supabaseKey,
                        Authorization: `Bearer ${supabaseKey}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    };

    const builder = {
        select: (columns = '*') => {
            selectQuery = columns;
            return builder;
        },
        order: (column, options = {}) => {
            const direction = options.ascending === false ? 'desc' : 'asc';
            orderClause = `${column}.${direction}`;
            return builder;
        },
        then: (resolve, reject) => request().then(resolve, reject),
        catch: (reject) => request().catch(reject),
        finally: (handler) => request().finally(handler),
    };

    return builder;
};

export const supabase = isConfigured
    ? { from: (table) => createPostgrestBuilder(table) }
    : { from: () => buildChain() };
