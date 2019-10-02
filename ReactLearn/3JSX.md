# JSX
## 前提知识（补充）

### MVVM在React中的对应关系
[参考链接](https://segmentfault.com/a/1190000016841537?utm_source=tag-newest)

1） M(odel)：对应组件的方法或生命周期函数中实现的业务逻辑和this.state中保存的本地数据，如果React集成了redux +react-redux，那么组件中的业务逻辑和本地数据可以完全被解耦出来单独存放当做M层，如业务逻辑放在Reducer和Action中。

2） V(iew)-M(odel)：对应组件中的JSX，它实质上是Virtual DOM的语法糖。React负责维护 Virtual DOM以及对其进行diff运算，而React-dom 会把Virtual DOM渲染成浏览器中的真实DOM

3） View：对应框架在浏览器中基于虚拟DOM生成的真实DOM（并不需要我们自己书写）以及我们书写的CSS

4）绑定器：对应JSX中的命令以及绑定的数据，如className={ this.props.xxx }、{this.props.xxx}等等

### MVVM中的双向绑定与单向绑定

1） 一般，只有UI表单控件才存在双向数据绑定，非UI表单控件只有单向数据绑定。

2） 单向数据绑定是指：M的变化可以自动更新到ViewModel，但ViewModel的变化需要手动更新到M（通过给表单控件设置事件监听）

3） 双向数据绑定是指念：M的变化可以自动更新到ViewModel，ViewModel的变化也可以自动更新到M

4） 双向绑定 = 单向绑定 + UI事件监听。双向和单向只不过是框架封装程度上的差异，本质上两者是可以相互转换的。

5） 优缺点：在表单交互较多的情况下，单向数据绑定的优点是数据更易于跟踪管理和维护，缺点是代码量较多比较啰嗦，双向数据绑定的优缺点和单向绑定正好相反。

## 正题切入

&emsp;&emsp;JSX实际就是JS的语法糖，运用于React架构中，其格式比较像是模版语言，但事实上完全是在JavaScript内部实现的。元素是构成React应用的最小单位，JSX就是用来声明React当中的元素，React使用JSX来描述用户界面。

&emsp;&emsp;实际就是调用了React里面的React.createElement去创建元素，作为MVVM中的View-Model层。