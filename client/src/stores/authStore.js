// authStore.js
import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isLoading: true, // Add a loading state
  }),
  actions: {
    setUser(user) {
      this.user = user;
      this.isLoading = false; // Set loading to false when user is set
    },
    clearUser() {
      this.user = null;
      this.isLoading = false; // Set loading to false when user is cleared
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
  },
});
