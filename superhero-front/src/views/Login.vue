<template>
  <div>
    <h1 class="title">Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '../stores/auth';

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const authStore = useAuthStore();
      await authStore.login({ username: this.username, password: this.password });
      this.$router.push('/superheroes');
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title{
  color: white;
  max-width: 500px;
}
</style>