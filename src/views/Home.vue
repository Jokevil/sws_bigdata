<template>
  <div ref="homeRef" id="home">
    <div class="top_content">
      <div class="left_btn_box">
        <span :class="selectBtnIndex === item.index ? 'active_btn' : 'normal_btn'" v-for="item in btnList" :key="item.index" @click="selectBtn(item.index)"><p>{{item.name}}</p></span>
      </div>
      <span class="b_title">智慧血透大数据平台</span>
      <span class="rigth_time_box">
        <span class="date">
          <p class="d_week">星期五</p>
          <p class="d_date">2019年05月24日</p>
        </span>
        <span class="time">
          <span class="t_box">1</span>
          <span class="t_box">1</span>
          <span class="colon">:</span>
          <span class="t_box">1</span>
          <span class="t_box">1</span>
          <span class="colon">:</span>
          <span class="t_box">1</span>
          <span class="t_box">1</span>
        </span>
      </span>
    </div>
    <div class="body_content">
      <Statistic/>
      <DataCenter/>
      <LiveData/>
    </div>
    <!-- <div class="mapLight"></div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Statistic from '@/components/statistic/statistic.vue';
import DataCenter from '@/components/dataCenter/center.vue';
import LiveData from '@/components/liveData/liveData.vue';

const w = window.screen.width;
const h = window.screen.height;
const ww = w / 1920;
const hh = h / 1080;
export default {
  name: 'home',
  components: {
    Statistic,
    DataCenter,
    LiveData,
  },
  data() {
    return {
      selectBtnIndex: 1,
      btnList: [
        { name: '医疗大数据', index: 1 },
        { name: '运维大数据', index: 2 },
      ],
    };
  },
  mounted() {
    this.$refs.homeRef.style.transform = `scale(${ww},${hh})`;
  },
  methods: {
    selectBtn(index) {
      console.log(index);
      this.selectBtnIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
@import './home.less';
.body_content {
  display: flex;
}
</style>
