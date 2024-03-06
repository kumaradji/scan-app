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

export const searchCompaniesByINN = async (inn, searchRequest) => {
  try {
    const histogramsSearchParams = {
      intervalType: "month",
      histogramTypes: ["totalDocuments"],
      issueDateInterval: {
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              inn: inn,
              maxFullness: true,
              inBusinessNews: null,
            },
          ],
          onlyMainRole: true,
          tonality: "any",
          onlyWithRiskFactors: true,
          riskFactors: {
            and: [],
            or: [],
            not: [],
          },
          themes: {
            and: [],
            or: [],
            not: [],
          },
        },
        searchEntitiesFilter: {
          and: [{ type: "company" }],
          or: [{ type: "company" }],
          not: [{ type: "company" }],
        },
      },
      attributeFilters: {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true,
      },
      similarMode: "none",
    };

    const response = await api.post('/objectsearch/histograms', histogramsSearchParams);

    console.log('searchCompaniesByINN - response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении поиска компаний:', error);
    throw new Error('Произошла ошибка при выполнении поиска компаний.');
  }
};
