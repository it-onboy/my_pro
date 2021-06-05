import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg:'集中式状态管理'
  },
  getters:{
    upMsg(state){
      return state.msg + '这是一个计算属性'
    }
  },
  mutations: {
    changeMsg(state,params){//用于更改state的函数，参数1为state对象，参数2为外界传递的参数
      state.msg = params
    }
  },
  actions: {//actions中定义的函数用于操作mutations
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
