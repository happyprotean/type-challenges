type MyAwaited<T extends Promise<unknown> | { then: (onfulfilled: (arg: unknown) => any) => any }> = T extends Promise<infer P>
  ? P extends Promise<unknown>
    ? MyAwaited<P>
    : P
  : Thenable<T>

type Thenable<T> =
  T extends { then: (onfulfilled: (arg: infer X) => any) => any } ? X : never
