import echarts from 'echarts';
import chinaJSON from 'echarts/map/json/china.json';
import { on, off } from '@/libs/tools';

export default {
  data() {
    return {
      myChart: null,

      year: ['2014', '2015', '2016', '2017', '2018'],
      mapDataLength: 6,
      mapData: [[], [], [], [], []],
      categoryData: [],
      barData: [],

      // geoGpsMap: {
      //   1: [127.9688, 45.368],
      //   2: [116.4551, 40.2539],
      //   3: [109.1162, 34.2004],
      //   4: [113.12244, 23.009505],
      //   5: [87.9236, 43.5883],
      //   6: [91.11, 29.97],
      // },
      geoCoordMap: {
        // '台湾': [121.5135, 25.0308],
        // '黑龙江': [127.9688, 45.368],
        // '内蒙古': [110.3467, 41.4899],
        // "吉林": [125.8154, 44.2584],
        // '北京市': [116.4551, 40.2539],
        辽宁: [123.1238, 42.1216],
        // "河北": [114.4995, 38.1006],
        // "天津": [117.4219, 39.4189],
        // "山西": [112.3352, 37.9413],
        // "陕西": [109.1162, 34.2004],
        // "甘肃": [103.5901, 36.3043],
        // "宁夏": [106.3586, 38.1775],
        // "青海": [101.4038, 36.8207],
        // "新疆": [87.9236, 43.5883],
        // "西藏": [91.11, 29.97],
        四川: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        // "山东": [117.1582, 36.8701],
        // "河南": [113.4668, 34.6234],
        // "江苏": [118.8062, 31.9208],
        // "安徽": [117.29, 32.0581],
        // "湖北": [114.3896, 30.6628],
        // "浙江": [119.5313, 29.8773],
        // "福建": [119.4543, 25.9222],
        // "江西": [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        // "贵州": [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        广东: [113.12244, 23.009505],
        // "广西": [108.479, 23.1152],
        // "海南": [110.3893, 19.8516],
        // '上海': [121.4648, 31.2891],
      },
      colors: [
        ['#1DE9B6', '#F46E36', '#04B9FF', '#5DBD32', '#FFC809', '#FB95D5', '#BDA29A', '#6E7074', '#546570', '#C4CCD3'],
        ['#37A2DA', '#67E0E3', '#32C5E9', '#9FE6B8', '#FFDB5C', '#FF9F7F', '#FB7293', '#E062AE', '#E690D1', '#E7BCF3', '#9D96F5', '#8378EA', '#8378EA'],
        ['#DD6B66', '#759AA0', '#E69D87', '#8DC1A9', '#EA7E53', '#EEDD78', '#73A373', '#73B9BC', '#7289AB', '#91CA8C', '#F49F42'],
      ],
      colorIndex: 0,
    };
  },
  methods: {
    resize() {
      this.myChart.resize();
    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
          return 0;
      }
    },
    initMapData(length) {
      const mapData1 = [];
      for (let x = 0; x < length; x++) {
        mapData1[x] = [];
      }
      for (const key in this.geoCoordMap) {
        this.categoryData.push(key);
        mapData1[0].push({
          year: '2014',
          name: key,
          value: this.randomNum(100, 300),
        });
        mapData1[1].push({
          year: '2015',
          name: key,
          value: this.randomNum(100, 300),
        });
        mapData1[2].push({
          year: '2016',
          name: key,
          value: this.randomNum(100, 300),
        });
        mapData1[3].push({
          year: '2017',
          name: key,
          value: this.randomNum(100, 300),
        });
        mapData1[4].push({
          year: '2018',
          name: key,
          value: this.randomNum(100, 300),
        });
      }
      this.mapData = mapData1;
      for (let i = 0; i < this.mapData.length; i++) {
        this.barData.push([]);
        for (let j = 0; j < this.mapData[i].length; j++) {
          this.barData[i].push(this.mapData[i][j].value);
        }
      }
    },
    drawMap() {
      echarts.registerMap('china', chinaJSON);
      this.setMapOptions();
    },
    convertData(data = []) {
      const res = [];
      for (let i = 0; i < data.length; i++) {
        const geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    },
    setMapOptions() {
      const img = new Image();
      img.src = '../../assets/img/light2.png';
      img.width = '100%';
      img.height = '100%';
      const optionXyMap01 = {
        timeline: {
          // show: false,
          data: this.year,
          axisType: 'category',
          autoPlay: true,
          playInterval: 3000,
          left: '10%',
          right: '10%',
          bottom: '3%',
          width: '60%',
          //  height: null,
          label: {
            normal: {
              textStyle: {

                fontSize: 28,
                color: '#ddd',
              },
            },
            emphasis: {
              textStyle: {
                fontSize: 28,
                color: '#fff',
              },
            },
          },
          symbel: 'circle',
          symbolSize: 30,
          lineStyle: {
            show: false,
            fontSize: 30,
            color: '#555',
          },
          checkpointStyle: {
            borderColor: '#777',
            borderWidth: 2,
          },
          controlStyle: {
            showNextBtn: true,
            showPrevBtn: true,
            normal: {
              color: '#666',
              borderColor: '#666',
            },
            emphasis: {
              color: '#aaa',
              borderColor: '#aaa',
            },
          },

        },
        baseOption: {
          animation: true,
          animationDuration: 1000,
          animationEasing: 'cubicInOut',
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'cubicInOut',
          grid: {
            right: '5%',
            top: '15%',
            bottom: '10%',
            width: '20%',
          },
          tooltip: {
            trigger: 'axis', // hover触发器
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
              shadowStyle: {
                color: 'rgba(150,150,150,0.1)', // hover颜色
              },
            },
          },
          geo: {
            show: true,
            map: 'china',
            roam: true,
            zoom: 1,
            center: [113.83531246, 34.0267395887],
            label: {
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                  }],
                  globalCoord: false, // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10,
              },
              emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0,
              },
            },
          },
        },
        options: [],
      };
      for (let n = 0; n < this.year.length; n++) {
        optionXyMap01.options.push({
          backgroundColor: '#0f1642',
          title: [{
            /* text: '地图',
              subtext: '内部数据请勿外传',
              left: 'center',
              textStyle: {
                  color: '#fff'
              } */
          },
          {
            id: 'statistic',
            text: `${this.year[n]}年数据统计情况`,
            left: '75%',
            top: '8%',
            textStyle: {
              color: '#fff',
              fontSize: 30,
            },
          },
          ],
          xAxis: {
            type: 'value',
            scale: true,
            position: 'top',
            min: 0,
            boundaryGap: false,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              margin: 2,
              fontSize: 26,
              textStyle: {
                color: '#aaa',
              },
            },
          },
          yAxis: {
            type: 'category',
            //  name: 'TOP 20',
            nameGap: 16,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#ddd',
              },
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#ddd',
              },
            },
            axisLabel: {
              interval: 0,
              fontSize: 26,
              textStyle: {
                color: '#ddd',
              },
            },
            data: this.categoryData,
          },
          series: [
            // 未知作用
            {
              // 文字和标志
              name: 'light',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: this.convertData(this.mapData[n]),
              symbolSize(val) {
                return val[2] / 10;
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              itemStyle: {
                normal: {
                  color: this.colors[this.colorIndex][n],
                },
              },
            },
            // 地图？
            {
              type: 'map',
              map: 'china',
              geoIndex: 0,
              aspectScale: 0.75, // 长宽比
              showLegendSymbol: false, // 存在legend时显示
              label: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                  textStyle: {
                    color: '#fff',
                  },
                },
              },
              roam: true,
              itemStyle: {
                normal: {
                  areaColor: '#031525',
                  borderColor: '#FFFFFF',
                },
                emphasis: {
                  areaColor: '#2B91B7',
                },
              },
              animation: false,
              data: this.mapData,
            },
            // 地图点的动画效果
            {
              //  name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: this.convertData(this.mapData[n].sort((a, b) => b.value - a.value).slice(0, 20)),
              symbolSize(val) {
                return val[2] / 10;
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke',
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true,
                },
              },
              itemStyle: {
                normal: {
                  color: this.colors[this.colorIndex][n],
                  shadowBlur: 10,
                  shadowColor: this.colors[this.colorIndex][n],
                },
              },
              zlevel: 1,
            },
            // 柱状图
            {
              zlevel: 1.5,
              type: 'bar',
              symbol: 'none',
              itemStyle: {
                normal: {
                  color: this.colors[this.colorIndex][n],
                },
              },
              data: this.barData[n],
            },
          ],
        });
      }
      this.myChart.setOption(optionXyMap01);
    },
  },
  created() {
    // this.initMapData(4);
  },
  mounted() {
    this.$nextTick(() => {
      console.log('china!');
      this.myChart = echarts.init(this.$refs.china);
      this.initMapData(this.mapDataLength);
      this.drawMap();
      on(window, 'resize', this.resize);
    });
  },
  beforeDestroy() {
    off(window, 'resize', this.resize);
  },
};
