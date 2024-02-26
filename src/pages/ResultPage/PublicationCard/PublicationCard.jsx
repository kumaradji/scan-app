// PublicationCard.jsx
import React from 'react';

const PublicationCard = ({ publication }) => {
  const {
    date,
    sourceName,
    sourceLink,
    title,
    tags,
    attributes: { isTechNews, isAnnouncement, isDigest, influence, wordCount, coverage },
    content,
  } = publication;

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

  return (
    <div className="publication-card">
      <div className="header">
        <p>{date}</p>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          {sourceName}
        </a>
      </div>
      <h2>{title}</h2>
      <div className="tags">{renderTags()}</div>
      <div className="content">{content}</div>
      <div className="footer">
        <button onClick={openOriginalArticle}>Читать в источнике</button>
        <p>Количество слов: {wordCount}</p>
      </div>
    </div>
  );
};

export default PublicationCard;
