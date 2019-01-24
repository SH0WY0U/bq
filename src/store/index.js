import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from './homeStore'
import newsStore from './newsStore'
import messageStore from './messageStore'
import mineStore from './mineStore'
// import { TEST_URL } from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  // state: {
  //   user: {
  //     name: null,
  //     id: null,
  //     pic: null
  //   }
  // },
  // getters: {

  // },
  // mutations: {
  //   modifyUser(state, value) {
  //     state.user = {
  //       name: value.name,
  //       id: value.id,
  //       pic: value.pic
  //     }
  //   }
  // },
  // actions: {
  //   async getUser(context, num) {
  //     console.log(num)
  //     let data = await Vue.prototype.FetchGet(TEST_URL)
  //     context.commit('modifyUser', data)
  //     console.log(context.state.user)
  //   }
  // },
  // getters: {
  //   flag(state, getters, rootState, rootGetters) {
  //     return state.userName
  //   }
  // },
  // mutations: {
  //   modify(state, value) {
  //     console.log('user 的 modify 触发了');
  //     state.str = value;
  //   }
  // },
  // actions: {
  //   login(context, value) {
  //     console.log('user 的 login 触发了');
  //   }
  // }
  modules: {
    home: homeStore,
    news: newsStore,
    message: messageStore,
    mine: mineStore
  }

})
