// api/search.js
import api from './api';

export const searchCompaniesByINN = async (inn, additionalFilters = {}) => {
  try {
    const response = await api.post('/search/companies', {
      companyCode: inn,
      excludeBranchCompanies: true,
      ...additionalFilters,
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении поиска компаний:', error);
    throw new Error('Произошла ошибка при выполнении поиска компаний.');
  }
};
