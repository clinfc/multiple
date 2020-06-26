<template>
  <top-common title="累计用户数" value="3,451,239">
    
    <v-chart :options="options"></v-chart>

    <div class="footer" slot="bot">
      <div class="top-line">
        <span>日同比</span>
        <span class="emphasize">5.24%</span>
        <span class="increase"></span>
      </div>
      <div class="top-line">
        <span>月同比</span>
        <span class="emphasize">3.21%</span>
        <span class="decrease"></span>
      </div>
    </div>
  </top-common>
</template>

<script>
import TopMixin from './mixin.js'

export default {
  mixins: [TopMixin],
  computed: {
    options() {
      return {
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        tooltip: {},
        xAxis: {
          show: false
        },
        yAxis: {
          show: false,
          type: 'category'
        },
        series: [
          {
            stack: '总量',
            type: 'custom',
            data: [80],
            renderItem: (param, api) => {
              let val = api.value(0)
              let pos = api.coord([val, 0])
          
              return {
                type: 'group',
                position: pos,
                children: [{
                  type: 'path',
                  style: {
                    fill: '#13CE66'
                  },
                  shape: {
                    d: 'M523.955 832.173l323.744-512c6.24-9.856 6.624-22.336 0.992-32.512-5.632-10.24-16.384-16.576-28.033-16.576h-647.328c-11.647 0-22.4 6.336-28.033 16.576-2.656 4.8-3.968 10.112-3.968 15.424 0 5.952 1.664 11.904 4.929 17.088l323.616 512c5.856 9.28 16.064 14.911 27.040 14.912s21.184-5.632 27.040-14.912z',
                    x: -6,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  }
                }, {
                  type: 'path',
                  shape: {
                    d: 'M523.955 297.952l323.744 512c6.24 9.856 6.624 22.336 0.992 32.512-5.632 10.24-16.384 16.576-28.033 16.576l-647.328 0c-11.647 0-22.4-6.336-28.033-16.576-2.656-4.8-3.968-10.112-3.968-15.424 0-5.952 1.664-11.904 4.929-17.088l323.616-512c5.856-9.28 16.064-14.911 27.04-14.912s21.184 5.632 27.04 14.912z',
                    x: -6,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#13CE66'
                  }
                }]
              }
            }
          },
          {
            name: '上月用户总量',
            stack: '总量',
            type: 'bar',
            data: [80],
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            name: '本月用户总量',
            stack: '总量',
            type: 'bar',
            data: [100],
            barWidth: 10,
            itemStyle: {
              color: '#e5e5e5'
            }
          },
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#total-user-chart {
  width: 100%;
  height: 100%;
}
.footer {
  column-count: 2;
}
</style>
