# Vuex进阶

## 插件

&emsp;&emsp;首先呢来说说插件机制是干嘛的，插件机制无非就是刷新浏览器保存原有状态数据，使之持久化到浏览器本地存储。

- 用法：

```javascript
export default {
  saveInLocal(store){
    console.log('store初始化了')
    if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
    store.subscribe((mutation,state) =>{
           localStorage.state = JSON.stringify(state)
    })
  }
}

```
挂载到Store之上
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import state from './State'
import actions from './Actions'
import getters from './Getters'
import mutations from './Mutations'
import user from './user'
import saveInLocal from './plugin'

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    user
  },
  plugins:[saveInLocal.saveInLocal]
})

```


## 严格模式

&emsp;&emsp;开发模式下的一个行为规范。

&emsp;&emsp;它会提醒你，不要在mutations处理器之外修改state。

```javascript
this.$store.dispatch(action,'youstate')
```

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import state from './State'
import actions from './Actions'
import getters from './Getters'
import mutations from './Mutations'
import user from './user'
import saveInLocal from './plugin'

Vue.use(Vuex);
export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state,
  actions,
  mutations,
  getters,
  modules: {
    user
  },
  plugins: [saveInLocal.saveInLocal]
})

```

## Vuex双向绑定