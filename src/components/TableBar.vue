<template>
  <div id="tab-bar">
    <div class="tab-bar">
      <div class="back">返&emsp;回</div>
      <ul>
        <li class="item"><div class="star">图&emsp;书({{value}})</div></li>
        <li class="item"><div class="star">期&emsp;刊({{value}})</div></li>
        <li class="item"><div class="star">报&emsp;纸({{value}})</div></li>
        <li class="item"><div class="star">图&emsp;片({{value}})</div></li>
        <li class="item"><div class="star">档&emsp;案({{value}})</div></li>
        <li class="item"><div class="star">音视频({{value}})</div></li>
        <li class="item"><div class="star">手&emsp;稿({{value}})</div></li>
        <li class="item"><div class="star">日&emsp;记({{value}})</div></li>
        <li class="item"><div class="star">书&emsp;信({{value}})</div></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
  components: {
  },
  data: function () {
    return {
      tabs: ['图书', '期刊', '报纸'],
      value: 0
    }
  }
}

</script>

<style>

.tab-bar {
    height: 430px;
    width: 200px;
    background-image: url('../assets/icon-bj.png');
    background-repeat: no-repeat;
    background-size: 705%;
    background-position: -295px -245px;
    overflow: hidden;
}

.back {
  float: left;
  color: #fdf12e;
  font-size: 22px;
  padding: 7px 35px;
  margin-left: 40px;
}

ul {
    margin-top: 56px;
}

.item {
  color: #b4180c;
  margin-top: 15px;
  margin-left: 55px;
  font-size: 18px;
}

.star  {
  padding-left:30px ;
  height: 20px;
  width: 130px;
  background-repeat: no-repeat;
  background-size: 1000%;
  background-position: -320px -393px;
  overflow: hidden;
  background-image: url(../assets/icon-star.png);
  /* border: 1px solid red; */
}
</style>
