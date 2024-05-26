import { defineStore } from 'pinia';

interface Liga {
  id?: number;
  nombre: string;
}

export const useLigasStore = defineStore('ligas', {
  state: () => ({
    ligas: [] as Liga[],
  }),
  actions: {
    async fetchLigas() {
      try {
        const response = await fetch('http://localhost:3000/ligas');
        this.ligas = await response.json();
      } catch (error) {
        console.error('Error fetching ligas:', error);
      }
    },
    async createLiga(liga: Liga) {
      try {
        await fetch('http://localhost:3000/ligas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(liga),
        });
        this.fetchLigas();
      } catch (error) {
        console.error('Error creating liga:', error);
      }
    },
    async updateLiga(liga: Liga) {
      try {
        await fetch(`http://localhost:3000/ligas/${liga.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(liga),
        });
        this.fetchLigas();
      } catch (error) {
        console.error('Error updating liga:', error);
      }
    },
    async deleteLiga(id: number) {
      try {
        await fetch(`http://localhost:3000/ligas/${id}`, {
          method: 'DELETE',
        });
        this.fetchLigas();
      } catch (error) {
        console.error('Error deleting liga:', error);
      }
    },
  },
});
