<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Vuex, trabalhando na versão 1.0.1</h3>
    <p>
      Toda documentação usada aqui estará disponível em breve
      <a href="https://github.com.danilloubr" target="_blank" rel="noopener">
        neste link </a
      >.
    </p>
    <form @submit.prevent="addTodo">
      <div class="container">
        <div class="input-base">
          <h4>Adicione sua tarefa:</h4>
          <input type="text" v-model="tarefa" />
        </div>
        <button type="submit">Adicionar</button>
      </div>
    </form>
    <section>
      <div v-for="(item, key) in showList()" :key="key" class="list-tarefas">
        <p>{{ item }}</p>
        <button class="remove-tarefa" @click="removeTodo(item)">X</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
// import TodoInput from "../atoms/TodoInput.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
// import { TodoList as Todo } from "../../interfaces/User.dto";
import { storeGetModule } from "../../store/modules/userStore";

@Component({
  components: {},
})
export default class TodoList extends Vue {
  @Prop() private msg!: string;

  private tarefa = [];

  showList() {
    return storeGetModule.lista;
  }

  addTodo() {
    this.tarefa.length == 0
      ? alert("Adicione alguma tarefa!")
      : storeGetModule.addTodo(this.tarefa);

    this.tarefa = [];
    console.log("THIS TAREFA NA TODOLIST", this.tarefa);
  }

  removeTodo(item: any) {
    storeGetModule.removeTodo(item);
    console.log("ITEM REMOVE ", item);
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

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-base {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  width: 100%;
  padding: 10px 100px;
  border-radius: 10px;
  border-color: aquamarine;
  margin: 10px 0px;
  font-size: 20px;
}

input:focus {
  border-bottom: 1px solid #00d583;
  box-shadow: 0 1px 0 0 #00ff88bd;
}
.container button {
  margin: 10px 0px;
  padding: 10px 50px;
  border: none;
  border-radius: 10px;
  color: whitesmoke;
  cursor: pointer;
  background-color: #42b983;
  transition: all 0.3s ease;
}

button:hover {
  opacity: 0.7;
}

.remove-tarefa {
  background-color: red;
  color: antiquewhite;
  border: none;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
}

h4 {
  font-size: 15px;
  margin: 0;
  padding: 0;
}

section {
  display: flex;
  justify-content: center;
  margin-top: 20px;

  flex-direction: column;
  align-items: center;
}

.list-tarefas {
  background-color: #35495e;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  width: 600px;
  height: 50px;
  padding: 0px 30px;
  margin-bottom: 10px;
}

.list-tarefas p {
  font-size: 25px;
  color: white;
}
</style>
