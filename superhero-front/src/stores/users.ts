import { defineStore } from 'pinia';


interface User {
  id?: string;
  username: string;
  password?: string;
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    user: null,
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch('http://localhost:3000/users', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        this.users = await response.json();
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    },
    async fetchUser(id: string | string[]) {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }

        this.user = await response.json();
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    },
    async createUser(userData: User) {
      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error('Failed to create user');
        }

        this.fetchUsers();
      } catch (error) {
        console.error('Failed to create user:', error);
      }
    },
    async updateUser(id: string, userData: Partial<User>) {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error('Failed to update user');
        }

        this.fetchUsers();
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    },
    async deleteUser(id: string) {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete user');
        }

        this.fetchUsers();
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
    }
  }
});