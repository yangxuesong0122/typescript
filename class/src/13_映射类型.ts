// 映射类型只能在类型别名中使用，不能在接口中使用

// type PropKeys = 'x' | 'y' | 'z'
// type Type2 = { x: number; y: number; z: number }

type PropKeys = 'x' | 'y' | 'z'
type Type2 = { [key in PropKeys]: number }

type props = {
  a: number
  b: string
  c: boolean
}
type Type3 = { [key in keyof props]: number }\

// 同时查询多个索引的类型
type Props3 = { a: number; b: string; c: boolean }
// type TypeA = Props3['a' | 'b']
type TypeA = Props3[keyof Props3]