// 直接判断是否为空数组
// type First<T extends any[]> = T extends [] ? never : T[0]

// 通过length判断，使用extend进行判断
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// T[number]返回数组元素的union
// 如果数组为空时，T[0]为undefined, T[number]为number，两者不匹配，返回never
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 数组解构，不用的数据使用_代替
type First<T extends any[]> = T extends [infer First, ...infer _] ? First : never
