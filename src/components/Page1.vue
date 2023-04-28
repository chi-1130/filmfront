<!-- <script>
export default {
  name: "Page1",
  computed: {
    films() {
      return this.$store.state.filmsInfo?.data || [];
    }
  },
  created() {
    this.$store.dispatch("filmsGet");
  },
  mounted() {
    this.$forceUpdate();
  }
};
</script>

<template>
  <div>
    <h1>ここはページ1です</h1>
      <div class="films-container">
        <div v-for="film in films" :key="film.filmId" class="film">
          <img :src="film.poster" :alt="film.name">
          <h2>{{ film.name }}</h2>
          <p>{{ film.synopsis }}</p>
        </div>
      </div>
    </div>
    <router-link to="/page2">ページ2へ</router-link>
</template>


 -->

 <template>
  <div>
    <h1>ここはページ1です</h1>
    <h3>user:{{ $store.state.userId }}</h3>
    <router-link to="/page2">ページ2へ</router-link>
    <hr />
    <div class="container">
      <div class="row g-5">
        <div v-for="film in films" :key="film.Title" class="col-12 d-flex">
          <div class="card">
            <h3 class="text-center">{{ film.name }}</h3>
            <img :src="film.poster" alt="" class="" />
          </div>
          <!-- <div v-for="actor in film.actors.slice(0, 5)" :key="actor.name" class="actor mx-auto">
            <h6 class="text-center">{{ actor.name }}</h6>
            <h6 class="text-center">{{ actor.role }}</h6>
            <img :src="actor.avatarAddress" alt="" class="mx-1"/>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        films: {},
      };
    },
    async created() {
      await this.$store.dispatch("filmsGet");
      this.films = this.$store.state.filmsInfo;
    },
  };
</script>
<style scoped>
  .card img {
    width: 250px;
    height: 280px;
  }
  .actor img {
    width: 200px;
    height: 200px;
  }
</style>

