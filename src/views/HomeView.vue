<template>
  <main class="container">
    <ImageSlider />
    <ViewersSection />
    <MoviesSection title="Recommended for You" :movies="recommended" />
    <MoviesSection title="New to Disney+" :movies="newDisney" />
    <MoviesSection title="Originals" :movies="originals" />
    <MoviesSection title="Trending" :movies="trending" />
  </main>
</template>

<script>
import ImageSlider from '../components/ImageSlider.vue';
import ViewersSection from '../components/ViewersSection.vue';
import { fetchMovies } from '../utils/firebase.utils';
import { useMovieStore } from '../stores/movie';
import MoviesSection from '../components/MoviesSection.vue';

export default {
  name: 'HomeView',
  components: {
    ImageSlider,
    ViewersSection,
    MoviesSection,
  },
  computed: {
    recommended() {
      return this.store.movie.recommended;
    },
    newDisney() {
      return this.store.movie.newDisney;
    },
    originals() {
      return this.store.movie.originals;
    },
    trending() {
      return this.store.movie.trending;
    },
  },
  data() {
    return {
      store: useMovieStore(),
    };
  },
  async created() {
    const movies = await fetchMovies();

    this.store.setMovies(movies);
    console.log(movies);
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('@/assets/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
}
</style>
