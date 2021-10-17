<template>
  <div id="search-box">
      <div class="left">
        <div class="trangle">全文</div>
        <input type="">
      </div>
      <div class="right">
        <button>搜索</button>
        <span style="marginLeft:20px">高级搜索</span>
      </div>
  </div>
</template>

<script>

export default {
  name: 'SearchBox',
  components: {
  }
}
</script>

<style>
#search-box {
  display: flex;
  height: 42px;
  min-width: 660px;
  font-size: 20px;

}

#search-box .left {
  flex: 70%;
  color: #d1130a;
  border: 2px solid #d1130a;
}

.left input {
  width: 250px;
  background-color:transparent;
  border-width: 0;
  margin-left: 35px;
}

.trangle {
  display: inline-block;
  position: relative;
  margin: 10px 0px 10px 30px;
  padding-right: 40px;
  border-right: 2px solid #d1130a;
}

.trangle::after {
  content: "";
  display: inline-block;
  position: absolute;
  height: 12px;
  width: 12px;
  margin-left: 15px;
  border-width: 0 1px 1px 0;
  border-color: #d1130a;
  border-style: solid;
  transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
}


#search-box .right {
  flex: 30%;
}

#search-box  .right  button {
  width: 100px;
  height: 42px;
  color: #ffffff;
  font-size: 18px;
  padding: 8px 25px;
  margin-left: 20px;
  border-width: 0;
  background-color: #c60f08;
}

.right>span {
  color: black;
    font-size: 16px;
}
</style>
