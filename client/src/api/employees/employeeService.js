import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${BASE_URL}/employees`, employeeData);
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

export default addEmployee;
