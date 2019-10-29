// 类库的声明文件
/**
 * declare 可以为外部变量提供类型声明
 * globalLib 的参数 options 是一个对象，通过接口来约束这个对象的结构
 */
declare function globalLib(options: globalLib.Options): void;

declare namespace globalLib {
    const version: string;
    function doSomething(): void;
    interface Options {
        [key: string]: any
    }
}