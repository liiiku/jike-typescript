// 类库的源码
function globalLib(options) {
  console.log(options)
}

globalLib.version = '1.0.0'

globalLib.doSomething = function() {
  console.log('global do something')
}