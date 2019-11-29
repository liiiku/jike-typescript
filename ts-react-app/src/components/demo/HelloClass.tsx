import * as React from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

interface State {
  count: number;
}

/**
 * Component 泛型中
 * 第一个参数表示 属性的类型 props 传递过来的属性
 * 第二个参数表示 状态的类型 自身的 state
 */
class HelloClass extends React.Component<Greeting, State> {
  static defaultProps = {
    firstName: '',
    lastName: ''
  }

  state: State = {
    count: 0
  }

  handleCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }

  render() {
    const { handleCount, props } = this;
    const { count } = this.state;
    return (
      <div>
        <p>你点击了: {count}次</p>
        <Button onClick={handleCount}>Hello, {props.name}</Button>
      </div>
    )
  }
}

export default HelloClass;