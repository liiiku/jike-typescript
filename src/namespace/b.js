/// <reference path="a.ts" />
/**
 * b.ts 和 a.ts 命名空间同名，也就是说他们俩共享一个命名空间的
 */
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.cricle(1));
console.log(Shape.square(1));
// 这里的import 和模块导入的import没有任何关系 这里是起个 别名
var cricle = Shape.cricle;
var square = Shape.square;
console.log(cricle(1));
console.log(square(1));
