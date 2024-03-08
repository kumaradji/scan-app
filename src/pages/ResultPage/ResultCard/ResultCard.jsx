// ResultCard.jsx
import React from 'react';
import PublicationCard from "../PublicationCard/PublicationCard";

function ResultCard({ publication = {} }) {
  const {
    ok: {
      schemaVersion = '',
      id = '',
      version = '',
      issueDate = '',
      url = '',
      source = {},
      dedupClusterId = '',
      title = { text: '' },
      content = { markup: '' },
      entities = [],
      attributes = {
        isTechNews: false,
        isAnnouncement: false,
        isDigest: false,
        influence: 0,
        wordCount: 0,
        coverage: { value: 0, state: '' }
      },
      language = ''
    } = {}
  } = publication;

  // Ensure that the necessary variables are defined
  const {
    isTechNews,
    isAnnouncement,
    isDigest,
    influence,
    wordCount,
    coverage
  } = attributes;

  return (
    <>
      <PublicationCard
        publication={{
          ok: {
            schemaVersion,
            id,
            version,
            issueDate,
            url,
            source,
            dedupClusterId,
            title,
            content,
            entities,
            attributes: {
              isTechNews,
              isAnnouncement,
              isDigest,
              influence,
              wordCount,
              coverage
            },
            language
          }
        }}
      />
    </>
  );
}

export default ResultCard;
