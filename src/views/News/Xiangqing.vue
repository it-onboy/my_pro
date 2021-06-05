<template>
  <div >
      <!-- 这是新闻详情页！{{news}} -->
      <!-- <h3>{{news.detail.title}}</h3> -->
      <div v-html="news.content"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      key:'8tk528',
      news:''
    }
  },
  created(){
    // console.log(this);
    // this.axios.get('http://api.web1024.cn/news/content?key='+ this.key + '&uniquekey='+ this.$route.params.id).then(res => {
    //   console.log(res);
    // })
    // console.log(this.$route);
    this.axios.get('http://api.web1024.cn/news/content',{
      params:{
        key: this.key,
        uniquekey: this.$route.params.id
      }
    }).then(res =>{
      this.news = res.data.result
      // console.log(this.news);
    })
  }
}
</script>

<style>

</style>