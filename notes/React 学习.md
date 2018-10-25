# React 学习

**教程：**w3school React教程；官网教程和文档

**CDN公共库：** CDN公共库是指将常用的JS库存放在CDN节点，以方便广大开发者直接调用。与将JS库存放在服务器单机上相比，CDN公共库更加稳定、高速。现在web应用都在使用JS类库。

**内容分发网络**（英语：**C**ontent **d**elivery **n**etwork或**C**ontent **d**istribution **n**etwork，[缩写](https://zh.wikipedia.org/wiki/%E7%B8%AE%E5%AF%AB)：**CDN**）是指一种透过[互联网](https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%AF%E7%B6%B2)互相连接的计算机网上系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户，来提供高性能、可扩展性及低成本的网上内容传递给用户。 

**问题**

`npm install react --save`报错

```javascript
E:\react>npm install react --save
npm ERR! code ENOSELF
npm ERR! Refusing to install package with name "react" under a package
npm ERR! also called "react". Did you name your project the same
npm ERR! as the dependency you're installing?
npm ERR!
npm ERR! For more information, see:
npm ERR!     <https://docs.npmjs.com/cli/install#limitations-of-npms-install-algorithm>

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2018-10-22T15_46_19_653Z-debug.log
```

**原因**

package.json文件中，name属性的值设置为`"react"`。因为没办法在名为“react”的package下安装同名的package

> npm depends on unique packages names 

 [解决途径](https://github.com/npm/npm/issues/12204)

**问题**

> E:\react>npm start
>
> > react-test@1.0.0 start E:\react
> > webpack-dev-server --hot
>
> The CLI moved into a separate package: webpack-cli
> Please install 'webpack-cli' in addition to webpack itself to use the CLI
> -> When using npm: npm i -D webpack-cli
> -> When using yarn: yarn add -D webpack-cli
> module.js:549
>     throw err;
>     ^
>
> Error: Cannot find module 'webpack-cli/bin/config-yargs'
>     at Function.Module._resolveFilename (module.js:547:15)
>     at Function.Module._load (module.js:474:25)
>     at Module.require (module.js:596:17)
>     at require (internal/module.js:11:18)
>     at Object.<anonymous> (C:\Users\Administrator\AppData\Roaming\npm\node_modules\webpack-dev-server\bin\webpack-dev-server.js:84:1)
>     at Module._compile (module.js:652:30)
>     at Object.Module._extensions..js (module.js:663:10)
>     at Module.load (module.js:565:32)
>     at tryModuleLoad (module.js:505:12)
>     at Function.Module._load (module.js:497:3)
> npm ERR! code ELIFECYCLE
> npm ERR! errno 1
> npm ERR! react-test@1.0.0 start: `webpack-dev-server --hot`
> npm ERR! Exit status 1
> npm ERR!
> npm ERR! Failed at the react-test@1.0.0 start script.
> npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
>
> npm ERR! A complete log of this run can be found in:
> npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2018-10-22T16_28_39_045Z-debug.log

[待解决](https://github.com/mzgoddard/jest-webpack/issues/27)

**报错**
>npm ERR! missing script: start
>
>npm ERR! A complete log of this run can be found in:
>npm ERR! /Users/...
**原因**
终端未进入react项目