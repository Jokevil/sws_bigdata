<template>
  <div id="dataCenter">
      <div class="centerBtnBox">
          <span v-for="item in btnList" @click="btnChange(item.index)"
            :key="item.index"
            :class="selectBtnIndex ===item.index?'c_light_box':'c_box'">{{item.name}}</span>
      </div>
      <div class="top_content">
          <div class="top_content_box">
              <template v-for="(item,index) in topContentData">
                <div class="t_item" :key="index">
                    <div class="t_txt">{{item.label}}</div>
                    <div class="t_num">{{item.num}}</div>
                </div>
                <div class="t_spliter" v-if="topContentData.length !== (index+1)"></div>
              </template>
          </div>
          <div class="content">
              <div class="map" ref="china"></div>
              <!-- <div class="mapLight"></div> -->
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mapSetting from './chartMapSetting';

export default {
  name: 'dataCenter',
  data() {
    return {
      selectBtnIndex: 1,
      btnList: [
        { name: '数据中心', index: 1 },
        { name: 'AI运维', index: 2 },
        { name: '调度中心', index: 3 },
      ],
      topContentData: [
        { label: '在网透析中心数量', num: '011' },
        { label: '在网设备数量', num: '1035' },
        { label: '在治疗设备数量', num: '978' },
        { label: '在透析患者数量', num: '889' },
      ],
    };
  },
  mixins: [mapSetting],
  methods: {
    btnChange(index) {
      this.selectBtnIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
#dataCenter {
    width: 2360px;
    height: 1875px;
    // position: relative;
    color: #ffffff;
    margin: 100px 0 0 55px;
    .centerBtnBox {
        width: 100%;
        // height: 90px;
        padding-left: 200px;
        .c_box {
            width: 598px;
            height: 102px;
            line-height: 85px;
            display: inline-block;
            vertical-align: top;
            text-align: center;
            font-size: 44px;
            font-weight: bold;
            letter-spacing: 6px;
            background: url('../../assets/img/C_dark_btn.png') no-repeat left top;
        }
        .c_light_box {
            width: 668px;
            height: 110px;
            line-height: 94px;
            display: inline-block;
            text-align: center;
            font-size: 54px;
            font-weight: bold;
            letter-spacing: 7px;
            background: url('../../assets/img/C_light_btn.png') no-repeat left top;
        }
        span {
            cursor: pointer;
        }
    }
    .centerBtnBox>span:nth-child(1) {
        margin-left: 0;
    }
    .centerBtnBox>span:nth-child(n+2) {
        margin-left: -48px;
    }
    .centerBtnBox>.c_light_box:nth-child(2n) {
        margin-left: -48px;
        margin-right: -10px;
    }
    .top_content {
        width: 100%;
        height: 353px;
        margin-top: 15px;
        background: url('../../assets/img/C2.png') no-repeat left top;
        text-align: center;
        .top_content_box{
            padding: 0 5%;
            width: 90%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .t_spliter {
            width: 1px;
            height: 136px;
            border: 1px dashed #53d9ff;
        }
        .t_item {
            width: 320px;
            .t_txt{
                font-size: 48px;
                letter-spacing: 6px;
            }
            .t_num {
                font-size: 88px;
                font-weight: bold;
                color: #53d9ff;
                padding-top: 15px;
            }
        }
    }
    .content{
        width: 2360px;
        height: 1400px;
        margin-top: 60px;
        padding: 60px 5px 30px;
        background: url('../../assets/img/D2.png') no-repeat left top;
        .map {
            width: 2345px;
            height: 1305px;
            position: relative;
        }
    }
}
</style>
