<template>
  <div id="liveData">
      <div class="l_title">今日实时监控数据</div>
      <div class="top_content">
          <div :class="`item_box bg_color${index+1}`" v-for="(item,index) in itemData" :key="index">
              <div class="item_num">{{item.num}}</div>
              <div class="item_txt">{{item.name}}</div>
          </div>
      </div>
      <div class="data_content">
        <ul class="ul-row ul-header">
            <li>时间</li>
            <li class="center">单位</li>
            <li class="name">姓名</li>
            <li class="zlms">治疗模式</li>
        </ul>
        <ul :class="`ul-row ${index!==0? `ul-bg${da.dataType}` : 'breathe-btn'}`" v-for="(da,index) in liveDataList" :key="da.id">
            <li>{{da.time}}</li>
            <li class="center">{{da.centerName}}</li>
            <li class="name">{{da.name}}</li>
            <li class="zlms">{{da.treatmentName}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable object-curly-newline */
export default {
  name: 'liveData',
  data() {
    return {
      itemData: [
        { name: '签到患者总数', num: 2151 },
        { name: '已治疗患者数', num: 1108 },
        { name: '在治疗患者数', num: 1003 },
      ],
      liveDataList: [
        { id: '1', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 1 },
        { id: '2', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 2 },
        { id: '3', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 3 },
        { id: '4', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 1 },
        { id: '5', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 2 },
        { id: '6', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 3 },
        { id: '7', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 1 },
        { id: '8', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 2 },
        { id: '9', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 3 },
        { id: '10', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 1 },
        { id: '11', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 3 },
        { id: '12', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 1 },
        { id: '13', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 2 },
        { id: '14', time: '09:08', name: '小小红', centerName: '重庆九龙坡中医院', treatmentName: '血液透析(HD)', dataType: 3 },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
#liveData {
    width: 1200px;
    height: 1927px;
    background: url('../../assets/img/E2.png') no-repeat left top;
    background-size: 1200px 1927px;
    margin: 110px 0 0 66px;
    .l_title {
        font-size: 54px;
        letter-spacing: 5px;
        line-height: 117px;
        padding-left: 50px;
    }
    .top_content {
        display: flex;
        padding: 50px 23px;
        justify-content: space-around;
        text-align: center;
        .bg_color1 {
            background-color: #cea136;
        }
        .bg_color2 {
            background-color: #1ca87c;
        }
        .bg_color3 {
            background-color: #4364ea;
        }
        .item_box {
            width: 347px;
            height: 251px;
            box-shadow: 0px 3px 7px 0px
                rgba(0, 7, 51, 0.75);
            border-radius: 20px;
            .item_num {
                font-size: 80px;
                font-weight: bold;
                letter-spacing: -4px;
                padding-top: 30px;
            }
            .item_txt {
                font-size: 38px;
            }
        }
    }
    .data_content {
        width: 1086px;
        height: 1300px;
        margin-left: 42px;
        ul.ul-header {
            background: #223c85;
            font-size: 44px;
            letter-spacing: 6px;
            line-height: 98px;
        }
        .breathe-btn {
            background: #6cc3fe;
            background-image:-webkit-gradient(linear,left top,left bottom,from(#6cc3fe),to(#21a1d0));
            -webkit-animation-timing-function:ease-in-out;
            -webkit-animation-name:breathe;
            -webkit-animation-duration:2700ms;
            -webkit-animation-iteration-count:infinite;
            -webkit-animation-direction:alternate;
        }
        @-webkit-keyframes breathe {
            0% {
                opacity:.8;
            }
            100% {
                opacity:1;
                // border:1px solid rgba(59,235,235,1);
                box-shadow:0 1px 30px rgba(59,255,255,1);
            }
        }
        .ul-row {
            width: 100%;
            margin: 10px auto;
            padding: 0 18px 0 12px;
            display: flex;
            justify-content: space-between;

            letter-spacing: 3px;
            border-radius: 10px;
            line-height: 81px;
            font-size: 38px;
            li {
                padding: 0 10px;
                width: 100px;
                text-align: center;
            }
            li.name {
                text-align: left;
                width: 165px;
            }
            li.zlms {
                text-align: left;
                width: 288px;
            }
            li.center {
                width: 400px;
            }
        }
        .ul-bg1 {
            background: #454E7D;
        }
        .ul-bg2 {
            background: #1d2b72;
        }
        .ul-bg3 {
            background: #223c85;
        }
    }
}
</style>
