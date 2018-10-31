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



[翻译 | 玩转 React 表单 —— 受控组件详解](https://juejin.im/post/5979c26df265da3e0f117aa9)

**Bind()**

绑定函数

**报错**

TypeError: Cannot read property 'setState' of undefined 

> ```
>  changeCheckbox() {
> > 77 |   this.setState({
> ^ 78 |     checked: !this.state.checked
>   79 |   });
>   80 | }
> ```



**原因**

> 你必须谨慎对待 JSX 回调函数中的 `this`，类的方法默认是不会[绑定](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) `this` 的。如果你忘记绑定 `this.handleClick` 并把它传入 `onClick`, 当你调用这个函数的时候 `this` 的值会是 `undefined`。 



2018-01-08 发布

# [CSS效果篇--纯CSS+HTML实现checkbox的思路与实例](https://segmentfault.com/a/1190000012748027)

> 隐藏原生`input`，样式定义的过程留给`label` （那为什么不直接改变`checkbox`的样式？因为checkbox作为浏览器默认组件，样式更改上并没有label那么方便，很多属性对`checkbox`都是不起作用的，比如`background`,而`label`在样式上基本和`div`一样'任人宰割') 



**状态提升**



## Git

> warning: LF will be replaced by CRLF in .idea/workspace.xml.
> The file will have its original line endings in your working directory.

[git一些使用感受和经历](http://www.bloggern.com/ProjectItem.php?ProjectItemId=6426)

[GitHub 第一坑：换行符自动转换](https://github.com/cssmagic/blog/issues/22)

[Git Config 命令查看配置文件](https://cnbin.github.io/blog/2015/06/19/git-config-ming-ling-cha-kan-pei-zhi-wen-jian/)

[Git 多平台换行符问题(LF or CRLF)](http://blog.konghy.cn/2017/03/19/git-lf-or-crlf/)



react刷新不正常问题

state，props的问题，constructor只在实例化是调用一次，以后就不调用了，重新渲染后，没有调用constructor中的this .state的初始化，所以state的值并没有改变

```javascript
constructor(props) {
    super(props);
    this.myref = React.createRef();
    this.index = props.index;
    this.todoList = todoList.getAlltodos();
    this.state = {value: props.value};
  }

handleKeyDown(e) {
    const node = this.myref.current;
    const label = node.getElementsByClassName("hidden")[0];
    const textarea = node.getElementsByClassName("edit")[0];
    let text;
    if(e.keyCode === 13 && textarea.value != '') {
      text = textarea.value;
      this.todoList[this.index].value = text;
      this.setState({value: text});
      label.className = "todovalue";
      textarea.className = "hidden";
    } else if ((e.keyCode === 13 && textarea.value === '') || (e.keyCode === 8 && textarea.value ==='')) {
      this.todoList.splice(this.index, 1);
      label.className = "todovalue";
      textarea.className = "hidden";
      this.props.onKeyDown();
    }
  }

render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div ref={this.myref}>
        <label
          className="todovalue"
          onDoubleClick={this.handleClick.bind(this)}>
          {this.props.value}
        </label>
        <textarea
          className="hidden"
          defaultValue={this.props.value}
          onKeyDown={this.handleKeyDown.bind(this)}></textarea>
      </div>
    )
  }
  
```

删除第一个后，控制台输出：

> {value: "2", index: 0, onKeyDown: ƒ}
> App.js:138 {value: "1"}
> App.js:137 {value: "3", index: 1, onKeyDown: ƒ}
> App.js:138 {value: "2"}
> App.js:137 {value: "4", index: 2, onKeyDown: ƒ}
> App.js:138 {value: "3"}

（react重新刷新时，是部分刷新，一共四个组件，重新渲染时，是把最后一个组件移除，前面三个组件重新传入props，所以state仍然是以前的值，与后来传入的state无关）

所以，即使重新渲染前更改state仍然没有用：

```
handleKeyDown(e) {
    const node = this.myref.current;
    const label = node.getElementsByClassName("hidden")[0];
    const textarea = node.getElementsByClassName("edit")[0];
    let text;
    if(e.keyCode === 13 && textarea.value != '') {
      text = textarea.value;
      this.todoList[this.index].value = text;
      this.setState({value: text});
      label.className = "todovalue";
      textarea.className = "hidden";
    } else if ((e.keyCode === 13 && textarea.value === '') || (e.keyCode === 8 && textarea.value ==='')) {
      this.todoList.splice(this.index, 1);
      label.className = "todovalue";
      textarea.className = "hidden";
      this.setState({value: text});
      this.props.onKeyDown();
    }
  }
```

