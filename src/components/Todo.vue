<template>
   <section class="todoapp">
      <header class="header">
         <button class="adding-todo" type="box" @click.prevent="AddTodo">Ajouter</button>
         <input type="text" class="new-todo" placeholder=" Ajouter un Todo" v-model="message" @keyup.enter="AddTodo">
      </header>
      <ul class="todo-list" id="list">
         <li class="todo" v-for="(list, index) in lists" v-if="list.text" :key="list.id" :class="{completed: list.done}">
            <div class="view">
               <input type="checkbox" v-model="list.done" class="toggle">
            <label><input type="text" v-model="list.text"></label>
               <button type="checkbox" class="destroy" @click.prevent="DeleteTodo(index)"></button>
            </div>
         </li>
      </ul>
      <footer class="footer" v-show="count">
         <div>
            <span class="todo-count"> <strong>{{ count }}</strong> : Nombre de Todo</span>
            <button class="clear-completed" type="box" @click.prevent="DeleteAllTodo">Tout Supprimer</button>
         </div>
      </footer>
   </section>
</template>

<script>
   export default {
      data () {
         return {
            lists: [{
               id : 0,
               text: '',
               done: false
            }],
            count : 0,
            message: ''
         }
      },
      methods: {
         AddTodo: function() {
            if (this.message == '' | this.message == ' ')
               return {}
            this.lists.push({
               id : this.count,
               text: this.message,
               done: false
            })
            this.count++
            this.message = ''
         },
         DeleteTodo: function(index) {
            this.lists.splice(index, 1)
            if (this.count > 0)
               this.count--
         },
         DeleteAllTodo: function() {
            this.lists.splice(this.lists)
            this.count = 0
         },
         EditTodo: function(list) {
            this.lists.text = list
         }
      }
   }
</script>