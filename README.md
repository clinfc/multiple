# multiple

> 项目地址：[http://mtapi.top](http://mtapi.top)

```
// Project setup
> npm install

// Compiles and hot-reloads for development
> npm run serve

// Compiles and minifies for production
> npm run build

// Lints and fixes files
> npm run lint
```

# 组件

## `components/toolbox.vue`

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
`home`|显示首页|`Boolean`|`true`、`false`|`false`
`qq`|显示 QQ 二维码|`Boolean`|`true`、`false`|`false`
`gh`|当前项目的 GitHub 地址|`Boolean`|`true`、`false`|`false`
`vertical`|竖向布列|`Boolean`|`true`、`false`|`false`
`direction`|定位|`String`|`t`、`r`、`l`、`b`、`tl`、`tr`、`bl`、`br`|`r`

### Slot

name|说明
:-|:-
-|自定义的内容


## `conponents/echarts/template.vue`

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
`github`|显示 GitHub 导航|`Boolean`|`true`、`false`|`false`
`url`|自定义的 GitHub 链接|`String`|`-`|`-`
`bmap`|渲染为 bmap|`Boolean`|`true`、`false`|`false`
`option`|echarts 配置项|`Object`|`-`|`{}`

### Slot

name|说明
:-|:-
-|自定义的内容


# API

## vm.$loadScript

```js
// 只加载单个 script 资源
vm.$loadScript('./custom-fn.js', function() {})

vm.$loadScript('./custom-fn.js').then(function() {})

// 加载多个 script 资源
let data = [
  './custom-01.js',
  '//mapv.baidu.com/build/mapv.min.js'
]
vm.$loadScript(data, function() {})

vm.$loadScript(data).then(function() {})
```

## vm.$loadScriptByName

* 必须是提前在内部定义好的名字才有效

```js
// 只加载单个 script 资源
vm.$loadScriptByName('bmap-api', function() {})

vm.$loadScriptByName('bmap-api').then(function() {})

// 加载多个 script 资源
let data = ['bmap-api', 'bmap-getscript']

vm.$loadScriptByName(data, function() {})

vm.$loadScriptByName(data).then(function() {})
```


## vm.$format

* 格式化日期

```js
vm.$format(new Date(), 'y-m-d H:i:s')
```


## vm.$uuid

* 生成唯一标识

```js
vm.$uuid()
```


## vm.$polishing

* 用指定字符进行位数补齐

```js
vm.$polishing(2, 3)   // 003
```