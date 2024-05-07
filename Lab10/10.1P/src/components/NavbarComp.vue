<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <ul class="navbar-nav ml-auto d-flex flex-row">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active-link" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tasks" class="nav-link" active-class="active-link">Tasks</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/units" class="nav-link" active-class="active-link">Units</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp'
};
</script>

<style scoped>
/* You can add custom styles here if needed */
.nav-item {
  margin-right: 15px;
}

.active-link {
  font-weight: bold;
}
</style>
