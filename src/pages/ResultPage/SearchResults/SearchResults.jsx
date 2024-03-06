import React, {useContext, useEffect, useState} from 'react';
import {SearchFormContext} from '../../SearchPage/SearchFormCard/SearchFormContext';

const SearchResults = () => {
  const { searchQuery } = useContext(SearchFormContext);
  const { searchResults } = searchQuery;
  const [loadedDocuments, setLoadedDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(true);

  useEffect(() => {
    if (searchResults.length > 0) {
      setLoadedDocuments(searchResults.slice(0, 10)); // Загрузить первые 10 документов
      setShowMoreButton(searchResults.length > 10); // Показать кнопку "Показать больше", если есть больше документов
    } else {
      setLoadedDocuments([]);
      setShowMoreButton(false);
    }
    setIsLoading(false);
  }, [searchResults]);

  const loadMoreDocuments = () => {
    const nextBatch = searchResults.slice(loadedDocuments.length, loadedDocuments.length + 10);
    setLoadedDocuments([...loadedDocuments, ...nextBatch]);
    setShowMoreButton(nextBatch.length === 10);
  };

  return (
    <div>
      {isLoading && <div>Загрузка...</div>}
      {!isLoading && searchResults.length > 0 && (
        <div>
          {loadedDocuments.map((document, index) => (
            <div key={index}>
              {/* Отобразите информацию о документе */}
              <h2>{document.title}</h2>
              <p>{document.content}</p>
            </div>
          ))}
          {showMoreButton && (
            <button onClick={loadMoreDocuments}>Показать больше</button>
          )}
        </div>
      )}
      {!isLoading && searchResults.length === 0 && (
        <div>Нет результатов</div>
      )}
    </div>
  );
};

export default SearchResults;