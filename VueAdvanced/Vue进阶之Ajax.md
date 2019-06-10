# Ajax请求

## 解决跨域问题

&emsp;&emsp;什么是跨域？

     源的组成：域名、端口、协议
     三者有一异那么就算跨域~~~~
     
#### 开发环境下：

&emsp;只需要配置vue.config.js中的devServe即可。

#### 生产环境下：

&emsp;新增header(以node为例)

```javascript
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  
  //
  app.all('*',(req,res,next) => {
       res.header('Access-Control-Allow-Origin','*');
       res.header('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
       res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
        
  })
  
```

## 封装axios

- 请求拦截

- 响应拦截

```javascript
import axios from 'axios'

import {baseUrl} from '../config'

/**
 * @time  2019/6/10 11:27
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  对于axios的二次封装
 * @param baseURL {String} -请求地址
 */
class HTTPRequest {
  constructor(baseURL = baseUrl) {
    this.baseURL = baseURL;
    //对所有的请求压栈处理
    this.queue = {};
  }

  /**
   * @time  2019/6/10 11:28
   * @author  Eric Wang <vuejs@vip.qq.com>
   * @desc  获取内部配置
   * @return {Object} -返回一个内部配置
   */
  getInsideConfig() {
    return {
      baseUrl: this.baseURL,
      method:'post',
      headers: {}
    };
  }

  /**
   * @time  2019/6/10 11:29
   * @author  Eric Wang <vuejs@vip.qq.com>
   * @desc  拦截器
   * @param  instance {Object} -axios的新创建实例
   * @param  url  {String}  -ajax请求地址
   */
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
        //添加全局的loading
        //Spin.show()
        if (!Object.keys(this.queue).length) {
          //Spin.show()
        }
        //将当前url入队
        this.queue[url] = true;
        return config;
      },
      error => Promise.reject(error));
    instance.interceptors.response.use(res => {
      console.log(res);
      //响应完成之后出队
      delete this.queue[url];
      return res;
    }, err => {
      //请求出错之后出队
      delete this.queue[url];
      return Promise.reject(err);
    });
  }

  request(options) {
    const instance = axios.create();
    //合并内置配置与自定义配置
    options = Object.assign(this.getInsideConfig(), options);
    //调用拦截器
    this.interceptors(instance, options.baseUrl);
    //返回实例
    return instance(options);
  }
}

export default HTTPRequest;

```

## 请求实战