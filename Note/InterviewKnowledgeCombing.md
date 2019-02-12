# :bookmark_tabs:前端工程师面试所具备的知识梳理

## :pencil:网页布局

#### :memo:相对定位布局实现自适应

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .layout .box1{
            width: 33.3%;
            height: 300px;
            background-color: rosybrown;
            float: left;
            position: relative;
        }
        .layout .box2{
            width: 33.3%;
            float: left;
            height: 300px;
            background-color: brown;
            position: relative;
        }
        .layout .box3{
            width: 33.3%;
            float: left;
            height: 300px;
            background-color: aquamarine;
            position: relative;
        }
    </style>
</head>
<body>

<section class="relative layout">
    <div class="box1"></div>
    <div class="box2">相对定位自适应</div>
    <div class="box3"></div>
</section>

</body>
</html>
```

#### :memo:绝对定位布局自适应

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .layout {
            width: 100%;
        }
        .layout .box1{
            width: 33.3%;
            height: 300px;
            background-color: rosybrown;
            position: absolute;
            left: 0;
        }
        .layout .box2{
            width: 33.3%;
            height: 300px;
            background-color: brown;
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            margin: 0 auto;
        }
        .layout .box3{
            width: 33.3%;
            height: 300px;
            background-color: aquamarine;
            position: absolute;
            right: 0;
        }
    </style>
</head>
<body>

<section class="relative layout">
    <div class="box1"></div>
    <div class="box2">相对定位自适应</div>
    <div class="box3"></div>
</section>

</body>
</html>
```
## :pencil:BFC

#### :memo:概念

块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

#### :memo:下列方式会创建块格式化上下文：

- 根元素或包含根元素的元素
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素（元素的 display 为 inline-block）
- 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
- 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
- overflow 值不为 visible 的块元素
- display 值为 flow-root 的元素
- contain 值为 layout、content或 strict 的元素
- 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
- 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
- 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
- column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。
块格式化上下文包含创建它的元素内部的所有内容.

***BFC子元素即使是float也会参与父元素的高度计算***

## :pencil:DOM事件

#### :memo:DOM事件的级别

- DOM0   `element.onclick = function(){}`
- DOM2   `element.addEventListener('click',function(){},false)`
- DOM3   `element.addEventListener('keyup',function(){},false)` 新增诸多鼠标键盘事件
#### :memo:DOM事件模型

- 自上而下捕获，自下而上冒泡

#### :memo:DOM事件流

- 第一阶段  捕获
- 第二阶段  目标阶段  (到达目标元素)
- 第三阶段  冒泡阶段  (从目标元素冒泡到window对象)

#### :memo:描述DOM事件捕获的具体流程

- window `-->` document `-->` html  `-->` body `-->` 父级元素 `-->` 目标元素

#### :memo:EVENT对象的常见应用

- event.preventDefault() 阻止默认事件
- event.stopPropagation() 阻止冒泡事件
- event.stopImmediatePropagation()  在A中阻止B事件
- event.currentTarget  当前绑定事件的对象
- event.target  应用于事件委托

#### :memo:自定义事件

```javascript
var eve = new Event('custome');

ev.addEventListener('custome',function(){
console.log('custome');
})

ev.dispatchEvent(eve)
```



