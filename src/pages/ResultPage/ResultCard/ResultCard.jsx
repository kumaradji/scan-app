// ResultCard/ResultCard.jsx

import React from 'react';
import styles from './ResultCard.module.scss';
import ResultCardRect from "../../../assets/images/ResultCard/ResultCardRect.png";
import PublicationCard from "../PublicationCard/PublicationCard";

function ResultCard({ publication }) {
  if (!publication || !publication.ok) {
    // Обработка случая, когда publication или publication.ok не определены
    return <div>Ошибка: Неверные данные публикации</div>;
  }

  // Распаковываем данные публикации
  const {
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
    attributes,
    language
  } = publication.ok;

  return (
    <section className={styles.resultCard}>
      <img
        className={styles.resultCard__resultCardRect}
        src={ResultCardRect}
        alt="ResultCard"
      />

      {/* Используем компонент PublicationCard и передаем ему нужные поля */}
      <PublicationCard
        schemaVersion={schemaVersion}
        id={id}
        version={version}
        issueDate={issueDate}
        url={url}
        source={source}
        dedupClusterId={dedupClusterId}
        title={title.text} // Обратите внимание на title.text
        content={content.markup} // Обратите внимание на content.markup
        entities={entities}
        attributes={attributes}
        language={language}
      />
    </section>
  );
}

export default ResultCard;
