import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
  state: {
    inputValue: ''

  },
  mutations: {
    changeInputValue (state, playload) {
      state.inputValue = playload
    }
  }
})
