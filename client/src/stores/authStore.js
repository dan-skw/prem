// authStore.js
import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      this.user = { ...user };
    },
    clearUser() {
      this.user = null;
    },
    initializeAuthListener() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.setUser(user);
        } else {
          this.clearUser();
        }
      });
    },
    getters: {
      isUserLoggedIn: (state) => {
        return !!state.user;
      },
    },
  },
});
