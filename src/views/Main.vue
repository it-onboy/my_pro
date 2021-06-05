<template>
  <div>
    <router-link to="/main/home">首页</router-link>
    <router-link to="/main/news/guonei">新闻</router-link>
    <router-link to="/main/about">关于</router-link>
    <router-link to="/main/lianxi">联系</router-link>
    <router-link to="/login">退出</router-link>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  a{
    margin: 0 110px;
    display: inline-block;
    padding: 20px 25px;
    background-color: #ccc;
    border: 1px solid green;
    border-radius: 10px;
  }
  .content{
    width: 800px;
    height: 1000px;
    margin: 20px 100px;
    background-color: #ddd;
  }
</style>