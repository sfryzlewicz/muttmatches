// services/dogService.js
import api from '../api';

export const getBreeds = async () => {
  try {
    const response = await api.get('/dogs/breeds');
    return response.data;
  } catch (error) {
    console.error('Get Breeds Error', error.response.data);
    throw error.response.data;
  }
};

export const searchDogs = async (params) => {
  try {
    const response = await api.get('/dogs/search', { params });
    return response.data;
  } catch (error) {
    console.error('Search Dogs Error', error.response.data);
    throw error.response.data;
  }
};

export const getDogDetails = async (dogIds) => {
  try {
    const response = await api.post('/dogs', dogIds);
    return response.data;
  } catch (error) {
    console.error('Get Dog Details Error', error.response.data);
    throw error.response.data;
  }
};

export const generateMatch = async (favoriteDogIds) => {
  try {
    const response = await api.post('/dogs/match', favoriteDogIds);
    return response.data;
  } catch (error) {
    console.error('Generate Match Error', error.response.data);
    throw error.response.data;
  }
};
