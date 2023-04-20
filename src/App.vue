<template>
  <NavBar />
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';

export default {
  components: { RouterView, NavBar },
};
</script>

<style scoped></style>
