# MVVM设计模式

## 百度百科释意

&emsp;&emsp;MVVM是Model-View-ViewModel的简写。它本质上就是MVC 的改进版。MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。当然这些事 ViewModel 已经帮我们做了，它可以取出 Model 的数据同时帮忙处理 View 中由于需要展示内容而涉及的业务逻辑。微软的WPF带来了新的技术体验，如Silverlight、音频、视频、3D、动画……，这导致了软件UI层更加细节化、可定制化。同时，在技术层面，WPF也带来了 诸如Binding、Dependency Property、Routed Events、Command、DataTemplate、ControlTemplate等新特性。MVVM（Model-View-ViewModel）框架的由来便是MVP（Model-View-Presenter）模式与WPF结合的应用方式时发展演变过来的一种新型架构框架。它立足于原有MVP框架并且把WPF的新特性糅合进去，以应对客户日益复杂的需求变化。

## 原理图

![alt](https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=66a90cd31d950a7b613846966bb809bc/e61190ef76c6a7efe4baffc3fdfaaf51f2de66b2.jpg)

## 参考链接

- [MVVM--廖雪峰](https://www.liaoxuefeng.com/wiki/1022910821149312/1108898947791072)
- [MVVM--简书](https://www.jianshu.com/p/423a214757ba)

## 个人理解

&emsp;&emsp;在MVC中，为了解耦Model与View层利用Controller层加以控制，映射到Java之中，Dao层负责Model与数据库进行
交互，View层JSP服务器端模板，渲染View，Servlet层负责Controller，负责Dao层与View层的数据交互与传输。

&emsp;&emsp;而在前端的MVVM正是由MVC演变而来的，纯JS对象作为Model，以模板文件作为View，利用comelier进行模板编译输出为纯的HTML，而
ViewModal负责Model与View之间的数据交互，进而将View与Model尽可能的解耦。

&emsp;&emsp;同样的虚拟DOM的引入，在我看来极大地解放了Web开发者的双手，从繁琐的DOM操作过渡为纯JS的数据操作。
可能会减少DOM操作次数，带来性能上的提升，即使我们频繁操作虚拟DOM，我们只需要一定时刻一次性同步修改到真实DOM上即可。过度的修改真实DOM的话，
会引起浏览器的重绘或重排，极大影响浏览器的性能。直接操作DOM太过于依赖浏览器环境，使得代码过耦。