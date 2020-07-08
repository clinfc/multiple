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
this.$loadScriptByName('bmap-api', function() {})

this.$loadScriptByName('bmap-api').then(function() {})

// 加载多个 script 资源
let data = ['bmap-api', 'bmap-getscript']

this.$loadScriptByName(data, function() {})

this.$loadScriptByName(data).then(function() {})
```