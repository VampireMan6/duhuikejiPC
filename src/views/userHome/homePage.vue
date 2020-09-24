<template>
  <div class="content">
    <!-- 项目列表 -->
    <Row>
      <Col :xs="{ span: 0}" :md="{ span: 24}" :xl="{ span: 24}">
        <div class="flex">
          <div class="left flex flex-1 f-a">
            <div class="echart1" ref="chart" style="width:30%;height:250px"></div>
            <div class="echart1" ref="chart1" style="width:30%;height:250px"></div>
            <div class="echart1" ref="chart2" style="width:30%;height:250px"></div>
          </div>
          <div class="right flex coloum j-c" style="width: 300px">
            <img class="headImg m-b-16" src="../../assets/image/baseData1.jpg" alt="">
            <div class="w-100 flex f-a m-b-16">
              <span>id</span>
              <span>排名</span>
              <span>积分</span>
            </div>
            <div class="w-100 flex f-a m-b-16">
              <span>虚拟币</span>
              <span>漏洞总数</span>
              <span>徽章</span>
            </div>
            <div class="w-100 t-c">
              <span>个性签名</span>
            </div>
            <!--  -->
            <div>

            </div>
          </div>
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 0}" :xl="{ span: 0}">
        <div class="echart1 m-b-16" ref="chart3" style="width:100%;height:250px"></div>
        <div class="echart1 m-b-16" ref="chart4" style="width:100%;height:250px"></div>
        <div class="echart1 m-b-16" ref="chart5" style="width:100%;height:250px"></div>
        <div class="w-100">
          sdfada
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  mounted () {
    console.log(111111)
    this.getEchartData();
    this.getEchartData1();
    this.getEchartData2();
    this.getEchartData3();
    this.getEchartData4();
    this.getEchartData5();
  },
  methods: {
    getEchartData() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          title: {
            text: '平台漏洞数量',
            left: 'center',
            textStyle: {
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom',
            show: false
          },
          series: [
            {
              name: '平台漏洞数量',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '总体漏洞数量'},
                {value: 310, name: 'web漏洞数量'},
                {value: 234, name: 'app漏洞数量'},
                {value: 135, name: '工控漏洞数量'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option);
        window.addEventListener('resize', function() {
          myChart.resize()
        })
      }
    },
    getEchartData1() {
      const chart = this.$refs.chart1
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          title: {
            text: '平台漏洞数量',
            left: 'center',
            textStyle: {
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom',
            show: false
          },
          series: [
            {
              name: '平台漏洞数量',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '总体漏洞数量'},
                {value: 310, name: 'web漏洞数量'},
                {value: 234, name: 'app漏洞数量'},
                {value: 135, name: '工控漏洞数量'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option);
        window.addEventListener('resize', function() {
          myChart.resize()
        })
      }
    },
    getEchartData2() {
      const chart = this.$refs.chart2
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          title: {
            text: '平台漏洞数量',
            left: 'center',
            textStyle: {
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom',
            show: false
          },
          series: [
            {
              name: '平台漏洞数量',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '总体漏洞数量'},
                {value: 310, name: 'web漏洞数量'},
                {value: 234, name: 'app漏洞数量'},
                {value: 135, name: '工控漏洞数量'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option);
        window.addEventListener('resize', function() {
          myChart.resize()
        })
      }
    },
    getEchartData3() {
      const chart = this.$refs.chart3
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          title: {
            text: '平台漏洞数量',
            left: 'center',
            textStyle: {
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom',
            show: false
          },
          series: [
            {
              name: '平台漏洞数量',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '总体漏洞数量'},
                {value: 310, name: 'web漏洞数量'},
                {value: 234, name: 'app漏洞数量'},
                {value: 135, name: '工控漏洞数量'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option);
        window.addEventListener('resize', function() {
          myChart.resize()
        })
      }
    },
    getEchartData4() {
      const chart = this.$refs.chart4
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          title: {
            text: '平台漏洞数量',
            left: 'center',
            textStyle: {
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom',
            show: false
          },
          series: [
            {
              name: '平台漏洞数量',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '总体漏洞数量'},
                {value: 310, name: 'web漏洞数量'},
                {value: 234, name: 'app漏洞数量'},
                {value: 135, name: '工控漏洞数量'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option);
        window.addEventListener('resize', function() {
          myChart.resize()
        })
      }
    },
    getEchartData5() {
      const chart = this.$refs.chart5
      if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
          title: {
            text: '平台漏洞数量',
            left: 'center',
            textStyle: {
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom',
            show: false
          },
          series: [
            {
              name: '平台漏洞数量',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '总体漏洞数量'},
                {value: 310, name: 'web漏洞数量'},
                {value: 234, name: 'app漏洞数量'},
                {value: 135, name: '工控漏洞数量'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option);
        window.addEventListener('resize', function() {
          myChart.resize()
        })
      }
    },
  }
}
</script>

<style scoped>
.content {
  padding: 16px;
  background-color: #f7f7f7;
}
.echart1 {
  border: 1px solid #e6e6e6;
  width: 100%;
  border-radius: 4px;
  padding: 8px 0;
}
.right {
  background-color: #fff;
  min-height: 100%;
  padding: 16px;
}
.headImg {
  width: 60px;
  height: 60px;
}
</style>
