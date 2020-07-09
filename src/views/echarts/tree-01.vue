<template>
  <e-tpe :option="option" github></e-tpe>
</template>

<script>
import ETpe from '../../mixins/echarts-template.js'

// 必须引入的数据
import 'echarts/map/js/china'

const data = [{
  name: '信息管理系统',
  children: [
    {
      name: '基础信息管理',
      children: [
        { name: '基础数据' },
        { name: '员工提示信息' }
      ]
    },
    {
      name: '人事管理',
      children: [
        { name: '人事档案管理' },
        { name: '人事资料查询' },
        { name: '人事资料统计' }
      ]
    },
    {
      name: '备忘记录',
      children: [
        { name: '日常记事' },
        { name: '通讯录' }
      ]
    },
    {
      name: '系统管理',
      children: [
        { name: '重新登录' },
        { name: '用户设置' },
        { name: '系统退出' }
      ]
    },
    {
      name: '数据库的维护',
      children: [
        { name: '备份还原数据库' },
        { name: '清空数据库' }
      ]
    },
  ]
}]

export default {
  mixins: [ETpe],
  data() {
    return {}
  },
  computed: {
    option() {
      return {
        series: [
          {
            type: 'tree',
            top: '5%',
            bottom: '55%',
            right: '55%',
            // left: '5%',
            data: data,
            orient: 'LR',
            label: {
              position: 'right'
            }
          },
          {
            type: 'tree',
            top: '5%',
            bottom: '55%',
            // right: '5%',
            left: '55%',
            data: data,
            orient: 'RL',
            label: {
              position: 'right'
            }
          },
          {
            type: 'tree',
            top: '55%',
            bottom: '5%',
            right: '55%',
            // left: '5%',
            data: data,
            orient: 'TB',
            label: {
              position: 'right',
              rotate: 90
            }
          },
          {
            type: 'tree',
            top: '55%',
            bottom: '5%',
            left: '55%',
            // right: '5%',
            data: data,
            orient: 'BT',
            label: {
              position: 'right',
              rotate: -90
            }
          }
        ]
      }
    }
  }
}
</script>
