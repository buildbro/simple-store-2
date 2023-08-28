<script>

import { useLoadInventory } from '@/firebase';

export default {
  name: "HomeView",
  setup() {
    const inventoryData = useLoadInventory();

    return {inventoryData}
  }
}
</script>

<template>
  <main>
    <div class="container">
      <h1>Welcome to SimpleStore</h1>
      <p>World's No1 free ecommerce platform</p>

      <div>
        <div class="row">
          <div class="col-4" v-for="item in inventoryData" :key="item.id">
          <h3>{{ item.productName }}</h3>
          <img :src="item.product_image" alt="">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
img {
  max-width: 100%;
}
</style>
