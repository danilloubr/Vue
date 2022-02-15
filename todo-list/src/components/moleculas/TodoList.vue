<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Vuex, trabalhando na versão 1.0.1</h3>
    <p>
      Toda documentação usada aqui estará disponível em breve
      <a href="https://github.com.danilloubr" target="_blank" rel="noopener"
        >neste link</a
      >.
    </p>
    <form @submit.prevent="addTodo">
      <TodoInput v-model="tarefa" />
      <button type="submit">Adicionar</button>
      <div v-for="(item, key) in lista" :key="key">
        <p>{{ item }}</p>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import TodoInput from "../atoms/TodoInput.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
// import { TodoList as Todo } from "../../interfaces/User.dto";
import { storeGetModule } from "../../store/modules/userStore";

@Component({
  components: { TodoInput },
})
export default class TodoList extends Vue {
  @Prop() private msg!: string;

  private tarefa: string[] = [];

  private lista: string[] = storeGetModule.lista;

  async addTodo() {
    storeGetModule.addTodo(this.tarefa);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
