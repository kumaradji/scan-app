// SearchResults.jsx

import React from 'react';
import PublicationCard from '../PublicationCard/PublicationCard';

const SearchResults = ({ documentsData }) => {
  return (
    <div>
      {documentsData.map((document, index) => (
        <PublicationCard key={index} newsData={document} />
      ))}
    </div>
  );
};

export default SearchResults;