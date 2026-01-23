import apiClient from '../api/apiClient';

export const logoutUser = async () => {
  try {
    await apiClient.post('/auth/logout');
    // Clear any local user state (e.g., in Context or Redux)
    // Redirect to login page
    window.location.href = '/login';
  } catch (error) {
    console.error("Logout failed", error);
  }
};