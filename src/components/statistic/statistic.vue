<template>
    <div id="statistic">
        <div class="top">
            <div class="top_group" v-for="(item,index) in groupList" :key="index">
                <div class="head">{{item.name}}</div>
                <div class="content" v-for="(arr,i) in item.data" :key="i">
                  <p class="c_num">{{arr.num}}</p>
                  <p class="c_label">{{arr.label}}</p>
                </div>
            </div>
        </div>
        <div class="bottom">
          <div class="btn_group" v-for="item in btnList" :key="item.index" @click="statistic_btn(item.index)">
            <span :class="selectBtnIndex === item.index ? 'light_btn': 'btn'">{{item.name}}</span>
          </div>
          <div class="sta_group">
            <div class="small_box">
              <div class="sta_title">
                <img class="sta_icon" src="../../assets/img/list_icon.png" alt="图标">
                <span class="sta_txt">机构患者人数统计</span>
              </div>
            </div>
            <div class="small_box">
              <div class="sta_title">
                <img class="sta_icon" src="../../assets/img/list_icon.png" alt="图标">
                <span class="sta_txt">患者转归人数统计</span>
              </div>
              <div class="s_chart_box" ref="s_chart1">
                <!-- <div ref="dom1" style="height: 100%;"></div> -->
              </div>
            </div>
            <div class="small_box">
              <div class="sta_title">
                <img class="sta_icon" src="../../assets/img/list_icon.png" alt="图标">
                <span class="sta_txt">患者血源性疾病统计</span>
              </div>
              <div class="s_chart_box" ref="s_chart2">
                <!-- <div ref="dom2" style="height: 100%;"></div> -->
              </div>
            </div>
            <div class="middle_box">
              <div class="sta_title">
                <img class="sta_icon" src="../../assets/img/list_icon.png" alt="图标">
                <span class="sta_txt">患者性别统计</span>
              </div>
              <div class="m_chart_box" ref="m_chart1">
                <!-- <div ref="m_dom1" style="height: 100%;"></div> -->
              </div>
            </div>
            <div class="big_box">
              <div class="sta_title">
                <img class="sta_icon" src="../../assets/img/list_icon.png" alt="图标">
                <span class="sta_txt">患者年龄统计</span>
              </div>
              <div class="l_chart_box" ref="l_chart1">
                <div ref="l_dom1" style="height: 100%;"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import chartSetting from './chartSetting.js';

export default {
  name: 'statistic',
  mixins: [chartSetting],
  data() {
    return {
      selectBtnIndex: 1,
      groupList: [
        { name: '接入机构', data: [{ label: '透析中心在线数量', num: 11 }, { label: '透析中心接入总数', num: 13 }] },
        { name: '收录病例', data: [{ label: '有效病案数', num: 3569 }, { label: '统计病案总数', num: 4119 }] },
        { name: '治疗模式', data: [{ label: '透析患者', num: 2963 }, { label: '其它治疗患者', num: 560 }] },
        { name: '收录患者', data: [{ label: '在线患者数量', num: 961 }, { label: '患者加入总数', num: 3119 }] },
      ],
      btnList: [
        { name: '人口学统计', index: 1 },
        { name: '临床指标', index: 2 },
        { name: '并发症', index: 3 },
      ],
    };
  },
  methods: {
    statistic_btn(index) {
      console.log(index);
      this.selectBtnIndex = index;
    },
  },
};
</script>
<style lang="less" scoped>
#statistic {
    width: 2300px;
    position: relative;
    top: -35px;
    color: #ffffff;
    .top {
        height: 490px;
        margin: 103px 0 0 63px;
        background: url('../../assets/img/A2.png') no-repeat left top;
        background-size: 2230px 510px;
        padding: 50px 0 0 88px;
        .top_group {
            width: 525px;
            text-align: center;
            display: inline-block; // 处理margin塌陷
            .head {
                width: 525px;
                height: 105px;
                line-height: 105px;
                // display: inline-block;
                background: url('../../assets/img/A_t_box.png') no-repeat left top;
                background-size: 513px 105px;
                font-size: 48px;
                letter-spacing: 6px;
                margin-left: 6px;
            }
            .content {
                height: 139px;
                padding: 5px 30px 0 0;
                background: url('../../assets/img/A_c_box.png') no-repeat left top;
                background-size: 484px 151px;
                .c_num {
                    color: #53d9ff;
                    font-size: 64px;
                    font-weight: bold;
                    font-stretch: normal;
                    letter-spacing: -3px;
                }
                .c_label {
                    font-size: 32px;
                }
            }
        }
    }
    .bottom {
        height: 1397px;
        background: url('../../assets/img/B.png') no-repeat left top;
        background-size: 2230px 1397px;
        margin: 29px 0 0 63px;
        .btn_group {
            height: 105px;
            display: inline-block;
            cursor: pointer;
            .btn {
                line-height: 105px;
                display: inline-block;
                width: 574px;
                height: 105px;
                text-align: center;
                background: url('../../assets/img/B_dark_btn1.png') no-repeat left top;
                font-size: 48px;
                letter-spacing: 6px;
            }
            .light_btn {
                line-height: 105px;
                display: inline-block;
                width: 574px;
                height: 105px;
                text-align: center;
                background: url('../../assets/img/B_light_btn1.png') no-repeat left top;
                background-size: 574px 105px;
                font-size: 54px;
                letter-spacing: 7px;
                margin-right: 30px;
            }
        }
        .btn_group:nth-child(1) {
            margin-left: 27px;
        }
        .btn_group:nth-child(n+2) {
            margin-left: -80px;
        }

        .sta_group {
          padding: 52px 0 0 37px;
          .sta_title {
            display: inline-block;
            margin: 25px 0 0 20px;
            .sta_icon {
              display: inline-block;
              width: 41px;
              height: 35px;
              position: relative;
              top: 5px;
            }
            .sta_txt {
              display: inline-block;
              font-size: 32px;
              padding-left: 5px;
            }
          }
          .box_style {
            display: inline-block;
            background-color: #1d2b72;
          }
          .small_box {
            .box_style;
            width: 695px;
            height: 489px;
            margin-right: 35px;
            .s_chart_box {
              width: 695px;
              height: 415px;
              position: relative;
            }
          }
          .middle_box {
            .box_style;
            width: 940px;
            height: 655px;
            margin-top: 35px;
            .m_chart_box {
              width: 940px;
              height: 587px;
              position: relative;
            }
          }
          .big_box {
            .box_style;
            width: 1215px;
            height: 655px;
            margin-top: 35px;
            .l_chart_box {
              width: 1215px;
              height: 587px;
              position: relative;
            }
          }
        }
    }

}
</style>
