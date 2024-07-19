import axios from "axios";

const API_URL = "https://api.timbu.com/"; // Replace with the actual Timbu API URL
const API_KEY = "DA203389P"; // Replace with your actual API key

export const fetchTimbuData = async () => {
  try {
    const response = await axios.get(`${API_URL}/endpoint`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Timbu API:", error);
    throw error;
  }
};
