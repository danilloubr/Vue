<template>
  <footer>
    <a
      class="social-link"
      :href="item.link"
      v-for="(item, index) in socialLinks"
      :key="index"
    >
      <img :src="item.icon" :alt="item.label" />
    </a>
  </footer>
</template>

<script>
import api from "../services/api.js";

export default {
  name: "Footer",
  data() {
    return {
      socialLinks: [],
    };
  },
  async mounted() {
    const resp = await api.get("/social-links.json");
    const { data } = resp;
    this.socialLinks = data;
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 60px;
  background-color: var(--color-background-nav);
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-link {
  border: 2px solid var(--color-text-light);
  border-radius: 50%;
  padding: 5px;
  margin: 0px 10px;
}

.social-link img {
  width: 20px;
}
</style>
