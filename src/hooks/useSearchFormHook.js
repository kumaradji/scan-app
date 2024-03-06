// useSearchFormHook.js
// Этот хук управляет состояниями и обработчиками для формы поиска компаний по ИНН
import {useContext, useState} from 'react';
import {searchCompaniesByINN} from "../api/search";
import {SearchFormContext} from "../pages/SearchPage/SearchFormCard/SearchFormContext";

const useSearchFormHook = () => {
  const { searchQuery, updateSearchQuery } = useContext(SearchFormContext);
  const {
    inn: defaultInn,
    tonality: defaultTonality,
    documentCount: defaultDocumentCount,
  } = searchQuery;
  const [inn, setInn] = useState(defaultInn);
  const [tonality, setTonality] = useState(defaultTonality);
  const [documentCount, setDocumentCount] = useState(defaultDocumentCount);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checkedItems, setCheckedItems] = useState(Array(7).fill(false));
  const [error, setError] = useState(null);

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
    try {
      // Формирование объекта searchRequest
      const searchRequest = {
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
          documentCount,
        },
        intervalType: "month",  // явное указание intervalType
      }

      // Вызов функции для поиска
      const results = await searchCompaniesByINN(inn, searchRequest);
      updateSearchQuery({ searchResults: results });
    } catch (error) {
      setError('Ошибка при поиске компаний. Пожалуйста, попробуйте еще раз.');
      console.error('Ошибка при поиске компаний:', error);
    }
  }


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
