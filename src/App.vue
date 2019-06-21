<template>
  <v-app style="background: #f5f5f5">
    <section>
      <section class="todoapp">
        <header>
          <h1>Todo</h1>
        </header>
      </section>
      <div>
        <label>
          <v-btn fab small class="mangamenaddlist" type="checkbox" @click.prevent="AddList">
            +
          </v-btn>
          <v-btn fab small class="mangamenaddlist" type="checkbox" @click.prevent="DeleteList">
            -
          </v-btn>
        </label>
        <div v-for="NumberList in NumberLists" :key="NumberList">
          <todo></todo>
        </div>
      </div>
    </section>
  </v-app>
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