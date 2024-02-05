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
      <SearchFormInputs />

      {/*правая часть картоки*/}
      <label className={styles.container__rightBlock}>
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
      <Button className={styles.container__searchButton} onClick={handleSearchClick}>
        <div className={styles.container__searchButton__ButtonText}>
          Поиск
        </div>
      </Button>
      <div className={styles.container__rightBlockSmallText}>
        * Обязательные к заполнению поля
      </div>

    </>;

}

export default SearchFormCard;
