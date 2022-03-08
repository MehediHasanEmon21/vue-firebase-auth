import Vue from 'vue'
import firebase from 'firebase/compat/app';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = '';
const config = {
  apiKey: "AIzaSyBz-6hzeE1wwX73A07cUmcBMKzr0WA4jp8",
  authDomain: "vue-firebase-auth-f9fa0.firebaseapp.com",
  projectId: "vue-firebase-auth-f9fa0",
  storageBucket: "vue-firebase-auth-f9fa0.appspot.com",
  messagingSenderId: "840062814419",
  appId: "1:840062814419:web:137e9f2bcbf8e1bde7ac26",
  measurementId: "G-EWYWKHCGK8"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
