import React from 'react';
import styles from './ResultCard.module.scss';
import ResultCardRect from "../../../assets/images/ResultCard/ResultCardRect.png";
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
    <section className={styles.resultCard}>
      <img
        className={styles.resultCard__resultCardRect}
        src={ResultCardRect}
        alt="ResultCard"
      />

      {/* Pass the necessary variables to PublicationCard */}
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
    </section>
  );
}

export default ResultCard;
