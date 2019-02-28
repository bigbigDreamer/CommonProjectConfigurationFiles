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



