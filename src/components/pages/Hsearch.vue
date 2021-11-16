<template>
  <div id="app">
    <div id="Hsearch">
      <div class="select">
        <select name="search" class="selectMain">
          <option value="题名">{{ name }}</option>
          <option value="作者">{{ author }}</option>
          <option value="出版社">{{ pub }}</option>
        </select>
        <input type="text" name="" id="" />
      </div>
      <!-- 逻辑 -->
      <div class="judge">
        <select name="judge" class="and">
          <option value="AND">AND</option>
          <option value="OR" selected>OR</option>
          <option value="NOT">NOT</option>
        </select>
        <div class="select">
          <select name="search" class="selectMain">
            <option value="题名">{{ name }}</option>
            <option value="作者" selected>{{ author }}</option>
            <option value="出版社">{{ pub }}</option>
          </select>
          <input type="text" name="" id="" />
        </div>
      </div>
      <!-- 逻辑 -->
      <div class="judge">
        <select name="judge" class="and">
          <option value="AND">AND</option>
          <option value="OR" selected>OR</option>
          <option value="NOT">NOT</option>
        </select>
        <div class="select">
          <select name="search" class="selectMain">
            <option value="题名">{{ name }}</option>
            <option value="作者" selected>{{ author }}</option>
            <option value="出版社">{{ pub }}</option>
          </select>
          <input type="text" name="" id="" />
        </div>
      </div>
      <div class="time">
        <h3>时间范围</h3>
        <div class="timgSelect">
        <input type="text" id="time" width="50%" placeholder="请输入时间，例如：2000-01" />
        <span>至</span>
        <input type="text" id="time" width="50%"/></div>
      </div>
    </div>
    <!-- 时间选择器 -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "题名",
      author: "作者",
      pub: "出版社",
    };
  },
};
</script>

<style scoped>
#app {
  min-width: 1200px;
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url("../../assets/pic-bj.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
#Hsearch {
  width: 500px;
  height: 500px;
  margin: 200px auto;
}
.judge {
  width: 100%;
  display: flex;
  margin-top: 10px;
}
.and {
  flex: 1;
}
.select {
  width: 89%;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  border: 1px solid gray;
  flex: 9;
}
.selectMain {
  border: none;
  border-right: 2px solid black;
}
input {
  border: none;
  width: 80%;
}
/* 时间 */
.time {
  width: 500px;
  height:100px;
  /* border: 1px solid black; */
  margin-top: 20px;
}
.timgSelect{
  display: flex;

}
h3{
  text-align: center;
}
#time{
  border: 1px solid gray;
}
</style>
