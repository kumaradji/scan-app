// SearchFormCard/SearchFormCard.jsx
import React from 'react';
import useSearchFormHook from '../../../hooks/useSearchFormHook';
import CheckboxList from './CheckboxList/CheckboxList';
import styles from './SearchFormCard.module.scss';
import SearchFormInputs from "./SearchFormInputs/SearchFormInputs";
import Button from "../../../components/UI/Button";

function SearchFormCard() {
  const {
    checkedItems,
    handleToggle,
    handleSearchClick,
  } = useSearchFormHook();

  return <>
    {/*левая часть карточки*/}
    <SearchFormInputs/>

    <div className={styles.searchFormCard__searchAreaLabel}>
      <div className={styles.searchFormCard__searchAreaLabel_label}>
        Диапазон поиска
      </div>
      <div className={styles.searchFormCard__searchAreaLabel_star}>
        *
      </div>
    </div>

    {/*правая часть картоки*/}
    <label className={styles.searchFormCard__rightBlock}>
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
    <Button
      className={styles.searchFormCard__searchButton}
      onClick={handleSearchClick}
    >
      <div className={styles.searchFormCard__searchButton__ButtonText}>
        Поиск
      </div>
    </Button>
    <div className={styles.searchFormCard__rightBlockSmallText}>
      * Обязательные к заполнению поля
    </div>

  </>;

}

export default SearchFormCard;
