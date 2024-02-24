// useSearchFormHook.js
import {useState} from 'react';
import {searchCompaniesByINN} from '../api/search';

const useSearchFormHook = () => {
  const [inn, setInn] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tonality, setTonality] = useState('');
  const [documentCount, setDocumentCount] = useState(0); // Изменил значение по умолчанию на 0
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checkedItems, setCheckedItems] = useState(Array(7).fill(false));
  const [error, setError] = useState(null); // Новое состояние для отслеживания ошибок

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
      setError(null); // Очистка предыдущих ошибок при новом поиске
      const results = await searchCompaniesByINN(inn, { /* дополнительные фильтры */ });
      setSearchResults(results);
    } catch (error) {
      setError('Ошибка при поиске компаний. Пожалуйста, попробуйте еще раз.'); // Обработка ошибок
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
    error, // Передаем ошибку внутри хука
    handleStartDateChange,
    handleEndDateChange,
    handleToggle,
    handleSearchClick,
  };
};

export default useSearchFormHook;
