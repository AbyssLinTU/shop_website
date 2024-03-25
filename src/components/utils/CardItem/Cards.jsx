import React from 'react';
import { CardItem } from './CardItem';
import c from './CardItem.module.css';
import image1 from '../../../img/Group 81.svg';
import image2 from '../../../img/Group 82.svg';
import image3 from '../../../img/Group 83.svg';
import image4 from '../../../img/Group 84.svg';
const Cards = () => {
  return (
    <div className={c.cards}>
      <CardItem text="Спосіб оплати" image={image1} />
      <CardItem text="Безкоштовна доставка" image={image2} />
      <CardItem text="Політика повернення" image={image3} />
      <CardItem text="Підтримка клієнтів" image={image4} />
    </div>
  );
};
export default Cards;
