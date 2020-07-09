import Vue from 'vue'

Vue.prototype.$format = format
Vue.prototype.$polishing = polishing
Vue.prototype.$uuid = uuid

/**
 * @param {Date|Timestamp} target 需要被格式化的时间
 * @param {String} template 格式化模板
 * 	y：四位年。例如：2020
 *  M：1 ~ 12 月 的英文缩写
 *  m：1 ~ 12 月
 *  w：星期一 到 星期日 的英文缩写
 *  d：1 ~ 31 天
 *  H：24 小时
 *  h：12 小时
 *  i：60 分钟
 *  s：60 秒
 *  u：0 ~ 999 毫秒
 * @param {String|Enum} type target的数据类型。
 * 	d：为Date对象；
 * 	s：时间戳；
 * 	ms：毫秒级的时间戳
 * @param {Boolean} response 是否返回时间分割后的数据
 * @return {String|Array}
 */
function format(target, template, type = 'd', response = false) {
  let date = new Date()
  switch (type) {
    case "s":
      date.setTime(target * 1000)
      break
    case "ms":
      date.setTime(target)
      break
    default:
      date = target
      break
  }
  const [ w, M, d, y, His ] = date.toString().split(' ')
  const [ H, i, s ] = His.split(':')
  const m = this.$polishing(date.getMonth() + 1, 2)
  const u = this.$polishing(date.getMilliseconds(), 3)
  const h = this.$polishing(H > 12 ? H - 12 : H, 2)

  const result = template
    .replace(/y+/, y)
    .replace(/m+/, m)
    .replace(/d+/, d)
    .replace(/H+/, H)
    .replace(/h+/, h)
    .replace(/i+/, i)
    .replace(/s+/, s)
    .replace(/u+/, u)
    .replace(/w+/, w)
    .replace(/M+/, M)

  if (!response) {
    return result
  }
  return [ result, { y, M, m, w, d, H, h, i, s, u } ]
}

/**
 * 位数补齐
 */
function polishing(target, length, char = 0) {
  return `${Array(length).join(char)}${target}`.slice(-length)
}

/**
 * 生成唯一标识
 */
function uuid() {
  return [
    Math.random().toString(16).slice(2),
    new Date().getTime().toString(16),
    Math.random().toString(16).slice(2),
  ].join('')
}
