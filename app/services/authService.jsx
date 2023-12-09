import api from '../api';

export const login = async (name, email) => {
  try {
    const response = await api.post('/auth/login', { name, email });
    console.log('Login Successful', response.data);
    return response.data; // You might want to return something specific based on your needs
  } catch (error) {
    console.error('Login Error', error.response.data);
    throw error.response.data; // You can handle errors as needed
  }
};

export const logout = async () => {
  try {
    const response = await api.post('/auth/logout');
    console.log('Logout Successful', response.data);
    return response.data;
  } catch (error) {
    console.error('Logout Error', error.response.data);
    throw error.response.data;
  }
};
