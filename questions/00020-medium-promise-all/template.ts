declare function PromiseAll<T extends unknown[]>(
  value: readonly [...T]
): Promise<{ [P in keyof T]: Awaited<T[P]> }>

// type PromiseLike<T> = T extends Promise<infer R> ? R : T
