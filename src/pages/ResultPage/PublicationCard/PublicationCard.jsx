import React, {useEffect, useState} from 'react';
import {format, parse} from 'date-fns';
import styles from './PublicationCard.module.scss';

const PublicationCard = ({ newsData, documentsData }) => {
  const {
    ok: {
      issueDate = '',
      source = {},
      title = { text: '' },
      attributes: {
        isTechNews = false,
        isAnnouncement = false,
        isDigest = false,
        influence = 0,
        wordCount = 0,
        coverage: { value = 0, state = '' } = {},
      } = {},
    } = {},
  } = newsData;

  const { name: sourceName, link: sourceLink } = source;
  const [tagsArray, setTagsArray] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (isTechNews) {
      setTagsArray(['Технические новости']);
    } else if (isAnnouncement) {
      setTagsArray(['Анонсы и события']);
    } else if (isDigest) {
      setTagsArray(['Сводки новостей']);
    }
  }, [isTechNews, isAnnouncement, isDigest]);

  useEffect(() => {
    setFormattedDate(formatDate(issueDate));
  }, [issueDate]);

  const renderTags = () => {
    const tagsArray = [];

    if (isTechNews) {
      tagsArray.push('Технические новости');
    }

    if (isAnnouncement) {
      tagsArray.push('Анонсы и события');
    }

    if (isDigest) {
      tagsArray.push('Сводки новостей');
    }

    return tagsArray.map((tag) => <span key={tag}>{tag}</span>);
  };

  const openOriginalArticle = () => {
    window.open(sourceLink, '_blank');
  };

  const formatDate = (dateString) => {
    const date = parse(dateString, 'yyyy-MM-dd\'T\'HH:mm:ssxxx', new Date());
    return format(date, 'dd.MM.yyyy');
  };

  return (
    <section className={styles.publicationCard}>
      <div className={styles.publicationCard__title}>
        {formattedDate}
        <a
          className={styles.publicationCard__title_link}
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {sourceName}
        </a>
      </div>

      <div className={styles.publicationCard__titleMain}>{title.text}</div>

      <div className={styles.publicationCard__buttonNews}>
        <button className={styles.publicationCard__buttonNews_text}>
          {tagsArray.length > 0 ? tagsArray[0] : 'Без тега'}
        </button>
      </div>

      <div className={styles.publicationCard__button}>
        <button
          className={styles.publicationCard__button_text}
          onClick={openOriginalArticle}
        >
          Читать в источнике
        </button>
      </div>

      <div className={styles.publicationCard__countWords}>
        {wordCount}&nbsp;слова
      </div>
    </section>
  );
};

export default PublicationCard;
