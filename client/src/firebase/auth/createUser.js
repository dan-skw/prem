import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
