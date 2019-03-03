# :bookmark_tabs:全套JS面经

## *目录*

- [:pencil:前言](#前言)

- [:pencil:JS基础]()
  - [原型、原型链]()
  - [作用域、闭包]()
  - [异步、单线程]()
- [:pencil:JS-WEB-API]()
  - [DOM操作]()
  - [Ajax]()
  - [事件绑定]()
- [:pencil:JS开发环境]()
  - [版本管理]()
  - [模块化]()
  - [打包工具]()
- [:pencil:JS运行环境]()
  - [页面渲染]()
  - [性能优化]()
- [:pencil:面试技巧]()


-----

### 前言

>几个面试题

- JS中使用typeof有哪些类型？

  - String
  - Number
  - Boolean
  - Object
  - Undefined
  - function

- 何时使用`===`，何时使用`==`？

- window.onload和DOMContentLoaded的区别？

- 用JS创建10个<a>标签，点击的时候弹出来对应的序号。

- 简述，如何实现一个模块加载器，实现类似require.js的基本功能。

- 实现数组的随机排序。

### JS基础

- 变量类型和计算

   - JS使用typeof能得到哪些类型？
   ```javascript
    // - String
    // - Number
    // - Boolean
    // - Object
    // - Undefined
    // - function
   ```
   - 何时使用`===`，何时使用`==`？
   ```bash
   #除了判断`null`用==，其他时候用`===`  jQ源码推荐这么做。
   ```
   - JS中有哪些内置函数。
   ```bash
   #Object
   #Array
   #Boolean
   #Number
   #String
   #Function
   #Date
   #RegExp
   #Error
   ```
   - JS变量按照存储方式区分为哪些类型，并描述其特点。
   >值类型
   >引用类型
   - 如何理解JSON？
   ```bash
   #不过是一个JS内置对象而已
   #也算是一种数据格式
   ```
   
   --------
- 何时发生强制类型转换？

  - 字符串拼接
  - `==`运算
  - if判断
  ```javascript
  var a = true;
  if(a) {
      //...
  }
  
  var b = 100;
  if(b) {
      //...
  }
  
  var c = '';
  
  if(c) {
        //...
    }
  ```
  - 逻辑运算符
  
### 作用域、闭包
  
  - 请尝试陈述一下你对变量提升的理解。
  - 说明this的几种不同使用场景。
  - 如何理解作用域？
  - 实际开发中闭包的作用。

------

>执行上下文

- 范围：一段<script>或者一个函数
- 全局：变量定义、函数声明  `一段<script>`
- 函数：变量定义、函数声明、this、arguments `函数`

>this

>作用域

>作用域链

>闭包

### JS-web-api

#### Ajax

- 手写ajax

```javascript
const XHR = new XMLHttpRequest();

XHR.open('method','url',true,{
    
});
//XHR.send(null);
XHR.onreadystatechange = function() {
  if (XHR.readyState === 4) {
      if (XHR.status === 200) {
          console.log(XHR.statusText);
      }
  }
}
//状态码说明

```
- 状态码说明
  - 0 （未初始化）还没有调用哪个send()方法
  - 1 （载入）已调用send()方法，正在发送请求
  - 2 （载入完成）send()方法执行完成，已经接受到全部响应内容
  - 3 （交互）正在解析响应内容
  - 4 （完成）响应内容那个解析完成，可以再客户端调用了
