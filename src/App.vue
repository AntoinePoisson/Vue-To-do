<template>
  <section>
    <section class="todoapp">
      <header>
        <h1>Todo</h1>
      </header>
    </section>
    <div>
      <label>
        Other list :
        <button class="addlist" type="checkbox" @click.prevent="AddList">+</button>
        |
        <button class="deletelist" type="checkbox" @click.prevent="DeleteList">-</button>
      </label>
      <div v-for="NumberList in NumberLists" :key="NumberList">
        <todo></todo>
      </div>
    </div>
  </section>
</template>

<script>
import Todo from './components/Todo'

export default {
  name: 'App',
  components: {
    Todo
  },
  data () {
    return {
      NumberLists: 1
    }
  },
  methods: {
    AddList: function () {
      this.NumberLists++
    },
    DeleteList: function () {
      if (this.NumberLists > 1)
        this.NumberLists--
    }
  }
}
</script>

<style src="./components/todo.css"></style>