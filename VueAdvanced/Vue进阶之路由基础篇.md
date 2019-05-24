## Vue进阶之路由基础篇

### 路由传参

```vue
     <script >
     export default 
           {
              path:'/test/:name',
              name:'test',
              component:() => import('@/views/Test.vue')
          }
     
</script>
```

### 路由跳转

- router-link

```vue
 <router-link to="path"></router-link>
 
<!-- or you can jump use this method-->

<router-link :to="{name:'test'}"></router-link>
 
```

### 命名视图

- 路由定义
```vue
  <script >
    export default  {
                          path:'/map',
                          components:{
                          // default:()=>import('@/App.vue'),
                          map :()=>import('@/views/Map.vue'),
                          phone:()=> import('@/views/Phone.vue')
                          }
                    }
</script>
```

- 命名路由

```vue
  <div id="app">
    <router-view></router-view>
    <Tab/>
    <router-view name="map"/>
    <router-view name="phone"></router-view>
  </div>
```

### 重定向

```vue
<script >
  export default {
                    path:'/home',
                    redirect:{
                    
                    }
                 }
                 //you can do it as this
export default {
               path:'/home',
               redirect: to =>{
                   
               }
             }
</script>

```

### 别名

```javascript
 const router =  {
     path:'/home',
     alias:'/mmm',             
     }
```

### 编程式路由

此部分再不做细致介绍，具体参见路由官网