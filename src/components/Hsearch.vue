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
    </div>
  </div>
</template>

<script>
export default {
  name: "Hsearch",
  data() {
    return {
      name: "题名",
      author: "作者",
      pub: "出版社",
    };
  },
};
</script>

<style>
#app {
  min-width: 1200px;
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url("./assets/pic-bj.jpg");
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
</style>
