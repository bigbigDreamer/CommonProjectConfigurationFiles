# 数据循环与条件渲染

## React的里面的数据循环与条件渲染

&emsp;&emsp;谈及到这里，我略微提一下，vue里面的数据循环与条件渲染，
使用vue内部指令`v-for="(item,index) in list"`，条件渲染的话使用`v-if、v-else、v-if-else、v-show`等内部指令进行条件渲染。

&emsp;&emsp;再来说一下React的里面的条件渲染与数据循环，在学习React的时候，大家肯定有了解，react封装并没vue强，是完全js编程的。

## DEMO

```jsx harmony
import React,{Component} from 'react'
export default class Demo extends Component {
    state = {
        dataList: [
            {
                name:'安徒生童话',
                price: 28
            },
            {
                name:"一千零一夜",
                price: 58
            },
            {
                name:'狼的传说',
                price: 108
            }           
    
        ]   
    };
    render() {
    const {dataList} = this.state;
    
    return (
            <div>
                {
                dataList.map((item,index) => {
                    return <span key={index}>{item.name}</span>
                    })  
                }   
            </div>
        ) 
    }   
}
```