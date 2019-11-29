import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './components/demo/Hello';
import HelloClass from './components/demo/HelloClass';
// import Root from './routers';

ReactDOM.render(
  <HelloClass name="typescript" />,
  document.getElementById('root') as HTMLElement
);
