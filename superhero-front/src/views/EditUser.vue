<template>
    <div>
      <h1>Edit User</h1>
      <form @submit.prevent="updateUser">
        <input v-model="username" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useUsersStore } from '../stores/users';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const usersStore = useUsersStore();
      const username = ref('');
      const password = ref('');
      
      const fetchUser = async () => {
        await usersStore.fetchUser(route.params.id);
        username.value = usersStore.user.username;
      };
  
      const updateUser = async () => {
        await usersStore.updateUser(route.params.id, { username: username.value, password: password.value });
        router.push('/');
      };
  
      onMounted(() => {
        fetchUser();
      });
  
      return { username, password, updateUser };
    }
  };
  </script>