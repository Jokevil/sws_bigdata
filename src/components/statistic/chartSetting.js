import echarts from 'echarts';
import { on, off } from '@/libs/tools';

export default {
  data() {
    return {
      chartsLabelColor: {
        label: { fontSize: 28, color: '#ffffff' },
      },
      s_chart0: null,
      s_chart1: null,
      s_chart2: null,
      m_chart1: null,
      l_chart1: null,
      s_chart0_data: {
        dataAxis: ['康美透析中心', '秀山透析中心', '弹子石门诊部', '陶家门诊部', '沙坪坝透析中心', '涪陵透析中心', '铜梁透析中心', '忠县透析中心'],
        dataCount: [50, 49, 68, 89, 71, 42, 66, 39],
        maxCount: 100,
      },
      s_chart2_data: {
        xAxisData: ['梅毒', 'HCV', '正常', 'HBV+HCV', 'HBV'],
        seriesData: [
          {
            name: '梅毒', value: 14, itemStyle: { color: '#f6a63b' },
          },
          {
            name: 'HCV', value: 4, itemStyle: { color: '#f36b96' },
          },
          {
            name: '正常', value: 330, itemStyle: { color: '#53d9ff' },
          },
          {
            name: 'HBV+HCV', value: 111, itemStyle: { color: '#e86bf3' },
          },
          {
            name: 'HBV', value: 30, itemStyle: { color: '#4364ea' },
          },
        ],
      },
      l_chart1_data: {
        xAxisData: ['20岁以下', '20-30岁', '31-40岁', '41-50岁', '51-60岁', '60岁以上'],
        seriesData: [
          {
            name: '20岁以下', value: 3,
          },
          {
            name: '20-30岁', value: 14,
          },
          {
            name: '31-40岁', value: 25,
          },
          {
            name: '41-50岁', value: 108,
          },
          {
            name: '51-60岁', value: 131,
          },
          {
            name: '61岁以上', value: 98,
          },
        ],
      },
    };
  },
  methods: {
    init() {
      this.s_chart0 = echarts.init(this.$refs.s_chart0);
      this.s_chart1 = echarts.init(this.$refs.s_chart1);
      this.s_chart2 = echarts.init(this.$refs.s_chart2);
      this.m_chart1 = echarts.init(this.$refs.m_chart1);
      this.l_chart1 = echarts.init(this.$refs.l_chart1);
    },
    resize() {
      this.s_chart1.resize();
      this.s_chart2.resize();
      this.m_chart1.resize();
      this.l_chart1.resize();
    },
    clear() {
      this.s_chart1.clear();
      this.m_chart1.clear();
    },
    showLoading(dom) {
      dom.showLoading({
        text: '加载中',
        color: '#c23531',
        textColor: '#fff',
        maskColor: '#1d2b72',
        zlevel: 0,
      });
    },
    setBarChart(data, chart, splitLineFlag, axisLineStyle = {}) {
      chart.clear();
      const option2 = {
        color: '#53d9ff',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: { // 位置
          top: '15%',
          left: '10%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          // type: 'category',
          data: data.xAxisData,
          axisTick: { show: false },
          axisLabel: {
            color: '#ffffff',
            fontSize: 26,
          },
          axisLine: axisLineStyle,
        },
        yAxis: {
          type: 'value',
          axisTick: { show: false },
          splitLine: {
            show: splitLineFlag,
          },
          axisLabel: {
            color: '#ffffff',
            fontSize: 24,
          },
          axisLine: axisLineStyle,
          name: '单位(人)',
          nameTextStyle: {
            align: 'right',
            color: '#ffffff',
            fontSize: 24,
          },
        },
        series: [{
          data: data.seriesData,
          type: 'bar',
          // barWidth: 20,
          barMaxWidth: '50%',
        }],
      };
      chart.setOption(option2);
    },
    setSimpleBarChart(data, chart) {
      console.log(data, chart);
      const dataShadow = Array(data.dataCount.length).fill(data.maxCount);
      const option = {
        tooltip: {},
        grid: {
          // width: '100%',
          // height: '100%',
          top: '5%',
          bottom: '5%',
          left: '33%',
          // containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate: 30,
            // align: 'left',
            width: 500,
            margin: 20,
            textStyle: {
              fontSize: 28,
              color: '#fff',
            },
          },
          data: data.dataAxis,
        },
        series: [
          { // For shadow
            type: 'bar',
            barMaxWidth: 50,
            itemStyle: {
              normal: {
                color: '#273992',
                barBorderRadius: 15,
              },
            },
            barGap: '-100%',
            barCategoryGap: '60%',
            data: dataShadow,
            animation: false,
          },
          {
            type: 'bar',
            barMaxWidth: 50,
            label: {
              normal: {
                color: '#53d9ff',
                fontSize: 25,
                fontWeight: 'bold',
                offset: [0, 2],
                position: 'right',
                show: true,
              },
            },
            itemStyle: {
              normal: {
                barBorderRadius: 15,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#4364ea' },
                    { offset: 1, color: '#53d9ff' },
                  ],
                ),
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#2378f7' },
                    { offset: 0.7, color: '#2378f7' },
                    { offset: 1, color: '#83bff6' },
                  ],
                ),
              },
            },
            data: data.dataCount,
          },
        ],
      };
      chart.setOption(option);
    },
    setPieChart() {
      this.clear();
      const option1 = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          textStyle: {
            color: '#f0f0f0',
            fontSize: 24,
          },
          bottom: 10,
          left: 'center',
          data: ['转入', '转出', '离院', '死亡'],
        },
        color: [
          '#53d9ff',
          '#4364ea',
          '#f6a63b',
          '#293990',
        ],
        series: [
          {
            name: '患者转归人数',
            type: 'pie',
            radius: '60%',
            center: ['50%', '40%'],
            label: {
              normal: {
                formatter: [' {b|{b}}{c|{c}人} ',
                  '{b|({d}%)}',
                ].join('\n'),
                align: 'left',
                rich: {
                  b: {
                    fontSize: 16,
                    color: '#ffffff',
                  },
                  c: {
                    fontSize: 16,
                    color: '#ffffff',
                    lineHeight: 33,
                  },
                  d: { align: 'left' },
                  per: {
                    color: '#ffffff',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2,
                  },
                },
              },
            },
            data: [
              { value: 335, name: '转入' },
              { value: 310, name: '转出' },
              { value: 234, name: '离院' },
              { value: 135, name: '死亡' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      const option_m1 = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          left: 'center',
          bottom: 10,
          textStyle: {
            color: '#ffffff',
            fontSize: 24,
          },
          data: ['男', '女'],
        },
        series: [
          {
            name: '性别',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                color: '#ffffff',
                fontSize: 28,
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold',
                },
              },
            },
            labelLine: {
              normal: {
                show: true,
              },
            },
            data: [
              { value: 335, name: '男' },
              { value: 310, name: '女' },
            ],
          },
        ],
      };
      this.s_chart1.setOption(option1);
      this.m_chart1.setOption(option_m1);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.setSimpleBarChart(this.s_chart0_data, this.s_chart0);
      this.setPieChart();
      this.setBarChart(this.s_chart2_data, this.s_chart2, false);
      this.setBarChart(this.l_chart1_data, this.l_chart1, true, { lineStyle: { color: '#53d9ff' } });
      on(window, 'resize', this.resize);
    });
  },
  beforeDestroy() {
    off(window, 'resize', this.resize);
  },
};
