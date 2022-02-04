<template>
  <main>
    <section class="container">
      <h1>Sobre</h1>
      <div class="about" v-html="sobre.about"></div>
    </section>
  </main>
</template>

<script>
import api from "../services/api.js";

export default {
  name: "Sobre",
  data() {
    return {
      sobre: "",
    };
  },
  async mounted() {
    const resp = await api.get("/about.json");
    const { data } = resp;
    console.log("DATA AQUI", data);
    this.sobre = data;
  },
};
</script>

<style scoped>
main {
  align-items: center;
}

@media (min-width: 700px) {
}
</style>
