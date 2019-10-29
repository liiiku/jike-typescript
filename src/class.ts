/**
 * 无论在es还是在ts
 * 类成员的属性都是实例属性，而不是原型属性
 * 类的成员方法都是原型方法
 * ts中：
 * 实例属性必须有初始值，或者在构造函数中被初始化，如果删掉
 * this.name = name
 * 下面的 name: string 会报错
 */
class Dog {
  // 构造函数的返回值会默认是这个Dog，也就是这个类本身
  // 加上 private 说明这个类就不能实例化，也不能被继承
  // 加上 protected 说明这个类不能被实例化，只能被继承，相当于声明了一个基类
  constructor(name: string) {
    // 实例属性
    this.name = name;
  }
  // 成员属性
  public name: string
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs: number = 4 // 只读属性一定要被初始化
  static food: string = 'bones' // 类的静态成员，只能用类名调用，不能用实例调用
}
console.log(Dog.prototype) // {run: ƒ, constructor: ƒ} 不包含 name 属性的
let dog = new Dog('wangwang')
/**
 * Dog {name: "wangwang"}
    name: "wangwang"
    __proto__:
      run: ƒ ()
      constructor: ƒ Dog(name)
      __proto__: Object
 */
console.log(dog) // Dog {name: "wangwang"}
// dog.pri()
// dog.pro()
console.log(Dog.food)

/**
 * 类的继承
 * 类的所有属性默认都是public
 * 私有成员：只能在类的本身被调用，不能被类的实例调用，也不能被类的子类调用
 * 受保护成员：只能在类或者子类中访问，不能在类的实例中访问
 */
class Husky extends Dog {
  // 父类中构造函数有name，子类中也一定要有
  // 除了类的成员可以添加修饰符外，构造函数的参数也可以添加修饰符，作用就是将参数自动变成了实例的属性，这样就可以省略在类中的定义了
  // 这里定义了public 
  constructor(name: string, public color: string) {
    super(name) // super 代表父类的实例
    this.color = color
    // this.pri()
    this.pro()
  }
  // 定义了自己的属性，这样就要在构造函数中初始化
  // color: string
}
console.log(Husky.food) // 类的静态成员也可以被继承