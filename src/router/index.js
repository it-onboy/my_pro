import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: to => {
      // let login = true
      // if(login){
      //   return '/main'
      // }
      return '/login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/main',
    name:'main',
    component: () => import('@/views/Main.vue'),
    redirect:'/main/home',
    // 二级子路由
    children:[
      {
        path: '/main/home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/main/about',
        name: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: '/main/news/:type',
        name: 'news',
        component: () => import('../views/News')
      },
      {
        path: '/main/lianxi',
        name: 'lianxi',
        component: () => import('../views/Lianxi.vue')
      },
      {
        path: '/main/news/xiangqing/:id.html',
        name: 'xiangqing',
        component: () => import('@/views/News/Xiangqing.vue')
      }
    ]
  },
  
]


const router = new VueRouter({
  routes
})
// 路由守卫
// router.beforeEach((to,from,next)=>{
//   console.log(to);
//   console.log(from);
//   next()
// })
 
export default router
