export function mapObject<V, W>(
    obj: { [k: string]: V; },
    fn: (key: string, value: V) => W): { [k: string]: W; } {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(key, value)]));
}
