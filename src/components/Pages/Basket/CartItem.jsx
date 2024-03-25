import React, { useContext } from 'react';
import c from './Basket.module.scss';
import cancel from './../../../img/Cancel.svg';
import cl from 'classnames';
import { StateContext } from '../../../context/context';
export const CartItem = ({ product }) => {
  const { removeOrder, updateOrder } = useContext(StateContext);

  return (
    <>
      <div className={c.grid__row}>
        <div className={c.grid__el}>
          {product.img && <img src={product.img} className={cl(c.grid__img)} />}
        </div>
        <span className={cl(c.grid__el, c.grid__title_2)}>{product.name}</span>
        <div className={cl(c.grid__el, c.grid__title_2)}>
          <div className={cl(c.grid__buttons, c.grid__el)}>
            <button
              className={c.button__plus}
              onClick={() => updateOrder(product.id, true)}
            >
              +
            </button>
            <span className={c.grid__amount}>{product.amount}</span>
            <button
              className={c.button__minus}
              onClick={() => {
                updateOrder(product.id, false);
              }}
            >
              -
            </button>
          </div>
        </div>
        <span className={cl(c.grid__el, c.grid__title_2)}>
          {product.price} ₴
        </span>
        <span className={cl(c.grid__el, c.grid__title_2)}>
          {product.price * product.amount} ₴
        </span>
        <div className={c.remove}>
          <div
            className={c.button__remove__container}
            onClick={() => {
              removeOrder(product.id);
            }}
          >
            <button
              className={c.button__remove}
              onClick={() => {
                removeOrder(product.id);
              }}
            ></button>
          </div>
        </div>
      </div>
      <div className={c.cartItem__tablet}>
        <img
          className={c.cancel}
          onClick={() => {
            removeOrder(product.id);
          }}
          src={cancel}
          alt=""
        />
        <div className={cl(c.grid__img, c.grid__el)}>
          {product.img && <img src={product.img} className={cl(c.grid__img)} />}
        </div>
        <span className={cl(c.grid__el, c.grid__title_2)}>Назва товару</span>

        <span className={cl(c.grid__el, c.grid__title_2)}>Кількість</span>

        <span className={cl(c.grid__el, c.grid__title_2)}>Ціна</span>

        <span className={cl(c.grid__el, c.grid__title_2)}>Разом</span>
        <span className={cl(c.grid__el, c.grid__title_2)}>{product.name}</span>

        <div className={cl(c.grid__buttons, c.grid__el)}>
          <button
            className={c.button__plus}
            onClick={() => updateOrder(product.id, true)}
          >
            +
          </button>
          <span className={c.grid__amount}>{product.amount}</span>
          <button
            className={c.button__minus}
            onClick={() => {
              updateOrder(product.id, false);
            }}
          >
            -
          </button>
        </div>
        <span className={cl(c.grid__el, c.grid__title_2)}>
          {product.price} ₴
        </span>
        <span className={cl(c.grid__el, c.grid__title_2)}>
          {product.price * product.amount} ₴
        </span>
      </div>
      <div className={c.cartItem__mobile}>
        <img
          className={c.cancel}
          onClick={() => {
            removeOrder(product.id);
          }}
          src={cancel}
          alt=""
        />
        <div className={cl(c.grid__img, c.grid__el)}>
          {product.img && <img src={product.img} className={cl(c.grid__img)} />}
        </div>
        <span className={cl(c.grid__el, c.grid__title_2)}>Назва товару</span>
        <span className={cl(c.grid__el, c.grid__title_2)}>{product.name}</span>

        <span className={cl(c.grid__el, c.grid__title_2)}>Кількість</span>
        <div className={cl(c.grid__buttons, c.grid__el)}>
          <button
            className={c.button__plus}
            onClick={() => updateOrder(product.id, true)}
          >
            +
          </button>
          <span className={c.grid__amount}>{product.amount}</span>
          <button
            className={c.button__minus}
            onClick={() => {
              updateOrder(product.id, false);
            }}
          >
            -
          </button>
        </div>

        <span className={cl(c.grid__el, c.grid__title_2)}>Ціна</span>
        <span className={cl(c.grid__el, c.grid__title_2)}>
          {product.price} ₴
        </span>

        <span className={cl(c.grid__el, c.grid__title_2)}>Разом</span>
        <span className={cl(c.grid__el, c.grid__title_2)}>
          {product.price * product.amount} ₴
        </span>
      </div>
    </>
  );
};
