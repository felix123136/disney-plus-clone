import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({ name: '', email: '', photo: '' }),
  getters: {
    user: (state) => state,
  },
  actions: {
    setUserLoginDetails(name, email, photo) {
      this.name = name;
      this.email = email;
      this.photo = photo;
    },

    setSignOutState() {
      this.name = '';
      this.email = '';
      this.photo = '';
    },
  },
});
