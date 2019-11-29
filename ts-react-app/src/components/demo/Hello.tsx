import * as React from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

// const Hello = (props: Greeting) => {
//   return (
//     <Button>hello {props.name}</Button>
//   )
// }

/**
 * 在react的声明文件中对函数组件单独定义了一个类型 react.FC<P ={}> P代表函数属性的类型，默认是空
 * 泛型 代表这个函数属性的类型
 * 把props解构为 name, firstName, lastName
 * 使用react.FC 的好处： 
 * props中默认携带了children属性
 * 为函数定义静态属性的时候，会有提示 Hello.defaultProps = {}
 * 如果要使用React.FC 的话，他的默认必须是可选属性，所以不建议使用React.FC
 */
const Hello: React.FC<Greeting> = ({
  name,
  firstName,
  lastName
}) => {
  return (
    <Button>{name}</Button>
  )
}

// Hello.defaultProps = {
//   firstName: '',
//   lastName: ''
// }

export default Hello;