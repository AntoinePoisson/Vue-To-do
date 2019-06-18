import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    lists: [{
      id: 0,
      text: '',
      done: false
    }],
    count: 0,
    message: '',
  },
  mutations: {
    AddTodo (state) {
      if (state.message == '' | state.message == ' ')
        return {}
      state.lists.push({
        id: state.count,
        text: state.message,
        done : false
      })
      state.count++
      state.message = ''
    },
    DeleteTodo (state, index) {
      state.lists.splice(index, 1)
      if (state.count > 0)
          state.count--
    },
    DeleteAllTodo (state) {
      state.lists.splice(state.lists)
      state.count = 0
    }
  }
})