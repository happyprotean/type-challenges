type Length<T extends readonly any[]> = T['length']

// tuple是一种特殊的类型固定、长度固定的数组
// tuple的length的类型是一个值，数组的length的类型是number
type tu = [string, number]
let val: tu = ['1', 1]

