// SearchFormContext.jsx
import React, {createContext, useState} from 'react';

export const SearchFormContext = createContext();

export const SearchFormProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    inn: null, // Изменено значение по умолчанию на null
    tonality: 'any',
    documentCount: null, // Изменено значение по умолчанию на null
    searchResults: [],
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
