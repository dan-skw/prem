import axios from "axios";

export const getItems = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/items");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Optionally rethrow the error to handle it elsewhere
  }
};
