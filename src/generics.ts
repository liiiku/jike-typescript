// 泛型
// function log(value: any): any {
//   console.log(value);
//   return value;
// }

/**
 * 泛型函数就形成了
 */
// function log<T>(value: T): T {
//   console.log(value);
//   return value;
// }
// 泛型函数的调用
log<string[]>(['1', '2'])
// 利用ts的类型推断，省略类型的参数
log(['a', 'b'])

/**
 * 不仅可以用泛型定义一个函数，还可以定义函数类型
 * 定义一个泛型函数类型
 */
// type Log = <T>(value: T) => T
// let myLog: Log = log

/**
 * 泛型接口
 * 这里泛型仅仅是约束了一个函数，我们也可以用泛型约束接口的其他成员
 */
// interface Log {
//   <T>(value: T): T
// }

/**
 * 泛型约束接口的其他成员，这样接口的所有成员都会受到泛型的约束了
 * 需要注意一点：
 * 当泛型变量约束了整个接口之后，在实现的时候，必须指定一个类型
 */
// interface Log<T> {
//   (value: T): T
// }

// 可以指定一个默认的类型
interface Log<T = string> {
  (value: T): T
}

// let myLog: Log = log
// myLog('1')