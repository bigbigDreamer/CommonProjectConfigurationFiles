# 路由进阶篇

## 路由组件传参

- 在路由路径中通过'/:args'来传参
- 通过开启props来传参
```javascript
const router = {
              path:'/argu/:name',
              name:'argu',
              component:() => import('./views/author.vue'),
              props:true
      }
```

```vue
<template>
    <div>
        {{name}}
    </div>
</template>

<script>
    export default {
        name: "author",
        props:{
            name:{
                type:[String,Boolean],
                default(){
                    return '王彬彬'
                }
            }
        }
    }
</script>

<style scoped>

</style>
```

## HTML History模式

- 应用场景，假如项目正式上线之后就需要开启history模式

- 需要设定404页面，需要定义在最后，因为路由有优先级，会优先使用前面那个路由匹配。  
```javascript
const router  = {
    path:'*',//匹配任何路径
    component:()=>import('404.vue'),
    }
```

## 导航守卫

- 全局守卫

```javascript
import router from './router'

const HAS_LOGIN = true;

router.beforeEach((to,from,next) => {
    
    if (to.name!=='login') {
        if (HAS_LOGIN) {
            next();
        } else {
            next({name:'login'})
        }
    } else {
        if(HAS_LOGIN) {
            next({name:'home'});
        }

}})
```
- 后置钩子
```javascript
import router from './router'

router.afterEach((to,from) => {
    //loading = false;
})
```
- 导航被确认之前，所有组件内守卫，以及异步路由组件被解析之后

```javascript
//router.beforeResolve
```

- 路由内部守卫

```javascript
const router = {
    path:'',
    name:'',
    beforEnter:(to,from)=>{}
}
```

- 组件内部守卫

  - `beforeRouterEnter(to,from,next)` 注意此处页面未渲染，调用this可能会undefined
  ```javascript
    //但是这样就可以访问到
   next(vm => {
    
  })
  ```
  - `beforeRouterLeave`
## 路由元信息

## 过度效果