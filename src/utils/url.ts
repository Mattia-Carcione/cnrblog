export function getCurrentPathMatch(current: URL, path: string): 'page' | undefined {
    const pathname = current.pathname.replace(import.meta.env.BASE_URL, '');

    if (path === '/') {
        return pathname === '' ? 'page' : undefined; // solo se sei esattamente su /
    }

    const subpath = pathname.match(/[^\/]+/g);
    const cleanedPath = '/' + (subpath?.[0] || '');

    return path === pathname || path === cleanedPath ? 'page' : undefined;
}
