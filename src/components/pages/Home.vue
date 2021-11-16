<template>
  <div class="home">
    <div class="top">
        <router-link to="/login" style="color: black">登录</router-link>
    </div>
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
          <Table> </Table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '../SearchBox';
import TableBar from '../TableBar';
import Table from '../Table';

export default {
  name: 'Home',
  components: {
    SearchBox,
    TableBar,
    Table
  }
}
</script>

<style>
  .home{
    min-width: 1200px;
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url('../../assets/pic-bj.jpg');
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
  }

  .content {
    margin-left: 15px;
  }

  .nav {
      height: 30px;
  }

  .top {
    float: right;
    margin-right: 100px;
    margin-top: 20px;
    font-size: 20px;
    padding: 10px 30px;
  }
</style>
