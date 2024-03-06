// PublicationCard.jsx
import React, {useEffect, useState} from 'react';
import {format, parse} from 'date-fns';
import styles from './PublicationCard.module.scss';

const PublicationCard = () => {
  const newsData = {
    "ok": {
      "schemaVersion": "1.2",
      "id": "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw=",
      "version": 1,
      "issueDate": "2019-11-06T09:44:00+03:00",
      "url": "https://www.vesti.ru/doc.html?id=3206990",
      "source": {
        "id": 3264,
        "groupId": 8388638,
        "name": "Вести.Ru (vesti.ru)",
        "categoryId": 7,
        "levelId": 1
      },
      "dedupClusterId": "2596EE21",
      "title": {
        "text": "Медведь напал на охотника в Приморье",
        "markup": "<?xml version=\"1.0\" encoding=\"utf-8\"?><scandoc><sentence>Медведь напал на охотника в <entity type=\"location\" local-id=\"6\">Приморье</entity>\r\n<data>\r\n<div>    <div><p></sentence></scandoc>"
      },
      "content": {
        "markup": "<?xml version=\"1.0\" encoding=\"utf-8\"?><scandoc><sentence><entity type=\"theme\" local-id=\"1\"><entity type=\"theme\" local-id=\"5\">Медведь напал на жителя <entity type=\"location\" local-id=\"6\">Приморья</entity>, пострадавший госпитализирован, - сообщает \"Вести: Приморье\" со ссылкой на <entity type=\"company\" local-id=\"0\">\"Интерфакс-Дальний Восток\"</entity>. </entity></entity></sentence><sentence>Сотрудники полиции проводят проверку по факту инцидента, связанного с нападением медведя на жителя <entity type=\"location\" local-id=\"7\">Уссурийска </entity>в лесу, в окрестностях <entity type=\"location\" local-id=\"8\">села Яконовка</entity>. </sentence><sentence><entity type=\"theme\" local-id=\"2\">Пострадавшего госпитализировали в реанимационное отделение городской больницы.</p>\r\n\r\n<p></entity></sentence><sentence>По данным медиков, он прооперирован, сейчас его жизни ничто не угрожает. </sentence><sentence><entity type=\"theme\" local-id=\"4\">Полицейские установили, что у мужчины есть разрешение на охоту, оружие должным образом зарегистрировано. </entity></sentence><sentence>Обстоятельства случившегося выясняются.</p>\r\n\r\n<p></sentence><sentence><entity type=\"theme\" local-id=\"3\">Напомним, ранее сообщалось, что в минувшие выходные в окрестностях <entity type=\"location\" local-id=\"7\">Уссурийска</entity>, в районе <entity type=\"location\" local-id=\"9\">села Кроуновка </entity>на охотника напал тигр, пострадавший госпитализирован.</p>\r\n</div>\r\n                                                    <div></entity></sentence><sentence>Текст:\r\n                                            ГТРК \"Владивосток\"\r\n                                        </div>\r\n                \r\n                \r\n                <div>\r\n\r\n                    \r\n                    \r\n                    \r\n                </div>\r\n            </div>\r\n</data>\r\n\r\n</sentence><br><img src=\"https://storage.scan-interfax.ru/images/1%3A0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKn0KjQlsKu0K%2FSkdGXfOKAsF3QkjrRnCRmGCFFBybQoNGL0ZMhEFkC4oCYaNC9a9GO0KFYwqwOeNGO0JdUDGzihKJXTNC%2B0ZzRinE%3D\"></scandoc>"
      },
      "entities": {
        // ...
      },
      "attributes": {
        "isTechNews": false,
        "isAnnouncement": false,
        "isDigest": false,
        "influence": 352.0,
        "wordCount": 99,
        "coverage": {
          "value": 1402211.0,
          "state": "hasData"
        }
      },
      "language": "russian"
    }
  };

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
        coverage: { value = 0, state = '' }
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
          rel="noopener noreferrer">
          {sourceName}
        </a>
      </div>

      <div className={styles.publicationCard__titleMain}>
        {title.text}
      </div>

      <div className={styles.publicationCard__buttonNews}>
        <button className={styles.publicationCard__buttonNews_text}>
          {tagsArray.length > 0 ? tagsArray[0] : 'Без тега'}
        </button>
      </div>

     
      <div className="content" dangerouslySetInnerHTML={{ __html: title.markup }} />
      <div className="footer">
        <button onClick={openOriginalArticle}>Читать в источнике</button>
        <p>Количество слов: {wordCount}</p>
      </div>
    </section>
  );
};

export default PublicationCard;