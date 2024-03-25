import React, { useContext } from 'react';
import { Catalog } from '../../utils/Catalog/Catalog';
import { Offers } from '../../utils/Offers/Offers';
import Cards from '../../utils/CardItem/Cards';
import c from './MainPage.module.scss';
import image from '../../../img/sdd 1.svg';
import { StateContext } from '../../../context/context';
import { DropDownMenu } from '../../utils/DropDownMenu/DropDownMenu';
export const MainPage = () => {
  const { state1 } = useContext(StateContext);
  return (
    <div>
      <div className={c.catalogSlot}>
        <div className={c.catalog}>
          <Catalog />
        </div>
        <div className={c.title}>Дизайни ручної роботи на замовлення </div>
        <img className={c.image} src={image} alt="" />
        <div className={c.catalog__mobile}>
          <DropDownMenu>
            <Catalog mobile={true} />
          </DropDownMenu>
        </div>
      </div>
      <Offers product={state1.product} type="sale" title="Flash Sales" />
      <Offers product={state1.product} type="new" title="Нові моделі" />
      <Offers
        product={state1.product}
        type="popular"
        title="Популярні моделі"
      />
      <Cards />
    </div>
  );
};
