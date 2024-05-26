<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.username }}
          <button @click="deleteUser(user.id)">Delete</button>
          <router-link :to="{ name: 'EditUser', params: { id: user.id } }">Edit</router-link>
          <router-link :to="{ name: 'UserDetails', params: { id: user.id } }">Details</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useUsersStore } from '../stores/users';
  
  export default {
    setup() {
      const usersStore = useUsersStore();
      onMounted(() => {
        usersStore.fetchUsers();
      });
      const deleteUser = async (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
          await usersStore.deleteUser(id);
        }
      };
  
      return { users: usersStore.users, deleteUser };
    }
  };
  </script>