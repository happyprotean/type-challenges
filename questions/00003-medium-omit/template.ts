// K类型需要约束为T的key的union
// union类型支持in进行枚举
// union extends进行匹配
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
