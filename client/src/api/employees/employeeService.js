import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${BASE_URL}/employees`, employeeData);
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

export const getEmployees = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/employees`);
    return response.data;
  } catch (error) {
    console.error("Error getting employees:", error);
    throw error;
  }
};

export const getEmployee = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting employee:", error);
    throw error;
  }
};

export const updateEmployee = async (id, employeeData) => {
  try {
    await axios.put(`${BASE_URL}/employees/${id}`, employeeData);
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};
