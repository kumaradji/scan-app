// SearchFormCard/SearchFormCard.jsx
import React from 'react';
import useSearchFormHook from '../../../hooks/useSearchFormHook';
import Button from '../../../components/UI/Button';
import CheckboxList from './CheckboxList/CheckboxList';
import styles from './SearchFormCard.module.scss';
import SearchFormInputs from "./SearchFormInputs/SearchFormInputs";

function SearchFormCard() {
  const {
    checkedItems,
    handleToggle,
    handleSearchClick,
  } = useSearchFormHook();

  return (
    <div className={styles.container}>

      {/*левая часть карточки*/}
      <SearchFormInputs />

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
      </label>

      {/*кнопка и надпись под ней*/}
      <section className={styles.searchButtonSection}>
        <Button className={styles.searchButton} onClick={handleSearchClick}>
          <div className={styles.searchButton__ButtonText}>
            Поиск
          </div>
        </Button>
        <div className={styles.rightBlockSmallText}>
          * Обязательные к заполнению поля
        </div>
      </section>

    </div>
  );

}

export default SearchFormCard;
