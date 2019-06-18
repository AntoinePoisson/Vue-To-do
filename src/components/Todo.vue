<template>
   <section class="todoapp">
      <header class="header">
         <button class="adding-todo" type="box" @click.prevent="$store.commit('AddTodo')">Ajouter</button>
         <input type="text" class="new-todo" placeholder=" Ajouter un Todo" v-model="$store.state.message" @keyup.enter="$store.commit('AddTodo')">
      </header>
      <ul class="todo-list" id="list">
         <li class="todo" v-for="(list, index) in $store.state.lists" v-if="list.text" :key="list.id" :class="{completed: list.done}">
            <div class="view">
               <input type="checkbox" v-model="list.done" class="toggle">
            <label><input type="text" v-model="list.text"></label>
               <button type="checkbox" class="destroy" @click.prevent="$store.commit('DeleteTodo', index)"></button>
            </div>
         </li>
      </ul>
      <footer class="footer" v-show="$store.state.count">
         <div>
            <span class="todo-count"> <strong>{{ $store.state.count }}</strong> : Nombre de Todo</span>
            <button class="clear-completed" type="box" @click.prevent="$store.commit('DeleteAllTodo')">Tout Supprimer</button>
         </div>
      </footer>
   </section>
</template>

<script>
   import store from '../store/index.js'

   export default {
      store: store,
   }
</script>