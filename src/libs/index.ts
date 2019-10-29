/**
 * 这样写无法找到jquery的声明文件，这是因为：jquery是通过js编写的，
 * 我们再使用非ts编写的类库的时候，必须为这个类库编写一个声明文件，对外暴露他的api
 * 有些时候类库的声明文件是包括在源码中的，有的是单独提供的，需要额外的安装，jquery就是这样
 * 大多数的声明文件，社区已经编写好了 安装： npm i @types/jquery -D
 * 如果社区中没有，就需要自己去写了
 */
import $ from 'jquery'

$('.app').css('color', 'red')

globalLib({ x: 1 })
globalLib.doSomething()

import moduleLib from './module-lib'
moduleLib.doSomething()

import umdLib from './umd-lib'
umdLib.doSomething()

// 模块插件
import m from 'moment';
declare module 'moment' {
  export function myFunction(): void;
}
m.myFunction = () => {}

// 全局插件 不建议这样做
declare global {
  namespace globalLib {
      function doAnyting(): void
  }
}
globalLib.doAnyting = () => {}