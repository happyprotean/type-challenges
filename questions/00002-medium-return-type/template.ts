// infer _ 表示推断出的类型不需要使用
type MyReturnType<T> = T extends (...args: infer _) => infer X ? X : never
