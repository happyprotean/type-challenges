// type TupleToUnion<T> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest> : never
type TupleToUnion<T extends unknown[]> = T[number]
