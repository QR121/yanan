<template>
<div>
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
    </table>
 </div>
 <Pagination class="pagination" :upName="上一页" :downName="下一页" :pageCount ="100" :currentPage ="1" :pageSize="10" />
</div>

</template>

<script>
import Vuetable from 'vuetable-2'
import Pagination from 'el-pagination/Pagination'
export default {
  name: 'Table',
  components: {
    Vuetable,
    Pagination
  },
  data: function () {
    return {
      tabs: ['','','','','','','','','','',],
      }
  }
}
</script>

<style>

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
.pagination {
  margin-left: 60px;
}

.pagination button {
  padding: 7px;
  color: #ffffff;
  background: #d1130a;
  border-width: 0;
}

.pagination ul {
  margin-top: 20px;
}

.pagination li{
  color: #ffffff;
  background: #d1130a;
}

</style>
