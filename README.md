# PC/H5快速开发模版
## 使用
使用模版
```bash
npx degit wukuy/pc-h5-quick-dev my-project
```
安装依赖
```bash
npm i
```

开发
```bash
npm run dev
```
## 技术栈
vite + vue + eslint + i18n + vuetify

## 功能
+ eslint
  + 代码严格按照eslint规范编写
+ models
+ axios封装
+ i18n
+ theme
+ 自动生成router
  + 路由使用插件自动生成，查看[插件](https://github.com/hannoeru/vite-plugin-pages)文档
+ 自动加载组件
  + 使用插件自动导入，查看[插件](https://github.com/antfu/unplugin-auto-import)文档
+ sass


## 项目结构
```
src
├── App.vue
├── assets  # 静态资源
│   ├── images
│   │   └── no_data.png
│   ├── logo.svg
│   └── styles
├── common
│   ├── app.http.js # 接口封装
│   └── utils   # 工具方法
│       └── index.js
├── components  # ui组件
├── layouts     # 页面布局
│   ├── 404.vue
│   └── index.vue
├── locales     # 国际化
│   ├── en.yaml
│   └── ja.yaml
├── main.js
├── models      # model层
│   └── home.js
├── pages       # 页面
│   ├── [...all] # 匹配不到路由的页面，重定向到这里
│   │   └── index.vue
│   └── index   # 首页
│       ├── index-h5.scss # 首页h5样式编写
│       ├── index-pc.scss # 首页PC样式编写
│       └── index.vue
├── plugins   # vue插件
│   ├── i18n.js
│   ├── router.js
│   ├── vuetify.js
│   └── webfontloader.js
└── style.css
```

## 路由说明


## 组件自动导入


## 