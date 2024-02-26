// api/search.js
import api from './api';

// Добавим новую функцию для выполнения запроса на получение гистограмм
export const getHistograms = async (searchParams) => {
  try {
    const response = await api.post('/objectsearch/histograms', searchParams);
    return response.data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса на получение гистограмм:', error);
    throw new Error('Произошла ошибка при выполнении запроса на получение гистограмм.');
  }
};

// Обновим функцию поиска компаний
export const searchCompaniesByINN = async (inn, additionalFilters = {}) => {
  try {
    // Вызовем функцию для получения гистограмм
    const histogramsSearchParams = {
      limit: 15,
      sortType: 'issueDate',
      sortDirectionType: 'asc',
      intervalType: 'month',
      histogramTypes: ['totalDocuments', 'riskFactors'],
      issueDateInterval: {
        startDate: additionalFilters.startDate,
        endDate: additionalFilters.endDate,
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: 'company',
              sparkId: null,
              entityId: null,
              inn: inn,
              maxFullness: true,
              inBusinessNews: null,
            },
          ],
          onlyMainRole: true,
          tonality: 'any',
          onlyWithRiskFactors: true,
          riskFactors: {
            and: [{ id: 0 }],
            or: [{ id: 0 }],
            not: [{ id: 0 }],
          },
          themes: {
            and: [{ tonality: 'any', entityId: 0 }],
            or: [{ tonality: 'any', entityId: 0 }],
            not: [{ tonality: 'any', entityId: 0 }],
          },
        },
        searchEntitiesFilter: {
          and: [{ type: 'company' }],
          or: [{ type: 'company' }],
          not: [{ type: 'company' }],
        },
        locationsFilter: {
          and: [{ countryCode: 'string', regionCode: 0 }],
          or: [{ countryCode: 'string', regionCode: 0 }],
          not: [{ countryCode: 'string', regionCode: 0 }],
        },
        themesFilter: {
          and: [{ entityId: 0 }],
          or: [{ entityId: 0 }],
          not: [{ entityId: 0 }],
        },
      },
      attributeFilters: {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true,
      },
      similarMode: 'none',
    };

    const histogramsData = await getHistograms(histogramsSearchParams);

    // Выведем данные гистограмм в консоль для примера
    console.log('Histograms Data:', histogramsData);

    // Теперь выполним запрос на получение списка компаний
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
