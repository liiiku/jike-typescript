/**
 * 泛型不能约束类的静态成员
 */
class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

let log1 = new Log<number>();
// 这样实例的方法将会受到泛型的约束
log1.run(1)
let log2= new Log();
log2.run('1')

/**
 * 泛型约束
 */
interface Length {
  length: number
}
// function log<T>(value: T): T {
//   // 这时候会提示我们T类型上不存在length属性，这时候就需要用到泛型约束
//   console.log(value, value.length);
//   return value;
// }

/**
 * T 受到了一定的约束，就不再是任意类型都可以传了，输入的参数不管是什么类型，必须具有length属性
 */
function log<T extends Length>(value: T): T {
  // 这时候会提示我们T类型上不存在length属性，这时候就需要用到泛型约束
  console.log(value, value.length);
  return value;
}

log([1, 2, 3])
log('123')
// log({a: 1})
