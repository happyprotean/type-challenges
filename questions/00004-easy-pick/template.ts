// keyof 获取类型中的所有key的union
// extends 类型限制
// indexed access下标索引：通过类型对象取值的方式，获取一个类型里，某个key对应的类型

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
