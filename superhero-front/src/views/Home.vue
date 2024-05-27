<template>
  <div>
    <h2 class="title">Welcome to my generative Superheroes web tool with Nestjs and Vue.</h2>
    <span class="title">In here you will be able to:</span>
    <div>
      <ul class="title">
        <li class="texto_li">Generate superheroes and store them.</li>
        <li class="texto_li">Update and delete your stored superheroes.</li>
        <li class="texto_li">Create your own unique and safe account.</li>
        <li class="texto_li">Have lots of fun!</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from '../stores/users';
import { onMounted } from 'vue'

export default {
  setup() {
    const usersStore = useUsersStore();

    onMounted(() => {
      usersStore.fetchUsers();
    });
    return { users: usersStore.users };
  }
};
</script>

<style scoped>
.title{
  color: white;
  max-width: 500px;
}

.texto_li{
  text-align: left;
}

</style>