<template>
  <div id="search-box">
      <div class="left" @select="select" >
        <div @click="clickSelect" style="display: inline-block">
          <div class="trangle" >{{categoryId}}</div>
            <div class="select">
              <ul>
                <li v-for="item in category" @click="select(item.id)" v-if="isShow" class="select-item">
                  <div >{{item.id}}</div>
                </li>
              </ul>
          </div>
        </div>
        <input type="text" v-model="searchKey">
      </div>
      <div class="right">
        <button>搜索</button>
          <router-link to="/hsearch">
           <span style="marginLeft:20px">高级搜索</span>
          </router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'SearchBox',
  components: {
  },
  data: function() {
    return {
      searchKey: '',
      categoryId: '全部',
      category: [
        {id:'全部', value:''},
        {id:'全文', value:''},
        {id:'提名', value:''},
        {id:'作者', value:''},
        {id:'出版社', value:''},
      ],
      isShow: false,
    }
  },
  watch: {
    searchKey: function() {
      
    }
  },
  methods: {
    select: function(value) {
      this.categoryId = value;
    },
    clickSelect: function() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
#search-box {
  position: relative;
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
  width: 350px;
  background-color:transparent;
  border-width: 0;
  outline: 0;
  margin-left: 35px;
}

.trangle {
  display: inline-block;
  margin: 10px 0px 10px 30px;
  padding-right: 40px;
  border-right: 2px solid #d1130a;
}
.select {
  position: absolute;
  top: -14px;
  left: 0;
}

.select-item {
  width: 112px;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #c60f08;
}

.select li:hover{
  color: #c60f08;
  background-color: #ffffff;
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

.fade-enter-active, .fade-leave-active {
  transition: 5s;
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
  outline: 0;
  border-width: 0;
  background-color: #c60f08;
}

.right span {
  color: black;
  font-size: 16px;
}
</style>
