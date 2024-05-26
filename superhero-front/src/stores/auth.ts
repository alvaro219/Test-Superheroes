import { defineStore } from 'pinia';

interface User {
  username: string;
  password?: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(username: string, password: string) {
      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error('Failed to login');
        }

        const data = await response.json();
        this.user = data.user;
        this.token = data.token;
        // Save token in localStorage for persistence
        if (this.token) {
          localStorage.setItem('token', this.token);
        }
      } catch (error) {
        console.error('Failed to login:', error);
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    }
  }
});