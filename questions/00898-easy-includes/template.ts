import type { Equal } from '@type-challenges/utils'

// 如何遍历数组：使用...结构
export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false
