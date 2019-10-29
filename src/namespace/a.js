/**
 * 可以定义任意多的变量，但是只能在命名空间Shape下可见
 * 如果想让全局可见，就需要通过export导出
 */
var Shape;
(function (Shape) {
    var pi = Math.PI;
    function cricle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.cricle = cricle;
})(Shape || (Shape = {}));
