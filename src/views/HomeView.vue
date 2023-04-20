<template>
  <main class="container">
    <ImageSlider />
    <ViewersSection />
    <p v-if="isLoading">Loading...</p>
    <template v-else>
      <MoviesSection
        title="Recommended for You"
        :movies="movieStore.movie.recommended"
      />
      <MoviesSection
        title="New to Disney+"
        :movies="movieStore.movie.newDisney"
      />
      <MoviesSection title="Originals" :movies="movieStore.movie.originals" />
      <MoviesSection title="Trending" :movies="movieStore.movie.trending" />
    </template>
  </main>
</template>

<script>
import ImageSlider from '../components/ImageSlider.vue';
import ViewersSection from '../components/ViewersSection.vue';
import { fetchMovies } from '../utils/firebase.utils';
import { useMovieStore } from '../stores/movie';
import MoviesSection from '../components/MoviesSection.vue';
import { mapStores } from 'pinia';

export default {
  name: 'HomeView',
  components: {
    ImageSlider,
    ViewersSection,
    MoviesSection,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapStores(useMovieStore),
  },
  async created() {
    const movies = await fetchMovies();
    this.isLoading = false;
    this.movieStore.setMovies(movies);
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
