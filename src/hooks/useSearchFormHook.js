// useSearchFormHook.js
import {useContext, useState} from 'react';
import {SearchFormContext} from "../pages/SearchPage/SearchFormCard/SearchFormContext";
import {useNavigate} from "react-router-dom";
import api from "../api/api";

const useSearchFormHook = () => {
  const { searchQuery, updateSearchQuery } = useContext(SearchFormContext);
  const {
    inn: defaultInn = '', // Установите начальное значение как пустую строку
    tonality: defaultTonality = 'any', // Установите начальное значение, например, 'any'
    documentCount: defaultDocumentCount = '', // Установите начальное значение как пустую строку
  } = searchQuery;
  const [inn, setInn] = useState(defaultInn);
  const [tonality, setTonality] = useState(defaultTonality);
  const [documentCount, setDocumentCount] = useState(defaultDocumentCount);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checkedItems, setCheckedItems] = useState(Array(7).fill(false));
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleToggle = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleSearchClick = async () => {
    console.log("Search Click:", inn, tonality, documentCount);
    try {
      // Включение inn в объект searchRequest
      const searchRequest = {
        inn: inn !== null ? inn : null,
        issueDateInterval: {
          startDate,
          endDate
        },
        searchContext: {
          targetSearchEntitiesContext: {
            tonality,
          }
        },
        attributeFilters: {
          excludeTechNews: true,
          // Если documentCount не null, используем его значение, иначе пустая строка
          documentCount: documentCount !== null ? documentCount : null,
        },
        intervalType: "month",
      };

      // Отправка запроса на получение histogramData
      const histogramResponse = await api.post('/objectsearch/histograms', searchRequest);

      if (!histogramResponse.status === 200) {
        throw new Error(`HTTP error! status: ${histogramResponse.status}`);
      }

      const histogramData = histogramResponse.data;

      // Отправка запроса на получение publicationIdsData
      const publicationIdsResponse = await api.post('/objectsearch', searchRequest);

      if (!publicationIdsResponse.status === 200) {
        throw new Error(`HTTP error! status: ${publicationIdsResponse.status}`);
      }

      const publicationIdsData = publicationIdsResponse.data;
      const publicationIds = publicationIdsData.items.map(item => item.encodedId);

      // Передача histogramData и publicationIds в состояние и переход на страницу результатов
      navigate('/search-results', { state: { searchParams: searchRequest, histogramData, publicationIds } });
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  return {
    inn,
    setInn,
    tonality,
    setTonality,
    documentCount,
    setDocumentCount,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    checkedItems,
    setCheckedItems,
    error,
    handleStartDateChange,
    handleEndDateChange,
    handleToggle,
    handleSearchClick,
  };
};

export default useSearchFormHook;
