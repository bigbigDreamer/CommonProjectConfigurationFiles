# 组件的Props属性

## 作用

&emsp;&emsp;props是外部组件向内部组件船体数据使用。

&emsp;&emsp;父组件向子组件传输数据。

## Demo

```jsx harmony
import React,{Component} from 'react'
import Parent from 'components/parant'

export default class App extends Component {
   
  render(){
      return (
            <div>
            <Parent msg={'我是父组件给你的消息'}/>
            </div>
        )   
    }

}
```