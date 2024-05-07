
<template>
  <div class="container pt-5 d-flex flex-column align-items-center">
    <img alt="Vue logo" src="./assets/logo.png">
    <NavbarComp />
    <router-view />
  </div>
</template>
  
<script>
import { createApp } from 'vue';
import NavbarComp from './components/NavbarComp.vue';
import router from './router';

export default {
  name: 'App',
  components: {
    NavbarComp
  },
  setup() {
    const app = createApp({});
    app.use(router);
    return { app };
  }
};
</script>
