# 理解react与react-dom两个库

## 追根溯源

&emsp;&emsp;React设计之初就是使用JSX描述UI，所以解耦了和DOM之间的操作。

- React只做逻辑层，包含了生成虚拟DOM的核心函数`react.createElement`
- ReactDOM只做渲染层，去生成真实的DOM
