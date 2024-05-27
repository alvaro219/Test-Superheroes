import { defineStore } from 'pinia';

interface Superheroe {
  id?: number;
  nombre: string;
  apellidos: string;
  habilidad: string;
  liga: string;
}

export const useSuperheroesStore = defineStore('superheroes', {
  state: () => ({
    superheroes: [],
    superheroe: null,
  }),
  actions: {
    async fetchSuperheroes() {
      try {
        const response = await fetch('http://localhost:3000/superheroes');
        this.superheroes = await response.json();
      } catch (error) {
        console.error('Error fetching superheroes:', error);
      }
    },
    async fetchSuperheroe(id: number) {
      try {
        const response = await fetch(`http://localhost:3000/superheroes/${id}`);
        this.superheroe = await response.json();
      } catch (error) {
        console.error('Error fetching superheroe:', error);
      }
    },
    async createSuperheroe(superheroe: Superheroe) {
      try {
        await fetch('http://localhost:3000/superheroes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(superheroe),
        });
        this.fetchSuperheroes();
      } catch (error) {
        console.error('Error creating superheroe:', error);
      }
    },
    async updateSuperheroe(superheroe: Superheroe) {
      try {
        await fetch(`http://localhost:3000/superheroes/${superheroe.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(superheroe),
        });
        this.fetchSuperheroes();
      } catch (error) {
        console.error('Error updating superheroe:', error);
      }
    },
    async deleteSuperheroe(id: number) {
      try {
        await fetch(`http://localhost:3000/superheroes/${id}`, {
          method: 'DELETE',
        });
        this.fetchSuperheroes();
      } catch (error) {
        console.error('Error deleting superheroe:', error);
      }
    },
  },
});