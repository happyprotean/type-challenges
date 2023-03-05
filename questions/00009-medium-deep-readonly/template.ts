// keyof T[P] extends never 判断是否为对象
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}

// type isObject<T> = keyof T extends never ? false : true
// type t = {
//   name: string
//   age: number
// }
type t = string
type s = t extends Object ? true : false

