<template>
  <section>
    <section class="todoapp">
      <header>
        <h1>Todo</h1>
      </header>
    </section>
    <div>
      <todo></todo>
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
      NumberList: 1
    }
  }
}
</script>

<style src="./components/todo.css"></style>