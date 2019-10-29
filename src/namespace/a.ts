/**
 * 可以定义任意多的变量，但是只能在命名空间Shape下可见
 * 如果想让全局可见，就需要通过export导出
 */
namespace Shape {
  const pi = Math.PI
  export function cricle(r: number) {
    return pi * r ** 2
  }
}