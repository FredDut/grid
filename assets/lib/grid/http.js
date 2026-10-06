export async function json(url, opt = {}) {
    const r = await fetch(url, {
        credentials: 'same-origin',
        headers: { Accept: 'application/json', ...opt.headers }, ...opt
    });
    if (!r.ok) throw Error((await r.json().catch(() => ({}))).message || `HTTP ${r.status}`);
    return r.json();
}
