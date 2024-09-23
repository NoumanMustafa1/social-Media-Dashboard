import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api.com/api'; // Replace with your backend URL

export const fetchAgeData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/age-data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching age data:', error);
    throw error;
  }
};

export const fetchGenderData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/gender-data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching gender data:', error);
    throw error;
  }
};

export const exportAnalytics = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/export`, {
      responseType: 'blob', 
    });
    return response.data;
  } catch (error) {
    console.error('Error exporting analytics:', error);
    throw error;
  }
};
