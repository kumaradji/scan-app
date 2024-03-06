// SearchFormContext.jsx
import React, {createContext, useState} from 'react';

export const SearchFormContext = createContext();

export const SearchFormProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    inn: '',
    tonality: 'any',
    documentCount: '',
    searchResults: [], // Добавлено поле searchResults в состояние формы
    // другие поля формы
  });

  const updateSearchQuery = (newValues) => {
    setSearchQuery((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  return (
    <SearchFormContext.Provider value={{ searchQuery, updateSearchQuery }}>
      {children}
    </SearchFormContext.Provider>
  );
};
