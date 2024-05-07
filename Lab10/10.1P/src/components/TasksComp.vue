<template>
  <div class="container mt-5">
    <div class="mb-3">
      <label for="status" class="form-label">Status:</label>
      <input name="status" type="text" v-model="statusText" class="form-control">
      <button type="button" @click="addStatus" class="btn btn-primary mt-2">Post</button>
    </div>
    <div>
      <AppMyPost :posts="statusPosts" @delete="deleteStatus"></AppMyPost>
    </div>
  </div>
</template>

<script>
import AppMyPost from './AppMyPost.vue';

export default {
  data() {
    return {
      statusText: '',
      statusPosts: []
    };
  },
  methods: {
    addStatus() {
      if (this.statusText.trim() !== '') {
        this.statusPosts.unshift(this.statusText.trim());
        this.statusText = '';
      }
    },
    deleteStatus(index) {
      this.statusPosts.splice(index, 1);
    }
  },
  components: {
    AppMyPost
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
