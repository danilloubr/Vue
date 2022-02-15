<template>
  <div class="container">
    <div class="input-base">
      <h3>Adicione sua tarefa:</h3>
      <input type="text" :value="value" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TodoInput extends Vue {
  @Prop({ default: "teste" }) value?: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-base {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
input {
  padding: 10px 60px;
  border-radius: 10px;
  border-color: aquamarine;
  margin: 0px;
}

h3 {
  font-size: 15px;
  margin: 0;
  padding: 0;
}
</style>
