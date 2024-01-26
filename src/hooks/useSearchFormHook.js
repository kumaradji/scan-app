// useSearchFormHook.js
import { useState } from 'react';
import * as SearchForm from "../api/search";

const useSearchFormHook = () => {
  const [inn, setInn] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tonality, setTonality] = useState('');
  const [documentCount, setDocumentCount] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checkedItems, setCheckedItems] = useState(Array(7).fill(false));

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
      const results = await SearchForm.searchCompaniesByINN(inn, { /* дополнительные фильтры */ });
      setSearchResults(results);
    } catch (error) {
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
    handleStartDateChange,
    handleEndDateChange,
    handleToggle,
    handleSearchClick,
  };
};

export default useSearchFormHook;
