// TariffCardComponent.jsx

import React from 'react';
import UniversalCard from '../UniversalCard/UniversalCard';
import icon1 from '../../../assets/icons/Icon1.svg';
import icon2 from '../../../assets/icons/Icon2.svg';
import icon3 from '../../../assets/icons/Icon3.svg';

function TariffCardComponent() {
  return (
    <div>
      <UniversalCard
        title="Beginner"
        icon={<img src={icon1} alt="Icon1" />}
        items={['Безлимитная история запросов', 'Безопасная сделка', 'Поддержка 24/7']}
        price="799 ₽"
        buttonText="Перейти в личный кабинет"
        backgroundColor="beginnerBackground"
      />

      <UniversalCard
        title="Pro"
        icon={<img src={icon2} alt="Icon2" />}
        items={['Расширенная история запросов', 'Безопасные и быстрые сделки', 'Премиальная поддержка 24/7']}
        price="1 499 ₽"
        buttonText="Перейти в личный кабинет Pro"
        backgroundColor="proBackground"
      />

      <UniversalCard
        title="Business"
        icon={<img src={icon3} alt="Icon3" />}
        items={['Дополнительные возможности 1', 'Дополнительные возможности 2', 'Дополнительные возможности 3']}
        price="2 499 ₽"
        buttonText="Перейти в личный кабинет Business"
        backgroundColor="businessBackground"
      />
    </div>
  );
}

export default TariffCardComponent;
