import Vue from 'vue'
import Vuex from 'vuex'
import {
  random
} from 'node-forge';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  actions: {
    increment({
      commit
    }) {
      commit('increment')
    },
    decrement({
      commit
    }) {
      commit('decrement')
    },
    incrementIfOdd({
      commit,
      state
    }) {
      if (state.count % 2 === 1 || state.count % 2 === -1)
        commit('increment')
    },
    incrementAsync({
      commit
    }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 2000);
      })
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  getters: {
    eventOrOdd(state) {
      return state.count % 2 === 0 ? 'even' : 'odd'
    }
  }
})
