import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const addReservation = async (reservationData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/reservations`,
      reservationData
    );
    return response.data; // Return the response data for success handling
  } catch (error) {
    console.error("Error adding reservation:", error);
    throw error; // Re-throw the error to be handled by the calling component
  }
};

export const getReservations = async (date) => {
  try {
    const response = await axios.get(`${BASE_URL}/reservations/${date}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting reservations:", error);
    throw error;
  }
};

export default addReservation;
