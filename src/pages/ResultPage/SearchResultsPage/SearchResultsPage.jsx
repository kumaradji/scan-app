import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import SearchResults from '../SearchResults/SearchResults';
import api from '../../../api/api';

function SearchResultsPage() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [documentsData, setDocumentsData] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const searchParams = location.state?.searchParams;

      if (!searchParams) {
        console.error('Search parameters are missing.');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const histogramResponse = await api.post('/objectsearch/histograms', searchParams);

        if (!histogramResponse.data.ok) {
          throw new Error(`API error! status: ${histogramResponse.data.status}`);
        }

        const histogramData = histogramResponse.data;

        const publicationIdsResponse = await api.post('/objectsearch', searchParams);

        if (!publicationIdsResponse.data.ok) {
          throw new Error(`API error! status: ${publicationIdsResponse.data.status}`);
        }

        const publicationIdsData = publicationIdsResponse.data;
        const publicationIds = publicationIdsData.items.map(item => item.encodedId);

        const documentsResponse = await api.post('/documents', { ids: publicationIds });

        console.log(JSON.stringify({ ids: publicationIds }));

        if (!documentsResponse.data.ok) {
          throw new Error(`API error! status: ${documentsResponse.data.status}`);
        }

        const documentsData = documentsResponse.data;
        setSearchData(histogramData);
        setDocumentsData(documentsData);
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [JSON.stringify(location.state?.searchParams)]);

  return (
    <div>
      {isLoading && <div>Загрузка...</div>}
      {documentsData && <SearchResults documentsData={documentsData} />}
    </div>
  );
}

export default SearchResultsPage;
