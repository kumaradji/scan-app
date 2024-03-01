// api/search.js
import api from './api';

export const getHistograms = async (searchParams) => {
  try {
    const response = await api.post('/objectsearch/histograms', searchParams);
    console.log('getHistograms - response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса на получение гистограмм:', error);
    throw new Error('Произошла ошибка при выполнении запроса на получение гистограмм.');
  }
};

export const searchCompaniesByINN = async (inn, additionalFilters = {}) => {
  try {
    const histogramsSearchParams = {
      intervalType: "month"
    };

    const histogramsData = await getHistograms(histogramsSearchParams);

    console.log('Histograms Data:', histogramsData);

    const response = await api.post('/objectsearch/histograms', {
      // companyCode: inn,
      // excludeBranchCompanies: true,
      // ...additionalFilters,
      intervalType: "month",
      "targetSearchEntities": [
        {
          "type": "company",
          "sparkId": null,
          "entityId": null,
          "inn": 7710137066,
          "maxFullness": true,
          "inBusinessNews": null
        }
      ],
    });

    console.log('searchCompaniesByINN - response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении поиска компаний:', error);
    throw new Error('Произошла ошибка при выполнении поиска компаний.');
  }
};
