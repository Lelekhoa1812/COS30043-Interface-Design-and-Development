<template>
  <div class="text-center">
    <h2>{{ welcomeMessage }}</h2>
    <p>What is your name?</p>
    <input type="text" v-model="firstName" placeholder="First Name" class="form-control mb-2">
    <input type="text" v-model="lastName" placeholder="Last Name" class="form-control mb-2">
    <div>
      <input type="radio" id="mountain" value="mountain" v-model="selectedImage">
      <label for="mountain" class="mr-3">Mountain</label>
      <input type="radio" id="ocean" value="ocean" v-model="selectedImage">
      <label for="ocean">Ocean</label>
    </div>
    <div>
      <img v-if="selectedImage === 'mountain'" src="../assets/mountain.png" alt="Mountain Image" class="img-fluid mt-3">
      <img v-else-if="selectedImage === 'ocean'" src="../assets/ocean.png" alt="Ocean Image" class="img-fluid mt-3">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      selectedImage: '',
    };
  },
  computed: {
    welcomeMessage() {
      return `Welcome ${this.firstName} ${this.lastName}`;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
input[type="text"] {
  width: 300px;
}

input[type="radio"] {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
