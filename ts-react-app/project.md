# 怎么起一个mock server呢？
create-app-app 中webpack-server启动的服务器，其中有一个public 文件，这个是静态资源的根目录，如果把mock文件放到public下就可以直接访问了，但是一般不这么做

## 需要启动一个以mock为根目录的api server：

这里使用`http-server` 在`devDependecies`开发依赖下，指定启动脚本：

```
"scripts": {
  "server": "cd mock && hs -p 4000 -a localhost"
}
```

但是这样启动完，访问过到的内容是xxx.json，肯定是和接口的api格式是不符合的，这里就需要在`src/`下新建`setupProxy.js`文件，对请求做处理，`create-react-app`会自动运行这个文件的内容