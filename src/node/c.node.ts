let c1 = require('./a.node');
let c2 = require('./b.node');
let c3 = require('../es6/a');
// import c4 = require('../es6/d'); // 两种导入方式都可以
import c4 from '../es6/d';

console.log(c1, c2)
console.log(c3)
c3.default()
c4(); // 这样就能直接执行c4了，而不是像c3一样需要c3.default()