<template>
  <div id="table">
<table border="0" cellspacing="0">
  <tr style="background: #c60f08;color: #ffffff;">
    <th>题名</th>
    <th>责任者</th>
    <th>日期</th>
    <th>在线阅读</th>
  </tr>
  <tr v-for="item in tabs">
    <td>{{item.name}}</td>
    <td>{{item.age}}</td>
    <td>{{item.age}}</td>
    <td>{{item.age}}</td>
  </tr>
  <pagination style="height:100px;width:100px" v-model = "page" :srecords = " 500 " @ paginate = "myCallback">ss</pagination>
</table>

 </div>
</template>

<script>
import Vuetable from 'vuetable-2'
import Pagination from 'vue-pagination-2';
export default {
  name: 'Table',
  components: {
    Vuetable,
    Pagination,
  },
  data: function () {
    return {
      tabs: ['','','','','','','','','','',]
      }
  }
}
</script>

<style>
#table{

}
table {
  width: 800px;
}
table {
  background: #ffffff;
}
table tr:nth-child(odd) {

  background: #ebeef3;
}
table tr th{
  height: 40px;
}
tr td{
  height: 30px;
}
</style>
