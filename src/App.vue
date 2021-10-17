<template>
  <div id="app">
    <div class="body">
      <div class="left">
        <TableBar></TableBar>
      </div>
      <div class="right content">
        <div>
          <SearchBox></SearchBox>
        </div>
        <div class="nav"></div>
        <div>
          <Table></Table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox';
import TableBar from './components/TableBar';
import Table from './components/Table.vue';

export default {
  name: 'App',
  components: {
    SearchBox,
    TableBar,
    Table
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  #app {
    min-width: 1200px;
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url('./assets/pic-bj.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  
  .body {
    display: flex;
    width: 1120px;
    height: 580px;
    margin: 200px auto 0;
  }

  .body .left {
    width: 200px;
  }

  .body>.right {
    margin-left: 40px;
    width: 810px;
    /* border: 2px solid #d1130a; */
  }

  .content {
    margin-left: 15px;
  }

  .nav {
      height: 30px;
  }
</style>
