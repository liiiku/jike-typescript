abstract class Animal {
  // 抽象类中可以定义一个方法，有具体的实现，这样子类就不用实现了，这样就实现了方法的复用
  eat() {
    console.log('eat')
  }
  // 也可以不具体实现 抽象方法的好处是，你可以明确知道子类有自己的实现，没必要在父类中实现了
  // 抽象方法 可以实现多态，也就是一个方法在子类中有不同的实现
  abstract sleep(): void
}
// let animal = new Animal()


class Dog1 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}
let dog1 = new Dog1('wangwnag')
// dog1.eat()
// dog1.sleep()

class Cat extends Animal {
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog1, cat]
animals.forEach(i => {
  i.sleep()
})

// 特殊的ts类型 this类型 很方便的链式调用
// 类的成员方法返回一个this
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()

// 继承的时候，this类型也可以表现为多态，this既可以是父类型，也可以是子类型
class MyFlow extends WorkFlow {
  next() {
    return this
  }
}

// 保证了父类和子类方法调用的连贯性
new MyFlow().next().step1().next().step2()
