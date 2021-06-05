<template>
  <div class="news">
      <div>{{$store.getters.upMsg}}</div>
      <div class="classify">
          <span v-for="(item,index) in classify" 
                :key="index" 
                @mouseenter="gotolist(item,index)"
                :class="{bgc:currentIndex == index}">{{item.name}}</span>
      </div>
      <ul>
          <li v-for="(item,index) in list" :key="index" @click="goto(item.uniquekey)">{{item.title}}
              <span>{{item.author_name}}</span>
          </li>
      </ul>
  </div>
</template>

<script>

export default {
    data(){
        return {
            key:'8tk528',
            list:[],
            currentIndex: 0,
            bgc: 'bgc',
            type: 'guonei',
            classify:[
                {
                    id:'guonei',
                    name:'国内'
                },
                {
                    id:'guoji',
                    name:'国际'
                },
                {
                    id:'junshi',
                    name:'军事'
                },
                {
                    id:'keji',
                    name:'科技'
                },
                {
                    id:'tiyu',
                    name:'体育'
                },
                {
                    id:'yule',
                    name:'娱乐'
                },
                {
                    id:'caijing',
                    name:'财经'
                },
                {
                    id:'shishang',
                    name:'时尚'
                },
                {
                    id:'youxi',
                    name:'游戏'
                },
                {
                    id:'qiche',
                    name:'汽车'
                },
                {
                    id:'jiankang',
                    name:'健康'
                }
            ]
        }
    },
    created(){
        console.log(this.$store);
        this.getNews()
    },
    // beforeRouteEnter(to,from,next){
    //     // console.log(from,to);
    //     console.log(111111111);//执行进入当前页面前的一些操作
    //     next()//可传参执行页面跳转
    // },
    beforeRouteUpdate(to,from,next){
        // console.log(from,to,next);
        this.type = to.params.type
        this.getNews()
        // this.type
        console.log(to,222222222222222);
        next()//例新闻分类的动态路由切换时可执行的一些操作
    },
    // beforeRouteLeave(to,from,next){
    //     // console.log(from,to,next);
    //     console.log(3333333333333);//执行离开当前页面时的一些操作
    //     next()
    // },
    methods:{
        gotolist(item,index){
            
            // this.type = item.id
            // console.log(this.type);
            this.currentIndex = index
            // this.getNews()
            this.$router.push({
                path:`/main/news/${item.id}`
            })
        },
        getNews(){
            this.axios.get('http://api.web1024.cn/news/list',{
            params:{
                key: this.key,
                pagesize: 10,
                type : this.type
            }
        }).then((res)=>{
            // console.log(res.data.result.data);
            this.list = res.data.result.data
        })
        },
        goto(item){
            // 动态路由传参
            this.$router.push({
                path:`/main/news/xiangqing/${item}.html`
            })
            // this.$router.push({
            //     path: '/main/news/xiangqing',
            //     query:{
            //         id:item.id
            //     }
            // })

            // this.$router.push({
            //     name:'xiangqing',
            //     params:{
            //         id:item.id
            //     }
            // })
            
            
        }
    },
    
}
</script>

<style scoped>
    .news{
        color: green;
    }
    li{
        display: flex;
        cursor: pointer;
        margin: 10px;
        justify-content: space-between;
    }
    li:hover{
        background-color: gray;
    }
    span{
        margin: 0 50px;
    }
    .bgc{
        background-color: aqua;
    }
</style>