import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const createUser = async (userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error("Errro in user creation: ", error);
  }
};

export const signUserIn = async (userData) => {
  try {
    await signInWithEmailAndPassword(auth, userData.email, userData.password);
    console.log("User " + userData.email + " logged in.");
  } catch (err) {
    console.error("Error in user sign in: ", err);
  }
};

export const signUserOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out.");
  } catch (error) {
    console.error("Error in user sign out: ", error);
  }
};
