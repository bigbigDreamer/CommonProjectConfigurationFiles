# CommonProjectConfigurationFiles

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/bigbigDreamer/CommonProjectConfigurationFiles)
[![](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg)](https://github.com/bigbigDreamer/CommonProjectConfigurationFiles)
[![](https://img.shields.io/badge/npm-v6.6-green.svg)](https://github.com/bigbigDreamer/CommonProjectConfigurationFiles)
[![](https://img.shields.io/badge/LICENSE-MIT-green.svg)](https://github.com/bigbigDreamer/CommonProjectConfigurationFiles/blob/master/LICENSE)

# ConfigBox

## `.gitattributes`

>`.gitattributes`主要用来帮助github去更加精准的识别你的项目使用了什么语言。

##### Directions for use

- 跟随`git push`一并commit就OK!

## `.gitignore`

>`.gitignore`主要用来帮助commit命令去辅助识别项目上传git需要过滤哪些文件。

##### Directions for use

- 创建文件在项目的根目录，自行生效。

## `.editorconfig`

>`.editorconfig`主要用来记录当前项目的代码风格，保证当前项目在不同的机器以及IDE上不会出现样式错乱。

##### Directions for use

- 第一步：新建该文件夹，也可以不建立。

- 第二步：附图。

![alt](configExampleImgs/editorconfig.png)

- 第三步：单击export就会自动覆盖当前项目目录下的配置文件。

## `.browserslistrc`

>`.browserslistrc`主要用来指定项目运行的浏览器版本或者类型。

##### Directions for use

- 参见[传送门](https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist)

## `vue.config.js`

>`vue.config.js`主要用来适配Vue cli@3.0去配置vue项目，webpack会默认加载该文件。

##### Directions for use

- 第一步：`vue create newProject`

- 第二步：新建`vue.config.js`文件在项目根目录下。

- 第三步：`npm run serve`

- 配置细节参见[传送门](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)

## `babel.config.js`

>`babel.config.js`是babel@7.0的默认加载配置文件，用于将高于es5.1版本的js代码转为@5.0版本，也是为了更好的适配浏览器。

##### Directions for use

- 第一步：初始化项目 `npm init`

- 第二步：安装依赖
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env

npm install --save @babel/polyfill
```
- 第三步：创建配置文件

- 第四步：附图。

![alt](configExampleImgs/babel1.png)

![alt](configExampleImgs/babel2.png)

## `.eslintrc.js`

>`.eslintrc.js`是代码质量检测工具ESlint的默认配置文件。

##### Directions for use

- 第一步：安装必要依赖

```bash
npm install -g eslint

npm install -g eslint-config-standard

npm install -g eslint-plugin-html

npm install -g eslint-plugin-promise

npm install -g eslint-plugin-standard

npm install -g eslint-plugin-sort-class-members

npm install -g babel-eslint

npm install -g eslint-plugin-babel
```
- 第二步：在项目根目录创建配置文件

- 第三步：附图。

![alt](configExampleImgs/eslint1.png)

![alt](configExampleImgs/eslint2.png)

-----------------------------------------------------------------------

# IDE软技能

## less在WebStorm中如何配置

- 第一步：安装

```bash
npm install -g less 
```
- 第二步：附图

![alt](configExampleImgs/less1.png)

![alt](configExampleImgs/less2.png)

## Hexo搭建个人博客

- 参见[教程](https://ivu1314.club/9c29.html)
- [Hexo官网](https://hexo.io/zh-cn/docs/helpers.html#%E7%BD%91%E5%9D%80)

## 前端API编写工具之GitBook

- 参见[教程](https://yuzeshan.gitbooks.io/gitbook-studying/content/index.html)
- [GitBook官网](https://www.gitbook.com/?t=5)

## GitHub徽章定制

- 参见[官网](https://shields.io/#/)

## 前端工程师的调色板

- 参见[官网](https://colorhunt.co/)

## JavaScript注释标准指导

- 参见[API](http://yuri4ever.github.io/jsdoc/)

-----------------------------------------------------------------------------

# Statement

## Contact Me

Email:vuejs@vip.qq.com

QQ:1826001146

WeChat:17693104287

## License

[MIT](https://github.com/bigbigDreamer/CommonProjectConfigurationFiles/blob/master/LICENSE)

