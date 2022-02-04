<template>
  <main>
    <section class="container">
      <h1>Vídeos</h1>

      <section class="videos">
        <div class="video" v-for="(item, index) in videos" :key="index">
          <a href="item.link" target="_blank">
            <img :src="item.thumb" alt="item.title" />
            <div class="video-title">{{ item.title }}</div>
          </a>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import api from "../services/api.js";

export default {
  name: "Vídeos",
  data() {
    return {
      videos: [],
    };
  },
  async mounted() {
    const resp = await api.get("/videos.json");
    const { data } = resp;
    console.log("DATA AQUI", data);
    this.videos = data;
  },
};
</script>

<style scoped>
main {
  align-items: center;
}
.videos {
  display: flex;

  flex-direction: column;
  align-items: center;
}

.video {
  width: 80%;
  margin-bottom: 30px;
}

.video img {
  width: 100%;
}

.video a {
  color: var(--color-text-dark);
  font-weight: 600;
  text-align: center;
}

@media (min-width: 700px) {
  .videos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .video {
    margin-right: 30px;
    width: 350px;
  }
}
</style>
