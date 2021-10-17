<template>
  <div id="tab-bar">
    <div class="tab-bar">
      <div class="back">返&emsp;回</div>
      <ul>
        <li class="item">图&emsp;书</li>
        <li class="item">期&emsp;刊</li>
        <li class="item">报&emsp;纸</li>
        <li class="item">图&emsp;片</li>
        <li class="item">档&emsp;案</li>
        <li class="item">音视频</li>
        <li class="item">手&emsp;稿</li>
        <li class="item">日&emsp;记</li>
        <li class="item">书&emsp;信</li>
        <li class="item">登&emsp;录</li>
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
    }
  }
}

</script>

<style>

.tab-bar {
    /* position: relative;
    left: 200px;
    top: 150px; */
    height: 430px;
    width: 200px;
    /* border: 1px solid red; */
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
  /* border: 1px solid red; */
}

ul {
    margin-top: 56px;
}
.item {
  color: #b4180c;
  margin-top: 11.5px;
  margin-left: 90px;
  font-size: 18px;
}
</style>
