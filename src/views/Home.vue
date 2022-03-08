<template>
  <div class="home">
    <h2 style="background: beige; padding: 19px;">Home Page</h2>
    <button class="login-btn" @click="logout">Logout</button>
  </div>
</template>

<script>

import firebase from 'firebase/compat/app';
export default {
  name: 'Home',
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('/login');
      })
    }
  }
 
}
</script>

<style scoped>
 .login-btn{
      background: #ccc;
      border: none;
      padding: 20px;
      border-radius: 5px;
      cursor: pointer;
  }
</style>
