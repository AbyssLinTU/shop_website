import React, { useContext, useEffect, useState } from 'react';
import { Tree } from '../../utils/Tree/Tree';
import c from './Basket.module.scss';
import { StateContext } from '../../../context/context';
import { CartItem } from './CartItem';
import cl from 'classnames';
import { useNavigate } from 'react-router-dom';
export const Basket = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { state1 } = useContext(StateContext);
  useEffect(() => {
    if (state1.order) {
      setProduct(state1.order);
    }
  }, [state1]);

  return (
    <>
      <div className={c.basket}>
        <div className={c.tree}>
          <Tree title="Кошик" mb={0} mt={0} />
        </div>
        {state1.order[0] ? (
          <>
            <div className={c.table}>
              <div className={c.grid__row}>
                <span className={cl(c.grid__el, c.grid__title_1)}>&nbsp;</span>
                <span className={cl(c.grid__el, c.grid__title_1)}>
                  Назва товару
                </span>
                <span className={cl(c.grid__el, c.grid__title_1)}>
                  Кількість
                </span>
                <span className={cl(c.grid__el, c.grid__title_1)}>Ціна</span>
                <span className={cl(c.grid__el, c.grid__title_1)}>Разом</span>
                <span className={cl(c.grid__el, c.grid__title_1)}>&nbsp;</span>
              </div>
              {product.map(or => {
                return <CartItem key={or.id} product={or} />;
              })}
            </div>
            <div className={c.result_container}>
              <div className={c.result}>
                Разом:{' '}
                {state1.order.reduce((total, order) => total + order.amount, 0)}{' '}
                товара за{' '}
                <span className={c.total}>
                  {state1.order.reduce(
                    (total, order) => total + order.total,
                    0,
                  )}{' '}
                  ₴
                </span>
              </div>
            </div>
            <div className={c.checkout}>
              <button
                className={c.checkout__button}
                onClick={() => navigate('/order')}
              >
                Оформлення заказу
              </button>
            </div>
          </>
        ) : (
          <div className={c.null}>
            <span className={c.null__text}>У кошику нічого не має</span>
            <div className={c.null__button}>
              <button
                className={c.checkout__button}
                onClick={() => navigate('/main')}
              >
                На головну
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
