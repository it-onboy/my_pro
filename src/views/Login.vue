<template>
  <div class="login">
      这是登录页！
      <button @click="goto">登录</button>
  </div>
</template>

<script>
export default {
    methods:{
        goto(){
            this.$router.push({
                path:'/main'
            })
        }
    }
}
</script>

<style scoped>
    .login{
        font-size: 40px;
        font-weight: bold;
    }
</style>