// SearchFormContext.jsx
import React, {createContext, useState} from 'react';

export const SearchFormContext = createContext();

export const SearchFormProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    inn: null,
    tonality: 'any',
    documentCount: null,
    startDate: null,
    endDate: null,
    searchResults: [],
  });

  const updateSearchQuery = (newValues) => {
    setSearchQuery((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const updateSearchFormContext = (values) => {
    setSearchQuery((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  return (
    <SearchFormContext.Provider value={{ searchQuery, updateSearchQuery, updateSearchFormContext }}>
      {children}
    </SearchFormContext.Provider>
  );
};