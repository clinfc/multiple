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
vm.$format(target, template[, type[, response]])
```

### params

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
`target`|需要格式化的日期对象或时间戳|`Date`、`Timestamp`|-|-
`template`|格式化模板|`String`|-|-
`type`|`target`的数据类型|`Enum`|`d`、`s`、`ms`|`d`
`response`|是否返回时间分割后的数据|`Boolean`|`true`、`false`|`false`

### template

占位符|说明
:-|:-
`y`|四位年。例如：2020
`M`|1 ~ 12 月 的英文缩写
`m`|1 ~ 12 月
`w`|星期一 到 星期日 的英文缩写
`d`|1 ~ 31 天
`H`|24 小时
`h`|12 小时
`i`|60 分钟
`s`|60 秒
`u`|0 ~ 999 毫秒

### type

类型值|说明
:-|:-
`d`|`target`为Date对象
`s`|`target`为时间戳
`ms`|`target`为毫秒级的时间戳


## vm.$uuid

* 生成唯一标识

```js
vm.$uuid()
```


## vm.$polishing

* 用指定字符进行位数补齐

```js
vm.$polishing(target, length[, char])
```

### params

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
`target`|需要补齐的字符串或数字|`Number`|-|-
`length`|补齐后的字符长度|`Int`|-|-
`char`|用于补齐的字符|`Number`、`String`|-|`0`

## vm.$random

* 获取 min ~ max 之间的数字，包含 min/max

```js
vm.$random(min, max)
```

### params

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
`min`|区间最小值|`Number`|-|-
`max`|区间最大值|`Number`|-|-


## vm.$percent

* 得到两个数的百分数

```js
vm.$percent(num1, num2[, len])
```

### params

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
`num1`|被除数|`Number`|-|-
`num2`|除数|`Number`|-|-
`len`|百分数保留的小数位|`Int`||`0`