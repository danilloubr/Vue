<template>
  <main>
    <section class="container">
      <h1>Contatos</h1>
      <div class="contacts" v-for="(item, index) in contacts" :key="index">
        <h2>{{ item.title }}</h2>
        <a :href="item.link">{{ item.label }}</a>
      </div>
    </section>
  </main>
</template>

<script>
import api from "../services/api.js";

export default {
  name: "Contato",
  data() {
    return {
      contacts: [],
    };
  },
  async mounted() {
    const resp = await api.get("/contacts.json");
    const { data } = resp;
    console.log("DATA AQUI", data);
    this.contacts = data;
  },
};
</script>

<style scoped>
main {
  align-items: center;
}

.contacts {
  margin: 25px 0;
}

.contacts a {
  color: var(--color-text-dark);
}

@media (min-width: 700px) {
}
</style>
