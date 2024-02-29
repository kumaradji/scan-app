// useSearchFormHook.js
import {useState} from 'react';
import {getHistograms, searchCompaniesByINN} from '../api/search';

const useSearchFormHook = () => {
  const [inn, setInn] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tonality, setTonality] = useState('');
  const [documentCount, setDocumentCount] = useState(0);
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
      setError(null);

      // Формирование объекта для гистограмм
      const histogramsSearchParams = {
        tonality,
        documentCount,
        startDate,
        endDate,
      };

      // Вызов функции для получения гистограмм
      const histogramsData = await getHistograms(histogramsSearchParams);

      // Выведем данные гистограмм в консоль для примера
      console.log('Histograms Data:', histogramsData);

      // Вызов функции для поиска компаний
      const results = await searchCompaniesByINN(inn, {
        tonality,
        documentCount,
        startDate,
        endDate,
      });

      setSearchResults(results);
    } catch (error) {
      setError('Ошибка при поиске компаний. Пожалуйста, попробуйте еще раз.');
      console.error('Ошибка при поиске компаний:', error);
    }
  };

  return {
    inn,
    setInn,
    searchResults,
    setSearchResults,
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
