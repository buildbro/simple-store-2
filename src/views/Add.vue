<script>
import { createItem, uploadFile } from "@/firebase";

export default {
  name: "Add",
  data() {
    return {
      name: "",
      price: "",
      image: "",
      description: "",
    };
  },
  methods: {
    addItem() {
      const item = {
        productName: this.name,
        price: this.price,
        product_image: this.image,
        description: this.description,
      };

      createItem(item);
    },
    onFileChange(event) {

      const file = event.target.files[0];

      uploadFile(file).then((url)=> {
        this.image = url;
      })
    },
  },
};
</script>
<template>
  <div class="container">
    <h2>Add new item to invenntroy</h2>

    <div class="row">
      <div class="col-8">
        <form @submit.prevent="addItem">
          <div class="form-group">
            <label for="exampleInputEmail1">Product name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter product name"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Price</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Price (NGN)"
              v-model="price"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Select image</label>
            <input
              type="file"
              class="form-control"
              accept="image/*"
              @change="onFileChange"
            />
            <!-- <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter product image URL"
              v-model="image"
            /> -->
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Product description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="description"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary my-2">Submit</button>
        </form>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>