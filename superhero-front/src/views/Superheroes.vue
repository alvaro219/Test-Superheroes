<template>
  <div>
    <h1 class="title">Superheroes</h1>
    <ul>
      <li v-for="superheroe in superheroes" :key="superheroe.id">
        <router-link :to="`/superheroes/${superheroe.id}`">{{ superheroe.nombre }} {{ superheroe.apellidos }}</router-link>
        <button @click="deleteSuperheroe(superheroe.id)">Delete</button>
      </li>
    </ul>
    <button @click="showCreateForm = !showCreateForm">Create New Superheroe</button>
    <div v-if="showCreateForm">
      <form @submit.prevent="createSuperheroe">
        <div>
          <label for="nombre">Nombre</label>
          <input v-model="newSuperheroe.nombre" type="text" id="nombre" />
        </div>
        <div>
          <label for="apellidos">Apellidos</label>
          <input v-model="newSuperheroe.apellidos" type="text" id="apellidos" />
        </div>
        <div>
          <label for="habilidad">Habilidad</label>
          <input v-model="newSuperheroe.habilidad" type="text" id="habilidad" />
        </div>
        <div>
          <label for="liga">Liga</label>
          <input v-model.number="newSuperheroe.liga" type="number" id="liga" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue';
import { useSuperheroesStore } from '../stores/superheroes-store';

export default defineComponent({
  setup() {
    const superheroesStore = useSuperheroesStore();
    const showCreateForm = ref(false);
    const newSuperheroe = ref({
      nombre: '',
      apellidos: '',
      habilidad: '',
      liga: 0,
    });

    const createSuperheroe = async () => {
      await superheroesStore.createSuperheroe(newSuperheroe.value);
      newSuperheroe.value = { nombre: '', apellidos: '', habilidad: '', liga: 0 };
      showCreateForm.value = false;
    };

    const deleteSuperheroe = async (id) => {
      await superheroesStore.deleteSuperheroe(id);
    };

    onBeforeMount(async () => {
      await superheroesStore.fetchSuperheroes();
    });

    return {
      superheroes: superheroesStore.superheroes,
      showCreateForm,
      newSuperheroe,
      createSuperheroe,
      deleteSuperheroe,
    };
  }
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
</style>
