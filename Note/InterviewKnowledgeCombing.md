# 前端工程师面试所具备的知识梳理

## 网页布局

#### 相对定位布局实现自适应

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

#### 绝对定位布局自适应

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

