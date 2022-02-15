<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList msg="Bem Vindo a aula de Vuex com @decorators ;)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "../components/moleculas/TodoList.vue"; // @ is an alias to /src

@Component({
  components: {
    TodoList,
  },
})
export default class Home extends Vue {}
</script>
