import Vue from 'vue'

Vue.prototype.$loadScript = loadScript
Vue.prototype.$loadScriptByName = loadScriptByName


/* ------------------------------------------------------ loadScriptByName --------------------------------------------------------------- */

const sname = {
  'bmap-api@2': '//api.map.baidu.com/api?v=2.0&ak=kGNFvzccNhXtVfwGDi5iIQZtACfiViEB',
  'bmap-getscript@2': '//api.map.baidu.com/getscript?v=2.0&ak=kGNFvzccNhXtVfwGDi5iIQZtACfiViEB',
  'bmap-mapv': '//mapv.baidu.com/build/mapv.min.js',
  'bmap-webgl@3': 'https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=kGNFvzccNhXtVfwGDi5iIQZtACfiViEB',
}

/**
 * @param {String|Array} name 需要加载的 script 资源路径名
 * @param {Function} callback 执行完后的回调函数
 * @return {Promise}
 */
function loadScriptByName(name, callback) {
  const keys = Object.keys(sname)
  if (typeof name == 'string' && keys.includes(name)) {
    return this.$loadScript(sname[name], callback)
  } else if (Array.isArray(name)) {
    name = name.filter(item => keys.includes(item)).map(item => sname[item])
    return this.$loadScript(name, callback)
  }
}


/* ------------------------------------------------------- loadScript -------------------------------------------------------------- */

/**
 * 加载 script 资源
 *
 * @param {String|Array} srcs 需要加载的script资源链接
 * @param {Function} callback 加载完成后的回调函数
 * @return {Promise}
 */
function loadScript(srcs, callback) {
  if (typeof srcs === 'string') {
    srcs = [srcs]
  } else if (!Array.isArray(srcs)) {
    throw new Error('参数错误！无需要加载的script资源！！！')
  }
  let temp = []
  srcs.forEach(src => {
    temp.push(load(src))
  })
  if (callback) {
    Promise.all(temp).then(callback)
  }
  return Promise.all(temp)
}

// 供 loadScript 调用
function load(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelectorAll(`script[src='${src}']`).length) {
      resolve(true)
    } else {
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.charset = 'UTF-8'
      script.src = src
      script.addEventListener('load', function() {
        resolve(true)
      })
      script.addEventListener('error', function(e) {
        reject(e)
      })
      document.head.appendChild(script)
    }
  })
}
