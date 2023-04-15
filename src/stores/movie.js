import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    recommended: null,
    newDisney: null,
    originals: null,
    trending: null,
  }),
  getters: {
    movie: (state) => state,
  },
  actions: {
    setMovies({ recommended, newDisney, originals, trending }) {
      this.recommended = recommended;
      this.newDisney = newDisney;
      this.originals = originals;
      this.trending = trending;
    },
  },
});
