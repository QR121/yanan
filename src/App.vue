<template>
  <div id="app"> 
    <!-- <router-link to="/home">Go to Foo</router-link>
    <router-link to="/login">Go to Bar</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
