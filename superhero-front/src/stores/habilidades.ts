import { defineStore } from 'pinia';

interface Habilidad {
  id?: number;
  nombre: string;
  poder: string;
  defensa: string;
}

export const useHabilidadesStore = defineStore('habilidades', {
  state: () => ({
    habilidades: [] as Habilidad[],
  }),
  actions: {
    async fetchHabilidades() {
      try {
        const response = await fetch('http://localhost:3000/habilidades');
        this.habilidades = await response.json();
      } catch (error) {
        console.error('Error fetching habilidades:', error);
      }
    },
    async createHabilidad(habilidad: Habilidad) {
      try {
        await fetch('http://localhost:3000/habilidades', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(habilidad),
        });
        this.fetchHabilidades();
      } catch (error) {
        console.error('Error creating habilidad:', error);
      }
    },
    async updateHabilidad(habilidad: Habilidad) {
      try {
        await fetch(`http://localhost:3000/habilidades/${habilidad.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(habilidad),
        });
        this.fetchHabilidades();
      } catch (error) {
        console.error('Error updating habilidad:', error);
      }
    },
    async deleteHabilidad(id: number) {
      try {
        await fetch(`http://localhost:3000/habilidades/${id}`, {
          method: 'DELETE',
        });
        this.fetchHabilidades();
      } catch (error) {
        console.error('Error deleting habilidad:', error);
      }
    },
  },
});
