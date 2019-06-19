import Vuex from 'vuex'

const state = {
    lists: [{
      id: 0,
      text: '',
      done: false
    }],
    count: 0,
    message: '',
}

const getters = {
  DoneTodo: (state => state.lists.filter(lists => !(lists.done)).length - 1)
}

const mutations = {
    AddTodo: (state) => {
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
    DeleteTodo: (state, index) => {
      state.lists.splice(index, 1)
      if (state.count > 0)
          state.count--
    },
    DeleteAllTodo: (state) => {
      state.lists.splice(state.lists)
      state.count = 0
    }
}

const actions = {
  AddTodo: (store) => {
    store.commit('AddTodo')
  },
  DeleteTodo: (store, index) => {
    store.commit('DeleteTodo', index)
  },
  DeleteAllTodo: (store) => {
    store.commit('DeleteAllTodo')
  },
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  //strict: true
})