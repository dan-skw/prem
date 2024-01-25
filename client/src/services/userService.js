import axios from "axios";

const getUserData = async (uid) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/user/${uid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throw the error to handle it in the calling context
  }
};

const updateUserData = async (uid, userData) => {
  try {
    await axios.put(`http://localhost:3000/api/user/${uid}`, userData);
    // Optionally, you can return something here if needed
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error; // Re-throw the error to handle it in the calling context
  }
};

export { getUserData, updateUserData };
