# Bus详解

### 前述
&emsp;&emsp;对于Vue组件之间的通信，我们除了会运用`props`、`PubSubJS`、`自定义事件`、`Vuex`之外，我想
我们还需要了解一下Bus控制状态。

### Bus原理

&emsp;&emsp;Bus主要的原理其实就是new一份新的Vue实例，然后所有组件共享这份实例，利用到Vue的自定义事件，但是这个
自定义事件需要使用到new 出来的这份新的Vue实例。

### Bus工具模块

```javascript
import Vue from 'vue'

export default new Vue();
```

### Bus使用

- 在`main.js`中
```javascript
  import Vue from 'vue'
  import bus from '@bus/bus'
  Vue.prototype.$bus = bus;
```

### Parent Component 

```javascript
 this.$sub.$on('todo',(msg)=>{
     console.log(msg);
 })
```
### Children Component

```javascript
const data = 'data';
 this.$sub.$emit('todo',data);
```

### 总结

&emsp;&emsp;其实Bus的核心我已经总结过了，不是多难理解，只要肯动手实践就没问题了。
