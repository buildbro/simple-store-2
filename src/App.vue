<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav class="navbar navbar-light bg-white">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">S-S</RouterLink>
      <div class="d-flex">
        <RouterLink to="/login" class="nav-link mx-2">Login</RouterLink>
        <RouterLink to="/register" class="nav-link">Register</RouterLink>
      </div>
    </div>
  </nav>


  <RouterView />
</template>

<style scoped>

</style>
