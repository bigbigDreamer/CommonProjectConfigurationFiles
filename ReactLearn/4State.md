# 组件内部状态

## State

&emsp;&emsp;组件内部状态也被称为局部状态，允许你保存、修改和删除存储在组件内部的属性。使
用 ES6 类组件可以在构造函数中初始化组件的状态。构造函数只会在组件初始化时调用一
次。

## State的写法

### 类组件

- 方法一

```jsx harmony
import React,{Componnent} from "react"

export default class App extends Componnent {
     constructor(props) {
         super(props);
         this.state = {
         
            }       
     }
     
}
```

- 方法二

```jsx harmony
import React,{Componnent} from "react"

export default class App extends Componnent {
    state = {
    
        }       
     
}
```

- 方法三（React  Hooks）

```jsx harmony
import React,{useState} from "react"

const {state,setState} = useState(25);
function x() {
  return (
        <div>
         
        </div>
        )   
}
```

## 修改State

- setState(异步更新，只能通过这种形式去更新组件状态)

```jsx harmony
this.setState({
    count:18
})
```