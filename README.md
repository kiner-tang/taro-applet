# huishi-study-applet

> 惠氏学习小程序,本项目使用的技术栈为：Taro+Typescript+Less+MobX+TaroUI

## 环境准备与依赖安装

### 环境（ENV）

+ NodeJs: `v12.16.1`
+ Npm: `6.13.4`
+ Taro: `Taro v3.0.22`
+ Taro-ui: `3.0.0-alpha.7`
+ Typescript: `3.7.0`
+ MobX: `4.8.0`
+ MobX-React: `6.1.4`
+ React: `16.10.0`

### 依赖安装

```bash
# 使用npm安装依赖
npm i
# 使用cnpm安装依赖
cnpm i
# 使用yarn安装依赖
yarn
```

## 使用(USAGE)

```bash
# 启动开发命令，并使用development配置
npm run dev:weapp
# 或
yarn dev:weapp

# 启动开发命令，并使用testing配置
npm run dev:testing:weapp
# 或
yarn dev:testing:weapp

# 使用开发配置打包小程序
npm run build:development:weapp
# 或
yarn build:development:weapp
# 使用测试配置打包小程序
npm run build:testing:weapp
# 或
yarn build:testing:weapp
# 使用正式配置打包小程序
npm run build:production:weapp
# 或
yarn build:production:weapp
```

## 项目结构

```bash
# 以下为本项目的结构即目录的用途
.
├── README.md										            # 项目说明文档
├── babel.config.js							            # 项目的babel配置，可配置一些插件满足es6+的新特性
├── config											            # 项目配置文件目录，根据不同环境进行区分
│   ├── dev.js									            # 开发环境配置
│   ├── index.js								            # 配置文件入口
│   ├── prod.js									            # 正式环境配置
│   └── testing.js							            # 测试环境配置
├── dist												            # 项目输出目录
├── global.d.ts									            # typescript定义描述文件，可以在这里定义一些原本不支持的结构，避免报错
├── package.json								            # 项目包管理文件，包含本项目的包依赖、运行命令集、开发者等关键信息
├── project.config.json					            # 小程序配置文件，可配置小程序的appid、根目录、开发配置等
├── src													            # 源码目录，主要的的代码都在这里
│   ├── app.config.ts												# 微信小程序配置文件，用于配置tabbar等全局配置		
│   ├── app.less														# 全局样式
│   ├── app.tsx															# 项目入口，在这里注入stores
│   ├── assets															# 媒体文件目录，包括图片、视频、音频、文件
│   ├── components													# 公共组件
│   │   ├── BaseComponent.less							# 基座组件样式
│   │   ├── BaseComponent.tsx								# 基座组件，此组件定义了一些所有页面都有可能用到的一些公共属性和方法
│   │   └── FormItem												# 表单项组件，用于规定每个表单项的布局方案
│   │       ├── index.less
│   │       └── index.tsx
│   ├── config															# 项目配置，根据环境导出不同配置，包括但不限于接口地址、报错提示等
│   │   ├── development.config.ts
│   │   ├── index.ts
│   │   ├── production.config.ts
│   │   └── testing.config.ts
│   ├── core																# 一些工具代码或工具类
│   │   ├── Logger.ts												# 统一日志类，页面上所有的日志都通过此类输出
│   │   ├── api.ts													# 接口请求的基础封装，所有接口请求都通过此方法发出，统一管理
│   │   ├── code.ts													# 一些状态码，比如：请求成功状态等
│   │   └── index.ts												# 放一些辅助用的工具方法
│   │   ├── eventBus.ts											# 用于一些特殊场景下的跨页面通信
│   ├── index.html													# h5模式时的首页，小程序模式可忽略
│   ├── inner																# 内部文件，用于定义一些公用的interface
│   │   └── index.ts
│   ├── model																# 用于定义一些具体的业务接口请求
│   │   ├── user.ts
│   │   └── wxlogin.ts
│   ├── pages																# 用于存放所有的页面资源
│   │   └── index
│   │       ├── index.config.ts
│   │       ├── index.less
│   │       └── index.tsx
│   └── store																# 用于存放所有的store文件
│       └── user.ts
├── tsconfig.json														# typescript配置文件，配置了一些typescript的规则
└── yarn.lock																
```

