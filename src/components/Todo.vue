<template>
   <section class="todoapp">
      <header class="header">
         <h1>Todo</h1>
         <button type="box" @click="AddTodo">Ajouter</button>
         <input type="text" class="new-todo" placeholder=" Ajouter une tache" v-model="message">
         <button type="box" @click="DeleteAllTodo">Tout Supprimer</button>
      </header>
      <ul class="todolist" id="list">
         <li class="todo" v-for="(list, index) in lists" v-if="list != ''" :key="list.id">
            <div>
               <button type="box" @click="FinishTodo">Fini </button>
               {{ list }}
               <button type="box" @click="DeleteTodo(index)">Delete</button>
            </div>
         </li>
      </ul>
      <br>
      <p>{{ count }} : Nombre de Todo</p>
   </section>
</template>

<script>
   export default {
      data () {
         return {
            lists: [],
            count : '0',
            message: ''
         }
      },
      methods: {
         AddTodo: function() {
            if (this.message == '' | this.message == ' ')
               return {}
            this.lists.push(this.message)
            this.message = ''
            this.count++
         },
         DeleteTodo: function(number) {
            console.log(number)
            this.lists.splice(this.lists, number + 1)
            if (this.count > 0)
            this.count--
         },
         DeleteAllTodo: function() {
            this.lists.splice(this.lists)
            this.count = 0
         },
         FinishTodo: function() {
            this.lists.push(this.message)
            this.count = 0
         },
         EditTodo: function() {
            this.lists.push(this.message)
            this.count = 0
         }
      }
   }
</script>

<style src="./todo.css"></style>