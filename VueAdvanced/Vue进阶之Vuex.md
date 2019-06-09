# Vue进阶之Vuex
 
 ### 怎么理解Vuex？
 
 &emsp;&emsp;一张图解析Vuex
 
 ![alt](https://vuex.vuejs.org/vuex.png)
 
 ### Vuex之五大属性
 
 - Actions
 
 - Mutations
 
 - Getters
 
 - State
 
 - Modules
 
 `需要注意的是action是异步的，而mutations是同步的`
 
 ### 值得说一下的属性
 
 &emsp;&emsp;Modules可能最值得说一下吧，因为一个中小型的项目难免会遇到多个状态，所以用modules进行
 分类式最好的选择。
 
 ```
      当然如果取到它也有更好的方式。
      1.首先请我们来看看第一种方式吧：
      this.$store.state.'yourmodule'.'moduleInState'
      2.其次还有第二种方式：
       import {createNamespacedHelpers} from 'vuex'
       //我们此时定义的这个module模块叫user
       const {mapState}  = createNamespacedHelpers('user') 
       
       export default {
         computed:{
             ...mapState(['count']);
         }
       }
 ```
 
 ### 结语 
 
 &emsp;&emsp;其实我个人是比较青睐解构赋值这种方式去引入的，可能是比较对ES6具有亲和力。