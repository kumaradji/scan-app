// api/search.js

import SwaggerClient from 'swagger-client';

const swaggerSpec = await SwaggerClient.resolve({url: 'https://gateway.scan-interfax.ru/swagger/docs/v1'});

export const searchCompaniesByINN = async (inn, additionalFilters = {}) => {

  try {

    const token = localStorage.getItem('accessToken');

    if(!token) {
      throw new Error('Токен не найден');
    }

    const params = {
      companyCode: inn,
      excludeBranchCompanies: true,
      ...additionalFilters
    };

    const response = await swaggerSpec.execute({
      path: '/search/companies',
      method: 'POST',
      parameters: {
        Authorization: `Bearer ${token}`
      },
      body: params
    });

    return response.data;

  } catch(error) {
    throw error;
  }

};