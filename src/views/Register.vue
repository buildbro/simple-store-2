<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-6">
        <h2>Welcome</h2>
        <p>Register new account...</p>
      </div>
      <div class="col-6">
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="password"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Repeat password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { createUser } from '@/firebase';
export default {
    name: "Register",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(()=> {
              alert("New User Registered!")
            })
            .catch((error) => {
              alert(error.message)
            })
        }
    }
}
</script>