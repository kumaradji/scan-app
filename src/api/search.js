// api/search.js
import axios from 'axios';

const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

export const searchCompaniesByINN = async (inn, additionalFilters = {}) => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('Токен доступа не найден');
    }

    const response = await axios.post(`${BASE_URL}/search/companies`, {
      companyCode: inn,
      excludeBranchCompanies: true,
      ...additionalFilters,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
