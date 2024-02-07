// cardsData.js
import icon1 from '../../assets/icons/card_01.png';
import icon2 from '../../assets/icons/card_02.png';
import icon3 from '../../assets/icons/card_03.png';
import icon4 from '../../assets/icons/Vector.svg';

const cards = [
  {
    icon: icon1,
    text: 'Высокая и оперативная скорость обработки заявки',
  },
  {
    icon: icon2,
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
  },
  {
    icon: icon3,
    text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
  },
  {
    icon: icon4,
    text: 'Удобство в использовании.',
  },
];

const allCards = [...cards, ...cards];

export { cards, allCards };
