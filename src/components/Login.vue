<template>
  <div id="app">
    <div class="login">
      <div class="title">
        <h3>用户登录</h3>
      </div>
      <div class="login_div">
        <div class="userName">
          <p class="id">用户名:</p>
          <input
            placeholder="请输入用户名"
            v-model="name"
            clearable
            class="input_style"
          />
          <!-- <span v-if="error.name" class="err-msg">{{ error.name }}</span> -->
        </div>
        <div class="password">
          <p class="pwd">密码:</p>
          <input
            placeholder="请输入密码"
            v-model="pwd"
            show-password
            class="input_style"
          />
          <!-- <span v-if="error.pwd" class="err-msg">{{ error.pwd }}</span> -->
        </div>
      </div>
      <div class="bottom">
        <div class="rember">
          <span>记住用户名</span>
          <span>忘记密码</span>
        </div>
        <div class="loginBtn" @click="main">
          <p class="login_style">登录</p>
          <!-- <button type="primary" class="login_style">登录</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      pwd: "",
      error: {
        name: "",
        pwd: "",
      },
    };
  },
  methods: {
    main() {},
  },
};
</script>

<style>
#app {
  min-width: 1200px;
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url("../assets/pic-bj.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.login {
  width: 770px;
  height: 500px;
  margin: 200px auto 0;
  border: 1px solid rgb(218, 214, 192);
  border-radius: 5px;
  background:rgba(255, 255, 255, 0.4);
}
.title {
  height: 55px;
  border: 1px solid rgb(218, 214, 192);
}
h3 {
  margin-left: 20px;
  padding-left: 20px;
  line-height: 55px;
  border-left: 10px solid red;
}

.bottom{
  height: 100px;
  width: 100%;
  margin-top: 100px;
}
.rember {
  width: 320px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
}
.login_div {
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.id{
  position: absolute;
  left: 150px;
  top: 30px;
}
.pwd{
  position: absolute;
  left: 150px;
  top: 110px;

}
.input_style {
  margin: 20px;
  width: 320px;
  height: 40px;
  border: 1px solid rgb(218, 214, 192);
  border-radius: 5px;
}
.loginBtn {
  width: 320px;
  height: 40px;
  background-color: rgb(195, 14, 5);
  margin: 0 auto;
  border-radius: 5px;
}
.login_style {
  text-align: center;
  line-height: 40px;
  color: white;
}
</style>

