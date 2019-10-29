/**
 * 接口中非函数的成员，要保证唯一性，如果不唯一的话，他们的类型必须相同
 * 对于函数成员，每一个函数都会被声明为一个函数重载
 * 后面的接口会排在前面
 * 有一个例外：如果函数的参数是字符串字面量的话，这个函数声明就会被提升到整个函数声明的最顶端
 * 类 和 函数 不能放到同名的命名空间的后面
 */
interface A {
  x: number
  foo(bar: number): number  // 3 5
  foo(bar: 'a'): string  // 2
}

interface A {
  y: number
  foo(bar: string): string   // 1 3
  foo(bar: number[]): number[]  // 2 4
  foo(bar: 'b'): string   // 1
}

let aa: A = {
  x: 1,
  y: 1,
  foo(bar: any) {
    return bar
  }
}

// 命名空间和函数的合并
function Lib() {}
namespace Lib {
  export let version = '1.0'
}
console.log(Lib.version)

/**
 * 命名空间和类声明合并
 * 相当于给类添加了静态的属性
 */
class CC {}
namespace CC {
  export let state = 1
}
console.log(CC.state)

/**
 * 命名空间和枚举合并
 * 相当于给枚举类型增加了一个方法
 */
enum Color {
  Red,
  Yellow,
  Bule
}
namespace Color {
  export function mix() {}
}
console.log(Color)