<template>
  <div>
    <div v-for="(post, index) in posts" :key="index" class="mb-2">
      <div class="d-flex justify-content-between">
        <div>{{ post }}</div>
        <button @click="$emit('delete', index)" class="btn btn-danger btn-sm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['posts'],
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
