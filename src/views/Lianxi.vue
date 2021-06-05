<template>
  <div class="lianxi">
      这是联系页面
      <div>{{$store.state.msg}}</div>
      <button @click="changeMsg">更改</button>
  </div>
</template>

<script>
export default {
    methods:{
        changeMsg(){
            console.log(this.$store);
            this.$store.commit('changeMsg','改变原有值')
        }
    }
}
</script>

<style scoped>
    .lianxi{
        color: tomato;
    }
</style>