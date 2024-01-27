// SearchFormCard/SearchFormCard.jsx
import React from 'react';
import useSearchFormHook from '../../../hooks/useSearchFormHook';
import Button from '../../../components/UI/Button';
import DateInput from './DateInput/DateInput';
import CheckboxList from './CheckboxList/CheckboxList';
import SearchFormCardMobile from './SearchFormCardMobile/SearchFormCardMobile';
import styles from './SearchFormCard.module.scss';

function SearchFormCard() {
  const {
    inn,
    setInn,
    searchResults,
    setSearchResults,
    tonality,
    setTonality,
    documentCount,
    setDocumentCount,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    checkedItems,
    setCheckedItems,
    handleStartDateChange,
    handleEndDateChange,
    handleToggle,
    handleSearchClick,
  } = useSearchFormHook();

  return (
    <div className={styles.container}>

      <div className={styles.desktopVersion}>
        {/*Десктопная версия*/}
        {/*левая часть карточки*/}
        <label className={styles.leftBlock}>

          <div className={styles.leftBlock__inn__label}>
            ИНН компании:*
          </div>
          <input
            className={styles.leftBlock__inn__input}
            type="text"
            value={inn}
            onChange={(e) => setInn(e.target.value)}
          />

          <div className={styles.leftBlock__tonality__label}>
            Тональность
          </div>
          <input
            className={styles.leftBlock__tonality__input}
            type="text"
            value={tonality}
            onChange={(e) => setTonality(e.target.value)}
          />

          <div className={styles.leftBlock__documentCount__label}>
            Количество документов в выдаче*
          </div>
          <input
            className={styles.leftBlock__documentCount__input}
            type="number"
            value={documentCount}
            onChange={(e) => setDocumentCount(e.target.value)}
          />

          <div className={styles.leftBlockLabel}>
            Диапазон поиска*
          </div>

          <div className={styles.leftBlock_dateInputs}>
            <DateInput
              selectedDate={startDate}
              onChange={handleStartDateChange}
              placeholder="Дата начала"
            />

            <DateInput
              selectedDate={endDate}
              onChange={handleEndDateChange}
              placeholder="Дата конца"
            />
          </div>
        </label>

        {/*правая часть картоки*/}
        <label className={styles.rightBlock}>

          <CheckboxList
            items={[
              'Признак максимальной полноты',
              'Упоминания в бизнес-контексте',
              'Главная роль в публикации',
              'Публикации только с риск-факторами',
              'Включать технические новости рынков',
              'Включать анонсы и календари',
              'Включать сводки новостей',
            ]}
            checkedItems={checkedItems}
            onToggle={handleToggle}
          />

          <Button className={styles.searchButton} onClick={handleSearchClick}>
            <div className={styles.searchButton__ButtonText}>
              Поиск
            </div>
          </Button>

          <div className={styles.rightBlockSmallText}>
            * Обязательные к заполнению поля
          </div>
        </label>

      </div>
      {/* Стили только для мобильного */}
      <div className={styles.mobileVersion}>
        <SearchFormCardMobile/>
      </div>
    </div>
  );

}

export default SearchFormCard;
