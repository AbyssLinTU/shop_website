import React, { useContext } from 'react';
import { StateContext } from '../../../context/context';
import c from './Complete.module.scss';
import icon from './../../../img/complete-icon.png';
export const Complete = () => {
  const { state1 } = useContext(StateContext);
  return (
    <div className={c.complete}>
      <h1 className={c.complete__title}>Дякуемо за замовлення!!!</h1>
      <img className={c.complete__img} src={icon} alt="" />
      <h2 className={c.complete__subtitle}>
        Айді замовлення: {state1.idOrder}
      </h2>
    </div>
  );
};
